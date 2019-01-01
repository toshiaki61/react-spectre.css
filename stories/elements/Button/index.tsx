import React from 'react'

import {boolean, object, select, text} from '@storybook/addon-knobs'

import {action} from '@storybook/addon-actions'

import {Button, ButtonColor, ButtonSize} from '@elements/Button'

import {OptionalKeyMap} from '../../utils/OptionalKeyMap'
import {optionalSelect} from '../../utils/optionalSelect'

const sizeOptions: OptionalKeyMap<ButtonSize> = {
  sm: 'sm',
  lg: 'lg',
  'No Value': '',
}
const colorOptions: OptionalKeyMap<ButtonColor> = {
  success: 'success',
  error: 'error',
  link: 'link',
  primary: 'primary',
  'No Value': '',
}

const component = () => (
  <Button
    type={select('Type', ['button', 'submit'], 'button')}
    size={optionalSelect<ButtonSize | ''>('Size', sizeOptions, '')}
    color={optionalSelect<ButtonColor | ''>('Color', colorOptions, '')}
    loading={boolean('loading', false)}
    block={boolean('block', false)}
    inputGroup={boolean('inputGroup', false)}
    clear={boolean('clear', false)}
    actionButton={boolean('actionButton', false)}
    circle={boolean('circle', false)}
    disabled={boolean('disabled', false)}
    onClick={action('button_clicked')}
    className={text('ClassName', '')}
    style={object('Style', {})}
  >
    Great Success
  </Button>
)

export default component
