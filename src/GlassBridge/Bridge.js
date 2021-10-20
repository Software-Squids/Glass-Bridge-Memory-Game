import React, { Component } from 'react';
import { Container as Grid, Row, Col } from 'react-grid-system';

import Pane from './Pane';

class Bridge extends Component {
    constructor(props) {
        super(props);

        // Fill 2D Array with zeroes for testing
        this.matrix = new Array(props.rows).fill(0).map(() => new Array(props.cols).fill(0));
        this.state = {
            moves: 0
        }
    }

    render() {
        return (
            <Grid>
            {this.matrix.map((row, ri) => (
                <Row key={"row_" + ri}>
                    {row.map((_, ci) => (
                        <Col sm={4} key={"col_" + ci}>
                            <Pane name={"pane_" + ri + "_" + ci}></Pane>
                        </Col>
                    ))}
                </Row>
            ))}
        </Grid>
        );
    }
}
export default Bridge;