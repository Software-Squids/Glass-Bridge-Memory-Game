import React from 'react';
import '../../App.css';
import { SquidText } from '../../components';
import styled from 'styled-components';



const Center = styled.div`
    text-align: center; 
`;

function HelpPage() {
    return (
        <Center>
            <h1><SquidText> Help </SquidText></h1>
        </Center>
    );
}
export default HelpPage;