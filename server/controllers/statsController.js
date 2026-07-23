import Blog from '../models/Blog.js';
import Contact from '../models/Contact.js';
import StrategyRequest from '../models/StrategyRequest.js';
import CaseStudyLead from '../models/CaseStudyLead.js';

export const getStats = async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const totalMessages = await Contact.countDocuments();
    const totalStrategies = await StrategyRequest.countDocuments();
    const totalCaseStudies = await CaseStudyLead.countDocuments();

    res.json({
      blogs: totalBlogs,
      messages: totalMessages,
      strategies: totalStrategies,
      caseStudies: totalCaseStudies,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats' });
  }
};
