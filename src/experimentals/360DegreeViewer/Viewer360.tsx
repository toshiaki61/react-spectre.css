import React, {Fragment} from 'react'

import cx from 'classnames'

import {Viewer360Props} from './interfaces'
import ViewerImage from './ViewerImage'
import ViewerSlider from './ViewerSlider'

const Viewer360 = ({children, className, slider, image}: Viewer360Props) => (
  <div className={cx('viewer-360', className)}>
    {children ? (
      children
    ) : slider && image ? (
      <Fragment>
        <ViewerSlider {...slider} />
        <ViewerImage image={image} />
      </Fragment>
    ) : null}
  </div>
)

export default Viewer360
