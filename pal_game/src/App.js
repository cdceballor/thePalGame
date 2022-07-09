import React from "react";
import ButtonAction from "./components/ButtonAction";
import Game from "./components/Game";
function App() {
  const [startGame, setStartGame] = React.useState(false);
  const [name, setName] = React.useState("");

  return (
    <>
      {!startGame ? (
        <div>
          <h2 className="palindrome-title">Palindrome game</h2>
          <ButtonAction styleButton="button-start animate__animated animate__bounce" title={"Start game"} onClick={()=>setStartGame(true)} />
          <input onChange={(e)=>setName(e.target.value)} className="name-game" type="text" placeholder="Enter your name"/>
        </div>
      ) : (
        <Game name={name}/>
      )}
    </>
  );
}

export default App;
