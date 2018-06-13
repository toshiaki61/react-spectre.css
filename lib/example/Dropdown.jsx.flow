import React, {Component} from 'react'

import Dropdown from '../components/Dropdown'

class DropdownExample extends Component {
  state = {
    value: 'initial value',
    active: false,
  }

  onClick = () => this.setState({active: !this.state.active})
  render() {
    const {active, value} = this.state
    return (
      <Dropdown
        initialValue={value}
        onMenuClick={(e, id) => console.log(id)}
        contents={[{id: 'e-1', link: '#accordions', content: 'Element 1'}]}
        active={active}
        onClick={this.onClick}
        onBlur={() => this.setState({active: false})}
      />
    )
  }
}

export default DropdownExample
