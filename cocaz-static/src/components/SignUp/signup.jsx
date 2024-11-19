import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../themeContext';
import ThankYouModal from '../ThankYou/thankYou';
import { CheckCircle2, User, Mail, Briefcase, Sparkles, QrCode } from 'lucide-react';

const SignUp = () => {
  const { currentTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: ''
  });
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTermsChecked) {
      setShowModal(true);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className={`py-20 min-h-screen ${currentTheme.primary}`}
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className={`text-5xl font-bold ${currentTheme.accent} mb-4 flex items-center justify-center`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="mr-4" size={48} />
            Join COCAZ
          </motion.h2>
          <p className={`${currentTheme.text} text-xl max-w-2xl mx-auto`}>
            Unlock your potential and elevate your digital presence
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* QR Code Section */}
          <motion.div
            className={`${currentTheme.card} rounded-2xl shadow-2xl p-8 flex flex-col items-center max-w-xs w-full`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <QrCode className={`${currentTheme.accent} mb-4`} size={150} />
            <h3 className={`${currentTheme.text} text-xl font-bold mb-2 text-center`}>
              Quick Join
            </h3>
            <p className={`${currentTheme.text} text-center mb-4 opacity-70`}>
              Scan this QR code to quickly register and join COCAZ
            </p>
            <motion.img 
              src="/cocazqr.png" 
              alt="COCAZ Join QR Code"
              className="w-48 h-48 object-contain rounded-xl shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Form Section */}
          <motion.div 
            className={`${currentTheme.card} rounded-2xl shadow-2xl p-8 max-w-md w-full`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label 
                  htmlFor="name" 
                  className={`${currentTheme.text} flex items-center font-bold mb-2`}
                >
                  <User className={`mr-2 ${currentTheme.accent}`} size={20} /> Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 rounded-lg ${currentTheme.text} bg-white/10 backdrop-blur-sm focus:ring-2 ${currentTheme.accent.replace('text', 'ring')}`}
                  placeholder="Enter your full name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label 
                  htmlFor="email" 
                  className={`${currentTheme.text} flex items-center font-bold mb-2`}
                >
                  <Mail className={`mr-2 ${currentTheme.accent}`} size={20} /> Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full p-3 rounded-lg ${currentTheme.text} bg-white/10 backdrop-blur-sm focus:ring-2 ${currentTheme.accent.replace('text', 'ring')}`}
                  placeholder="Enter your email address"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                />
              </div>

              {/* Profession Input */}
              <div>
                <label 
                  htmlFor="profession" 
                  className={`${currentTheme.text} flex items-center font-bold mb-2`}
                >
                  <Briefcase className={`mr-2 ${currentTheme.accent}`} size={20} /> Profession
                </label>
                <motion.input
                  type="text"
                  id="profession"
                  name="profession"
                  required
                  className={`w-full p-3 rounded-lg ${currentTheme.text} bg-white/10 backdrop-blur-sm focus:ring-2 ${currentTheme.accent.replace('text', 'ring')}`}
                  placeholder="What's your area of expertise?"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center">
                <motion.input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={isTermsChecked}
                  onChange={() => setIsTermsChecked(!isTermsChecked)}
                  className="mr-2 focus:ring-2 focus:ring-yellow-400"
                  whileTap={{ scale: 0.9 }}
                />
                <label 
                  htmlFor="termsCheckbox" 
                  className={`${currentTheme.text} text-sm`}
                >
                  I agree to the{' '}
                  <a 
                    href="/terms" 
                    className={`${currentTheme.accent} underline hover:opacity-80`}
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isTermsChecked}
                className={`
                  w-full p-3 rounded-lg font-bold tracking-wider 
                  ${currentTheme.button} 
                  ${currentTheme.buttonText}
                  ${!isTermsChecked ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
                  flex items-center justify-center space-x-2
                `}
                whileHover={{ scale: isTermsChecked ? 1.05 : 1 }}
                whileTap={{ scale: isTermsChecked ? 0.95 : 1 }}
              >
                <CheckCircle2 size={20} />
                <span>Sign Up</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {showModal && (
        <ThankYouModal
          name={formData.name}
          message="You have successfully signed up for our services. We will keep you updated with the latest news."
          onClose={() => setShowModal(false)}
        />
      )}
    </motion.div>
  );
};

export default SignUp;