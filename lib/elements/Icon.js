var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';














































var Icon = function Icon(_ref)












































{var _classnames;var className = _ref.className,_ref$size = _ref.size,size = _ref$size === undefined ? '' : _ref$size,_ref$name = _ref.name,name = _ref$name === undefined ? '' : _ref$name,arrowUp = _ref.arrowUp,arrowRight = _ref.arrowRight,arrowDown = _ref.arrowDown,arrowLeft = _ref.arrowLeft,upward = _ref.upward,forward = _ref.forward,downward = _ref.downward,back = _ref.back,caret = _ref.caret,menu = _ref.menu,apps = _ref.apps,moreHoriz = _ref.moreHoriz,moreVert = _ref.moreVert,resizeHoriz = _ref.resizeHoriz,resizeVert = _ref.resizeVert,plus = _ref.plus,minus = _ref.minus,cross = _ref.cross,check = _ref.check,stop = _ref.stop,shutdown = _ref.shutdown,refresh = _ref.refresh,search = _ref.search,flag = _ref.flag,bookmark = _ref.bookmark,edit = _ref.edit,del = _ref.del,share = _ref.share,download = _ref.download,upload = _ref.upload,mail = _ref.mail,people = _ref.people,message = _ref.message,photo = _ref.photo,time = _ref.time,location = _ref.location,link = _ref.link,emoji = _ref.emoji,form = _ref.form,loading = _ref.loading,props = _objectWithoutProperties(_ref, ['className', 'size', 'name', 'arrowUp', 'arrowRight', 'arrowDown', 'arrowLeft', 'upward', 'forward', 'downward', 'back', 'caret', 'menu', 'apps', 'moreHoriz', 'moreVert', 'resizeHoriz', 'resizeVert', 'plus', 'minus', 'cross', 'check', 'stop', 'shutdown', 'refresh', 'search', 'flag', 'bookmark', 'edit', 'del', 'share', 'download', 'upload', 'mail', 'people', 'message', 'photo', 'time', 'location', 'link', 'emoji', 'form', 'loading']);
  var classes = classnames((_classnames = {
    icon: !form,
    'form-icon': form,
    loading: loading }, _defineProperty(_classnames, 'icon-' +
  name, name), _defineProperty(_classnames, 'icon-' +
  size, size), _defineProperty(_classnames,
  'icon-arrow-up', arrowUp), _defineProperty(_classnames,
  'icon-arrow-right', arrowRight), _defineProperty(_classnames,
  'icon-arrow-down', arrowDown), _defineProperty(_classnames,
  'icon-arrow-left', arrowLeft), _defineProperty(_classnames,
  'icon-upward', upward), _defineProperty(_classnames,
  'icon-forward', forward), _defineProperty(_classnames,
  'icon-downward', downward), _defineProperty(_classnames,
  'icon-back', back), _defineProperty(_classnames,
  'icon-caret', caret), _defineProperty(_classnames,
  'icon-menu', menu), _defineProperty(_classnames,
  'icon-apps', apps), _defineProperty(_classnames,
  'icon-more-horiz', moreHoriz), _defineProperty(_classnames,
  'icon-more-vert', moreVert), _defineProperty(_classnames,
  'icon-resize-horiz', resizeHoriz), _defineProperty(_classnames,
  'icon-resize-vert', resizeVert), _defineProperty(_classnames,
  'icon-plus', plus), _defineProperty(_classnames,
  'icon-minus', minus), _defineProperty(_classnames,
  'icon-cross', cross), _defineProperty(_classnames,
  'icon-check', check), _defineProperty(_classnames,
  'icon-stop', stop), _defineProperty(_classnames,
  'icon-shutdown', shutdown), _defineProperty(_classnames,
  'icon-refresh', refresh), _defineProperty(_classnames,
  'icon-search', search), _defineProperty(_classnames,
  'icon-flag', flag), _defineProperty(_classnames,
  'icon-bookmark', bookmark), _defineProperty(_classnames,
  'icon-edit', edit), _defineProperty(_classnames,
  'icon-delete', del), _defineProperty(_classnames,
  'icon-share', share), _defineProperty(_classnames,
  'icon-download', download), _defineProperty(_classnames,
  'icon-upload', upload), _defineProperty(_classnames,
  'icon-mail', mail), _defineProperty(_classnames,
  'icon-people', people), _defineProperty(_classnames,
  'icon-message', message), _defineProperty(_classnames,
  'icon-photo', photo), _defineProperty(_classnames,
  'icon-time', time), _defineProperty(_classnames,
  'icon-location', location), _defineProperty(_classnames,
  'icon-link', link), _defineProperty(_classnames,
  'icon-emoji', emoji), _classnames),
  className);
  return (
    React.createElement('i', _extends({ className: classes }, props)));

};
Icon.defaultProps = {
  className: '',
  name: '',
  arrowUp: false,
  arrowRight: false,
  arrowDown: false,
  arrowLeft: false,
  upward: false,
  forward: false,
  downward: false,
  back: false,
  caret: false,
  menu: false,
  apps: false,
  moreHoriz: false,
  moreVert: false,
  resizeHoriz: false,
  resizeVert: false,
  plus: false,
  minus: false,
  cross: false,
  check: false,
  stop: false,
  shutdown: false,
  refresh: false,
  search: false,
  flag: false,
  bookmark: false,
  edit: false,
  del: false,
  share: false,
  download: false,
  upload: false,
  mail: false,
  people: false,
  message: false,
  photo: false,
  time: false,
  location: false,
  link: false,
  emoji: false,
  form: false,
  loading: false };


export default Icon;