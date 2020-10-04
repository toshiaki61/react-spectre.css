import * as React from 'react'

import cx from 'clsx'

import {Button} from '../../elements/Button'

import BarItem from './BarItem'
import {BarProps} from './interfaces'

import {attr} from '../../utilities/attr'

const Bar: React.FC<BarProps> = ({className, small, slider, items}) => (
  <div
    className={cx(
      'bar',
      {
        'bar-sm': small,
        'bar-slider': slider,
      },
      className
    )}
  >
    {items.map((item, i) => {
      const key = `bar-item-${i}`
      if (slider) {
        const value = `${item.value}%`
        item.role = 'progressbar'
        item.style = {width: value}
        item.content = (
          <Button
            {...attr({
              className: 'bar-slider-btn',
              tooltip: value,
            })}
          />
        )
      }
      return <BarItem key={key} small={small} {...item} />
    })}
  </div>
)
Bar.defaultProps = {
  className: '',
  small: false,
  slider: false,
}

export default Bar
