import {
  AppBar,
  Avatar,
  Box,
  Button,
  Fade,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutuser } from "../../redux/slices/userSlice";

const MenuItemStyled = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "gray",
    borderRadius: "15px",
  },
});
const Navbar = () => {
  const StyledButtons = styled(Typography)({
    cursor: "pointer",
  });
  const state = useSelector((state) => state.user);
  const { success } = useSelector((state) => state.user);
  const [image, setImage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("updated");
  }, [success]);
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box flex={1}>
          <Typography variant="h4" flex={1}>
            Booking<b style={{ color: "red" }}>Manager</b>
          </Typography>
        </Box>
        <Box flex={2}>
          <Stack direction="row" gap={5}>
            <StyledButtons variant="h5">Hotels</StyledButtons>
            <StyledButtons variant="h5">Rooms</StyledButtons>
            <StyledButtons variant="h5">Prices</StyledButtons>
            <StyledButtons variant="h5">About Us</StyledButtons>
          </Stack>
        </Box>
        <Box sx={{ display: "flex" }} gap={2}>
          {success && (
            <>
              <Button
                aria-controls={open ? "fade-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar src={image}></Avatar>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItemStyled>Profile</MenuItemStyled>
                <MenuItemStyled>My account</MenuItemStyled>
                <MenuItemStyled
                  onClick={() => {
                    dispatch(logoutuser(state));
                  }}
                >
                  Logout
                </MenuItemStyled>
              </Menu>
            </>
          )}
          {!success && (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ backgroundColor: "black" }} variant="contained">
                Login
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
