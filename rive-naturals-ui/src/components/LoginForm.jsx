import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3b5d3a] via-[#4b7447] to-[#233d1e]">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <div className="mb-2 mt-4 flex items-center justify-center">
  <div className="bg-[#ebe7e7] rounded-full w-12 h-12 flex items-center justify-center shadow">
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
      {/* Main Leaf (Right) */}
      <path
        d="M48 8C48 8 62 28 54 46C50.5 54.5 38 60 30 52C22 44 32 20 48 8Z"
        fill="#5B8671"
        stroke="#386150"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Secondary Leaf (Left, Overlapping) */}
      <path
        d="M16 20C16 20 8 36 18 48C24 56 38 54 40 44C42 34 28 26 16 20Z"
        fill="#A7C3A1"
        stroke="#386150"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Main Leaf Vein */}
      <path
        d="M39 52C39 52 48 36 48 8"
        stroke="#386150"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Secondary Leaf Vein */}
      <path
        d="M24 48C24 48 18 36 16 20"
        stroke="#386150"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
</div>

        <h2 className="text-[#ffffff] text-lg font-bold mb-6">Rive Naturals</h2>

        {/* Login Card */}
        <div className="w-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-tl-2xl rounded-tr-2xl rounded-bl-lg rounded-br-lg p-6 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#e7edea] mb-1 text-center">Login</h3>
          <p className="text-[#ffffff] text-center mb-6">Sign in to continue</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="rounded-full px-4 py-2 bg-[#8EC3A7] text-[#386150] placeholder-[#386150] focus:outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="rounded-full px-4 py-2 bg-[#8EC3A7] text-[#386150] placeholder-[#386150] focus:outline-none w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#386150]"
                tabIndex={-1}
              >
                {showPassword ? (
                  // Eye-off icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.19-6.32m1.42-1.42A9.96 9.96 0 0112 1c5.523 0 10 4.477 10 10 0 2.21-.72 4.25-1.93 5.89M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18" />
                  </svg>
                ) : (
                  // Eye icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.826-.635 1.613-1.074 2.348" />
                  </svg>
                )}
              </button>
            </div>
            <button
              type="submit"
              className="rounded-full px-4 py-2 bg-[#386150] text-white font-semibold mt-2"
            >
              Log In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-100 text-sm">Or Sign in with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-between gap-2">
              <button
                type="button"
                className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5 mr-2" />
                Apple ID
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
              >
                <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="w-5 h-5 mr-2" />
                Facebook
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <Link
              to="/register"
              className="text-[#ffffff] font-semibold underline hover:text-[#5B8671] transition"
            >
              New user? Register here
            </Link>
          </div>
          <div className="text-center mt-6">
            <a
              href="#"
              className="text-[#d4fbeb] font-semibold text-sm hover:underline"
            >
              Forgot Password
            </a>
            <div className="text-[#c3c3c3] text-xs">set new Password</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
