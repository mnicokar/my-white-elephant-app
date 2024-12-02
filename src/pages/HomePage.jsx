import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AuthContext from "../context/AuthContext";
import SignOutButton from "../components/SignOut";
import "./HomePage.css";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterItem = () => navigate('/register-item');
  const handleJoinGame = () => navigate('/join-game');
  const handleCreateGame = () => navigate('/create-game');

  return (
    <div className="home-page">
      <h1>Welcome, {user.displayName}!</h1>

      <div className="home-page-options">
        <div className="home-page-option" onClick={handleRegisterItem}> 
          Register an Item 
        </div>
        <div className="home-page-option" onClick={handleJoinGame}>
          Join a Game
        </div>
        <div className="home-page-option" onClick={handleCreateGame}>
          Create a Game
        </div>
      </div>
    </div>
  );
};

export default HomePage;