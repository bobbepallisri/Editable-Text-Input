import {Component} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  InputContainer,
  Input,
  ErrorMsg,
  Text,
  Button,
} from './styledComponent'

class EditableTextInput extends Component {
  state = {
    editableText: true,
    inputText: '',
    isEmptyInput: false,
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickSaveButton = () => {
    const {inputText} = this.state
    if (inputText === '') {
      this.setState({isEmptyInput: true})
    } else {
      this.setState({editableText: false, isEmptyInput: false})
    }
  }

  onClickEditButton = () => {
    this.setState({editableText: true})
  }

  render() {
    const {editableText, inputText, isEmptyInput} = this.state

    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {editableText ? (
              <div>
                <Input
                  onChange={this.onChangeInput}
                  type="text"
                  placeholder="Type here"
                  value={inputText}
                />
                {isEmptyInput && inputText === '' && (
                  <ErrorMsg>*Please type your text</ErrorMsg>
                )}
              </div>
            ) : (
              <Text>{inputText}</Text>
            )}
            <Button
              onClick={
                editableText ? this.onClickSaveButton : this.onClickEditButton
              }
            >
              {editableText ? 'Save' : 'Edit'}
            </Button>
          </InputContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default EditableTextInput
