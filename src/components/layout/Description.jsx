import React from 'react'
import './Description.css'

function Description(props) {
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
}
export default Description