import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Mail, Phone, ExternalLink } from 'lucide-react';
import { useTheme } from '../themeContext';

const ThankYouModal = ({ name, message, onClose }) => {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  const handleClose = () => {
    onClose();
    window.location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAFENwGJUNU4xSUY5Q1g2WFJUU0VFMkVDQkIzSjJNMy4u';
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`${currentTheme.card} rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto`}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            >
              <div className={`${currentTheme.secondary} p-4 rounded-full mb-6`}>
                <CheckCircle2 className={`h-16 w-16 ${currentTheme.buttonText}`} />
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-3xl font-extrabold ${currentTheme.accent} mb-4 text-center`}
            >
              Thank You, {name}!
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`${currentTheme.text} text-center mb-8`}
            >
              {message || 'Your submission has been received successfully. We appreciate you reaching out to us and will get back to you shortly.'}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
              className={`w-full h-px ${currentTheme.accent} opacity-20 mb-8`}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-8 space-y-4"
            >
              <p className={`${currentTheme.text} opacity-80`}>
                For any urgent inquiries, feel free to contact us:
              </p>
              
              <div className="flex items-center justify-center space-x-2">
                <Mail className={currentTheme.accent} size={20} />
                <a 
                  href="mailto:support@cocaz.com" 
                  className={`${currentTheme.accent} font-medium hover:opacity-80`}
                >
                  support@cocaz.com
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <Phone className={currentTheme.accent} size={20} />
                <a 
                  href="tel:+263782235693" 
                  className={`${currentTheme.accent} font-medium hover:opacity-80`}
                >
                  +263 78 223 5693
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-4"
            >
              <motion.button
                onClick={handleClose}
                className={`
                  ${currentTheme.button} 
                  ${currentTheme.buttonText}
                  font-bold py-3 px-6 rounded-full
                  flex items-center space-x-2
                  transform transition-all
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                <span>Continue to Form</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThankYouModal;