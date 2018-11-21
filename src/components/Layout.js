import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Aleš";
  }

  render() {
    return <h1>Ahoj, jmenuju se {this.name}</h1>;
  }
}
