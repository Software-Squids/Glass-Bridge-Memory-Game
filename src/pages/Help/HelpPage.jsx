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
top: 100px;
`;
const BlackT = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: 800px;
top: 125px;
`;

const PinkT2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -375px;
top: 100px;
`;

const BlackT2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -375px;
top: 125px;
`;

const BlackC = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: 830px;
top: 339px;
`;

const PinkC = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: 800px;
top: 325px;
`;

const BlackC2 = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: -355px;
top: 339px;
`;

const PinkC2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -384px;
top: 325px;
`;

const BlackS = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: 830px;
top: 575px;
`;

const PinkS = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: 800px;
top: 560px;
`;

const BlackS2 = styled.div`
position: absolute;
width: 100px;
height: 0px;
left: -355px;
top: 575px;
`;

const PinkS2 = styled.div`
position: absolute;
width: 220px;
height: 220px;
left: -384px;
top: 560px;
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
top: 0px;
`;

const Line3 = styled.div`
position: relative;
width: 639px;
height: 0px;
right: 375px;
top: 0px;
`;

//block of text 
const Description = styled.div`
position: relative;
color: #FFFFFF;
font-size: 14px;
padding 300px;
text-align: left;
`;

const BackArrowPos = styled.div`
position: absolute; 
bottom: 90%;
left: 10%;
`;

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
           <p> When you press "New Game" from the start menu, the game will begin.<br></br> 
            <pre>   
                1) Press the start button <br></br> 
                2) A path will appear for (this many) seconds, memorize the path <br></br>
                3) The path will disappear and you will need to use your memory to click on the correct boxes <br></br>
                4) If you selected the right path, another line of boxes will be added<br></br> 
                5) Repeat steps 1-4 until you press the wrong path</pre> </p>
        </Description> 
        
        </>   
    )
}
export default HelpPage;