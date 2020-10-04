import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Label, LabelType} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {
  Label,
})
