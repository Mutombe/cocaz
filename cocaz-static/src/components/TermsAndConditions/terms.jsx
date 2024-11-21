import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../themeContext';
import { FileText, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  const { currentTheme } = useTheme();

  const termsData = [
    {
      title: "1. Acceptance of Terms",
      content: "By completing the membership form and submitting your application, you agree to abide by these Terms and Conditions. If you do not agree, please do not sign up for membership."
    },
    {
      title: "2. Membership Eligibility",
      content: "Membership is open to individuals of all ages. However, members under the age of 18 must have parental or guardian consent to participate."
    },
    {
      title: "3. Services Provided",
      content: "COCAZ provides advisory and management services for content creators, including but not limited to: Poets, Musicians, Instrumentalists, Sound Engineers, Social Media Influencers, Actors, Showmen, Photographers, DJs, Artistic Painters, Writers (Authors, Screenwriters), Directors, Cinematographers, and Choreographers. Our services aim to enhance the knowledge, coverage, and audience engagement of our members while offering support in monetizing their content."
    },
    {
      title: "4. Member Responsibilities",
      content: "As a member, you agree to: Provide accurate and up-to-date information during the registration process, respect the rights of other members and COCAZ staff, and use the services provided by COCAZ in a manner consistent with applicable laws and regulations."
    },
    {
      title: "5. Intellectual Property",
      content: "All content created by COCAZ, including promotional materials and resources, is the intellectual property of COCAZ. Members may not reproduce, distribute, or modify this content without prior written consent."
    },
    {
      title: "6. Limitation of Liability",
      content: "COCAZ shall not be liable for any indirect, incidental, or consequential damages arising from your membership or use of our services. Members agree to use the services at their own risk."
    },
    {
      title: "7. Termination of Membership",
      content: "COCAZ reserves the right to terminate any membership at its discretion, with or without cause. Members may terminate their membership by providing written notice to COCAZ."
    },
    {
      title: "8. Changes to Terms",
      content: "COCAZ may update these Terms and Conditions from time to time. Members will be notified of any significant changes, and continued use of services will constitute acceptance of the new terms."
    },
    {
      title: "9. Governing Law",
      content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising from these terms shall be resolved in the appropriate courts of Zimbabwe."
    },
    {
      title: "10. Contact Information",
      content: "For any questions regarding these Terms and Conditions, please contact us at cocazofficial@gmail.com"
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="py-20"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          variants={pageVariants}
        >
          <motion.h2
            className={`text-4xl font-bold ${currentTheme.accent} mb-4`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms and Conditions
          </motion.h2>
          <motion.p 
            className={`${currentTheme.text} text-xl max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Please read our terms carefully before joining COCAZ
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-6 max-w-4xl mx-auto"
          variants={pageVariants}
        >
          {termsData.map((term, index) => (
            <motion.div
              key={index}
              className={`${currentTheme.card} rounded-xl p-6 shadow-xl`}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className={`text-2xl font-bold ${currentTheme.accent} mb-4`}>
                {term.title}
              </h3>
              <p className={`${currentTheme.text} leading-relaxed`}>
                {term.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={pageVariants}
        >
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="mailto:cocazofficial@gmail.com"
              className={`${currentTheme.button} ${currentTheme.buttonText} px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Contact Us</span>
            </motion.a>
            <motion.button
              className={`${currentTheme.secondary} ${currentTheme.buttonText} px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              <span>Download PDF</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;