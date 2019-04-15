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

const container = css`
  background: #b69cce;
  min-height: 100vh;
  padding: 0.5rem;
`

const header = css`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  margin-bottom: 3rem;
`

const listsContainer = css`
  display: flex;
  flex-direction: row;
`

class App extends Component {
  // Enables us to reset the state
  // in the context of local storage,
  // useful for development purposes
  onPurgeStoredState = event => {
    event.preventDefault()

    // Grab a ref to the mapped dispatch method
    const { dispatch } = this.props

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

  // Our logic for card dragging and dropping
  onDragEnd = result => {
    const { destination, source } = result
    const { dispatch } = this.props

    // If no destination, e.g. user drags a card
    // outside of the droppable area, i.e. list
    // return null and don't perform draging/dropping
    if (!destination) {
      return
    }

    // If there is a destination, run our logic
    // these come from the dnd package - the source and destination objects.
    // Destination is where we landed,
    // source is where the dragging happened
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
        <div css={container}>
          <header css={header}>
            <h1>{'My Awesome Board 💥'}</h1>
          </header>
          {/* Use the below button to reset the app if needed, for development purposes  */}
          {/* <button onClick={this.onPurgeStoredState}>{'Reset state'}</button> */}
          <div css={listsContainer}>
            {lists &&
              lists.map(list => {
                return (
                  <List
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    ListId={list.id}
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
  // Used for purging
  // Map dispatch method to this.props.dispatch
  return { dispatch }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
