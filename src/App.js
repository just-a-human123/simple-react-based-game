import React from "react";
import GameBoard from "./components/snake-ladder/gameboard";
import Dice from "./components/snake-ladder/dice";
import DescDisplay from "./components/snake-ladder/showDesc";

function App() {
  return (
    <div className="App">
      <DescDisplay />
      <GameBoard/>
      <Dice/>
    </div>
  );
}

export default App;
