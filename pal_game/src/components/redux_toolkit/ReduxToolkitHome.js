import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonAction } from '../shared/ButtonAction'

export const ReduxToolkitHome = () => {
    return (
      <Link to="redux-toolkit"> <ButtonAction styleButton="button-85" title="Redux Toolkit"/> </Link>
  )
}
