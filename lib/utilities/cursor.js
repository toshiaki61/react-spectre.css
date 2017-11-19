
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_CursorParameters = { hand: require('prop-types').bool, move: require('prop-types').bool, zoomIn: require('prop-types').bool, zoomOut: require('prop-types').bool, notAllowed: require('prop-types').bool, auto: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CursorParameters', { value: babelPluginFlowReactPropTypes_proptype_CursorParameters, configurable: true, enumerable: true });









export default function cursor(_ref,






className) {var hand = _ref.hand,move = _ref.move,zoomIn = _ref.zoomIn,zoomOut = _ref.zoomOut,notAllowed = _ref.notAllowed,auto = _ref.auto;
  return classnames({
    'c-hand': hand,
    'c-move': move,
    'c-zoom-in': zoomIn,
    'c-zoom-out': zoomOut,
    'c-not-allowed': notAllowed,
    'c-auto': auto },
  className);
}