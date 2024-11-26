import React, { useContext } from "react";
import Authentication from "../components/Authentication";
import AuthContext from "../context/AuthContext"; // Import the context

function LoginPage() {
  const { setUser } = useContext(AuthContext); // Access context
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "45px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#333", textAlign: "center" }}>
          Welcome to the Winter White Elephant!
        </h2>

        {/* Pass setUser to Authentication */}
        <Authentication setUser={setUser} />
      </div>
    </div>
  );
}

export default LoginPage;
