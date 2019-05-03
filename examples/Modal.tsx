import * as React from 'react'

import {Modal, Button} from '../src'

interface IModalExampleState {
  active: boolean
}
class ModalExample extends React.Component<{}, IModalExampleState> {
  public state = {
    active: false,
  }

  public render() {
    const handleModal = () => this.setState({active: true})
    return (
      <div>
        <Button color="primary" onClick={handleModal}>
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
