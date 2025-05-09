// router/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Favorites from "../pages/Favorites";
import Login from "../pages/Login";
import TopRated from "../pages/TopRated";
import Upcoming from "../pages/Upcoming";

// AppRouter component to handle routing
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="//home" element={<Home />} />
    <Route path="/movie/:id" element={<Details />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/top-rated" element={<TopRated />} />
    <Route path="/upcoming" element={<Upcoming />} />
  </Routes>
);

export default AppRouter;
