import React from "react";
import ReactDOM from "react-dom";

import PlayerBoard from "./components/PlayerBoard";
import enemyBoard from "./logic/enemyBoard";

import "./styles.css";

class App extends React.Component {
  state = { enemyBoard: [] };

  setEnemyBoard = () => enemyBoard();

  render() {
    return (
      <div className="App">
        <h1>Battleship!</h1>
        <PlayerBoard />
        {/* <CPUBoard/> */}
        {/* <Controls/> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
