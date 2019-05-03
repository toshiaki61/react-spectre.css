import * as React from 'react'

import {Autocomplete} from '../src'

interface ISuggest {
  id: string
  name: string
  img: string
  initial: string
}
interface IAutocompleteExampleState {
  active: boolean
  loading: boolean
  suggests: ISuggest[]
  selected: ISuggest[]
  input: string
}
class AutocompleteExample extends React.Component<
  {},
  IAutocompleteExampleState
> {
  public state: IAutocompleteExampleState = {
    active: false,
    loading: false,
    suggests: [
      {
        id: '1',
        name: 'Bruce Banner',
        img: '',
        initial: '',
      },
      {
        id: '2',
        name: 'Thor Odinson',
        img: '//picturepan2.github.io/spectre/img/avatar-1.png',
        initial: '',
      },
      {
        id: '3',
        name: 'Steve Rogers',
        img: '//picturepan2.github.io/spectre/img/avatar-4.png',
        initial: '',
      },
      {
        id: '4',
        name: 'Tony Stark',
        img: '',
        initial: 'TS',
      },
      {
        id: '5',
        name: 'Natasha Romanoff',
        img: '',
        initial: '',
      },
    ],
    selected: [],
    input: '',
  }

  public render() {
    const props = {
      ...this.state,
      onClearClick: this.onClearClick,
      onSelected: this.onSelected,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    }
    return <Autocomplete {...props} />
  }

  private onClearClick = (e: React.MouseEvent<any>, id: string) => {
    e.preventDefault()
    const {suggests, selected} = this.state
    suggests.push(selected.find(row => row.id === id) as any)
    this.setState({
      suggests,
      selected: selected.filter(row => row.id !== id),
    })
  }

  private onSelected = (e: React.MouseEvent<any>, id: string) => {
    e.preventDefault()
    const {suggests, selected} = this.state
    const found = suggests.find(row => row.id === id)
    if (found) {
      selected.push(found)
    }
    this.setState({
      suggests: suggests.filter(row => row.id !== id),
      selected,
    })
  }

  private onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({input: value})

  private onFocus = () => this.setState({active: true})

  private onBlur = () => this.setState({active: false})
}
export default AutocompleteExample
