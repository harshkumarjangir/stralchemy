import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import nodemailer from 'nodemailer';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'stralchemy_secret_key', {
    expiresIn: '30d',
  });
};

export const registerUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ message: 'User with this email or username already exists' });
    }

    const user = await User.create({ firstName, lastName, username, email, password });
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    const user = await User.findOne({ 
      $or: [{ email: identifier }, { username: identifier }] 
    });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No user found with that email' });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetPasswordOTP = otp;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 mins
    await user.save();

    // Send email (Assuming process.env.EMAIL_USER and process.env.EMAIL_PASS exist)
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
        to: user.email,
        subject: 'Stralchemy - Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}. It is valid for 15 minutes.`,
      };

      await transporter.sendMail(mailOptions);
      console.log(`OTP sent to ${user.email}`);
    } else {
      console.log(`[MOCK EMAIL] OTP for ${user.email} is: ${otp}`);
    }

    res.json({ message: 'OTP sent to your email' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const user = await User.findOne({
      email,
      resetPasswordOTP: otp,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    user.password = newPassword;
    user.resetPasswordOTP = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
