import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Step, StepItemProps, StepProps} from '../../../src'

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
