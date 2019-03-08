import React, {ChangeEvent, Component} from 'react'

import {Carousel} from 'experimentals/Carousel'

interface CarouselProps {
  slides: Array<{
    src: string
    alt: string
  }>
}
interface ICarouselExampleState {
  active: string
}
class CarouselExample extends Component<CarouselProps, ICarouselExampleState> {
  public static defaultProps = {
    slides: [
      {
        src: '//picturepan2.github.io/spectre/img/osx-yosemite.jpg',
        alt: 'macOS Yosemite Wallpaper',
      },
      {
        src: '//picturepan2.github.io/spectre/img/osx-yosemite-2.jpg',
        alt: 'macOS Yosemite Wallpaper',
      },
      {
        src: '//picturepan2.github.io/spectre/img/osx-el-capitan.jpg',
        alt: 'macOS Yosemite Wallpaper',
      },
      {
        src: '//picturepan2.github.io/spectre/img/osx-el-capitan-2.jpg',
        alt: 'macOS Yosemite Wallpaper',
      },
    ],
  }

  public state = {
    active: 'slide-0',
  }

  public render() {
    const {slides} = this.props
    if (!slides || slides.length === 0) {
      return null
    }
    const {active} = this.state
    return (
      <Carousel slides={slides} activeId={active} onChange={this.onChange} />
    )
  }

  private onChange = (e: ChangeEvent<any>, id: string) =>
    this.setState({active: id})
}
export default CarouselExample
