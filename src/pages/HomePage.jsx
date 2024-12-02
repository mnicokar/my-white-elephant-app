import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SignOutButton from "../components/SignOut";
import "./HomePage.css";

const HomePage = () => {
  // Renamed to HomePage
  const { user } = useContext(AuthContext);

  return (
    <div className="home-page">
      <p>Welcome, {user.displayName}!</p>

      <h2>What do you want to do?</h2>

      <div className="home-page-options">
        {/* Added the container div */}
        <div className="home-page-option">
          <Link to="/register-item">Register an Item</Link>
        </div>
        <div className="home-page-option">
          <Link to="/join-game">Join a Game</Link>
        </div>
        <div className="home-page-option">
          <Link to="/create-game">Create a Game</Link>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
