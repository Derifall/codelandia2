import React from 'react'
import './HeaderHome.css'

function HeaderHome(props) {
  return (
    <div className="HeaderHome">
      <div className="Desconto">
        <p>
          {props.Desconto}
        </p>
      </div>
      <div className="HeaderName">
        <h1>
          {props.HeaderName}
        </h1>
      </div>
    </div>
  )
}
export default HeaderHome