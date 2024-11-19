import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Welcome from "./components/welcome";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { PasswordUpdate } from "./components/PasswordUpdate";
import { UsernameUpdate } from "./components/UsernameUpdate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/update_password/:userID" element={<PasswordUpdate />} />
        <Route path="/update_username/:userID" element={<UsernameUpdate />} />
      </Routes>
    </Router>
  );
};
export default App;
