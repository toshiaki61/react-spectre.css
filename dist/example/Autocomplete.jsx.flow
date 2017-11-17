import React, { Component } from 'react';

import Autocomplete from '../components/Autocomplete';

class AutocompleteExample extends Component {
  state = {
    active: false,
    loading: false,
    suggests: [
      { id: '1', name: 'Bruce Banner', img: '', initial: '' },
      { id: '2', name: 'Thor Odinson', img: '//picturepan2.github.io/spectre/img/avatar-1.png', initial: '' },
      { id: '3', name: 'Steve Rogers', img: '//picturepan2.github.io/spectre/img/avatar-4.png', initial: '' },
      { id: '4', name: 'Tony Stark', img: '', initial: 'TS' },
      { id: '5', name: 'Natasha Romanoff', img: '', initial: '' },
    ],
    selected: [
    ],
    input: '',
  };
  onClearClick = (e, id) => {
    e.preventDefault();
    const { suggests, selected } = this.state;
    suggests.push(selected.find(row => row.id === id));
    this.setState({
      suggests,
      selected: selected.filter(row => row.id !== id),
    });
  };
  onSelected = (e, id) => {
    e.preventDefault();
    const { suggests, selected } = this.state;
    selected.push(suggests.find(row => row.id === id));
    this.setState({ suggests: suggests.filter(row => row.id !== id), selected });
  };
  onChange = ({ target: { value } }) => this.setState({ input: value });
  onFocus = () => this.setState({ active: true });
  onBlur = () => this.setState({ active: false });
  render() {
    const props = {
      ...this.state,
      onClearClick: this.onClearClick,
      onSelected: this.onSelected,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    };
    return (
      <Autocomplete {...props} />
    );
  }
}

export default AutocompleteExample;
