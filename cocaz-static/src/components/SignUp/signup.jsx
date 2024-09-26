import React, { useState } from 'react';
import ThankYouModal from '../ThankYou/thankYou';

const SignUp = () => {
  const [showModal, setShowModal] = useState(false); 
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };


  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Join COCAZ</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#318000] font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#318000] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#318000] font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#318000] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="profession" className="block text-[#318000] font-bold mb-2">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#318000] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your profession"
                required
              />
            </div>
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsCheckbox"
                  required
                />
                <label className="form-check-label" htmlFor="termsCheckbox">
                  <a href="#" className="text-black"> I agree to the terms and conditions</a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <ThankYouModal
          name={name} // Pass user's name to personalize the message
          message="You have successfully signed up for our services. We will keep you updated with the latest news."
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default SignUp;
