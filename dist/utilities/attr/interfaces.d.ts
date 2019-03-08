import { StyleProps } from '../../interfaces';
export declare type ColorType = 'primary' | 'secondary' | 'dark' | 'gray' | 'light' | 'success' | 'warning' | 'error';
export declare type CursorType = 'hand' | 'move' | 'zoom-in' | 'zoom-out' | 'not-allowed' | 'auto';
export declare type DisplayType = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'none' | 'hide';
export declare type VisibilityType = 'visible' | 'invisible';
export declare type TextHideType = 'hide';
export declare type TextAssistiveType = 'assistive';
export declare type FloatClearingType = 'clearfix';
export declare type FloatingType = 'left' | 'right';
export declare type PositionType = 'relative' | 'absolute' | 'fixed' | 'sticky';
export declare type BlockCenteringType = 'centered';
export declare type ShapeType = 'rounded' | 'circle';
export declare type TextAlignType = 'center' | 'right' | 'justify';
export declare type TextCaseType = 'lowercase' | 'uppercase' | 'capitalize';
export declare type TextWeightType = 'normal' | 'bold';
export declare type TextDecorationType = 'italic';
export declare type TextSizeType = 'large';
export declare type TextOverflowType = 'ellipsis' | 'clip' | 'break';
export declare type LangType = 'ja' | 'ko' | 'zh-hans' | 'zh-hant' | 'cjk';
export declare type TooltipPositionType = 'right' | 'left' | 'bottom';
export declare type LoadingSizeType = 'lg';
interface ColorProps {
    fg: ColorType;
    bg: ColorType;
}
interface CursorProps {
    cursor: CursorType;
}
interface DisplayProps {
    display: DisplayType;
    visibility: VisibilityType;
    textHide: TextHideType;
    textAssistive: TextAssistiveType;
}
interface PositionProps {
    floatClearing: FloatClearingType;
    floating: FloatingType;
    position: PositionType;
    blockCentering: BlockCenteringType;
    margin: boolean;
    marginMore: boolean;
    marginTop: boolean;
    marginTopMore: boolean;
    marginBottom: boolean;
    marginBottomMore: boolean;
    marginLeft: boolean;
    marginLeftMore: boolean;
    marginRight: boolean;
    marginRightMore: boolean;
    marginWidth: boolean;
    marginWidthMore: boolean;
    marginHeight: boolean;
    marginHeightMore: boolean;
    padding: boolean;
    paddingMore: boolean;
    paddingTop: boolean;
    paddingTopMore: boolean;
    paddingBottom: boolean;
    paddingBottomMore: boolean;
    paddingLeft: boolean;
    paddingLeftMore: boolean;
    paddingRight: boolean;
    paddingRightMore: boolean;
    paddingWidth: boolean;
    paddingWidthMore: boolean;
    paddingHeight: boolean;
    paddingHeightMore: boolean;
}
interface ShapeProps {
    shape: ShapeType;
}
interface TextProps {
    textAlign: TextAlignType;
    textCase: TextCaseType;
    textWeight: TextWeightType;
    textDecoration: TextDecorationType;
    textSize: TextSizeType;
    textOverflow: TextOverflowType;
}
interface LangProps {
    lang: LangType;
}
interface LoadingProps {
    loading: boolean;
    loadingSize: LoadingSizeType;
}
interface DividerProps {
    divider: boolean;
    dividerVertical: boolean;
    dividerContent: string;
}
interface TooltipProps {
    tooltip: string;
    tooltipPosition: TooltipPositionType;
}
interface BadgeProps {
    badge: string;
}
export declare type BaseProps = ColorProps & CursorProps & DisplayProps & PositionProps & ShapeProps & TextProps & LangProps & LoadingProps & DividerProps & TooltipProps & BadgeProps & StyleProps;
export {};
