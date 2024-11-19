// import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const UsernameUpdate = () => {
  const [newUsername, setnewusername] = useState("");
  const { userID } = useParams();
  const navigate = useNavigate();
  console.log("this is id ", userID);

  const handlenewusername = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/user/rename-username/${userID}`,
        { newUsername },
        { withCredentials: true }
      );

      const updatedUsernameId = response.data.userID;
      console.log("Updated user ID:", updatedUsernameId);

      navigate(`/profile/${updatedUsernameId}`);
    } catch (e) {
      console.error("Error updating username:", e);
      alert("Something went wrong: " + e.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <p className="text-red-600 text-2xl p-1">
          Automatic logout when you update username Please login again
        </p>
        <h2 className="text-2xl font-semibold text-center mb-6">
          change Username
        </h2>
        <form onSubmit={handlenewusername}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="newUsername"
              name="newUsername"
              value={newUsername}
              onChange={(e) => setnewusername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Update username
          </button>
        </form>
      </div>
    </div>
  );
};
