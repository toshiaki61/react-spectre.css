import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Accordion from './Accordion'
import Menu from './Menu'
import Tooltip from './Tooltip'

const stories = storiesOf('Components', module)

stories
  .addDecorator(withKnobs)
  .add('Accordion', Accordion)
  .add('Menu', Menu)
  .add('Tooltip', Tooltip)
