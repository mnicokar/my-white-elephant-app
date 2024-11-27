import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase'; 
import './Authentication.css'; // Import the CSS file

function Authentication() {
  const [user, setUser] = useState(null); // To store user data after sign-in

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); // Update the user state
      console.log("User signed in:", user);
    } catch (error) {
      // Handle Errors here.
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName}!</p>
      ) : (
        <button className='google-sign-in-button' onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Authentication;
