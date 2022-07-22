import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "../game_components/Game";
import { Home } from "../Home";
import { Dice } from "../dice/Dice";
import { ReduxToolkit } from "../redux_toolkit/ReduxToolkit";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/dice-game" element={<Dice />} />
      <Route path="/redux-toolkit" element={<ReduxToolkit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
