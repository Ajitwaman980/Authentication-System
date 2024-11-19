// import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const PasswordUpdate = () => {
  const [New_password, setnewpassword] = useState("");
  const { userID } = useParams();
  const navigate = useNavigate();
  console.log("this is id ", userID);

  const handlenewpassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/users/password-change/${userID}`,
        { New_password },
        {
          withCredentials: true,
        }
      );

      const updatedUserID = response.data.userID;
      console.log("this is id ", updatedUserID);
      navigate(`/profile/${updatedUserID}`);
    } catch (e) {
      console.error(e);
      alert("Something went wrong: " + e.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">
          chnage password{" "}
        </h2>
        <form onSubmit={handlenewpassword}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="New_password"
              name="New_password"
              value={New_password}
              required
              onChange={(e) => setnewpassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Update password
          </button>
        </form>
      </div>
    </div>
  );
};
