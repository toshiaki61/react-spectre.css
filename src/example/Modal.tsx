import React, {Component} from 'react'
import Modal from '../components/Modal'
import Button from '../elements/Button'

interface ModalExampleState {
  active: boolean
}
class ModalExample extends Component<{}, ModalExampleState> {
  state = {
    active: false,
  }

  onClick = () => this.setState({active: !this.state.active})

  render() {
    return (
      <div>
        <Button primary onClick={() => this.setState({active: true})}>
          open modal
        </Button>
        <Modal
          content="aaa"
          footer="footer"
          title="title"
          active={this.state.active}
          onClearClick={this.onClick}
        />
      </div>
    )
  }
}
export default ModalExample
