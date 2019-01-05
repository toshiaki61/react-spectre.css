import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Flexbox from './Flexbox'
import Grid from './Grid'
import Hero from './Hero'
import Navbar from './Navbar'

const stories = storiesOf('Elements', module)

stories
  .addDecorator(withKnobs)
  .add('Flexbox', Flexbox)
  .add('Grid', Grid)
  .add('Hero', Hero)
  .add('Navbar', Navbar)
