import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import attr from './attr'
import Divider from './Divider'
import Loading from './Loading'

const stories = storiesOf('Utilities', module)

stories
  .addDecorator(withKnobs)
  .add('attr', attr[0], attr[1])
  .add('Divider', Divider[0], Divider[1])
  .add('Loading', Loading[0], Loading[1])
