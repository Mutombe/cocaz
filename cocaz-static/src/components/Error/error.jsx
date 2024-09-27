import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { AlertOctagon, RefreshCw } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error(error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg min-h-screen flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <AlertOctagon className="w-24 h-24 text-[#318000] dark:text-[#5fd75f] mb-6" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 text-[#318000] dark:text-[#5fd75f]">Oops! Something went wrong</h1>
          <p className="mb-6 text-center text-gray-700 dark:text-gray-300">We encountered an unexpected issue while processing your request. Our team has been notified and is working on a solution.</p>
          <p className="mb-8 text-center text-gray-700 dark:text-gray-300">Error details: {this.state.error && this.state.error.toString()}</p>
          <motion.button
            onClick={this.resetErrorBoundary}
            className="bg-[#318000] dark:bg-[#5fd75f] text-white dark:text-gray-900 px-6 py-3 rounded-full flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </motion.button>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;