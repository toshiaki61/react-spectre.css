import React, {ReactElement, ReactChildren} from 'react'
import classnames from 'classnames'

export interface DividerProps {
  children?: ReactChildren
  content?: string
  vertical?: boolean
  li?: boolean
  center?: boolean
  className?: string
}
const Divider = ({
  children,
  content,
  vertical,
  li,
  center,
  className,
}: DividerProps): ReactElement<DividerProps> => {
  const classes = classnames(
    {
      divider: !vertical,
      'divider-vert': vertical,
      'text-center': center,
    },
    className
  )
  if (li) {
    return (
      <li className={classes} data-content={content}>
        {children}
      </li>
    )
  }
  return (
    <div className={classes} data-content={content}>
      {children}
    </div>
  )
}
Divider.defaultProps = {
  children: null,
  vertical: false,
  li: false,
  center: false,
  className: '',
}
export default Divider
