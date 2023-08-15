import React from "react";
import "./App.scss";
import Game3x3 from "./components/Game3x3/Game3x3";
import WinnersHistory from "./components/WinnersHistory/WinnersHistory";
import WinnerAllert from "./components/WinnerAllert/WinnerAllert";
import { useSelector } from "react-redux";
import { GameState } from "./store/interfaces/interfaces";

function App() {
  const selectGameWinner = (state: GameState) => state.winner;
  const winner = useSelector(selectGameWinner);
  return (
    <div className="App">
      {winner.winner != "" ? <WinnerAllert /> : ""}
      <div className="mainContainer">
        <Game3x3 />
      </div>
      <WinnersHistory />
    </div>
  );
}

export default App;
