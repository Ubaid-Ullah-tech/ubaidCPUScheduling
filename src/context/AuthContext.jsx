import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Check if token is present in localStorage
  );
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("token", "user-logged-in"); // Mark as logged in
    setIsAuthenticated(true);
    navigate("/"); // Redirect to the home page after login
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  const requireAuth = (callback) => {
    if (!isAuthenticated) {
      alert('please first login then you can add process ')
      navigate("/login"); // Redirect to login page if not authenticated
    } else {
      callback(); // Proceed with the callback function if authenticated
    }
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    requireAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
