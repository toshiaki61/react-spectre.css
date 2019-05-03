import * as React from 'react'

import cx from 'clsx'

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
    <React.Fragment>
      <ViewerSlider {...slider} />
      <ViewerImage image={image} />
    </React.Fragment>
  )
}
const Viewer360: React.FC<Viewer360Props> = p => (
  <div className={cx('viewer-360', p.className)}>{renderViewer360(p)}</div>
)

export default Viewer360
