const SignUp = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Join COCAZ</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#318000] font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#318000] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
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
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-[#318000] font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#318000] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter a password"
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
              />
            </div>
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="termsCheckbox"
                />
                <label className="form-check-label" htmlFor="termsCheckbox">
                  I agree to the <a href="#" className="text-[#FFD500]">terms and conditions</a>
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
    </div>
  );
};

export default SignUp;