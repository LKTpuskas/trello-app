// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const CardContainer = css`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
  background: white;
  border-radius: 3px;
  padding: 10px;
`

const Card = ({ text, description, dueDate }) => (
  <div css={CardContainer}>
    <h2>{text}</h2>
    <div> {description}</div>
    <div> {dueDate}</div>
  </div>
)

export default Card
