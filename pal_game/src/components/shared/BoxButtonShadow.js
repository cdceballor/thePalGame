import React from 'react'
import '../../styles/css/BoxButtonShadow.css'

export const BoxButtonShadow = ({children, styleShadow}) => {
    return (
        <div className={styleShadow}>
            {children}
    </div>
  )
}
