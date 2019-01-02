import {CSSProperties} from 'react'

export type Color =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'gray'
  | 'light'
  | 'success'
  | 'warning'
  | 'error'

// c-
export type Cursor =
  | 'hand'
  | 'move'
  | 'zoom-in'
  | 'zoom-out'
  | 'not-allowed'
  | 'auto'
// d-
export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'none'
  | 'hide'
// d-
export type Visibility = 'visible' | 'invisible'
// text-
export type TextHide = 'hide'
export type TextAssistive = 'assistive'

export type FloatClearing = 'clearfix'
// float-
export type Floating = 'left' | 'right'
// p-
export type Position = 'relative' | 'absolute' | 'fixed' | 'sticky'
// p-
export type BlockCentering = 'centered'
// s-
export type Shape = 'rounded' | 'circle'

// text-
export type TextAlign = 'center' | 'right' | 'justify'
export type TextCase = 'lowercase' | 'uppercase' | 'capitalize'
export type TextWeight = 'normal' | 'bold'
export type TextDecoration = 'italic'
export type TextSize = 'large'
export type TextOverflow = 'ellipsis' | 'clip' | 'break'

// lang-
export type Lang = 'ja' | 'ko' | 'zh-hans' | 'zh-hant' | 'cjk'

interface ColorProps {
  fg: Color
  bg: Color
}
interface CursorProps {
  cursor: Cursor
}
interface DisplayProps {
  display: Display
  visibility: Visibility
  textHide: TextHide
  textAssistive: TextAssistive
}
interface PositionProps {
  floatClearing: FloatClearing
  floating: Floating
  position: Position
  blockCentering: BlockCentering

  margin: boolean
  marginMore: boolean
  marginTop: boolean
  marginTopMore: boolean
  marginBottom: boolean
  marginBottomMore: boolean
  marginLeft: boolean
  marginLeftMore: boolean
  marginRight: boolean
  marginRightMore: boolean
  marginWidth: boolean
  marginWidthMore: boolean
  marginHeight: boolean
  marginHeightMore: boolean
  padding: boolean
  paddingMore: boolean
  paddingTop: boolean
  paddingTopMore: boolean
  paddingBottom: boolean
  paddingBottomMore: boolean
  paddingLeft: boolean
  paddingLeftMore: boolean
  paddingRight: boolean
  paddingRightMore: boolean
  paddingWidth: boolean
  paddingWidthMore: boolean
  paddingHeight: boolean
  paddingHeightMore: boolean
}
interface ShapeProps {
  shape: Shape
}
interface TextProps {
  textAlign: TextAlign
  textCase: TextCase
  textWeight: TextWeight
  textDecoration: TextDecoration
  textSize: TextSize
  textOverflow: TextOverflow
}
interface LangProps {
  lang: Lang
}
type LoadingSize = 'lg'
interface LoadingProps {
  loading: boolean
  loadingSize: LoadingSize
}
interface DividerProps {
  divider: boolean
  dividerVertical: boolean
  dividerContent: string
}
export type TooltipPosition = 'right' | 'left' | 'bottom'
interface TooltipProps {
  tooltip: string
  tooltipPosition: TooltipPosition
}
interface BadgeProps {
  badge: string
}
interface StyleProps {
  className: string
  style: CSSProperties
}
export type BaseProps = ColorProps &
  CursorProps &
  DisplayProps &
  PositionProps &
  ShapeProps &
  TextProps &
  LangProps &
  LoadingProps &
  DividerProps &
  TooltipProps &
  BadgeProps &
  StyleProps
