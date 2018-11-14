import React, {Component} from 'react'
import Modal from '../components/Modal'
import Button from '../elements/Button'

interface IModalExampleState {
  active: boolean
}
class ModalExample extends Component<{}, IModalExampleState> {
  public state = {
    active: false,
  }

  public render() {
    const handleModal = () => this.setState({active: true})
    return (
      <div>
        <Button primary onClick={handleModal}>
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

  private onClick = () => this.setState({active: !this.state.active})
}
export default ModalExample
