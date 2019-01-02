import React, {ReactElement} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'

import BarItem from './BarItem'
import {BarProps} from './interfaces'

import {attr} from '@utils/attr'

const Bar = ({
  className,
  small,
  slider,
  items,
}: BarProps): ReactElement<BarProps> => {
  const classes = cx(
    'bar',
    {
      'bar-sm': small,
      'bar-slider': slider,
    },
    className
  )
  return (
    <div className={classes}>
      {items.map((item, i) => {
        const key = `bar-item-${i}`
        if (slider) {
          const value = `${item.value}%`
          Object.assign(item, {
            role: 'progressbar',
            style: {width: value},
            content: (
              <Button
                {...attr({
                  className: 'bar-slider-btn',
                  tooltip: value,
                })}
              />
            ),
          })
        }
        return <BarItem key={key} small={small} {...item} />
      })}
    </div>
  )
}
Bar.defaultProps = {
  className: '',
  small: false,
  slider: false,
}

export default Bar
