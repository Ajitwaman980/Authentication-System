// import Register from "./components/Register";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
      <h1 className="font-extrabold text-5xl text-slate-800 mb-6">
        Welcome to the World of Authentication
      </h1>
      <p className="text-lg text-gray-600">
        Secure your journey with user authentication
      </p>
      <Link to="/register">
        <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
