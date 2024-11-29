// SignOutButton.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import AuthContext from '../context/AuthContext';
import { auth } from '../firebase';

function SignOutButton() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/') //redirect to login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
}

export default SignOutButton;