import {
  AppBar,
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Stack, styled } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(undefined);
  const StyledTypography = styled(Typography)({
    color: "#545C52",
  });
  return (
    <AppBar position="sticky" sx={{ padding: 2, backgroundColor: "#BFEDEF" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>
            <Typography variant="h5" sx={{ marginLeft: 2, color: "#545C52" }}>
              HotelManager
            </Typography>
          </Button>
        </Link>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack direction="row" gap={2}>
            <StyledTypography variant="h5">Item 1</StyledTypography>
            <StyledTypography variant="h5">Item 2</StyledTypography>
            <StyledTypography variant="h5">Item 3</StyledTypography>
            <StyledTypography variant="h5">Item 4</StyledTypography>
          </Stack>
          {account === undefined ? (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  marginLeft: 5,
                  backgroundColor: "#545C52",
                  color: "#BFEDEF",
                }}
                size="large"
              >
                Sign In
              </Button>
            </Link>
          ) : (
            <Avatar
              alt="avatar"
              sx={{ backgroundColor: "red", marginLeft: 7, cursor: "pointer" }}
              onClick={(e) => setIsOpen(true)}
            >
              D
            </Avatar>
          )}
        </Box>
        <Menu
          open={isOpen}
          onClose={() => setIsOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ marginTop: 5 }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
};

export default Navbar;
