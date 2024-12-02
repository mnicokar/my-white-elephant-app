import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthContext from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterItem from "./pages/RegisterItem";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user === null) { // Check for null specifically
    return <div>Loading...</div>; // Or a loading spinner
  } else if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false); // Set loading to false after check
    });

    return () => unsubscribe();
  }, [setUser]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          {/* Add other protected routes here */}
          <Route
            path="/register-item"
            element={
              <ProtectedRoute> 
                <RegisterItem /> 
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;