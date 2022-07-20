import React from "react";
import { GameHome } from "./game_components/GameHome";
import { DiceHome } from "./dice/DiceHome";
import { ReduxToolkitHome } from "./redux_toolkit/ReduxToolkitHome";
import '../styles/css/Home.css'
export const Home = () => {
  return (
    <>
      <GameHome />
      <DiceHome />
      <ReduxToolkitHome />
      </>
  );
};
