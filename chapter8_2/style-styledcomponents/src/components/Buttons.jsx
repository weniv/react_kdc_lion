import styled from "styled-components";

const Button = styled.button`
    background-color: royalblue;
    padding: 10px;
    color: white;   
`

const ButtonStyle2 = styled(Button)`
    color:black;
    border:none;
    border-radius: 10px;
    font-weight: bold;
    box-shadow: 0px 0px 2px 2px rgba(0,0,0, 0.3);
`

const ButtonStyle3 = styled(Button)`
    border-radius: 20px;
    border: none;
    background-color: lightgreen;
    box-shadow: 0px 0px 2px 2px rgba(0,0,0, 0.3);
`

export { Button, ButtonStyle2, ButtonStyle3 }