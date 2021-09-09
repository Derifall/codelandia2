import React from 'react'
import './Description.css'

export default () => (
  <div className="Description">
    <div className="SegundoTitulo">
      <h1>
        {props.SegundoTitulo}
      </h1>
    </div>
    <div className="SegundoTexto">
      <p>
        {props.SegundoTexto}
      </p>
    </div>
  </div>
)