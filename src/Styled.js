import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: white;
    border: none;
    border-radius: 3px;
`;


export const BodyColor = styled.div`
    background-color: tomato;
`;

export const StyledInput = styled.input`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    width: 150px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`;

export const SubmitInput = styled.input`
    color: white;
    font-size: 0.8em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background-color: palevioletred;
    margin-top: 10%;
`;

export default createGlobalStyle`
    @font-face {
        font-family: 'Open Sans', sans-serif;
        @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap') format('woff2')
    }
`;
