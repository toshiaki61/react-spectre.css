import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Autocomplete} from '../../../src/index'

// export interface SuggestProps {
//   id: string
//   name: string
//   img?: string
//   initial?: string
// }

// export interface AutocompleteProps {
//   placeholder?: string
//   active?: boolean
//   selected: SuggestProps[]
//   suggests: SuggestProps[]
//   input: string
//   loading?: boolean
//   onChange: ChangeEventHandler<HTMLInputElement>
//   onFocus: FocusEventHandler
//   onBlur: FocusEventHandler
//   onClearClick: MouseEventIdHandler
//   onSelected: MouseEventIdHandler
// }
const component = () => {
  const data = [
    {id: '1', name: 'Bruce Banner'},
    {id: '2', name: 'Thor Odinson', img: '/img/woman.png'},
    {id: '3', name: 'Steve Rogers', img: '/img/man.png'},
    {id: '4', name: 'Tony Stark', initial: 'TS'},
  ]
  const selected = [{id: '5', name: 'Natasha Romanoff'}]
  return (
    <Autocomplete
      placeholder={text('placeholder', '')}
      active={boolean('active', false)}
      input={text('input', '')}
      suggests={data}
      selected={selected}
      loading={boolean('loading', false)}
      onChange={action('changed')}
      onFocus={action('focused')}
      onBlur={action('blured')}
      onClearClick={action('clear_clicked')}
      onSelected={action('selected')}
    />
  )
}

export default component
