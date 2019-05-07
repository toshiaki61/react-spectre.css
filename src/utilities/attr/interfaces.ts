import {StyleProps} from '../../interfaces'

export type ColorType =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'gray'
  | 'light'
  | 'success'
  | 'warning'
  | 'error'

// c-
export type CursorType =
  | 'hand'
  | 'move'
  | 'zoom-in'
  | 'zoom-out'
  | 'not-allowed'
  | 'auto'
// d-
export type DisplayType =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'none'
  | 'hide'
// d-
export type VisibilityType = 'visible' | 'invisible'
// text-
export type TextHideType = 'hide'
export type TextAssistiveType = 'assistive'

export type FloatClearingType = 'clearfix'
// float-
export type FloatingType = 'left' | 'right'
// p-
export type PositionType = 'relative' | 'absolute' | 'fixed' | 'sticky'
// p-
export type BlockCenteringType = 'centered'
// s-
export type ShapeType = 'rounded' | 'circle'

// text-
export type TextAlignType = 'center' | 'right' | 'justify'
export type TextCaseType = 'lowercase' | 'uppercase' | 'capitalize'
export type TextWeightType = 'normal' | 'bold'
export type TextDecorationType = 'italic'
export type TextSizeType = 'large'
export type TextOverflowType = 'ellipsis' | 'clip' | 'break'

// lang-
export type LangType = 'ja' | 'ko' | 'zh-hans' | 'zh-hant' | 'cjk'

export type TooltipPositionType = 'right' | 'left' | 'bottom'

export type LoadingSizeType = 'lg'

interface ColorProps {
  /** 'primary' | 'secondary' | 'dark' | 'gray' | 'light' | 'success' | 'warning' | 'error' */
  fg: ColorType
  /** 'primary' | 'secondary' | 'dark' | 'gray' | 'light' | 'success' | 'warning' | 'error' */
  bg: ColorType
}
interface CursorProps {
  /** 'hand' | 'move' | 'zoom-in' | 'zoom-out' | 'not-allowed' | 'auto' */
  cursor: CursorType
}
interface DisplayProps {
  /** 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'none' | 'hide' */
  display: DisplayType
  /** 'visible' | 'invisible' */
  visibility: VisibilityType
  /** 'hide' */
  textHide: TextHideType
  /** 'assistive' */
  textAssistive: TextAssistiveType
}
interface PositionProps {
  /** 'clearfix' */
  floatClearing: FloatClearingType
  /** 'left' | 'right' */
  floating: FloatingType
  /** 'relative' | 'absolute' | 'fixed' | 'sticky' */
  position: PositionType
  /** 'centered' */
  blockCentering: BlockCenteringType

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
  /** 'rounded' | 'circle' */
  shape: ShapeType
}
interface TextProps {
  /** 'center' | 'right' | 'justify' */
  textAlign: TextAlignType
  /** 'lowercase' | 'uppercase' | 'capitalize' */
  textCase: TextCaseType
  /** 'normal' | 'bold' */
  textWeight: TextWeightType
  /** 'italic' */
  textDecoration: TextDecorationType
  /** 'large' */
  textSize: TextSizeType
  /** 'ellipsis' | 'clip' | 'break' */
  textOverflow: TextOverflowType
}
interface LangProps {
  /** 'ja' | 'ko' | 'zh-hans' | 'zh-hant' | 'cjk' */
  lang: LangType
}

interface LoadingProps {
  loading: boolean
  /** 'lg' */
  loadingSize: LoadingSizeType
}
interface DividerProps {
  divider: boolean
  dividerVertical: boolean
  dividerContent: string
}

interface TooltipProps {
  tooltip: string
  /** 'right' | 'left' | 'bottom' */
  tooltipPosition: TooltipPositionType
}
interface BadgeProps {
  badge: string
}
interface DataProps {
  'data-content': string
  'data-tooltip': string
  'data-badge': string
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
  StyleProps &
  DataProps
