import React from 'react'
import {configure, addDecorator} from '@storybook/react'
import {withOptions} from '@storybook/addon-options'
import {withInfo} from '@storybook/addon-info'
import GithubCorner from '@personare/react-storybook-decorator-github-corner'

import 'storybook-chromatic'

import './index.scss'

// const req = require.context('../stories', true, /.stories.tsx$/)

function loadStories() {
  // req.keys().forEach(req)
  require('../stories/')
}
const storyWrapper = story => <div style={{margin: 35}}>{story()}</div>

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: true,
    maxPropsIntoLine: 1,
  })
)

addDecorator(
  withOptions({
    name: 'react-spectre.css',
    // url: 'https://storybook.gumgum.com',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: true,
  })
)

addDecorator(storyWrapper)

addDecorator(GithubCorner)

configure(loadStories, module)
