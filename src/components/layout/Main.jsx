import React from 'react'
import './Main.css'
import Wallpaper from '../img/wallpaper.jpeg'

function WallpaperHome(props) {
  return (
    <div className="WallpaperHome">
      <div className="Titulo">
        <h1>
          {props.Titulo}
        </h1>
      </div>
      <div className="Texto">
        <p>
          {props.Texto}
        </p>
      </div>
      <div className="WallpaperImg">
        <img src={Wallpaper} alt="Wallpaper Tênis Jordan" />
      </div>
    </div>
  )
}
export default WallpaperHome