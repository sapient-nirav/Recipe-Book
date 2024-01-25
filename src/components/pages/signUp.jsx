import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/2.jpg";
import { useTheme } from "../../context/ThemeContext";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", email: "", password: "" };
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const emailAlreadyExists = (email) => {
    const existingDataString = localStorage.getItem("userData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    return existingData.some((user) => user.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (emailAlreadyExists(formData.email)) {
        setErrors({
          ...errors,
          email: "Email already exists. Choose a different email.",
        });
      } else {
        const existingDataString = localStorage.getItem("userData");
        const existingData = existingDataString
          ? JSON.parse(existingDataString)
          : [];

        const updatedData = [...existingData, formData];
        localStorage.setItem("userData", JSON.stringify(updatedData));
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        setErrors({ username: "", email: "", password: "" });
        navigate("/login");
      }
    }
  };
  const { isDarkMode } = useTheme();

  return (
    <div className={` bg-${isDarkMode ? "slate-500" : "black"}`}>
      <div
        className={`min-h-screen flex items-center justify-center bg-${
          isDarkMode ? "slate-50" : "black"
        } bg-opacity-5`}
      >
        <div
          className={`bg-${
            isDarkMode ? "slate-50" : "black"
          } border-2 p-8 rounded-xl shadow-lg  w-96`}
        >
          <h1
            className={`text-${
              isDarkMode ? "black" : "white"
            } text-2xl font-semibold mb-4`}
          >
            Register To Recipe Book
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className={`block text-${
                  isDarkMode ? "gray-50" : "white"
                } text-sm font-medium`}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                placeholder="Enter your username"
                onChange={handleChange}
                className={`mt-1 ${
                  isDarkMode ? "bg-white text-black" : "text-white bg-black"
                } p-2 border w-full rounded-md placeholder:italic ${
                  errors.username && "border-red-500"
                }`}
              />
              <div className="text-red-500 text-sm italic">
                {errors.username}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className={`block text-${
                  isDarkMode ? "gray-50" : "white"
                } text-sm font-medium`}
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`mt-1 ${
                  isDarkMode ? "bg-white text-black" : "text-white bg-black"
                } p-2 border w-full rounded-md placeholder:italic ${
                  errors.email && "border-red-500"
                }`}
              />
              <div className="text-red-500 text-sm italic">{errors.email}</div>
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="password"
                className={`block text-${
                  isDarkMode ? "gray-50" : "white"
                } text-sm font-medium`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`mt-1 ${
                  isDarkMode ? "bg-white text-black" : "text-white bg-black"
                } p-2 border w-full rounded-md placeholder:italic ${
                  errors.password && "border-red-500"
                }`}
              />
              <div className="text-red-500 text-sm italic">
                {errors.password}
              </div>
            </div>
            <div
              className={`block text-${
                isDarkMode ? "gray-50" : "white"
              } text-sm font-medium mb-4 italic`}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-medium hover:underline"
              >
                Login
              </Link>
              .
            </div>
            <button
              type="submit"
              className="bg-blue-500 mx-auto px-6 flex text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 font-medium"
            >
              Register
            </button>
          </form>
        </div>
        <img src={logo} alt="alt" className="w-[650px] ml-10 rounded-full  " />
      </div>
    </div>
  );
};

export default RegistrationForm;
