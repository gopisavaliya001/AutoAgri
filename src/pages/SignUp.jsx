import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const SignUp = () => {
  const navigate = useNavigate(); // ✅ initialize navigation hook

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // ✅ Clear the form
    setFormData({
      username: "",
      email: "",
      password: "",
    });

    // ✅ Redirect to Home page
    navigate("/");
  };

  const handleSignIn = () => {
    // ✅ Directly navigate to Home (or login page)
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#347433] focus:border-transparent outline-none transition duration-200"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#347433] focus:border-transparent outline-none transition duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#347433] focus:border-transparent outline-none transition duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-[#347433] text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={handleSignIn}
              className="flex-1 bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
