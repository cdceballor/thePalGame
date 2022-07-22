import React from "react";
import { Dices } from "./Dices";
import "../../../styles/css/Table.css";
export const Table = ({ dice1, dice2 }) => (
  <>
    <center><h2> Dice game</h2></center>
    <div className="table-dice">
      <Dices number1={dice1} number2={dice2} />
    </div>
  </>
);
