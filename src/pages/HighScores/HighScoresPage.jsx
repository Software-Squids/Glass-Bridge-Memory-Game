import React, {useEffect} from 'react';
import '../../App.css';
import { BackArrow, SquidText } from '../../components';
import styled from 'styled-components';
import {userState} from '../../states/user.js'; 
import {useRecoilState, useRecoilValue} from 'recoil';
import { highscoresState } from '../../states/highscores'
import line from '../../images/pinkLine1.jpg'
import { CircularProgress } from '@mui/material';



//centering HighScores
const Center = styled.div`
position: absolute;
bottom: 78%;
`;

//pink line 
const Line1 = styled.div`
position: relative;
width: 639px;
height: 0px;
left: 375px;
top: 0px;
transform: rotate(90deg);
`;

//back arrow
const BackArrowPos = styled.div`
position: absolute; 
bottom: 90%;
left: 10%;
`;

//all the scores
const Scores = styled.div`
position: absolute; 
top: 100%;
left: 10%;
width: 530px;
`;


function HighScoresPage({
    data,
    isFetching,
    error
}) {
    const highscores = useRecoilValue(highscoresState)
    const [userstate, setUserstate] = useRecoilState(userState);
    
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
        <Scores>
            {/* {isFetching && <CircularProgress style={{textAlign:'center',marginTop:15}} />}
            {error && <p style={{color:"#fff"}}>{error}</p>} */}
            {highscores && highscores.map((score, index) => (
                <SquidText key={`${index}-${score[0]}`}>{score[1]} - {score[0]}</SquidText>
            ))}
        </Scores>
        </Center>
        </>
    );
}
export default HighScoresPage;