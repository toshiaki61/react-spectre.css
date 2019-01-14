import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Button,
  Empty,
  EmptyAction,
  EmptyIcon,
  EmptySubtitle,
  EmptyTitle,
  Icon,
} from '../../../src'

{
  /* <div class="empty">
  <div class="empty-icon">
    <i class="icon icon-people"></i>
  </div>
  <p class="empty-title h5">You have no new messages</p>
  <p class="empty-subtitle">Click the button to start a conversation.</p>
  <div class="empty-action">
    <button class="btn btn-primary">Send a message</button>
  </div>
</div> */
}
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

export default component
