import React from 'react'

import cx from 'classnames'

import {Slider} from '../Slider'

import {ViewerSliderProps} from './interfaces'

const ViewerSlider = ({className, ...rest}: ViewerSliderProps) => (
  <Slider className={cx('viewer-slider', className)} {...rest} />
)

export default ViewerSlider
