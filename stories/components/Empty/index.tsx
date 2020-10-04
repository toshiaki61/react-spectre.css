import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {text} from '@storybook/addon-knobs'

import {
  Button,
  Empty,
  EmptyAction,
  EmptyIcon,
  EmptySubtitle,
  EmptyTitle,
  Icon,
} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Empty>
      <EmptyIcon>
        <Icon type="people" size={3} />
      </EmptyIcon>
      <EmptyTitle className="h5">
        {text('title', 'You have no new messages')}
      </EmptyTitle>
      <EmptySubtitle>
        {text('subtitle', 'Click the button to start a conversation.')}
      </EmptySubtitle>
      <EmptyAction>
        <Button color="primary" onClick={action('button_clicked')}>
          {text('button', 'Send a message')}
        </Button>
      </EmptyAction>
    </Empty>
  )
}

export default withLiveEditAndInfo(component, {
  Button,
  Empty,
  EmptyAction,
  EmptyIcon,
  EmptySubtitle,
  EmptyTitle,
  Icon,
})
