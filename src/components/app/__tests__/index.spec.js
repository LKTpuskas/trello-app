import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { DragDropContext } from 'react-beautiful-dnd'
import index from '../index'

configure({ adapter: new Adapter() })

const testData = [
  { title: 'List 1', id: 0, cards: [] },
  { title: 'List 2', id: 1, cards: [] }
]

const setup = (propsOverride = {}) => {
  const props = {
    lists: testData,
    ...propsOverride
  }
  return {
    props,
    wrapper: shallow(<index {...props} />)
  }
}

it('should render app without crashing', () => {
  shallow(<index />)
})

it('should render app with its props', () => {
  const { wrapper, props } = setup()
  expect(wrapper.props()).toEqual(props)
})

it('should render DragDropContext', () => {
  const { wrapper } = setup()
  wrapper.find(<DragDropContext />)
})
