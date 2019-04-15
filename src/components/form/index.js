// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const textArea = css`
  resize: none;
  width: 100%;
  outline: none;
  background: yellow;
`

const container = css`
  min-height: auto;
  padding: 10px;
`

const button = css`
  background-color: purple;
  cursor: pointer;
  padding: 8px 10px;
`

const Form = ({
  placeholder,
  closeForm,
  value,
  handleInputChange,
  onMouse,
  label
}) => {
  return (
    <div css={container}>
      <textarea
        placeholder={placeholder}
        onBlur={closeForm}
        autoFocus
        value={value}
        onChange={handleInputChange}
        css={textArea}
      />
      <button css={button} onMouseDown={onMouse}>
        {label}
      </button>
    </div>
  )
}

export default Form