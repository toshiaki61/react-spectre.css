import React, {Component, MouseEvent} from 'react'
import Dropdown from '../components/Dropdown'

interface IDropdownExampleState {
  value: string
  active: boolean
}
class DropdownExample extends Component<{}, IDropdownExampleState> {
  public state = {
    value: 'initial value',
    active: false,
  }

  public render() {
    const {active, value} = this.state
    // tslint:disable-next-line:no-console
    const handleMenuClick = (e: MouseEvent<any>, id: string) => console.log(id)
    const handleBlur = () => this.setState({active: false})
    return (
      <Dropdown
        initialValue={value}
        onMenuClick={handleMenuClick}
        contents={[{id: 'e-1', link: '#accordions', content: 'Element 1'}]}
        active={active}
        onClick={this.onClick}
        onBlur={handleBlur}
      />
    )
  }

  private onClick = () => this.setState({active: !this.state.active})
}
export default DropdownExample
