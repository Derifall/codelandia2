import React from 'react'
import './Card.css'
import TenisUm from '../img/1.png'
import TenisDois from '../img/2.png'
import TenisTres from '../img/3.png'
import TenisQuatro from '../img/4.png'
import TenisCinco from '../img/5.png'
import TenisSeis from '../img/6.png'
import TenisSete from '../img/7.png'
import TenisOito from '../img/8.png'

export default () => (
  <div className="Card">
    <div className="PictureOne">
      <img src={TenisUm} alt="Tênis Jordan um"/>
    </div>
    <div className="PictureTwo">
      <img src={TenisDois} alt="Tênis Jordan dois"/>
    </div>
    <div className="PictureThree">
      <img src={TenisTres} alt="Tênis Jordan três"/>
    </div>
    <div className="PictureFour">
      <img src={TenisQuatro} alt="Tênis Jordan quatro"/>
    </div>
    <div className="PictureFive">
      <img src={TenisCinco} alt="Tênis Jordan cinco"/>
    </div>
    <div className="PictureSix">
      <img src={TenisSeis} alt="Tênis Jordan seis"/>
    </div>
    <div className="PictureSeven">
      <img src={TenisSete} alt="Tênis Jordan sete "/>
    </div>
    <div className="PictureEight">
      <img src={TenisOito} alt="Tênis Jordan oito"/>
    </div>
  </div>
)