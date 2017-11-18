var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}import React, { Component } from 'react';

import Carousel from '../experimentals/Carousel';var










CarouselExample = function (_Component) {_inherits(CarouselExample, _Component);function CarouselExample() {var _ref;var _temp, _this, _ret;_classCallCheck(this, CarouselExample);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CarouselExample.__proto__ || Object.getPrototypeOf(CarouselExample)).call.apply(_ref, [this].concat(args))), _this), _this.








    state = {
      active: 'slide-0' }, _this.

    onChange = function (e, id) {return _this.setState({ active: id });}, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(CarouselExample, [{ key: 'render', value: function render()
    {var
      slides = this.props.slides;
      if (!slides || slides.length === 0) {
        return null;
      }var
      active = this.state.active;
      return (
        React.createElement(Carousel, {
          slides: slides,
          active: active,
          onChange: this.onChange }));


    } }]);return CarouselExample;}(Component);CarouselExample.defaultProps = { slides: [{ src: '//picturepan2.github.io/spectre/img/osx-yosemite.jpg', alt: 'macOS Yosemite Wallpaper' }, { src: '//picturepan2.github.io/spectre/img/osx-yosemite-2.jpg', alt: 'macOS Yosemite Wallpaper' }, { src: '//picturepan2.github.io/spectre/img/osx-el-capitan.jpg', alt: 'macOS Yosemite Wallpaper' }, { src: '//picturepan2.github.io/spectre/img/osx-el-capitan-2.jpg', alt: 'macOS Yosemite Wallpaper' }] };


export default CarouselExample;