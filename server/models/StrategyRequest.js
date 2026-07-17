import mongoose from 'mongoose';

const strategyRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Optional in case a guest fills it out, but dashboard requires it
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  businessName: { type: String, required: true },
  industry: { type: String, required: true },
  stage: { type: String, required: true },
  website: { type: String },
  vision: { type: String, required: true },
  challenges: { type: String, required: true },
  goals: { type: String, required: true },
  audience: { type: String, required: true },
  additionalInfo: { type: String },
  packageTab: { type: String, required: true }, // 'branding', 'marketing', or 'bundle'
  packageValue: { type: String, required: true }, // e.g. 'starter', 'growth'
  totalAmount: { type: Number, required: true }, // Total price in INR
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'half_paid', 'fully_paid'],
    default: 'pending'
  },
  initialOrderId: { type: String },
  initialPaymentId: { type: String },
  finalOrderId: { type: String },
  finalPaymentId: { type: String },
  pdfUrl: { type: String } // Path to uploaded PDF
}, { timestamps: true });

const StrategyRequest = mongoose.model('StrategyRequest', strategyRequestSchema);

export default StrategyRequest;
