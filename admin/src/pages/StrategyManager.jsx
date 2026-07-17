import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StrategyManager = () => {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uploadingId, setUploadingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchStrategies();
  }, []);

  const fetchStrategies = async () => {
    try {
      const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
      const config = { headers: { Authorization: `Bearer ${adminInfo.token}` } };
      
      const { data } = await axios.get('http://localhost:5000/api/strategy/admin', config);
      setStrategies(data);
    } catch (err) {
      setError('Failed to fetch strategies');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (id) => {
    if (!selectedFile) {
      alert('Please select a PDF file first');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', selectedFile);

    setUploadingId(id);
    try {
      const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
      const config = { 
        headers: { 
          Authorization: `Bearer ${adminInfo.token}`,
          'Content-Type': 'multipart/form-data'
        } 
      };

      await axios.post(`http://localhost:5000/api/strategy/admin/${id}/upload`, formData, config);
      alert('PDF uploaded successfully!');
      setSelectedFile(null);
      fetchStrategies();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to upload PDF');
    } finally {
      setUploadingId(null);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading strategies...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Strategy Manager</h1>
          <p className="text-gray-500 text-sm mt-1">View submitted requests and upload strategy PDFs.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Info</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PDF Strategy</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {strategies.map((strat) => (
              <tr key={strat._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-gray-900">{strat.businessName}</div>
                  <div className="text-sm text-gray-500">{strat.name} ({strat.email})</div>
                  <div className="text-xs text-gray-400 mt-1">{strat.industry} • {strat.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800 capitalize">
                    {strat.packageTab}
                  </span>
                  <div className="text-sm text-gray-500 mt-1 capitalize">{strat.packageValue.replace('_', ' ')}</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">₹{strat.totalAmount}</div>
                </td>
                <td className="px-6 py-4">
                  {strat.paymentStatus === 'fully_paid' ? (
                     <span className="px-2 py-1 inline-flex text-xs leading-5 font-bold rounded bg-green-100 text-green-800">
                       Fully Paid
                     </span>
                  ) : strat.paymentStatus === 'half_paid' ? (
                     <span className="px-2 py-1 inline-flex text-xs leading-5 font-bold rounded bg-yellow-100 text-yellow-800">
                       50% Paid (Pending PDF)
                     </span>
                  ) : (
                     <span className="px-2 py-1 inline-flex text-xs leading-5 font-bold rounded bg-gray-100 text-gray-800">
                       Pending
                     </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {strat.pdfUrl ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-bold flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Uploaded
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <input 
                        type="file" 
                        accept=".pdf" 
                        onChange={handleFileChange}
                        className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-brand-purple hover:file:bg-purple-100"
                      />
                      <button 
                        onClick={() => handleUpload(strat._id)}
                        disabled={uploadingId === strat._id}
                        className="bg-brand-purple text-white px-3 py-1 rounded text-xs font-bold hover:bg-opacity-90 disabled:opacity-50"
                      >
                        {uploadingId === strat._id ? 'Uploading...' : 'Upload'}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            
            {strategies.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                  No strategy requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StrategyManager;
