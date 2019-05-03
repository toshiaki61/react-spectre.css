import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Button, Icon, Tile, TileProps} from '../../../src'

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
