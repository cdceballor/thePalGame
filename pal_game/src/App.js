import React from "react";
import ButtonAction from "./components/ButtonAction";
function App() {
  const [startGame, setStartGame] = React.useState(false);

  return (
    <>
      {!startGame ? (
        <ButtonAction styleButton="button-start" title={"Start game"} onClick={()=>setStartGame(true)} />
      ) : (
        <h1 className="animate__fadeIn">Game has been started</h1>
      )}
    </>
  );
}

export default App;
