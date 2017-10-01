import React, { Component } from 'react';

import Carousel from '../experimentals/Carousel';

type CarouselProps = {
  slides: Array<{
    src: string,
    alt: string,
  }>,
};
type CarouselStates = {
  active: string,
};
class CarouselExample extends Component<CarouselProps, CarouselStates> {
  static defaultProps = {
    slides: [
      { src: '//picturepan2.github.io/spectre/img/osx-yosemite.jpg', alt: 'macOS Yosemite Wallpaper' },
      { src: '//picturepan2.github.io/spectre/img/osx-yosemite-2.jpg', alt: 'macOS Yosemite Wallpaper' },
      { src: '//picturepan2.github.io/spectre/img/osx-el-capitan.jpg', alt: 'macOS Yosemite Wallpaper' },
      { src: '//picturepan2.github.io/spectre/img/osx-el-capitan-2.jpg', alt: 'macOS Yosemite Wallpaper' },
    ],
  };
  state = {
    active: 'slide-0',
  };
  onChange = (e, id) => this.setState({ active: id });
  render() {
    const { slides } = this.props;
    if (!slides || slides.length === 0) {
      return null;
    }
    const { active } = this.state;
    return (
      <Carousel
        slides={slides}
        active={active}
        onChange={this.onChange}
      />
    );
  }
}

export default CarouselExample;
