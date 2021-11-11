import React from 'react';
import '../../App.css';
import { SquidText } from '../../components';
import styled from 'styled-components';



const Center = styled.div`
position: absolute;
width: 623px;
height: 79px;
left: 408px;
top: 72px;

`;
//const Line = styled.div``


function HelpPage() {
    return (
        <Center>
            <h1><SquidText> Help </SquidText></h1>
        </Center>
    );
}
export default HelpPage;