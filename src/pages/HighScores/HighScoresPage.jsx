import React from 'react';
import '../../App.css';
import { BackArrow, SquidText } from '../../components';
import styled from 'styled-components';

import line from '../../images/pinkLine1.jpg'

//Centering words 
const Center = styled.div`
position: absolute;
bottom: 78%;
`;

//lines 
const Line1 = styled.div`
position: relative;
width: 639px;
height: 0px;
left: 375px;
top: 0px;
transform: rotate(90deg);
`;

const BackArrowPos = styled.div`
position: absolute; 
bottom: 90%;
left: 10%;
`;
// function HighScoreStats(score) {
// const highScoreNum = 10; //NO_OF_HIGH_SCORES
// const highScore = 'highScores'; //HIGH_SCORES
// const highScoreString = localStorage.getItem(highScore); //highScoreString
// const hs = JSON.parse(highScoreString) ?? []; //highScores
// const ls = hs[highScoreNum - 1]?.score ?? 0;

// if (score > ls) { 
//     saveHighScore(score, hs);
//     showHighScores();
// }
// }


function HighScoresPage() {

    return (
        <>
        <BackArrowPos>
            <BackArrow />
        </BackArrowPos>
        <Center>
        <h1><SquidText> high scores </SquidText></h1>
        <Line1>
                    <img src={line} alt="lines"/>
        </Line1>
        
        </Center>
        </>
    );
}
export default HighScoresPage;