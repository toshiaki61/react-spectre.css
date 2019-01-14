import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  PanelNav,
  PanelTitle,
  Tab,
  TabItem,
  Tile,
} from '../../../src'
{
  /* <div class="panel">
  <div class="panel-header">
    <div class="panel-title">Comments</div>
  </div>
  <div class="panel-nav">
    <!-- navigation components: tabs, breadcrumbs or pagination -->
  </div>
  <div class="panel-body">
    <!-- contents -->
  </div>
  <div class="panel-footer">
    <!-- buttons or inputs -->
  </div>
</div> */
}
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

export default component
