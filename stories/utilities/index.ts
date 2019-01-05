import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import attr from './attr'
import Divider from './Divider'
import Loading from './Loading'

const stories = storiesOf('Elements', module)

stories
  .addDecorator(withKnobs)
  .add('attr', attr)
  .add('Divider', Divider)
  .add('Loading', Loading)
