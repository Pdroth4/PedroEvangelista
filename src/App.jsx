import React from 'react'
import Header from './Components/Header/Header'
import * as S from './Components/Header/Header.style'
import Main from './Components/Main/Main'


export default function App() {
  return (
    <div>
      <S.GlobalStyle/>
      <Header/>
      <Main/>
      
    </div>
  )
}

