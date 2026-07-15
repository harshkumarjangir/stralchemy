import Contact from '../models/Contact.js';

// Public route to submit a new contact form
export const submitContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully', contact: savedContact });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error: error.message });
  }
};

// Admin route to get all contacts
export const getContacts = async (req, res) => {
  try {
    const { isAdmin } = req.query;
    if (isAdmin !== 'true') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Admin route to mark contact as read/unread
export const updateContactStatus = async (req, res) => {
  try {
    const { isAdmin } = req.query;
    if (isAdmin !== 'true') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error: error.message });
  }
};

// Admin route to delete a contact message
export const deleteContact = async (req, res) => {
  try {
    const { isAdmin } = req.query;
    if (isAdmin !== 'true') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
