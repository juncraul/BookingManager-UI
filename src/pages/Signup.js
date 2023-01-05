import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hasErrors, success } = useSelector((state) => state.user);
  const handleButtonClick = () => {
    dispatch(signupUser({ username, password }));
  };

  useEffect(() => {
    if (success) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, success]);

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
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          paddingLeft: "1rem",
        }}
      >
        <TextField
          alignItems="center"
          variant="standard"
          placeholder="username"
          label="Enter your username"
          required
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <TextField
          variant="standard"
          placeholder="password"
          label="Enter your password"
          required
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
        {hasErrors ? <Alert severity="error">User already exists!</Alert> : ""}
        <Box sx={{ display: "flex", paddingTop: "2rem" }} gap={2}>
          <Button variant="contained" onClick={handleButtonClick}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
