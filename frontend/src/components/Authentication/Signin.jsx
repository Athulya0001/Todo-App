import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/login",
        formData
      );

      if (res.data.success) {
        console.log("Login successful");
        localStorage.setItem("token", res.data.token);
        navigate("/todo");
      }
    } catch (error) {
      console.log("Falied to login user", error.response?.data || error.message);
      alert(error.response?.data.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-xl w-96 space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Sign In</h1>

        <input
          className="w-full px-4 py-2 border border-gray-400 rounded-lg"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="w-full px-4 py-2 border border-gray-400 rounded-lg"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>

        <h2 className="flex justify-center items-center text-md">
          Don’t have an account?
          <Link to={"/"}>
            <span className="text-orange-400 underline">Sign Up</span>
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Signin;