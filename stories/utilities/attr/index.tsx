import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  attr,
  BaseProps,
  BlockCenteringType,
  ColorType,
  CursorType,
  DisplayType,
  FloatClearingType,
  FloatingType,
  LangType,
  LoadingSizeType,
  PositionType,
  ShapeType,
  TextAlignType,
  TextAssistiveType,
  TextCaseType,
  TextDecorationType,
  TextHideType,
  TextOverflowType,
  TextSizeType,
  TextWeightType,
  TooltipPositionType,
  VisibilityType,
} from '../../../src/'

const colorTypes: OptionalKeyMap<ColorType> = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
  gray: 'gray',
  light: 'light',
  success: 'success',
  warning: 'warning',
  error: 'error',
  'No Value': '',
}
const cursorTypes: OptionalKeyMap<CursorType> = {
  hand: 'hand',
  move: 'move',
  'zoom-in': 'zoom-in',
  'zoom-out': 'zoom-out',
  'not-allowed': 'not-allowed',
  auto: 'auto',
  'No Value': '',
}
const displayTypes: OptionalKeyMap<DisplayType> = {
  block: 'block',
  inline: 'inline',
  'inline-block': 'inline-block',
  flex: 'flex',
  'inline-flex': 'inline-flex',
  none: 'none',
  hide: 'hide',
  'No Value': '',
}
const visibilityTypes: OptionalKeyMap<VisibilityType> = {
  visible: 'visible',
  invisible: 'invisible',
  'No Value': '',
}
const textHideTypes: OptionalKeyMap<TextHideType> = {
  hide: 'hide',
  'No Value': '',
}
const textAssistiveTypes: OptionalKeyMap<TextAssistiveType> = {
  assistive: 'assistive',
  'No Value': '',
}
const floatClearingTypes: OptionalKeyMap<FloatClearingType> = {
  clearfix: 'clearfix',
  'No Value': '',
}
const floatingTypes: OptionalKeyMap<FloatingType> = {
  left: 'left',
  right: 'right',
  'No Value': '',
}
const positionTypes: OptionalKeyMap<PositionType> = {
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
  'No Value': '',
}
const blockCenteringTypes: OptionalKeyMap<BlockCenteringType> = {
  centered: 'centered',
  'No Value': '',
}
const shapeTypes: OptionalKeyMap<ShapeType> = {
  rounded: 'rounded',
  circle: 'circle',
  'No Value': '',
}
const textAlignTypes: OptionalKeyMap<TextAlignType> = {
  center: 'center',
  right: 'right',
  justify: 'justify',
  'No Value': '',
}
const textCaseTypes: OptionalKeyMap<TextCaseType> = {
  lowercase: 'lowercase',
  uppercase: 'uppercase',
  capitalize: 'capitalize',
  'No Value': '',
}
const textWeightTypes: OptionalKeyMap<TextWeightType> = {
  normal: 'normal',
  bold: 'bold',
  'No Value': '',
}
const textDecorationTypes: OptionalKeyMap<TextDecorationType> = {
  italic: 'italic',
  'No Value': '',
}
const textSizeTypes: OptionalKeyMap<TextSizeType> = {
  large: 'large',
  'No Value': '',
}
const textOverflowTypes: OptionalKeyMap<TextOverflowType> = {
  ellipsis: 'ellipsis',
  chip: 'clip',
  breadk: 'break',
  'No Value': '',
}
const langTypes: OptionalKeyMap<LangType> = {
  ja: 'ja',
  ko: 'ko',
  'zh-hans': 'zh-hans',
  'zh-hant': 'zh-hant',
  cjk: 'cjk',
  'No Value': '',
}
const tooltipPositionTypes: OptionalKeyMap<TooltipPositionType> = {
  right: 'right',
  left: 'left',
  bottom: 'bottom',
  'No Value': '',
}
const loadingSizeTypes: OptionalKeyMap<LoadingSizeType> = {
  lg: 'lg',
  'No Value': '',
}

const component = () => {
  return (
    <div
      {...attr({
        fg: optionalSelect('fg', colorTypes, ''),
        bg: optionalSelect('bg', colorTypes, ''),

        cursor: optionalSelect('cursor', cursorTypes, ''),
        display: optionalSelect('display', displayTypes, ''),
        visibility: optionalSelect('visibility', visibilityTypes, ''),
        textHide: optionalSelect('textHide', textHideTypes, ''),
        textAssistive: optionalSelect('textAssistive', textAssistiveTypes, ''),

        floatClearing: optionalSelect('floatClearing', floatClearingTypes, ''),
        floating: optionalSelect('floating', floatingTypes, ''),
        position: optionalSelect('position', positionTypes, ''),
        blockCentering: optionalSelect(
          'blockCentering',
          blockCenteringTypes,
          ''
        ),

        margin: boolean('margin', false),
        marginMore: boolean('marginMore', false),
        marginTop: boolean('marginTop', false),
        marginTopMore: boolean('marginTopMore', false),
        marginBottom: boolean('marginBottom', false),
        marginBottomMore: boolean('marginBottomMore', false),
        marginLeft: boolean('marginLeft', false),
        marginLeftMore: boolean('marginLeftMore', false),
        marginRight: boolean('marginRight', false),
        marginRightMore: boolean('marginRightMore', false),
        marginWidth: boolean('marginWidth', false),
        marginWidthMore: boolean('marginWidthMore', false),
        marginHeight: boolean('marginHeight', false),
        marginHeightMore: boolean('marginHeightMore', false),
        padding: boolean('padding', false),
        paddingMore: boolean('paddingMore', false),
        paddingTop: boolean('paddingTop', false),
        paddingTopMore: boolean('paddingTopMore', false),
        paddingBottom: boolean('paddingBottom', false),
        paddingBottomMore: boolean('paddingBottomMore', false),
        paddingLeft: boolean('paddingLeft', false),
        paddingLeftMore: boolean('paddingLeftMore', false),
        paddingRight: boolean('paddingRight', false),
        paddingRightMore: boolean('paddingRightMore', false),
        paddingWidth: boolean('paddingWidth', false),
        paddingWidthMore: boolean('paddingWidthMore', false),
        paddingHeight: boolean('paddingHeight', false),
        paddingHeightMore: boolean('paddingHeightMore', false),

        shape: optionalSelect('shape', shapeTypes, ''),
        textAlign: optionalSelect('textAlign', textAlignTypes, ''),
        textCase: optionalSelect('textCase', textCaseTypes, ''),
        textWeight: optionalSelect('textWeight', textWeightTypes, ''),
        textDecoration: optionalSelect(
          'textDecoration',
          textDecorationTypes,
          ''
        ),
        textSize: optionalSelect('textSize', textSizeTypes, ''),
        textOverflow: optionalSelect('textOverflow', textOverflowTypes, ''),
        lang: optionalSelect('lang', langTypes, ''),
        loading: boolean('loading', false),
        loadingSize: optionalSelect('loadingSize', loadingSizeTypes, ''),
        divider: boolean('divider', false),
        dividerVertical: boolean('dividerVertical', false),
        dividerContent: text('dividerContent', ''),
        tooltip: text('tooltip', ''),
        tooltipPosition: optionalSelect(
          'tooltipPosition',
          tooltipPositionTypes,
          ''
        ),

        badge: text('badge', ''),
        className: text('className', ''),
        style: object('style', {}),
      })}
    >
      attr
    </div>
  )
}

export default component
