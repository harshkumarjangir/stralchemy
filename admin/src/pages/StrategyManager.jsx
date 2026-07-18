import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StrategyManager = () => {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uploadingId, setUploadingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  useEffect(() => {
    fetchStrategies();
  }, []);

  const fetchStrategies = async () => {
    try {
      const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
      const config = { headers: { Authorization: `Bearer ${adminInfo.token}` } };
      
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/strategy/admin`, config);
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

      await axios.post(`${import.meta.env.VITE_API_URL}/api/strategy/admin/${id}/upload`, formData, config);
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
                  <button 
                    onClick={() => setSelectedStrategy(strat)}
                    className="mt-3 text-xs text-blue-600 hover:text-blue-800 underline font-bold"
                  >
                    View Full Details
                  </button>
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
                        className="bg-purple-600 text-white px-4 py-2 rounded text-xs font-bold hover:bg-purple-700 shadow-sm disabled:opacity-50 transition-colors"
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

      {/* Details Modal */}
      {selectedStrategy && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-800">Strategy Request Details</h2>
              <button 
                onClick={() => setSelectedStrategy(null)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Business Info */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div><span className="font-semibold text-gray-500 block text-xs">Name</span> <div className="mt-1 font-medium text-gray-900">{selectedStrategy.name}</div></div>
                  <div><span className="font-semibold text-gray-500 block text-xs">Email</span> <div className="mt-1 font-medium text-gray-900">{selectedStrategy.email}</div></div>
                  <div><span className="font-semibold text-gray-500 block text-xs">Phone</span> <div className="mt-1 font-medium text-gray-900">{selectedStrategy.phone}</div></div>
                  <div><span className="font-semibold text-gray-500 block text-xs">Business Name</span> <div className="mt-1 font-medium text-gray-900">{selectedStrategy.businessName}</div></div>
                  <div><span className="font-semibold text-gray-500 block text-xs">Industry</span> <div className="mt-1 font-medium text-gray-900">{selectedStrategy.industry}</div></div>
                  <div><span className="font-semibold text-gray-500 block text-xs">Stage</span> <div className="mt-1 font-medium text-gray-900">{selectedStrategy.stage}</div></div>
                  <div className="col-span-1 md:col-span-2"><span className="font-semibold text-gray-500 block text-xs">Website</span> <div className="mt-1 font-medium text-gray-900">{selectedStrategy.website || 'N/A'}</div></div>
                </div>
              </div>
              
              {/* Core Goals */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Project Goals & Core Details</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-500 block text-xs mb-1">Vision</span> 
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded text-gray-800 whitespace-pre-wrap">{selectedStrategy.vision}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-500 block text-xs mb-1">Challenges</span> 
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded text-gray-800 whitespace-pre-wrap">{selectedStrategy.challenges}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-500 block text-xs mb-1">Goals</span> 
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded text-gray-800 whitespace-pre-wrap">{selectedStrategy.goals}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-500 block text-xs mb-1">Target Audience</span> 
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded text-gray-800 whitespace-pre-wrap">{selectedStrategy.audience}</div>
                  </div>
                </div>
              </div>

              {/* Additional custom details from specific forms */}
              {selectedStrategy.additionalInfo && (
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Form Specific Details</h3>
                  <div className="bg-[#f8f9fa] border border-gray-200 p-4 rounded text-sm whitespace-pre-wrap font-mono text-gray-700">
                    {selectedStrategy.additionalInfo}
                  </div>
                </div>
              )}
              
              {/* Payment Details */}
              <div>
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Payment Information</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                   <div><span className="font-semibold text-gray-500 block text-xs">Initial Order ID</span> <div className="mt-1 font-mono text-xs text-gray-900 bg-gray-100 inline-block px-2 py-1 rounded">{selectedStrategy.initialOrderId || 'N/A'}</div></div>
                   <div><span className="font-semibold text-gray-500 block text-xs">Initial Payment ID</span> <div className="mt-1 font-mono text-xs text-gray-900 bg-gray-100 inline-block px-2 py-1 rounded">{selectedStrategy.initialPaymentId || 'N/A'}</div></div>
                 </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end sticky bottom-0">
              <button 
                onClick={() => setSelectedStrategy(null)}
                className="bg-gray-800 text-white px-8 py-2.5 rounded font-bold hover:bg-gray-900 transition-colors shadow-sm"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StrategyManager;
