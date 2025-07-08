import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentPlaceholder: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/payment-processing') {
      setSuccess(false);
      const timer = setTimeout(() => {
        navigate('/payment-success');
      }, 2000);
      return () => clearTimeout(timer);
    } else if (location.pathname === '/payment-success') {
      setSuccess(true);
    }
  }, [location, navigate]);

  if (location.pathname === '/payment-processing') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-orange-600 border-dashed rounded-full animate-spin mb-6"></div>
        <div className="text-xl font-semibold text-gray-700">Processing your payment...</div>
      </div>
    );
  }

  // Payment Success
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      </div>
      <div className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</div>
      <div className="text-gray-600 mb-4">Thank you for your order.</div>
      <button
        onClick={() => navigate('/')}
        className="px-8 py-3 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-200"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PaymentPlaceholder; 