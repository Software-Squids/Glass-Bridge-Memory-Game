import React, { useMemo } from 'react';
import { Container as Grid, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import Box from '@mui/material/Box';

import Pane from './Pane';
import { randomPath } from './PathGeneration/randomPath';
import useSound from 'use-sound';
import marimba_scale_sprite from '../../audio/marimba_scale_sprite.mp3'


const StyledBridge = styled(Box)`
  display: flex;
  align-items: center;
`;

function Bridge(props) {

  const matrix = useMemo(() => randomPath(props.rows, props.cols), [
    props.rows,
    props.cols
  ]);

  const [play] = useSound(marimba_scale_sprite, {
    sprite: {
      c3: [0, 1250],
      d4: [2000, 1250],
      incorrect: [4000, 750],
      correct: [6000, 2036]
    },
  });

  return (
    <StyledBridge>
      <Grid>
      {matrix.map((row, ri) => (
        <Row key={"row_" + ri}>
          {row.map((col, ci) => (
            <Col key={"col_" + ci}>
              <Pane
                name={"pane_" + ri + "_" + ci}
                value={col}
                selected="false"
                play={play}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  </StyledBridge>
  );
}

export default Bridge;
