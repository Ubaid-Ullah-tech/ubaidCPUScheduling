import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@mui/material";
import abid from '../assets/file.jpg';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if there is a user with matching email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // If user is found, log them in
      login(); // Set token in localStorage and update auth state
      navigate("/"); // Redirect to home after successful login
    } else {
      // If user not found, show error message
      alert("Invalid credentials");
    }
  };

  // Inline styles
  const styles = {
    loginContainer: {
      display: "",
      justifyContent: "center",
      alignItems: "center",
      height: "85vh",
      backgroundColor: "#e0f0f0",
      padding: "10px",
      marginTop:'25%',
      marginBottom:'20%'
    },
    form: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div 
    className="mx-3 rounded-3xl bg-slate-400"
    style={styles.loginContainer}>
         <div className="flex flex-col justify-center items-center mb-5">
          <img 
          className="h-20 w-20 rounded-full mb-5"
          src={abid} alt="" />
          <p>Login_Page</p>
         </div>
      <form style={styles.form} onSubmit={handleLogin}>
        <input
          style={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="my-4" style={styles.button} type="submit">
          Login
        </button>
        <div>
          <p className="my-4">If you are not registered yet, please register first</p>
          <Link to='/register'>
          <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
            Register
          </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
