
import * as React from 'react';
import classnames from 'classnames';

import Chip from './Chip';
import Tile from './Tile';
import Avatar from './Avatar';
import Icon from '../elements/Icon';
import Button from '../elements/Button';

var delimiter = '______';

function mark(
target,
search)
{
  if (!search) {
    return target;
  }
  var regex = new RegExp('(' + search + ')', 'ig');
  return target.
  replace(regex, delimiter + '$1' + delimiter).
  replace(new RegExp('^' + delimiter + '|' + delimiter + '$', 'g'), '').
  split(delimiter).
  filter(function (row) {return row !== '';}).
  map(function (row, i) {
    if (regex.test(row)) {
      var key = 'mark-' + i;
      return React.createElement('mark', { key: key }, row);
    }
    return row;
  });
}

function filter(
word,
key)
{
  var regex = new RegExp(word, 'ig');
  return function search(value) {
    if (word === '') {
      return true;
    }
    return regex.test(value[key]);
  };
}var bpfrpt_proptype_SuggestProps = { id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, img: PropTypes.string, initial: PropTypes.string };var bpfrpt_proptype_AutocompleteProps = { placeholder: PropTypes.string, active: PropTypes.bool, selected: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, img: PropTypes.string, initial: PropTypes.string }).isRequired).isRequired, suggests: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, img: PropTypes.string, initial: PropTypes.string }).isRequired).isRequired, input: PropTypes.string.isRequired, loading: PropTypes.bool, onChange: PropTypes.func.isRequired, onFocus: PropTypes.func.isRequired, onBlur: PropTypes.func.isRequired, onClearClick: PropTypes.func.isRequired, onSelected: PropTypes.func.isRequired };




















var Autocomplete = function Autocomplete(_ref)











{var placeholder = _ref.placeholder,active = _ref.active,selected = _ref.selected,suggests = _ref.suggests,input = _ref.input,loading = _ref.loading,onChange = _ref.onChange,onFocus = _ref.onFocus,onBlur = _ref.onBlur,onClearClick = _ref.onClearClick,onSelected = _ref.onSelected;
  var classes = classnames('form-autocomplete-input form-input', {
    'is-focused': active });

  var inputNode =
  React.createElement('input', {
    className: 'form-input',
    type: 'text',
    placeholder: placeholder,
    value: input,
    onChange: onChange });


  return (
    React.createElement('div', { className: 'form-autocomplete', onFocus: onFocus, onBlur: onBlur },
      React.createElement('div', { className: classes },
        selected.map(function (_ref2) {var id = _ref2.id,name = _ref2.name,img = _ref2.img,initial = _ref2.initial;return (
            React.createElement(Chip, {
              key: id,
              avatar: { initial: initial, img: img, alt: name },
              content: name,
              clear: active,
              onClearClick: function (_onClearClick) {function onClearClick(_x) {return _onClearClick.apply(this, arguments);}onClearClick.toString = function () {return _onClearClick.toString();};return onClearClick;}(function (e) {return onClearClick(e, id);}) }));}),



        loading ?
        React.createElement('div', { className: 'has-icon-left' },
          inputNode,
          React.createElement(Icon, { form: true, loading: true })) :


        inputNode),


      React.createElement('ul', { className: 'menu', style: { position: active ? 'static' : 'absolute' } },
        suggests.
        filter(filter(input, 'name')).
        map(function (_ref3) {var id = _ref3.id,name = _ref3.name,img = _ref3.img,initial = _ref3.initial;return (
            React.createElement('li', { key: id, className: 'menu-item' },
              React.createElement(Button, { href: '#', onClick: function onClick(e) {return onSelected(e, id);} },
                React.createElement(Tile, {
                  compact: true,
                  content: mark(name, input),
                  icon: React.createElement(Avatar, { sm: true, initial: initial, img: img, alt: name }) }))));}))));







};Autocomplete.propTypes = bpfrpt_proptype_AutocompleteProps;
Autocomplete.defaultProps = {
  placeholder: 'typing here',
  active: false,
  loading: false };


export default Autocomplete;import PropTypes from 'prop-types';export { bpfrpt_proptype_SuggestProps };export { bpfrpt_proptype_AutocompleteProps };