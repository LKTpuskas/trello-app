// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../card'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ListContainer = css`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`

const List = ({ name, cards }) => (
  <div css={ListContainer}>
    {name}
    <div>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          index={index}
          title={card.title}
          description={card.description}
          dueDate={card.dueDate}
        />
      ))}
    </div>
  </div>
)

export default List
