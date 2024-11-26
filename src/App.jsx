import React, { useContext } from 'react';
import "./App.css";
import AuthContext from './context/AuthContext';
import LoginPage from "./pages/LoginPage";

function App() {
  const { user } = useContext(AuthContext);


  return (
    <div>
      {user ? (
        // User is signed in
        <div>
          <p>Welcome, {user.displayName}!</p>
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
