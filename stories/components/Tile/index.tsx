import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Button, Icon, Tile, TileProps} from '../../../src'

// export interface TileAttrProps extends TileBaseProps {
//   content: ReactNode | ReactNodeArray
//   title?: ReactNode
//   subtitle?: ReactNode
//   icon?: ReactNode
//   action?: ReactNode
// }
// ;<div class="tile">
//   <div class="tile-icon">
//     <div class="example-tile-icon">
//       <i class="icon icon-file centered" />
//     </div>
//   </div>
//   <div class="tile-content">
//     <p class="tile-title">The Avengers</p>
//     <p class="tile-subtitle">
//       Earth's Mightiest Heroes joined forces to take on threats that were too
//       big for any one hero to tackle...
//     </p>
//   </div>
//   <div class="tile-action">
//     <button class="btn btn-primary">Join</button>
//   </div>
// </div>
const component = () => {
  return (
    <Tile
      content={text('content', '')}
      title={text('title', '')}
      subtitle={text('subtitle', '')}
      icon={<Icon type="copy" />}
      action={<Button color="primary">Send</Button>}
    />
  )
}

export default component
