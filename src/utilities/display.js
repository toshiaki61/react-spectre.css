import classnames from 'classnames';

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
}, className) {
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
