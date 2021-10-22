import React, { Component } from 'react';

// TODO: Nico Suggestions - Separate state from rendering
// Context API
// Recoil state Library
// Global State


class Pane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO: set state based on position and this.props.selected.
      inPath : false,
      selected: false,
      color: "#f6feff"
    }
  }

  handleClick = () => {
    // TODO: disable rows above the current rows, enable row above when a valid move is entered. 

    this.setState({
      selected: true,
      color: 'pink'
    });
  }

  render() {
    return (
      <button className="pane" style={{
        width: 50, height: 50, padding: 0, backgroundColor: this.state.color}}
        name={this.props.name}
        onClick={this.handleClick}
        value={this.props.value}
        >{this.props.value}</button>    // temporary, for debugging
    );
  }
}
export default Pane;
