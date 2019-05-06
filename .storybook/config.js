import React from 'react'
import {
  configure,
  addDecorator,
  setAddon,
  addParameters,
} from '@storybook/react'
import {withOptions} from '@storybook/addon-options'
import {withInfo} from '@storybook/addon-info'

import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit'

setOptions({theme: 'darcula', presets: ['react']})

setAddon(LiveEdit)
import 'storybook-chromatic'

import './index.scss'

function loadStories() {
  require('../stories/')
}
const storyWrapper = story => <div style={{margin: 35}}>{story()}</div>
addDecorator(storyWrapper)

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: false,
    // maxPropsIntoLine: 1,
  })
)

addParameters({
  options: {
    brandTitle: 'react-spectre.css',
    brandUrl: 'https://github.com/toshiaki61/react-spectre.css',
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sortStoriesByKind: true,
  },
})

configure(loadStories, module)
