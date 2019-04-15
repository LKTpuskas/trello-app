// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Droppable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import Card from '../card'
import FormContainer from '../form-container'

const container = css`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`

const List = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          css={container}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {title}
          {cards &&
            cards.map((card, index) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.text}
                index={index}
              />
            ))}
          {provided.placeholder}
          <FormContainer listID={listID} />
        </div>
      )}
    </Droppable>
  )
}

List.defaultProps = {
  title: "Hey! I'm your default list name"
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array,
  listID: PropTypes.number
}

export default List
