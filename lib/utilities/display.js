
import classnames from 'classnames';var bpfrpt_proptype_DisplayParameters = { block: PropTypes.bool, inline: PropTypes.bool, inlineBlock: PropTypes.bool, flex: PropTypes.bool, inlineFlex: PropTypes.bool, none: PropTypes.bool, hide: PropTypes.bool, visible: PropTypes.bool, invisible: PropTypes.bool, textHide: PropTypes.bool, assistive: PropTypes.bool };















export default function display(_ref,













className)
{var block = _ref.block,inline = _ref.inline,inlineBlock = _ref.inlineBlock,flex = _ref.flex,inlineFlex = _ref.inlineFlex,none = _ref.none,hide = _ref.hide,visible = _ref.visible,invisible = _ref.invisible,textHide = _ref.textHide,assistive = _ref.assistive;
  return classnames(
  {
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
    'text-assistive': assistive },

  className);

}import PropTypes from 'prop-types';export { bpfrpt_proptype_DisplayParameters };