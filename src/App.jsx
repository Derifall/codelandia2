import React from 'react'
import './App.css'

import WallpaperHome from './components/layout/Main.jsx'
import HeaderHome from './components/layout/HeaderHome'
import Description from './components/layout/Description'
import Card from './components/layout/Card'
import Footer from './components/layout/Footer'

export default () => (
  <div className="App">
    <HeaderHome Desconto="Ganhe R$ 10,00 de desconto no frete" HeaderName="Jordan Shoes"/>
    <WallpaperHome Titulo="A melhor loja de Jordan" Texto="O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."/>
    <Description SegundoTitulo="Destaques" SegundoTexto="Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado." />
    <Card />
    <Footer Rodape="Todos os direitos reservados."/>
  </div>
)