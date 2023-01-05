import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { success } = useSelector((state) => state.user);
  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "20vw",
        height: "40vh",
        margin: "220px auto",
        boxShadow: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          top: "1rem",
          left: "1rem",
          cursor: "pointer",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <ArrowBack /> Back
          </Typography>
        </Link>
      </Box>
      <Box sx={{ position: "relative", top: "45px" }}>
        <Typography variant="h3" align="center">
          Booking<b style={{ color: "red" }}>Manager</b>
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "400px",
          paddingLeft: "1rem",
        }}
      >
        <TextField
          variant="standard"
          placeholder="username"
          label="Enter your username"
          required
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="standard"
          placeholder="password"
          label="Enter your password"
          required
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          position: "relative",
          right: "20px",
          top: "20px",
        }}
      >
        <Box sx={{ display: "flex", paddingTop: "2rem" }} gap={2}>
          <Button
            variant="contained"
            sx={{ order: 2 }}
            onClick={handleButtonClick}
          >
            Login
          </Button>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button variant="contained">Sign Up</Button>
          </Link>
        </Box>
      </Box>
      {success && nav("/")}
    </Box>
  );
};

export default Login;
