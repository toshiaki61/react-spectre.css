import classnames from 'classnames'
import React, {CSSProperties, ReactElement} from 'react'
import Button from '../elements/Button'

export interface IItemProps {
  small?: boolean
  tooltip?: string
  content?: ReactElement<any> | string
}
const Item = ({
  small,
  tooltip,
  content,
  ...props
}: IItemProps): ReactElement<IItemProps> => {
  const classes = classnames('bar-item', {tooltip})
  return (
    <div className={classes} data-tooltip={tooltip} {...props}>
      {small ? null : content}
    </div>
  )
}
Item.defaultProps = {
  small: false,
  tooltip: '',
  content: '',
}
interface IProgressBarItemProps extends IItemProps {
  value?: string | number
  role?: string
  style?: CSSProperties
  content?: ReactElement<any> | string

  'aria-valuenow'?: number
  'aria-valuemin'?: number
  'aria-valuemax'?: number
}
export interface IBarProps {
  className?: string
  small?: boolean
  slider?: boolean
  items: IProgressBarItemProps[]
}
const Bar = ({
  className,
  small,
  slider,
  items,
}: IBarProps): ReactElement<IBarProps> => {
  const classes = classnames(
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
              <Button className="bar-slider-btn tooltip" data-tooltip={value} />
            ),
          })
        }
        return <Item key={key} small={small} {...item} />
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
