import React, { useState } from "react";
import { Table } from "./components/Table";
import "../../styles/css/Table.css";
export const Dice = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(false);

  const handleGenerateValues = () => {
    setFirstValue(Math.floor(Math.random() * 6));
    setSecondValue(Math.floor(Math.random() * 6));
    setPlayerTurn(!playerTurn);
  };

  return (
    <>
      <Table numberOfDices={[0, 0]} dice1={firstValue} dice2={secondValue} />
      {!playerTurn ? (
        <button
          className="generate-button"
          onClick={() => handleGenerateValues()}
        >
          Player 1
        </button>
      ) : (
        <button
          className="generate-button"
          onClick={() => handleGenerateValues()}
        >
          Player 2
        </button>
      )}
    </>
  );
};
