import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your API call here
    try {
      // Example: await axios.post('your-backend-api/forgot-password', { email });
      setMessage('A password reset link has been sent to your email.');
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="p-7 border-[3px] rounded-[20px] bg-gray-200 shadow-customShadow1 dark:bg-slate-800">
        <div className="flex justify-center">
          <h1 className="font-bold text-[35px] text-gray-800 dark:text-slate-300">Forgot Password</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          action="#"
          method="post"
          className="space-y-4 mt-5"
        >
          <div className="text-left">
            <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">
              Email
            </label>
            <input
              id="email"
              className="border p-3 bg-gray-50 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && (
            <p className="text-green-500 text-center text-[14px]">{message}</p>
          )}
          <button
            className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
            type="submit"
          >
            Send Reset Link
          </button>
        </form>

        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3 className="dark:text-gray-300">
            Remember your password?
            <button
              onClick={() => navigate('/')}
              className="group text-blue-400 transition-all duration-100 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-2">
                Go back to login
              </span>
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;