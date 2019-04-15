// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { PURGE } from 'redux-persist'
import { DragDropContext } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import List from '../list'
import FormContainer from '../form-container'
import { dnd } from '../../actions'

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
  // Enables us to reset the state
  // in the context of local storage,
  // for development purposes
  onPurgeStoredState = e => {
    e.preventDefault()

    const { dispatch } = this.props // Grab a ref to the mapped dispatch method

    // Create and dispatch the action
    // which will cause redux-persist to purge
    dispatch({
      type: PURGE,
      // Whatever you chose for the "key" value when initialising redux-persist
      // in the **persistCombineReducers** method - e.g. "root"
      key: 'myStorageKey',
      // Func expected on the submitted action
      result: () => null
    })
  }

  onDragEnd = result => {
    const { destination, source } = result
    const { dispatch } = this.props
    // if no destination, e.g. if we drag a card
    // outside of the droppable area, i.e. list
    // then just return null and thus don't perform draging/dropping
    if (!destination) {
      return
    }

    // if there is a destination, run our logic
    // these come from the dnd package - the source and destination objects
    // draggableId is the id of the card we're dragging
    // destination is where we landed
    // source is where the dragging happens
    // both source and destination house droppableId and index
    dispatch(
      dnd(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      )
    )
  }

  render() {
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div css={board}>
          <h1 css={title}>{'Your Trello board'}</h1>
          <button onClick={this.onPurgeStoredState}>Reset state</button>
          <div css={listsContainer}>
            {lists &&
              lists.map(list => {
                return (
                  <List
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    listID={list.id}
                  />
                )
              })}
            <FormContainer list />
          </div>
        </div>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

const mapDispatchToProps = dispatch => {
  // Map dispatch method to this.props.dispatch
  return { dispatch }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
