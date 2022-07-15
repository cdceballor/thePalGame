import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "../game_components/Game";
import { Home } from "../Home";
import { Redux } from "../redux/Redux";
import { ReduxToolkit } from "../redux_toolkit/ReduxToolkit";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/redux-classic" element={<Redux />} />
      <Route path="/redux-toolkit" element={<ReduxToolkit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
