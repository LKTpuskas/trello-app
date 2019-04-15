// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import Card from '../card'

const ListContainer = css`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`

const List = ({ title, cards }) => {
  return (
    <div css={ListContainer}>
      {title}
      {cards && cards.map(card => <Card text={card.text} />)}
    </div>
  )
}

export default List
