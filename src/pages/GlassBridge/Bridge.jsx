import React from 'react';
import { Container as Grid, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

import Pane from './Pane';
import { randomPath } from './PathGeneration/randomPath';



const StyledBridge = styled.div`
/* CSS goes here */
`

function Bridge(props) {

  var matrix = randomPath(props.rows, props.cols);

  return (
    <StyledBridge>
      <Grid>
      {matrix.map((row, ri) => (
        <Row key={"row_" + ri}>
          {row.map((col, ci) => (
            <Col key={"col_" + ci}>
              <Pane name={"pane_" + ri + "_" + ci} value={col} selected="false" />
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  </StyledBridge>
  );
}
export default Bridge;
