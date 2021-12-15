import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil'
import { Container as Grid, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import useSound from 'use-sound';
import Pane from './Pane';
import { randomPath } from './PathGeneration/randomPath';
import { getDifficulty } from './GamePage'
import { userState as userStateAtom } from '../../states/user'
import marimba_scale_sprite from '../../audio/marimba_scale_sprite.mp3'
import { highscoresState } from '../../states/highscores';
import { getCookie } from '../../components/Dialogs/cookieOperations';


const StyledBridge = styled(Box)`
  display: flex;
  align-items: center;
`;

function Bridge(props) {
  const userState = useRecoilValue(userStateAtom)
  const [highscores, setHighscores] = useRecoilState(highscoresState)

  const matrix = useMemo(() => randomPath(props.rows, props.cols), [
    props.rows,
    props.cols
  ]);

  const [play] = useSound(marimba_scale_sprite, {
    sprite: {
      c3: [0, 1250],
      d4: [2000, 1250],
      e5: [4000, 1250],
      f6: [6000, 1250],
      incorrect: [8000, 750],
      correct: [10000, 2036]
    },
  });

  const postScore = (score) => {
    const difficulty = getDifficulty(props.cols)
    // const header = authHeader();
    // console.log('header:', header)
    fetch("https://glass-bridge.herokuapp.com/api/v1/scoreboard", {
      method: "POST",
      body: new URLSearchParams({
        'username': userState.username,
        'score': score,
        'difficulty': difficulty
      }),
      headers: {
        "access_token": getCookie("access_token") || ""
      }
    })
      .then(res => res.json())
      .then(data => {
        if(data.ok) {
          // add to highscores if it is high enough
          if(highscores[difficulty].length < 10 || score > highscores[difficulty][9]) {
            let newHighscores = [...highscores[difficulty], [userState.username, score, difficulty]]
            let newSorted = newHighscores.sort((a, b) => b[1] - a[1])
            newHighscores.pop();
            setHighscores(prev => ({
              ...prev,
              [difficulty]: newSorted
            }))
          }
        }
      })
      .catch(err => {
        console.log('error posting hs:', err)
      })
  }

  return (
    <StyledBridge>
      {/* {console.log(matrix)} */}
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
                className={col === 1 ? "solid" : "fragile"}
                postScore={postScore}
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
