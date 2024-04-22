import React from 'react'

import reactapp from '../../assets/react.png'
import js from '../../assets/js.png'
import css3 from '../../assets/css3.png'
import html5 from '../../assets/htm5.png'
import figma from '../../assets/Figma.png'
import git from '../../assets/git.png'

export default function Sobre() {
  return (
    <section>
      <div className="informacoes">
        <h3>🧐 Sobre mim</h3>
        <h2>Pedro Thauan da Silva Evangelista</h2>
        <p> Me chamo Pedro Thauan da silva Evangelista, mas pode me chamar apenas de Pedro. Prazer!</p>
        <p>🎓 Graduando em Análise e Desenvolvimento de Sistemas pela Unicesumar.</p>
        <p>💡 Interesses em desenvolvimento Front-end.</p>
        <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
      </div>

      <div className="icones">
        <p>Desenvolvedor</p>
        <h3>Front-end</h3>
        <div className="caixa-icones">
            <img src={reactapp} alt="" />
            <img src={js} alt="" />
            <img src={css3} alt="" />
            <img src={html5} alt="" />
            <img src={figma} alt="" />
            <img src={git} alt="" />
        </div>
      </div>
    </section>
  )
}
