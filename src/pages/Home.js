import { Box, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hotels from "../components/Hotels";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [liked, setLiked] = useState(0);
  return (
    <>
      <Navbar />
      <Box>
        <Stack direction="row" justifyContent="space-between" gap={2}>
          <Sidebar value={setValue} inputValue={setInputValue} liked={liked} />
          <Hotels value={value} setValue={setValue} inputValue={inputValue} />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
