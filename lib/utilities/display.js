
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_DisplayParameters = { block: require('prop-types').bool, inline: require('prop-types').bool, inlineBlock: require('prop-types').bool, flex: require('prop-types').bool, inlineFlex: require('prop-types').bool, none: require('prop-types').bool, hide: require('prop-types').bool, visible: require('prop-types').bool, invisible: require('prop-types').bool, textHide: require('prop-types').bool, assistive: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_DisplayParameters', { value: babelPluginFlowReactPropTypes_proptype_DisplayParameters, configurable: true, enumerable: true });














export default function display(_ref,











className) {var block = _ref.block,inline = _ref.inline,inlineBlock = _ref.inlineBlock,flex = _ref.flex,inlineFlex = _ref.inlineFlex,none = _ref.none,hide = _ref.hide,visible = _ref.visible,invisible = _ref.invisible,textHide = _ref.textHide,assistive = _ref.assistive;
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
    'text-assistive': assistive },
  className);
}