// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const button = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 40px;
  padding: 10px;
`

const Button = ({ children, ...props }) => {
  return (
    <button css={button} {...props}>
      {children}
    </button>
  )
}

export default Button
