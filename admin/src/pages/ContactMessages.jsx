import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/contacts?isAdmin=true');
      setMessages(data);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'unread' ? 'read' : 'unread';
    try {
      const { data } = await axios.put(`http://localhost:5000/api/contacts/${id}/status?isAdmin=true`, {
        status: newStatus,
      });
      setMessages(messages.map(msg => (msg._id === id ? data : msg)));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(`http://localhost:5000/api/contacts/${id}?isAdmin=true`);
        setMessages(messages.filter((msg) => msg._id !== id));
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  if (loading) return <div className="p-8">Loading messages...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
        <p className="text-gray-500 mt-2">Manage inquiries submitted via the website contact form.</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.map((msg) => (
              <tr key={msg._id} className={`hover:bg-gray-50 ${msg.status === 'unread' ? 'bg-blue-50/30' : ''}`}>
                <td className="px-6 py-4">
                  <div className={`text-sm ${msg.status === 'unread' ? 'font-bold' : 'font-medium'} text-gray-900`}>{msg.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{msg.email}</div>
                  <div className="text-xs text-gray-500">{msg.mobile}</div>
                  <div className="text-xs text-gray-400 mt-1">{new Date(msg.createdAt).toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-700 whitespace-pre-wrap max-w-md line-clamp-3">
                    {msg.message}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleToggleStatus(msg._id, msg.status)}
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border transition-colors ${
                      msg.status === 'unread' 
                        ? 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200' 
                        : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {msg.status === 'unread' ? 'Mark as Read' : 'Read'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleDelete(msg._id)} className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {messages.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                  No contact messages yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactMessages;
