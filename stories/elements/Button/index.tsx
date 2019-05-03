import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Button, ButtonColorType, ButtonSizeType} from '../../../src'

const sizeOptions: OptionalKeyMap<ButtonSizeType> = {
  sm: 'sm',
  lg: 'lg',
  'No Value': '',
}
const colorOptions: OptionalKeyMap<ButtonColorType> = {
  success: 'success',
  error: 'error',
  link: 'link',
  primary: 'primary',
  'No Value': '',
}

const component = () => (
  <Button
    type={select('Type', ['button', 'submit'], 'button')}
    size={optionalSelect<ButtonSizeType | ''>('Size', sizeOptions, '')}
    color={optionalSelect<ButtonColorType | ''>('Color', colorOptions, '')}
    loading={boolean('loading', false)}
    blockButton={boolean('block', false)}
    inputGroup={boolean('inputGroup', false)}
    clearButton={boolean('clear', false)}
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
