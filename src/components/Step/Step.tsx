import React, {ReactElement} from 'react'

import {StepProps} from './interfaces'

import StepItem from './StepItem'

const Step = ({
  children,
  items,
  activeId,
}: StepProps): ReactElement<StepProps> | null => {
  return (
    <ul className="step">
      {children
        ? children
        : items &&
          items.map(item => (
            <StepItem key={item.id} {...item} active={item.id === activeId}>
              {item.children}
            </StepItem>
          ))}
    </ul>
  )
}
Step.defaultProps = {
  active: '',
}

export default Step
