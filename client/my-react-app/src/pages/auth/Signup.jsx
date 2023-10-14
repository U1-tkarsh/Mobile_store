import React, { useState } from "react";
import { Link } from "react-router-dom";
const BASE_URL = "http://localhost:5001/api"; 
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        mobileNumber: '',
        className: '',
    });

    const classOptions = [
        {class: "1"},
        {class: "2"},
        {class: "3"},
        {class: "4"},
        {class: "5"}
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData, "formData");
      
        try {
          const response = await axios.post(`${BASE_URL}/Users/register`, formData);
      
          console.log("Registration successful", response.data);
          toast.success("Sign Up Successful !!");
          navigate("/");
        } catch (error) {
          console.error("Error registering", error);
          toast.error("Sign Up Failed !!");
        }
      };
      
  return (
    <>
      <div className="m-10">
        <div className="mx-auto mt-6 px-4 py-8 shadow-2xl p-6 bg-white rounded-lg flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center ">Sign Up</h2>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-2 font-semibold relative">
                      Name
                      <span className="text-red-700 relative top-0 right-0">
                        *
                      </span>
                      <input
                        required
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        placeholder="Enter your name"
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <label className="block mb-2 font-semibold">
                    Email
                    <span className="text-red-700 relative top-0 right-0">
                      *
                    </span>
                    <input
                      required
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                      placeholder="Enter Email"
                    />
                  </label>
                  <div className="mb-4">
                    <label
                      className="block mb-2 font-semibold"
                      htmlFor="password"
                    >
                      Password
                      <span className="text-red-700 relative top-0 right-0">
                        *
                      </span>
                      <input
                        className="border rounded-sm  px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 font-semibold"
                      htmlFor="mobileNumber"
                    >
                      Phone Number
                      <span className="text-red-700 relative top-0 right-0">
                        *
                      </span>
                      <input
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
                      type="submit"
                    >
                      Sign Up
                    </button>
                    <label className="block mb-2 font-semibold">
                      Select Class
                      <span className="text-red-700 relative top-0 right-0">
                        *
                      </span>
                      <select
                        className="border rounded-sm px-3 py-2 mt-1 w-full text-black bg-gray-100 focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a class
                        </option>
                        {classOptions.map((option) => (
                          <option key={option.class} value={option.class}>
                            {option.class}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-red-700 hover:text-red-800 text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
