import * as React from 'react'

import cx from 'clsx'

import {attr} from '../attr'

import {DividerProps} from './interfaces'

const Divider: React.FC<DividerProps> = ({
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
