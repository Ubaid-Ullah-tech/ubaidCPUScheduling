import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("User already exists");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-3/4 bg-blue-100 mt-24 mx-3 rounded-3xl py-10">
      
      <p className="text-3xl mb-4">Register_Page</p>
      {/* <Typography variant="" className="mb-6">
        Register_Page
      </Typography> */}
      <form onSubmit={handleRegister} className="bg-white mx-3 rounded-3xl p-6  shadow-md">
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       <div className="mt-4">
       <Button  variant="contained" color="primary" type="submit" fullWidth>
          Register
        </Button>
       </div>
        <div>
          <p className="my-5">If you already have an account, please log in</p>
          <Button variant="contained" color="primary" type="submit" fullWidth onClick={() => navigate("/login")}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
