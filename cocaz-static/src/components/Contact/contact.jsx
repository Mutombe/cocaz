import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useTheme } from "../themeContext";

const ContactForm = () => {
  const { currentTheme } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowThankYou(true);
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors duration-200
    ${currentTheme.accent.replace(
      "text",
      "border"
    )} bg-white/10 backdrop-blur-sm
    ${currentTheme.text} placeholder:text-gray-400 focus:border-yellow-400`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className={`text-4xl font-bold ${currentTheme.accent} mb-4`}
          >
            Get in Touch
          </motion.h1>
          <p className={`${currentTheme.text} text-lg max-w-2xl mx-auto`}>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className={`${currentTheme.card} rounded-2xl p-8 shadow-xl`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatePresence mode="wait">
              {showThankYou ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 0.5 }}
                    className={`${currentTheme.accent} text-6xl mb-6`}
                  >
                    ✨
                  </motion.div>
                  <h2
                    className={`${currentTheme.accent} text-2xl font-bold mb-4`}
                  >
                    Thank You!
                  </h2>
                  <p className={`${currentTheme.text} mb-8`}>
                    We've received your message and will get back to you soon.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${currentTheme.button} ${currentTheme.buttonText} px-6 py-3 rounded-lg`}
                    onClick={() => {
                      setShowThankYou(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      className={`block ${currentTheme.accent} text-sm font-medium mb-2`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block ${currentTheme.accent} text-sm font-medium mb-2`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      className={`block ${currentTheme.accent} text-sm font-medium mb-2`}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={inputClasses}
                      placeholder="Your message here..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${currentTheme.button} ${currentTheme.buttonText} w-full py-3 rounded-lg flex items-center justify-center space-x-2`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              className={`${currentTheme.card} rounded-2xl p-8 shadow-xl`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className={`${currentTheme.accent} text-2xl font-bold mb-6`}>
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`${currentTheme.button} p-3 rounded-full`}>
                    <PhoneCall size={24} className={currentTheme.buttonText} />
                  </div>
                  <div>
                    <p className={`${currentTheme.accent} font-medium`}>
                      Phone
                    </p>
                    <p className={currentTheme.text}>+263 78 223 5693</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`${currentTheme.button} p-3 rounded-full`}>
                    <Mail size={24} className={currentTheme.buttonText} />
                  </div>
                  <div>
                    <p className={`${currentTheme.accent} font-medium`}>
                      Email
                    </p>
                    <p className={currentTheme.text}>cocazofficial@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`${currentTheme.button} p-3 rounded-full`}>
                    <MapPin size={24} className={currentTheme.buttonText} />
                  </div>
                  <div>
                    <p className={`${currentTheme.accent} font-medium`}>
                      Address
                    </p>
                    <p className={currentTheme.text}>
                      998 Woodlands Waterfalls, Harare, Zimbabwe
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className={`${currentTheme.card} rounded-2xl overflow-hidden shadow-xl`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.7830125609165!2d31.047999214561744!3d-17.829038188024397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a6c2bbd3dd5b%3A0x4f3d63ccfedc778d!2s123%20Example%20Street%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1685712000000!5m2!1sen!2sus"
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
