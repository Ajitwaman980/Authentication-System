import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/profile/${id}`,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          const data = response.data.user;
          console.log("Profile data:", data);
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);

        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    };

    fetchProfile();
  }, [id, navigate]);

  const handleLogout = async () => {
    try {
      let res = await axios.get("http://localhost:3000/api/user/logout", {
        withCredentials: true,
      });
      console.log("Logout success:", res.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading profile...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8 tracking-wide">
          Profile Information
        </h1>

        <div className="space-y-4 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-700 mb-1">Username</h2>
            <p className="text-lg text-gray-900">{user.username}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Created At: </span>
              {new Date(user.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition duration-200 ease-in-out shadow-md transform hover:scale-105"
            onClick={handleLogout}
          >
            Logout
          </button>

          <Link to={`/update_password/${id}`}>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-200 ease-in-out shadow-md transform hover:scale-105">
              Update Password
            </button>
          </Link>

          <Link to={`/update_username/${id}`}>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition duration-200 ease-in-out shadow-md transform hover:scale-105">
              Update Username
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
