import React, { Component } from 'react';


class Pane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // TODO: meaningful state changes
            // Will change once button presses are handled and
            // path generation exists.
            inPath : false,
            selected: false,
            color: "#f6feff"
        }
    }

    handleClick = () => {
        this.setState({
            selected: true,
            color: 'pink'
        });
    }

    render() {
        return (
            <button class="pane" style={{
                width: 50, height: 50, padding: 0, backgroundColor: this.state.color}}
                name={this.props.name}
                onClick={this.handleClick}
                ></button>
        )
    }
}
export default Pane;
