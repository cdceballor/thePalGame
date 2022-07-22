import React from "react";
import "../../../styles/css/Table.css";

export const Dices = ({ number1, number2 }) => (
  <>
    <button className="dices"> {number1} </button>
    <button className="dices"> {number2} </button>
  </>
);
