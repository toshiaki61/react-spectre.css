import * as React from 'react'

import {text} from '@storybook/addon-knobs'

import {Button, Icon, Tile} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Button, Icon, Tile})
