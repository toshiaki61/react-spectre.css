import React from 'react'

import {ViewerImageProps} from './interfaces'

const ViewerImage = ({image}: ViewerImageProps) => (
  <figure
    className="viewer-image"
    style={{
      backgroundImage: `url('${image}')`,
      paddingBottom: '37.5%',
      width: '100%',
    }}
  />
)

export default ViewerImage
