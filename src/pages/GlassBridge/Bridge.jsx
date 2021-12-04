import React, { useMemo } from 'react';
import { Container as Grid, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import Box from '@mui/material/Box';

import Pane from './Pane';
import { randomPath } from './PathGeneration/randomPath';


const StyledBridge = styled(Box)`
  display: flex;
  align-items: center;
`;

function Bridge(props) {

  const matrix = useMemo(() => {
      return randomPath(props.rows, props.cols);
    },
    [props.rows, props.cols]
  );
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
