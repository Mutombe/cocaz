import { PhoneCall, Mail, MapPinHouse } from 'lucide-react';
import { useState } from 'react';
import ThankYouModal from '../ThankYou/thankYou';
const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="bg-white rounded-lg shadow-md p-6">
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
                <label htmlFor="message" className="block text-[#318000] font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#318000] leading-tight focus:outline-none focus:shadow-outline"
                  rows={5}
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#FFD500] hover:bg-[#DDB200] text-[#318000] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
          {showModal && (
          <ThankYouModal
            name={name}
            message="Thank you for contacting us. We will get back to you shortly!"
            onClose={() => setShowModal(false)}
          />
        )}
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex items-center mb-2">
                <PhoneCall className="text-[#318000] h-6 w-6 mr-2" />
                <p className="text-[#318000] font-bold">+263 78 223 5693</p>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="text-[#318000] h-6 w-6 mr-2" />
                <p className="text-[#318000]">cocazofficial@gmail.com</p>
              </div>
              <div className="flex items-center">
                <MapPinHouse className="text-[#318000] h-6 w-6 mr-2" />
                <p className="text-[#318000]">
                  998 Woodlands Waterfalls, Harare, Zimbabwe
                </p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.7830125609165!2d31.047999214561744!3d-17.829038188024397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a6c2bbd3dd5b%3A0x4f3d63ccfedc778d!2s123%20Example%20Street%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1685712000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;