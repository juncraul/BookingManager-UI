import { Home, Money, Search, Star } from "@mui/icons-material";
import {
  Autocomplete,
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import data from "../static-data/data";

const Sidebar = (props) => {
  return (
    <Box flex={1} p={2}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <Autocomplete
              options={data.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} label="search" />}
              sx={{ width: "240px" }}
              onChange={(event, newValue) => {
                props.value(newValue);
                console.log(newValue);
              }}
              onInputChange={(event, newInputValue) => {
                props.inputValue(newInputValue);
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ padding: 2 }}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ padding: 2 }}>
          <ListItemButton>
            <ListItemIcon>
              <Star />
            </ListItemIcon>
            <ListItemText primary="Liked Items" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ padding: 2 }}></ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
