import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Chip, Icon} from '../../../src/index'

const component = () => {
  return (
    <Chip
      content={text('content', 'content')}
      clear={boolean('clear', true)}
      onClearClick={action('clear_clicked')}
      icon={<Icon type="check" />}
    />
  )
}

export default component
