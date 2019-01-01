import {CSSProperties} from 'react'

export type IconType =
  | 'apps'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'back'
  | 'bookmark'
  | 'caret'
  | 'check'
  | 'copy'
  | 'cross'
  | 'delete'
  | 'download'
  | 'downward'
  | 'edit'
  | 'emoji'
  | 'flag'
  | 'forward'
  | 'link'
  | 'location'
  | 'mail'
  | 'menu'
  | 'message'
  | 'minus'
  | 'more-horiz'
  | 'more-vert'
  | 'people'
  | 'photo'
  | 'plus'
  | 'refresh'
  | 'resize-horiz'
  | 'resize-vert'
  | 'search'
  | 'share'
  | 'shutdown'
  | 'stop'
  | 'time'
  | 'upload'
  | 'upward'

export interface IconProps {
  className?: string
  size?: 2 | 3 | 4
  name?: string
  style?: CSSProperties
  type: IconType
}
