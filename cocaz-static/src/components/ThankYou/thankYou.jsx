import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleCheckBig } from 'lucide-react';

const ThankYouModal = ({ name, message, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <CircleCheckBig className="h-16 w-16 text-[#318000] mb-4" />

          <h2 className="text-3xl font-extrabold text-[#318000] mb-2">Thank You, {name}!</h2>

          <p className="text-gray-600 text-center mb-6">
            {message ? message : 'Your submission has been received successfully. We appreciate you reaching out to us and will get back to you shortly.'}
          </p>

          <div className="w-full h-px bg-gray-200 mb-6"></div>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-500">For any urgent inquiries, feel free to contact us at:</p>
            <p className="text-[#318000] font-medium">support@cocaz.com</p>
            <p className="text-sm text-gray-500">or call us at: <span className="text-[#318000]">+263 78 223 5693</span></p>
          </div>

          <button
            onClick={handleClose}
            className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-2 px-6 rounded-full focus:outline-none"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
