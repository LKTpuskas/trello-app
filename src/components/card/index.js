// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { differenceInDays } from 'date-fns'
import { Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import IconDot from '../../assets/icon-dot'
import IconStar from '../../assets/icon-star'

const container = css`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
  background: white;
  border-radius: 3px;
  padding: 10px;
`
const icon = css`
  width: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
`
const contentContainer = css`
  width: 85%;
`

const icons = {
  overdue: IconDot,
  'the next 3 days': IconStar
}

const getDueDateStatus = dueDate => {
  const now = new Date()
  // Here we store our desired difference in days
  // i.e. 3 days is the value we're comparing against
  const desiredDifference = -2
  const difference = differenceInDays(now, dueDate)
  if (desiredDifference <= difference && difference <= 0) {
    return 'the next 3 days'
  }
  if (difference > 0) {
    return 'overdue'
  }
  return 'over 3 days away'
}

const Card = ({ title, id, index, description, dueDate }) => {
  const status = getDueDateStatus(dueDate)
  const Icon = icons[status]
  const showIcon = status !== 'over 3 days away'
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          css={container}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {showIcon && <Icon customStyle={icon} />}
          <div css={contentContainer}>
            <h2>{title}</h2>
            <div> {description}</div>
            <div> {dueDate}</div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

Card.defaultProps = {
  title: "Hey! I'm your default title",
  description: "Hello! I'm your default description",
  dueDate: '2019-04-16'
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string
}

export default Card
