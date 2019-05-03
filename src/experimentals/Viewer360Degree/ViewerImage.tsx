import * as React from 'react'

import {ViewerImageProps} from './interfaces'

const ViewerImage: React.FC<ViewerImageProps> = ({image}) => (
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
