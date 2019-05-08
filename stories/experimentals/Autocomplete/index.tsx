import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, text} from '@storybook/addon-knobs'

import {Autocomplete} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Autocomplete})
