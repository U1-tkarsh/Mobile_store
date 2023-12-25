import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "http://localhost:5001/api"; 
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForget = () => {
    navigate("/reset-password");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(formData.email, "email");
    console.log(formData.password, "password");

    // Make API request to login
    fetch(`${BASE_URL}/Users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        // Store response in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user.data));
        // Navigate to the desired page
        const user = data.user.data;
        if (
          user.userRole == "admin"
        )
          navigate("/dashboard/admin");
        // else if (user.userRole == "student"){ navigate("/");toast.success("Sign Up Successful !!");}
        else {
        navigate("/");
        toast.success("Sign In Successful !!");
        }
        console.log("Login successful");
        toast.success("Sign In Successful !!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Sign In Failed !!");
      });
  };

  return (
    <>
      <div className="flex justify-center m-10 place-content-center">
        <div className="flex flex-col p-6 px-4 py-8 mx-auto mt-6 bg-white rounded-lg shadow-2xl md:flex-row place-content-center">
          {/* <div className="w-full m-2 mb-4 md:w-1/2 md:mb-0">
            <img
              className="w-80"
              src={`${import.meta.env.BASE_URL}illustartion/login.svg`}
              alt="login"
              loading="lazy"
            />
          </div> */}
          <div className="w-full m-2 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-center ">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">
                  Email
                  <span className="relative top-0 right-0 text-red-700">*</span>
                  <input
                    required
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 mt-1 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    placeholder="Enter Email"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold" htmlFor="password">
                  Password
                  <span className="relative top-0 right-0 text-red-700">*</span>
                  <input
                    className="w-full px-3 py-2 mt-1 text-black bg-gray-100 border rounded-sm focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:outline-none"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  className="px-4 py-2 font-bold text-white bg-red-700 rounded hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                  type="submit"
                >
                  Sign In
                </button>
                <p
                  className="text-sm font-medium text-red-700 cursor-pointer hover:text-red-800"
                  onClick={handleForget}
                >
                  Forgot Password?
                </p>
              </div>
            </form>
            <div className="text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-sm font-medium text-red-700 hover:text-red-800"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
