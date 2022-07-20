import React from "react";
import { ButtonAction } from "../shared/ButtonAction";
import { Link } from "react-router-dom";

export const DiceHome = () => {
  return (
    <Link to="dice-game">
      <ButtonAction styleButton="button-51" title="Dice game" />
    </Link>
  );
};
