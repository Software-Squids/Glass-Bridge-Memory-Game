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

function HighScoresPage() {
    return (
        <>
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
