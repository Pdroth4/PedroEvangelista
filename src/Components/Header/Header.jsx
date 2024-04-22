import React from 'react'
import * as S from './Header.style'
import Sobre from '../Sobre/Sobre'

export default function Header() {
  return (
    <S.Header>
        <div className="caixa">
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="/Sobre">Sobre</a></li>
                    <li><a href="">Projeto</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </div>

    </S.Header>
  )
}
