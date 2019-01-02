import React from 'react'

import {text} from '@storybook/addon-knobs'

import {Tooltip} from '@components/Tooltip'
import {Button} from '@elements/Button'
import {TooltipPosition} from '@utils/interfaces'

import {OptionalKeyMap} from '../../utils/OptionalKeyMap'
import {optionalSelect} from '../../utils/optionalSelect'

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
