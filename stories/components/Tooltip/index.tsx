import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Button, Tooltip, TooltipPositionType} from '../../../src/'

const tooltipPositions: OptionalKeyMap<TooltipPositionType> = {
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  'No Value': '',
}

const component = () => (
  <Tooltip
    text={text('Text', 'I am a tooltip!')}
    position={optionalSelect<TooltipPositionType | ''>(
      'Position',
      tooltipPositions,
      ''
    )}
  >
    <Button>Button with Tooltip</Button>
  </Tooltip>
)

export default component
