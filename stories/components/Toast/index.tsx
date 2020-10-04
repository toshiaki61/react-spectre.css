import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Toast, ToastColorType} from '../../../src/'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const toastColorTypes: OptionalKeyMap<ToastColorType> = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  error: 'error',
  'No Value': '',
}

const component = () => {
  return (
    <Toast
      style={{width: '80%'}}
      color={optionalSelect('color', toastColorTypes, '')}
      title={text('title', 'Toast title')}
      content={text(
        'content',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )}
      onClearClick={action('clear_clicked')}
    />
  )
}

export default withLiveEditAndInfo(component, {Toast})
