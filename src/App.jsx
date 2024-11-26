import React, { useContext } from 'react';
import "./App.css";
import AuthContext from './context/AuthContext';
import LoginPage from "./pages/LoginPage";
import { signOut } from 'firebase/auth'; 
import { auth } from './firebase'; // Import your Firebase auth instance

function App() {
  const { user, setUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  console.log(user);
  console.log(auth);
  
  return (
    <div>
      {user ? (
        // User is signed in
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleSignOut}>Sign Out</button> 
          {/* ... other components for authenticated users ... */}
        </div>
      ) : (
        // User is not signed in
        <LoginPage />
      )}
    </div>
  );
}

export default App;
