import React, { useContext } from "react";
import Authentication from "../components/Authentication";
import AuthContext from "../context/AuthContext"; // Import the context
import "./LoginPage.css"; // Import the CSS file

function LoginPage() {
  const { setUser } = useContext(AuthContext); // Access context
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>
          Welcome to White Elephant!
        </h2>
        {/* Pass setUser to Authentication */}
        <Authentication setUser={setUser} />
      </div>
    </div>
  );
}

export default LoginPage;
