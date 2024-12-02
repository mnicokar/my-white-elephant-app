import React, { useContext } from "react";
import "./App.css";
import AuthContext from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; // Import your Firebase auth instance
import { BrowserRouter, Routes, Route, Navigate, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};


function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<LoginPage/>}/>
          <Route
          path="/home" // This should now point to /home
          element={
            <ProtectedRoute user={user}>
              <HomePage />  
            </ProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
