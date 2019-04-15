// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import List from '../list'
import { connect } from 'react-redux'

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
    const { lists } = this.props
    return (
      <div css={board}>
        <h1 css={title}>{'Your Trello board'}</h1>
        <div css={listsContainer}>
          {lists &&
            lists.map(list => {
              return <List title={list.title} cards={list.cards} />
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
