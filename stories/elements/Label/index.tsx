import React from 'react'

import {boolean, object, text} from '@storybook/addon-knobs'

import {Label, LabelType} from '@elements/Label'

import {OptionalKeyMap} from '../../utils/OptionalKeyMap'
import {optionalSelect} from '../../utils/optionalSelect'

const typeOptions: OptionalKeyMap<LabelType> = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
  'No Value': '',
}

const component = () => (
  <Label
    type={optionalSelect<LabelType | ''>('Type', typeOptions, '')}
    rounded={boolean('rounded', false)}
    className={text('ClassName', '')}
    style={object('Styles', {})}
  >
    Great Success
  </Label>
)

export default component
