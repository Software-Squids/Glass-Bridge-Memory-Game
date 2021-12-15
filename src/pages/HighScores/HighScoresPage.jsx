import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useRecoilState, useRecoilValue} from 'recoil';
import { Button, CircularProgress } from '@mui/material';
import { BackArrow, SquidText, TransparentAppBar } from '../../components';
import { highscoresState } from '../../states/highscores'
import {userState} from '../../states/user.js'; 
import line from '../../images/pinkLine1.jpg'
import { MAX_HIGHSCORES } from '../../App';
import { getCookie } from '../../components/Dialogs/cookieOperations';


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
    margin-top: 25px;
    position: absolute; 
    top: 100%;
    left: 10%;
    width: 530px;
`;

export function HighScoresPage(props) {
    const [highscores, setHighscores] = useRecoilState(highscoresState)
    const [ready, setReady] = useState(true)
    // const [userstate, setUserstate] = useRecoilState(userState);
    const [selectedDifficulty, setSelectedDifficulty] = useState("easy") // 0 - easy, 1 - medium, 2 - hard
    const [errors, setErrors] = useState(null)

    const getHighscores = (difficulty = "easy") => {
        setErrors(null)
        // Need to set default to easy
        fetch(`http://localhost:5000/api/v1/scoreboard?difficulty=${difficulty}`, {
            method: "GET",
            headers: {
                "access_token": getCookie("access_token") || ""
            }
        }) // send query for "easy": /api/v1/scoreboard?difficulty=easy
          .then(res => res.json())
          .then(scores => {
            if(!scores.ok) {
                console.log('error:', scores)
                setErrors(scores.message)
                return;
            }
            // sort highscores
            scores.data.data.sort((a, b) => b[1] - a[1])
            // trim highscores
            let trimmedHighscores = scores.data.data.slice(0, MAX_HIGHSCORES)
            setHighscores(prev => ({
              ...prev,
              [difficulty]: trimmedHighscores
            }))
    
            console.log('new highscores:', highscores)
          })
          .catch(err => {
              console.log('scores error:', err)
              // throw new Error("Could not get highscores")
          })
    }

    useEffect(() => {
        if(!highscores[selectedDifficulty] || highscores[selectedDifficulty].length === 0) {
            refreshHighscores(selectedDifficulty)
        }
        else console.log(highscores[selectedDifficulty])
    }, [])

    const refreshHighscores = (difficulty = "easy") => {
        setErrors(null)
        if(ready) {
            getHighscores(difficulty);

            setReady(false)
            setTimeout(() => {
                setReady(true)
            }, [3000]) // 3s debounce period
        }
    }

    const changeDifficulty = difficulty => {
        console.log('changing difficulty to:', difficulty)
        if(difficulty !== selectedDifficulty) {
            setSelectedDifficulty(difficulty)
            getHighscores(difficulty)
        }
        else refreshHighscores(difficulty)
    }
    
    return (
        <>
            <TransparentAppBar/>
            <div style={{position: "fixed", top:60}}>
                <Button style={{textDecorationColor: "#fff", textDecoration: selectedDifficulty === "easy" ? "underline" : "none"}} onClick={() => changeDifficulty("easy")}>Easy</Button>
                <Button style={{textDecorationColor: "#fff", textDecoration: selectedDifficulty === "medium" ? "underline" : "none"}} onClick={() => changeDifficulty("medium")}>Medium</Button>
                <Button style={{textDecorationColor: "#fff", textDecoration: selectedDifficulty === "hard" ? "underline" : "none"}} onClick={() => changeDifficulty("hard")}>Hard</Button>
            </div>
            {errors && <p style={{fontSize: 20}}>{errors.toString()}</p>}
            {/* <BackArrowPos>
                <BackArrow />
            </BackArrowPos> */}
            <Center>
                <h1 style={{marginBottom:5, marginTop:0}}><SquidText> high scores </SquidText></h1>
                <Line1>
                    <img src={line} alt="lines"/>
                </Line1>
                <Scores>
                    {/* {isFetching && <CircularProgress style={{textAlign:'center',marginTop:15}} />}
                    {error && <p style={{color:"#fff"}}>{error}</p>} */}
                    {highscores && highscores[selectedDifficulty] && highscores[selectedDifficulty].length !== 0 ? highscores[selectedDifficulty].map((score, index) => (
                        <SquidText key={`${index}-${score[0]}`} style={{marginTop:10}}>{score[0]} - {score[1]}</SquidText>
                    )) : (
                        <SquidText style={{marginTop:10}}>Be the First One...</SquidText>
                    )}
                </Scores>
            </Center>
        </>
    );
}