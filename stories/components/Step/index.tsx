import * as React from 'react'

import {Step} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Step})
