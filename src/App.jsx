import React, { useContext } from "react";
import "./App.css";
import AuthContext from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; // Import your Firebase auth instance
import { BrowserRouter, Routes, Route, Navigate, RouterProvider } from "react-router-dom";
import SignOutButton from "./components/SignOut";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<LoginPage/>}/>
          <Route path = "/signout" element = {<SignOutButton/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
