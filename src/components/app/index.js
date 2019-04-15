// CRA-specific config: the below eslint-ignore and emotion jsx
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import List from '../list'
import lists from '../../config/data'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const board = css`
  padding: 10px;
`

const title = css`
  margin-bottom: 10px;
`

const listsContainer = css`
  display: flex;
  flex-direction: row;
`

class App extends Component {
  render() {
    return (
      <div css={board}>
        <h1 css={title}>{'Your Trello board'}</h1>
        <div css={listsContainer}>
          {lists &&
            lists.map((list, index) => (
              <List
                key={list.id}
                index={index}
                id={list.id}
                name={list.name}
                cards={list.cards}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default App
