import { ArrowBack } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#BFEDEF",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#98E2C6",
          marginTop: 20,
          height: 750,
          width: 650,
          borderRadius: "65px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack gap={5}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>
                <ArrowBack />
                Back
              </Button>
            </Link>
            <Typography variant="h3" textAlign="center">
              Login
            </Typography>
            <TextField
              variant="standard"
              label="Username"
              sx={{
                backgroundColor: "white",
                borderRadius: "15px",
                width: 500,
              }}
            />
            <TextField
              variant="standard"
              label="Password"
              sx={{
                backgroundColor: "white",
                borderRadius: "15px",
                width: 500,
              }}
            />
            <Button
              variant="contained"
              sx={{ marginLeft: 15, marginRight: 15 }}
            >
              Login
            </Button>
            <Stack direction="row" sx={{ marginLeft: 25 }} gap={2}>
              <Link to="/signup" style={{textDecoration: "none"}}>
              <Button>Sign Up</Button>
              </Link>
              <Link to="/forgot" style={{textDecoration: "none"}}>
              <Button>Forgot your password?</Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
