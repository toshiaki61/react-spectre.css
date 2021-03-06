import * as React from 'react'

import {Avatar, Chip, Menu, MenuItem, Tile} from '../../components'
import {FormIcon, FormInput, HasIcon} from '../../elements'

import {AutocompleteProps} from './interfaces'

import FormAutocomplete from './FormAutocomplete'
import FormAutocompleteInput from './FormAutocompleteInput'
import {filter, mark} from './util'

const Autocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  active,
  selected,
  suggests,
  input,
  loading,
  onChange,
  onFocus,
  onBlur,
  onClearClick,
  onSelected,
}) => {
  return (
    <FormAutocomplete onFocus={onFocus} onBlur={onBlur}>
      <FormAutocompleteInput active={active}>
        {selected.map(({id, name, img, initial}) => {
          const handleClearClick: React.MouseEventHandler =
            // useCallback(
            e => onClearClick(e, id)
          // ,[id])
          return (
            <Chip
              key={id}
              avatar={{initial, src: img, alt: name}}
              content={name}
              clear={active}
              onClearClick={handleClearClick}
            />
          )
        })}

        {loading ? (
          <HasIcon position="left">
            <FormInput
              type="text"
              placeholder={placeholder}
              value={input}
              onChange={onChange}
            />
            <FormIcon loading />
          </HasIcon>
        ) : (
          <FormInput
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={onChange}
          />
        )}
      </FormAutocompleteInput>
      <Menu style={{position: active ? 'static' : 'absolute'}}>
        {suggests
          .filter(v => filter(input, 'name')(v))
          .map(({id, name, img, initial}) => {
            const handleSelect =
              // useCallback(
              (e: React.MouseEvent<any>) => {
                e.preventDefault()
                onSelected(e, id)
              }
            // ,[id])
            return (
              <MenuItem key={id} onClick={handleSelect}>
                <a href="#" onClick={handleSelect}>
                  <Tile
                    compact
                    content={mark(name, input)}
                    icon={
                      <Avatar
                        size="sm"
                        initial={initial}
                        src={img}
                        alt={name}
                      />
                    }
                  />
                </a>
              </MenuItem>
            )
          })}
      </Menu>
    </FormAutocomplete>
  )
}
Autocomplete.defaultProps = {
  placeholder: 'typing here',
  active: false,
  loading: false,
}

export default Autocomplete
