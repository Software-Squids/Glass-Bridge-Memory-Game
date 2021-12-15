import React from 'react';
import '../../App.css';
import { TransparentAppBar, SquidText } from '../../components';
import styled from 'styled-components';

import line from '../../images/pinkLine1.jpg'
import pt from '../../images/pinkTriangle.jpg'
import bt from '../../images/blackTriangle.jpg'
import bc from '../../images/blackCircle.png'
import pc from '../../images/pinkCircle.jpg'
import bs from '../../images/blackSquare.jpg'
import ps from '../../images/pinkSquare.jpg'

//All the shapes CSS
const PinkT = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: 800px;
top: 60px;
`;
const BlackT = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: 800px;
top: 85px;
`;

const PinkT2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -375px;
top: 60px;
`;

const BlackT2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -375px;
top: 85px;
`;

const BlackC = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: 830px;
top: 289px;
`;

const PinkC = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: 800px;
top: 275px;
`;

const BlackC2 = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: -355px;
top: 289px;
`;

const PinkC2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -384px;
top: 275px;
`;

const BlackS = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: 830px;
top: 515px;
`;

const PinkS = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: 800px;
top: 500px;
`;

const BlackS2 = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: -355px;
top: 515px;
`;

const PinkS2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -384px;
top: 500px;
`;

//center help
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

const Line2 = styled.div`
position: relative;
width: 639px;
height: 0px;
left: 375px;
top: 190px;
`;

const Line3 = styled.div`
position: relative;
width: 639px;
height: 0px;
right: 375px;
top: 190px;
`;

//block of text 
const Description = styled.div`
position: relative;
color: #FFFFFF;
font-size: 14px;
padding 300px;
text-align: left;
top: 70px;
`;


const pinkColor = {color: 'pink'};

function HelpPage() {
    return (
        <> 
        {/* replacing BackArrowPos to test TransparentAppBar -Hans*/}
        {/*<BackArrowPos> 
            <BackArrow />
        </BackArrowPos>*/}
        <TransparentAppBar />
        
        <Line2>
            <img src={line} alt="lines"/> 
        </Line2>
                
        <Center>
            <h1><SquidText> Help </SquidText></h1>
            <Line1>
                <img src={line} alt="lines"/>    
            </Line1>
            <PinkT>
             <img src={pt} alt="pt"/>    
            </PinkT>
            < BlackT>
                <img src={bt} alt="bt"/> 
            </BlackT>
            <PinkT2>
             <img src={pt} alt="pt"/>    
            </PinkT2>
            < BlackT2>
                <img src={bt} alt="bt"/> 
            </BlackT2>
            <PinkC>
                <img src={pc} alt="bt"/> 
            </PinkC>
            <BlackC>
                <img src={bc} alt="bt"/> 
            </BlackC>
            <PinkC2>
                <img src={pc} alt="bt"/>  
            </PinkC2>
            <BlackC2>
                <img src={bc} alt="bt"/> 
            </BlackC2>
            <PinkS>
                <img src={ps} alt="bt"/> 
            </PinkS>
            <BlackS>
                <img src={bs} alt="bt"/> 
            </BlackS>
            <PinkS2>
                <img src={ps} alt="bt"/> 
            </PinkS2>
            <BlackS2>
                <img src={bs} alt="bt"/> 
            </BlackS2>
            
        </Center>
        <Line3>
            <img src={line} alt="lines"/> 
        </Line3> 
        <Description>
           <p><h1 style={pinkColor}>Welcome to glass bridge!</h1></p><br></br>
           This is a game that will test your memory on three different difficulty levels (easy-2/medium-3/hard-4)<br></br> 
           <br></br>Here are the steps: <br></br>
           <pre> 
            1) Press "New Game" from the start menu, the game will begin immediately<br></br> 
            2) A path will appear for ~2 seconds, memorize the path <br></br>
            3) The path will disappear and you will need to use your memory to click on the correct boxes <br></br>
            4) If you selected the right path, two boxes will be added to the top for the next round<br></br> 
            5) Repeat steps 1-4 until you press the wrong path<br></br>
            6) The game will restart and you can find your highscore on the homepage
            <br></br><br></br>

            <br></br><h1 style={pinkColor}>Credits:</h1><br></br>
            Font: <br></br>
            "Game of Squids" by Darrell Flood<br></br>
            LICENSED UNDER ATTRIBUTION 3.0 UNPORTED (CC BY 3.0)<br></br>

            <br></br>Audio: <br></br>
            "Marimba Samples" by Samulis <br></br>
            LICENSED UNDER ATTRIBUTION 3.0 UNPORTED (CC BY 3.0)<br></br>
            "Magic Click" by FlechaBr<br></br>
            LICENSED UNDER ATTRIBUTION 3.0 UNPORTED (CC BY 3.0)<br></br>
            "Game Sound Incorrect Organic Violin" by Bertof<br></br>
            LICENSED UNDER ATTRIBUTION 3.0 UNPORTED (CC BY 3.0)<br></br>
            </pre>
        </Description> 
        
        </>   
    )
}
export default HelpPage;