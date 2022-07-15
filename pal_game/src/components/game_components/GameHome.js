import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonAction } from "../shared/ButtonAction";
import '../../styles/css/ButtonAction.css'
export const GameHome = () => {
  return (
        <Link to="game"><ButtonAction styleButton="button-30" title="Start palindrome game" /></Link>
  );
};
