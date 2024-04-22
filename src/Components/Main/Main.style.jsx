import styled from "styled-components";


export const Main = styled.main `

    max-width: 100%;
    max-height: 92vh;
    background-color: #090e16;

    section {
        display: flex;
        width: 100%;
        height: 92vh;
        justify-content: space-around;
        padding-top: 20vh;
    }

    .texto {
        
        height: 50vh;
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: white;
        width: 20vw;
    }

    .foto img {
        border: solid 2.9px #DED953;
        border-radius: 50%;
        
        
        
    }

    h3{
        font-size:20pt;
        background-color: #422c7c;
        width: 11vw;
        height :8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        animation: slideIn 0.5s ease forwards;
        opacity: 0;
    }

    h2{
        font-size:4em;
        animation: slideIn 1.5s ease forwards;
        opacity: 0;
    }

    p{
        font-size: 14pt;
        color: #84868a;
        animation: slideIn 2s ease forwards;
        opacity: 0;
    }

    figure{
        
        width: 5vw;
        display: flex;
        justify-content: space-around;
    }

    figure img:hover{
        transform: scale(1.1);
    }

    .cv {
        
        display: flex;
        height: 3vh;
        gap: 10px;
        align-items: center;
        color: #422c7c;
        text-decoration: none;
        font-size: 15pt
    }

    .cv:hover {
        transform: scaleX(1.01);
    }

    .seta {
        width: 23px;
    }

   

    button{
        width: 11vw;
        height: 70px;
        border: solid 1px #422c7c;
        border-radius: 16px;
        background: none;
        color: #422c7c;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 13pt;
    }

    button:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    .zap {
        width: 25px;
    }
    @keyframes slideIn {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }

  
}


`