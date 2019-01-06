import React, {SFC} from 'react'

import {StepProps} from './interfaces'
import {hasStepChildren} from './util'

import StepItem from './StepItem'

function renderStep(p: StepProps) {
  if (hasStepChildren(p)) {
    return p.children
  }
  const {items, activeId} = p
  return items.map(item => (
    <StepItem key={item.id} {...item} active={item.id === activeId}>
      {item.children}
    </StepItem>
  ))
}
const Step: SFC<StepProps> = p => <ul className="step">{renderStep(p)}</ul>

export default Step
