import React, {FC, Fragment} from 'react'

import cx from 'classnames'

import {Viewer360Props} from './interfaces'
import {hasViewer360Children} from './util'

import ViewerImage from './ViewerImage'
import ViewerSlider from './ViewerSlider'

function renderViewer360(p: Viewer360Props) {
  if (hasViewer360Children(p)) {
    return p.children
  }
  const {slider, image} = p
  return (
    <Fragment>
      <ViewerSlider {...slider} />
      <ViewerImage image={image} />
    </Fragment>
  )
}
const Viewer360: FC<Viewer360Props> = p => (
  <div className={cx('viewer-360', p.className)}>{renderViewer360(p)}</div>
)

export default Viewer360
