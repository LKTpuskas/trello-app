// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList, addCard } from '../../actions'
import Form from '../form'
import Button from '../button'

class FormContainer extends Component {
  state = {
    formOpen: false
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = e => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleAddList = () => {
    const { dispatch } = this.props
    const { text } = this.state

    if (text) {
      this.setState({
        text: ''
      })
      dispatch(addList(text))
    }
  }

  handleAddCard = () => {
    const { dispatch, listID } = this.props
    const { text } = this.state

    if (text) {
      this.setState({
        text: ''
      })
      dispatch(addCard(listID, text))
    }
  }

  render() {
    const { list } = this.props
    const { formOpen } = this.state
    const placeholder = list ? 'Enter list title' : 'Enter a card title'
    const label = list ? 'Add list' : 'Add card'
    const onMouse = list ? this.handleAddList : this.handleAddCard

    const buttonLabel = list ? '+ Add another list' : '+ Add another card'
    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? 'white' : 'inherit'
    const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit'
    return formOpen ? (
      <Form
        placeholder={placeholder}
        closeForm={this.closeForm}
        value={this.state.text}
        handleInputChange={this.handleInputChange}
        onMouse={onMouse}
        label={label}
      />
    ) : (
      <Button
        openForm={this.openForm}
        buttonTextOpacity={buttonTextOpacity}
        buttonTextColor={buttonTextColor}
        buttonTextBackground={buttonTextBackground}
      >
        {buttonLabel}
      </Button>
    )
  }
}

export default connect()(FormContainer)
