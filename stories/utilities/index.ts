import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import attr from './attr'
import Divider from './Divider'
import Loading from './Loading'

const stories = storiesOf('Utilities', module)

stories
  .addDecorator(withKnobs)
  .add('attr', attr, attr.options)
  .add('Divider', Divider, Divider.options)
  .add('Loading', Loading, Loading.options)
