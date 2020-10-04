import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Flexbox from './Flexbox'
import Grid from './Grid'
import Hero from './Hero'
import Navbar from './Navbar'

const stories = storiesOf('Layouts', module)

stories
  .addDecorator(withKnobs)
  .add('Flexbox', Flexbox[0], Flexbox[1])
  .add('Grid', Grid[0], Grid[1])
  .add('Hero', Hero[0], Hero[1])
  .add('Navbar', Navbar[0], Navbar[1])
