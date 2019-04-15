const initialState = [
  {
    title: 'List 1',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Hello! Card 1'
      },
      {
        id: 1,
        text: 'Hej! Card 2'
      }
    ]
  },
  {
    title: 'List 2',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'Hallo! Card 1'
      },
      {
        id: 1,
        text: 'Zivijo! Card 2'
      },
      {
        id: 2,
        text: 'Ciao! Card 3'
      }
    ]
  }
]

// take the state but if you dont receive it, fall back to initial state and return it
const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default listsReducer
