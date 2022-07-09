import React from 'react'
import '../styles/sass/ButtonAction.css'
const ButtonAction=({styleButton, onClick,  title})=> (
    <div className="contain-button">
      <button className={styleButton} onClick={onClick}> <h2 className="title-start-button">{title}</h2> </button>
    </div>)

export default ButtonAction