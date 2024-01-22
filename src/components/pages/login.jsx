import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/3.jpg";

const Login = ({ onLoginStatusChange, setLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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
    const newErrors = { email: "", password: "" };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingDataString = localStorage.getItem("userData");
      const existingData = existingDataString
        ? JSON.parse(existingDataString)
        : [];
      const user = existingData.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        localStorage.setItem("isLoggedIn", true);
        setLoggedIn(true);
        navigate("/listings-local");
      } else {
        setErrors({
          ...errors,
          email: "Invalid email or password",
          password: "Invalid email or password",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-5">
      <img src={logo} alt="alt" className="mr-10 rounded-full w-[500px]" />

      <div className="bg-slate-50 p-8 rounded-xl shadow-lg  w-96">
        <h1 className="text-2xl font-semibold mb-4">Login To Recipe Book</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className={`mt-1 p-2 border w-full rounded-md placeholder:italic ${
                errors.email && "border-red-500"
              }`}
            />
            <div className="text-red-500 text-sm italic">{errors.email}</div>
          </div>{" "}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              className={`mt-1 p-2 border w-full rounded-md placeholder:italic ${
                errors.password && "border-red-500"
              }`}
            />
            <div className="text-red-500 text-sm italic">{errors.password}</div>
          </div>
          <div className="mb-4 italic">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 font-medium hover:underline"
            >
              Register
            </Link>
            .
          </div>
          <button
            type="submit"
            className="bg-blue-500 mx-auto flex text-white p-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
