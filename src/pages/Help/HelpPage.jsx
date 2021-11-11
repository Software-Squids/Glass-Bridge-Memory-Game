import React from 'react';
import '../../App.css';
import { SquidText } from '../../components';
import styled from 'styled-components';

import line from '../../images/pinkLine1.jpg'


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
left: 360px;
top: 0px;
transform: rotate(90deg);
`

//block of text 
const Description = styled.div`
position: absolute;
color: #FFFFFF;
font-size: 12px;
padding 300px;
`;

function HelpPage() {
    return (
        <>  <Center>
                <h1><SquidText> Help </SquidText></h1>
                <Line1>
                    <img src={line} alt="lines"/>
                </Line1>
            </Center>
            <Description>
                <h1>When you press "New Game" from the start menu, you will see two lines of boxes. A path will appear for you to blah blah blah blagh blah yadda yadda yadda yadda  </h1>
            </Description>
            
        </>
        
    )
}
export default HelpPage;