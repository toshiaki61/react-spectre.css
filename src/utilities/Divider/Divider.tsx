import React, {FC} from 'react'

import cx from 'classnames'

import {attr} from '@utils/attr'

import {DividerProps} from './interfaces'

const Divider: FC<DividerProps> = ({
  children,
  content,
  vertical,
  li,
  center,
  className,
  ...rest
}) =>
  li ? (
    <li
      {...attr({
        divider: true,
        dividerVertical: vertical,
        dividerContent: content,
        className: cx({'text-center': center}),
      })}
      {...rest}
    >
      {children}
    </li>
  ) : (
    <div
      {...attr({
        divider: true,
        dividerVertical: vertical,
        dividerContent: content,
        className: cx({'text-center': center}),
      })}
      data-content={content}
      {...rest}
    >
      {children}
    </div>
  )

Divider.defaultProps = {
  children: null,
  vertical: false,
  li: false,
  center: false,
  className: '',
}

export default Divider
