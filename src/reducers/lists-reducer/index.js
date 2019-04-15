import { CONSTANTS } from '../../actions'
import { PURGE } from 'redux-persist'
import initialData from '../../config/data'

let listID = 7
let cardID = 8

const initialState = initialData

// take the state but if you dont receive it, fall back to initial state and return it
const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    // a new list starts with an empty cards array
    // incrmeent a list by one
    // return an empty array becayse our state is an array
    // spead in our current lists - initial data - and add new lists
    case CONSTANTS.ADD_LIST: {
      const { title } = action.payload
      const newList = {
        title,
        id: listID,
        cards: []
      }
      listID += 1
      return [...state, newList]
    }

    case CONSTANTS.ADD_CARD: {
      const { text, listID } = action.payload
      const newCard = {
        text,
        id: cardID
      }
      cardID += 1

      // map over lists, see if their id is the same as the payload id of cards
      // spead the lists array and current cards - init state
      // and add the new cards at the end
      //so we dont modify the existing state
      const newState = state.map(list => {
        if (list.id === listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })
      return newState
    }

    case CONSTANTS.DRAG_ENDED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart
      } = action.payload

      const newState = [...state]

      // if cards are moved within the same list
      if (droppableIdStart === droppableIdEnd) {
        // we grab our list in which the drag happened
        const list = state.find(list => Number(droppableIdStart) === list.id)
        // get the card in which the drag happens
        // put it in the new array, at the correct location
        // splice it on the index where the dragging happened
        // and grab the element
        const card = list.cards.splice(droppableIndexStart, 1)
        // insert it where the drag ended, i.e. add it to the array of cards
        list.cards.splice(droppableIndexEnd, 0, ...card)
        // return newState
      }

      // if cards are moved between lists
      if (droppableIdStart !== droppableIdEnd) {
        // we grab our list in which the drag happened
        const listStart = state.find(
          list => Number(droppableIdStart) === list.id
        )
        // access the card from the list
        const card = listStart.cards.splice(droppableIndexStart, 1)
        // grab the list in which the drag ended
        const listEnd = state.find(list => Number(droppableIdEnd) === list.id)

        // put the card into the new list / array
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }
      return newState
    }
    case PURGE: {
      // Return the initial state of this reducer to 'reset' the app
      return initialState
    }
    default:
      return state
  }
}

export default listsReducer
