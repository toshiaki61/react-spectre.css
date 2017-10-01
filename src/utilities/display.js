/* @flow */
import classnames from 'classnames';

export type DisplayParameters = {
  block?: boolean,
  inline?: boolean,
  inlineBlock?: boolean,
  flex?: boolean,
  inlineFlex?: boolean,
  none?: boolean,
  hide?: boolean,
  visible?: boolean,
  invisible?: boolean,
  textHide?: boolean,
  assistive?: boolean,
};
export default function display({
  block,
  inline,
  inlineBlock,
  flex,
  inlineFlex,
  none,
  hide,
  visible,
  invisible,
  textHide,
  assistive,
}: DisplayParameters, className: string): string {
  return classnames({
    'd-block': block,
    'd-inline': inline,
    'd-inline-block': inlineBlock,
    'd-flex': flex,
    'd-inline-flex': inlineFlex,
    'd-none': none,
    'd-hide': hide,
    'd-visible': visible,
    'd-invisible': invisible,
    'text-hide': textHide,
    'text-assistive': assistive,
  }, className);
}
