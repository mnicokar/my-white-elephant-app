import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; 
import SignOutButton from '../components/SignOut';
const HomePage = () => { // Renamed to HomePage
  const { user } = useContext(AuthContext);

  return (
    <div>
      <p>Welcome, {user.displayName}!</p>
      <SignOutButton />

      <h2>What do you want to do?</h2>

      <div> 
        <Link to="/register-item">Register an Item</Link>
      </div>

      <div>
        <Link to="/join-game">Join a Game</Link>
      </div>

      <div>
        <Link to="/create-game">Create a Game</Link>
      </div>

      {/* ... other content for the homepage ... */}
    </div>
  );
};

export default HomePage; 
