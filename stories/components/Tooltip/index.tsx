import React from 'react'

import {object, text} from '@storybook/addon-knobs'

import {optionalSelect} from '../../utils/optionalSelect'

import {Tooltip, TooltipPosition} from '@components/Tooltip'

import {Button} from '@elements/Button'

import {OptionalKeyMap} from '../../utils/OptionalKeyMap'

const tooltipPositions: OptionalKeyMap<TooltipPosition> = {
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  'No Value': '',
}

const component = () => (
  <Tooltip
    text={text('Text', 'I am a tooltip!')}
    position={optionalSelect<TooltipPosition | ''>(
      'Position',
      tooltipPositions,
      ''
    )}
  >
    <Button>Button with Tooltip</Button>
  </Tooltip>
)

export default component
