import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hotel from "./Hotel";
import Login from "./Login";
import Signup from "./Signup";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="hotel/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
