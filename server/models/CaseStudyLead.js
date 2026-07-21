import mongoose from 'mongoose';

const caseStudyLeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  stage: { type: String, required: true },
  challenge: { type: String, required: true },
  caseStudyId: { type: String, required: true },
}, { timestamps: true });

const CaseStudyLead = mongoose.model('CaseStudyLead', caseStudyLeadSchema);

export default CaseStudyLead;
