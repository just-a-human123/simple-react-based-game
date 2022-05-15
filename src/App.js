import React from "react";
import GameBoard from "./components/snake-ladder/gameboard";
import Dice from "./components/snake-ladder/dice";

function App() {
  return (
    <div className="App">
      <GameBoard/>
      <Dice/>
    </div>
  );
}

export default App;
