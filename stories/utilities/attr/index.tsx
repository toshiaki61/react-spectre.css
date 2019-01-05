import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {attr, BaseProps} from '../../../src/'

// export type ColorType =
//   | 'primary'
//   | 'secondary'
//   | 'dark'
//   | 'gray'
//   | 'light'
//   | 'success'
//   | 'warning'
//   | 'error'

// // c-
// export type CursorType =
//   | 'hand'
//   | 'move'
//   | 'zoom-in'
//   | 'zoom-out'
//   | 'not-allowed'
//   | 'auto'
// // d-
// export type DisplayType =
//   | 'block'
//   | 'inline'
//   | 'inline-block'
//   | 'flex'
//   | 'inline-flex'
//   | 'none'
//   | 'hide'
// // d-
// export type VisibilityType = 'visible' | 'invisible'
// // text-
// export type TextHideType = 'hide'
// export type TextAssistiveType = 'assistive'

// export type FloatClearingType = 'clearfix'
// // float-
// export type FloatingType = 'left' | 'right'
// // p-
// export type PositionType = 'relative' | 'absolute' | 'fixed' | 'sticky'
// // p-
// export type BlockCenteringType = 'centered'
// // s-
// export type ShapeType = 'rounded' | 'circle'

// // text-
// export type TextAlignType = 'center' | 'right' | 'justify'
// export type TextCaseType = 'lowercase' | 'uppercase' | 'capitalize'
// export type TextWeightType = 'normal' | 'bold'
// export type TextDecorationType = 'italic'
// export type TextSizeType = 'large'
// export type TextOverflowType = 'ellipsis' | 'clip' | 'break'

// // lang-
// export type LangType = 'ja' | 'ko' | 'zh-hans' | 'zh-hant' | 'cjk'

// export type TooltipPositionType = 'right' | 'left' | 'bottom'

// interface ColorProps {
//   fg: ColorType
//   bg: ColorType
// }
// interface CursorProps {
//   cursor: CursorType
// }
// interface DisplayProps {
//   display: DisplayType
//   visibility: VisibilityType
//   textHide: TextHideType
//   textAssistive: TextAssistiveType
// }
// interface PositionProps {
//   floatClearing: FloatClearingType
//   floating: FloatingType
//   position: PositionType
//   blockCentering: BlockCenteringType

//   margin: boolean
//   marginMore: boolean
//   marginTop: boolean
//   marginTopMore: boolean
//   marginBottom: boolean
//   marginBottomMore: boolean
//   marginLeft: boolean
//   marginLeftMore: boolean
//   marginRight: boolean
//   marginRightMore: boolean
//   marginWidth: boolean
//   marginWidthMore: boolean
//   marginHeight: boolean
//   marginHeightMore: boolean
//   padding: boolean
//   paddingMore: boolean
//   paddingTop: boolean
//   paddingTopMore: boolean
//   paddingBottom: boolean
//   paddingBottomMore: boolean
//   paddingLeft: boolean
//   paddingLeftMore: boolean
//   paddingRight: boolean
//   paddingRightMore: boolean
//   paddingWidth: boolean
//   paddingWidthMore: boolean
//   paddingHeight: boolean
//   paddingHeightMore: boolean
// }
// interface ShapeProps {
//   shape: ShapeType
// }
// interface TextProps {
//   textAlign: TextAlignType
//   textCase: TextCaseType
//   textWeight: TextWeightType
//   textDecoration: TextDecorationType
//   textSize: TextSizeType
//   textOverflow: TextOverflowType
// }
// interface LangProps {
//   lang: LangType
// }
// type LoadingSize = 'lg'
// interface LoadingProps {
//   loading: boolean
//   loadingSize: LoadingSize
// }
// interface DividerProps {
//   divider: boolean
//   dividerVertical: boolean
//   dividerContent: string
// }

// interface TooltipProps {
//   tooltip: string
//   tooltipPosition: TooltipPositionType
// }
// interface BadgeProps {
//   badge: string
// }
// interface StyleProps {
//   className: string
//   style: CSSProperties
// }
const component = () => {
  return <div {...attr({})}>attr</div>
}

export default component
