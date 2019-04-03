import React, { PureComponent } from "react";

class Ship extends PureComponent {
  state = {
    hits: 0,
    length: this.props.length,
    sunk: false
  };

  hit = () => {
    this.setState(
      state => ({
        hits: state.hits + 1
      }),
      () => {
        const { hits, length } = this.state;
        if (hits === length) this.sunk();
      }
    );
  };

  sunk = () => {
    this.setState({ sunk: true });
  };
}
