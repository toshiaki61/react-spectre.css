import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Step, StepItemProps, StepProps} from '../../../src'

{
  /* <ul class="step">
  <li class="step-item">
    <a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a>
  </li>
  <li class="step-item active">
    <a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a>
  </li>
  <li class="step-item">
    <a href="#" class="tooltip" data-tooltip="Step 3">Step 3</a>
  </li>
  <li class="step-item">
    <a href="#" class="tooltip" data-tooltip="Step 4">Step 4</a>
  </li>
</ul> */
}
const component = () => {
  return (
    <Step
      activeId="step-2"
      items={[
        {id: 'step-1', tooltip: 'Step 1', children: 'Step 1'},
        {id: 'step-2', tooltip: 'Step 2', children: 'Step 2'},
      ]}
    />
  )
}

export default component
