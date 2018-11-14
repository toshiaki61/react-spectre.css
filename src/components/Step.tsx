import classnames from 'classnames'
import React, {ReactElement} from 'react'

const sharp = '#'
export interface ItemProps {
  id: string
  name: string
  tooltip: string
}
export interface IStepProps {
  items: ItemProps[]
  active?: string
}

const Step = ({items, active}: IStepProps): ReactElement<IStepProps> | null => {
  if (!items.length) {
    return null
  }
  return (
    <ul className="step">
      {items.map(({id, name, tooltip}) => {
        const key = `step-${id}`
        return (
          <li
            key={key}
            className={classnames('step-item', {active: id === active})}
          >
            <a href={sharp} className="tooltip" data-tooltip={tooltip}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
Step.defaultProps = {
  active: '',
}
export default Step
