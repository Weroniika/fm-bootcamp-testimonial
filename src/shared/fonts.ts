import { createGlobalStyle } from "styled-components";
import InterRegular from "../assets/Inter-Regular.ttf";
import InterLight from "../assets/Inter-Light.ttf";

export const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Inter', sans-serif;
    src: url(${InterLight}) format('ttf'),
}
`;

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Inter', sans-serif;
}
`;

export default FontStyles;