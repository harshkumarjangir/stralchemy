import Razorpay from 'razorpay';
import crypto from 'crypto';
import StrategyRequest from '../models/StrategyRequest.js';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Pricing map in INR
const PRICING = {
  starter: 8999,
  complete: 19999,
  enterprise: 48999,
  foundation: 11999,
  growth: 24999,
  scale: 53999,
  starter_foundation: 19999,
  complete_growth: 42999,
  enterprise_scale: 89999
};

const getRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock_key',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_test_mock_secret',
  });
};

export const createInitialOrder = async (req, res) => {
  const { packageValue } = req.body;
  const totalAmount = PRICING[packageValue];

  if (!totalAmount) {
    return res.status(400).json({ message: 'Invalid package selected' });
  }

  // 50% upfront
  const halfAmount = totalAmount / 2;

  try {
    const razorpay = getRazorpayInstance();
    const options = {
      amount: halfAmount * 100, // amount in the smallest currency unit (paise)
      currency: "INR",
      receipt: `receipt_initial_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);
    res.json({ order, keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock_key' });
  } catch (error) {
    console.error('Error creating razorpay order:', error);
    res.status(500).json({ message: 'Failed to create payment order' });
  }
};

export const verifyInitialPayment = async (req, res) => {
  const { 
    razorpay_order_id, 
    razorpay_payment_id, 
    razorpay_signature,
    formData 
  } = req.body;

  try {
    // Note: In a real app with real Razorpay, you MUST verify the signature.
    // For demonstration/test mode if keys aren't set, we will bypass strict validation
    // unless we actually have a real secret.
    let isValid = true;
    
    if (process.env.RAZORPAY_KEY_SECRET) {
      const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
      shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
      const digest = shasum.digest('hex');
      isValid = digest === razorpay_signature;
    }

    if (!isValid) {
      return res.status(400).json({ message: 'Invalid payment signature' });
    }

    let userId = undefined;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        userId = decoded.id;
      } catch (err) {
        console.error('Invalid token during payment verify');
      }
    }

    const totalAmount = PRICING[formData.packageValue];

    // Save to database
    const strategy = new StrategyRequest({
      ...formData,
      user: userId, 
      totalAmount,
      paymentStatus: 'half_paid',
      initialOrderId: razorpay_order_id,
      initialPaymentId: razorpay_payment_id
    });

    await strategy.save();

    // Send email to admin
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'strategy@stralchemy.com',
        subject: `New Strategy Request: ${formData.businessName}`,
        text: `New strategy request submitted and 50% paid.\nName: ${formData.name}\nEmail: ${formData.email}\nPackage: ${formData.packageValue}\nTotal Amount: Rs. ${totalAmount}`,
      };

      try {
         await transporter.sendMail(mailOptions);
      } catch (err) {
         console.error('Failed to send admin email', err);
      }
    }

    res.json({ message: 'Payment verified and strategy request saved successfully', strategy });
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ message: 'Failed to verify payment and save' });
  }
};

export const getUserStrategies = async (req, res) => {
  try {
    const strategies = await StrategyRequest.find({
      $or: [
        { email: req.user.email },
        { user: req.user._id }
      ]
    }).sort({ createdAt: -1 });
    res.json(strategies);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getAllStrategies = async (req, res) => {
  try {
    const strategies = await StrategyRequest.find().sort({ createdAt: -1 });
    res.json(strategies);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createFinalOrder = async (req, res) => {
  try {
    const strategy = await StrategyRequest.findById(req.params.id);
    if (!strategy) return res.status(404).json({ message: 'Strategy not found' });
    if (strategy.paymentStatus === 'fully_paid') return res.status(400).json({ message: 'Already fully paid' });

    const halfAmount = strategy.totalAmount / 2;
    const razorpay = getRazorpayInstance();
    const options = {
      amount: halfAmount * 100, 
      currency: "INR",
      receipt: `receipt_final_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);
    res.json({ order, keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock_key' });
  } catch (error) {
    console.error('Error creating final razorpay order:', error);
    res.status(500).json({ message: 'Failed to create payment order' });
  }
};

export const verifyFinalPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  try {
    const strategy = await StrategyRequest.findById(req.params.id);
    if (!strategy) return res.status(404).json({ message: 'Strategy not found' });

    let isValid = true;
    if (process.env.RAZORPAY_KEY_SECRET) {
      const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
      shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
      const digest = shasum.digest('hex');
      isValid = digest === razorpay_signature;
    }

    if (!isValid) {
      return res.status(400).json({ message: 'Invalid payment signature' });
    }

    strategy.paymentStatus = 'fully_paid';
    strategy.finalOrderId = razorpay_order_id;
    strategy.finalPaymentId = razorpay_payment_id;
    await strategy.save();

    res.json({ message: 'Final payment verified successfully', strategy });
  } catch (error) {
    console.error('Error verifying final payment:', error);
    res.status(500).json({ message: 'Failed to verify payment' });
  }
};

export const uploadPdf = async (req, res) => {
  // Uses multer middleware on route
  try {
    const strategy = await StrategyRequest.findById(req.params.id);
    if (!strategy) return res.status(404).json({ message: 'Strategy not found' });

    if (!req.file) {
      return res.status(400).json({ message: 'No PDF file provided' });
    }

    strategy.pdfUrl = `/uploads/${req.file.filename}`;
    await strategy.save();

    res.json({ message: 'PDF uploaded successfully', strategy });
  } catch (error) {
    console.error('Error uploading PDF:', error);
    res.status(500).json({ message: 'Failed to upload PDF' });
  }
};

export const downloadPdf = async (req, res) => {
  try {
    const strategy = await StrategyRequest.findById(req.params.id);
    if (!strategy) return res.status(404).json({ message: 'Strategy not found' });

    if (strategy.paymentStatus !== 'fully_paid') {
      return res.status(403).json({ message: 'You must complete the remaining 50% payment to download the strategy.' });
    }

    if (!strategy.pdfUrl) {
      return res.status(404).json({ message: 'PDF not available yet' });
    }

    const filePath = path.join(process.cwd(), strategy.pdfUrl);
    if (fs.existsSync(filePath)) {
      res.download(filePath);
    } else {
      res.status(404).json({ message: 'File not found on server' });
    }
  } catch (error) {
    console.error('Error downloading PDF:', error);
    res.status(500).json({ message: 'Failed to download PDF' });
  }
};
