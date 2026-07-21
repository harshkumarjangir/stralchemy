import CaseStudyLead from '../models/CaseStudyLead.js';

// @desc    Submit case study lead
// @route   POST /api/casestudies/download
// @access  Public
export const submitCaseStudyLead = async (req, res) => {
  try {
    const { name, email, stage, challenge, caseStudyId } = req.body;

    if (!name || !email || !stage || !challenge || !caseStudyId) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const lead = await CaseStudyLead.create({
      name,
      email,
      stage,
      challenge,
      caseStudyId,
    });

    res.status(201).json({ message: 'Lead captured successfully', lead });
  } catch (error) {
    res.status(500).json({ message: 'Server error capturing lead', error: error.message });
  }
};

// @desc    Get all case study leads (Admin)
// @route   GET /api/casestudies/admin
// @access  Private/Admin
export const getCaseStudyLeads = async (req, res) => {
  try {
    const leads = await CaseStudyLead.find({}).sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching leads', error: error.message });
  }
};
