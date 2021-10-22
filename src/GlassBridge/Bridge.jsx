import React, { Component } from 'react';
import { Container as Grid, Row, Col } from 'react-grid-system';

import Pane from './Pane';
import { randomPath } from './PathGeneration/randomPath';

class Bridge extends Component {
  constructor(props) {
    super(props);

    this.matrix = randomPath(this.props.rows, this.props.cols);

    this.state = {
      moves: 0
    };
  }

  render() {
    return (
      <Grid>
      {this.matrix.map((row, ri) => (
        <Row key={"row_" + ri}>
          {row.map((col, ci) => (
            <Col sm={4} key={"col_" + ci}>
              <Pane name={"pane_" + ri + "_" + ci} value={col}></Pane>
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
    );
  }
}
export default Bridge;
