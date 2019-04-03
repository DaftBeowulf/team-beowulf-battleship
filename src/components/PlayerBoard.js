import React, { Component, Fragment } from "react";
import Ship from "./Ship";
import "./PlayerBoard.css";

class PlayerBoard extends Component {
  constructor(props) {
    super(props);

    this.coords = [];
    this.hits = [];
  }

  attackCoordinate = (x, y) => {};
  render() {
    return (
      <Fragment>
        <section className="board-container">
          <div />
        </section>
      </Fragment>
    );
  }
}

export default PlayerBoard;
