import React from 'react';

// TODO: Nico Suggestions - Separate state from rendering
// Context API
// Recoil state Library
// Global State


function Pane(props) {

  /* Leftovers from old state management */

  /*this.state = {
    // TODO: set state based on position and this.props.selected.
    inPath : false,
    selected: false,
    color: "#f6feff"
  }*/

  /*handleClick = () => {
    // TODO: disable rows above the current rows, enable row above when a valid move is entered. 

    setState({
      selected: true,
      color: 'pink'
    });
  }*/

  return (
    <button className="pane" name={props.name} value={props.value}>
      {props.value}
    </button>    // temporary, for debugging
  );
}
export default Pane;
