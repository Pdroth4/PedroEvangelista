import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `

   *{
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
   }

`

export const Header = styled.header `
    
    display: flex;
    width: 100%;
    height: 8vh;
    background-color: #090e16;
    align-items: center;
    justify-content: center;
  
    /* .caixa{
        border: solid 1px white;
        width :95%;
    } */

   nav {
    
    background-color: #19102C;
    width: 99vw;
    height: 6vh;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: right;
    
   }
   
   ul{
    width: 15vw;
    height: 6vh;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    align-items: center;
    margin-right: 5vw;
  
   
   }

   a{
    text-decoration: none;
    color: #dbd4d4;
   }

   a:hover{
    color: #452E81;
   }

`