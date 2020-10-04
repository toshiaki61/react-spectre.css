import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, text} from '@storybook/addon-knobs'

import {Chip, Icon} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Chip, Icon})
