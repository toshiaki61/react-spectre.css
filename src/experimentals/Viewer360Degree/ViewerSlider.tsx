import * as React from 'react'

import cx from 'clsx'

import {Slider} from '../Slider'

import {ViewerSliderProps} from './interfaces'

const ViewerSlider: React.FC<ViewerSliderProps> = ({className, ...rest}) => (
  <Slider className={cx('viewer-slider slider', className)} {...rest} />
)

export default ViewerSlider
