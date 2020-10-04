import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {text} from '@storybook/addon-knobs'

import {
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  PanelNav,
  PanelTitle,
  Tab,
  Tile,
} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Panel style={{height: '75vh'}}>
      <PanelHeader>
        <PanelTitle>{text('title', 'Comments')}</PanelTitle>
      </PanelHeader>
      <PanelNav>
        <Tab
          onClick={action('tab_clicked')}
          block
          activeId={text('activeId', 'tab-1')}
          items={[
            {id: 'tab-1', title: 'Profile'},
            {id: 'tab-2', title: 'Files'},
            {id: 'tab-3', title: 'Tasks'},
          ]}
        />
      </PanelNav>

      <PanelBody>
        <Tile>a</Tile>
      </PanelBody>
      <PanelFooter>{text('footer', 'buttons or inputs')}</PanelFooter>
    </Panel>
  )
}

export default withLiveEditAndInfo(component, {
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  PanelNav,
  PanelTitle,
  Tab,
  Tile,
})
