import { createGlobalStyle } from 'styled-components';
import GameOfSquids from './GameOfSquids-1GMVL.ttf';


const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'GameOfSquids';
  src: url(${GameOfSquids}) format('truetype');
}
`;

export default FontStyles;
