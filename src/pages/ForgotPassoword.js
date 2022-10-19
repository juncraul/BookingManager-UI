import { ArrowBack } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ForgotPassoword = () => {
  const [isOk, setIsOk] = useState(true);
  return (
    <Box
      sx={{
        backgroundColor: "#BFEDEF",
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#98E2C6",
          width: "25%",
          height: "45%",
          borderRadius: "15px",
        }}
      >
        <Button
          sx={{
            position: "relative",
            top: "25px",
            left: "20px",
            borderRadius: "15px",
          }}
          variant="contained"
        >
          <ArrowBack /> Back
        </Button>

        <Typography
          variant="h3"
          sx={{
            position: "relative",
            top: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Forgot your password
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputBase
            variant="standard"
            placeholder="Enter your email"
            sx={{
              backgroundColor: "white",
              position: "relative",
              top: "200px",
              width: 500,
              borderRadius: "15px",
              fontSize: "20px",
            }}
          ></InputBase>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Stack
            gap={2}
            direction="row"
            sx={{
              position: "absolute",
              top: "300px",
              right: "50px",
            }}
          >
            <Button
              variant="contained"
              sx={{ borderRadius: "15px" }}
              onClick={() => setIsOk(false)}
            >
              Send
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!isOk && (
            <Alert
              severity="error"
              sx={{
                position: "absolute",
                top: "205px",
                width: 500,
                borderRadius: "15px",
              }}
            >
              You fucked up
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassoword;
