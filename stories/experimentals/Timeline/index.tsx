import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Timeline, Button} from '../../../src'

const component = () => {
  return (
    <Timeline
      timelines={[
        {
          title: 'Initial commit',
          content: 'March 2016',
        },
        {
          title: 'February 2017',
          action: <Button>View</Button>,
          content: [
            'New Documents experience',
            <span>
              <a href="components.html#bars">Bars</a>: represent the progress of
              a task
            </span>,
            <span>
              <a href="components.html#steps">Steps</a>: progress indicators of
              a sequence of task steps
            </span>,
            <span>
              <a href="components.html#tiles">Tiles</a>: repeatable or
              embeddable information blocks
            </span>,
          ],
        },
        {
          title: 'March 2017',
          action: <Button>View</Button>,
          content: [
            <span>
              <a href="elements.html#icons">Icons</a>: single-element,
              responsive and pure CSS icons
            </span>,
            <span>
              <a href="components.html#popovers">Popovers</a>: small overlay
              content containers
            </span>,
            <span>
              <a href="experimentals.html#calendars">Calendars</a>: date or date
              range picker and events display
            </span>,
            <span>
              <a href="experimentals.html#carousels">Carousels</a>: slideshows
              for cycling images
            </span>,
          ],
        },
      ]}
    />
  )
}

export default component
