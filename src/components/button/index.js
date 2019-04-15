// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const button = (
  buttonTextOpacity,
  buttonTextColor,
  buttonTextBackground
) => css`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 40px;
  padding: 10px;
  opacity: ${buttonTextOpacity};
  color: ${buttonTextColor};
  background-color: ${buttonTextBackground}};
`

const Button = ({
  openForm,
  buttonTextOpacity,
  buttonTextColor,
  buttonTextBackground,
  children
}) => {
  return (
    <button
      css={button(buttonTextOpacity, buttonTextColor, buttonTextBackground)}
      onClick={openForm}
    >
      {children}
    </button>
  )
}

export default Button
