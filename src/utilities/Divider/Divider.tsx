import React, {ReactChildren, ReactElement} from 'react'

import cx from 'classnames'

import {DividerProps} from './interfaces'

const Divider = ({
  children,
  content,
  vertical,
  li,
  center,
  className,
  ...rest
}: DividerProps): ReactElement<DividerProps> => {
  const classes = cx(
    {
      divider: !vertical,
      'divider-vert': vertical,
      'text-center': center,
    },
    className
  )
  if (li) {
    return (
      <li className={classes} data-content={content} {...rest}>
        {children}
      </li>
    )
  }
  return (
    <div className={classes} data-content={content} {...rest}>
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
