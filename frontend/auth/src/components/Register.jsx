// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setusername] = useState(""); // user state for username
  const [password, setpassword] = useState(""); // password state
  const navigate = useNavigate(); // navigate
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Handle user registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-1 mt-0 text-blue-400 font-normal text-2xl mb-1">
            <button
              type="button"
              onClick={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            >
              {isPasswordVisible ? "hide" : "show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        <Link to={"/login"}>
          <a className="text-1xl font-sans text-blue-700 flex justify-start p-1">
            Alredy account login
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Register;
