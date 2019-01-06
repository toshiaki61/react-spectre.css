import React, {SFC} from 'react'

import cx from 'classnames'

import {Slider} from '../Slider'

import {ViewerSliderProps} from './interfaces'

const ViewerSlider: SFC<ViewerSliderProps> = ({className, ...rest}) => (
  <Slider className={cx('viewer-slider', className)} {...rest} />
)

export default ViewerSlider
