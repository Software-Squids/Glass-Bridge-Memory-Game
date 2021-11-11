import React from 'react';
import '../../App.css';
import { SquidText } from '../../components';
import styled from 'styled-components';

const Center = styled.div`
    text-align: center; 
`;

function HighScoresPage() {
    return (
        <Center>
        <h1><SquidText> high scores </SquidText></h1>
        </Center>
    );
}
export default HighScoresPage;
