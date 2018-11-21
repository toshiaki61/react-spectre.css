import classnames from 'classnames'
import React, {ReactChildren, ReactElement} from 'react'

export interface IDividerProps {
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
}: IDividerProps): ReactElement<IDividerProps> => {
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