import * as React from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

import {IconType} from '../../elements/Icon'

export type EmptyPartProps = Partial<BasePartProps>

export interface EmptyProps extends Partial<StyleProps> {
  /** 'apps' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'back' | 'bookmark' | 'caret' | 'check' | 'copy' | 'cross' | 'delete' | 'download' | 'downward' | 'edit' | 'emoji' | 'flag' | 'forward' | 'link' | 'location' | 'mail' | 'menu' | 'message' | 'minus' | 'more-horiz' | 'more-vert' | 'people' | 'photo' | 'plus' | 'refresh' | 'resize-horiz' | 'resize-vert' | 'search' | 'share' | 'shutdown' | 'stop' | 'time' | 'upload' | 'upward' */
  iconType?: IconType
  title?: React.ReactNode
  subtitle?: React.ReactNode
  action?: React.ReactNode
}