import React from 'react'
import * as S from './Main.style'


import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import pedro from '../../assets/pedro.png'
import seta from '../../assets/seta.png'
import whatsapp from '../../assets/whatsapp.png'

export default function Main() {
  return (
    <S.Main>
        <section>
            <div className="texto">

                <h3>👋 Saudações!</h3>
                <h2>Pedro Evangelista</h2>
                <p>Desenvolvedor front-end</p>

                <figure>
                <a href=""><img src={linkedin} alt="Linkedin" /></a>
                <a href=""><img src={github} alt="Git Hub" /></a>
                </figure>

                <a className='cv' href="">Baixar CV <img className='seta' src={seta} alt="imagem da seta" /> </a>

                <button> <img className='zap' src={whatsapp} alt="" /> Vamos conversar </button>

            </div>

            <div className="foto">
                <img  src={pedro} alt="Foto de Pedro" />
            </div>
        </section>
    </S.Main>
  )
}
