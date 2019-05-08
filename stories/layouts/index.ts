import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Flexbox from './Flexbox'
import Grid from './Grid'
import Hero from './Hero'
import Navbar from './Navbar'

const stories = storiesOf('Layouts', module)

stories
  .addDecorator(withKnobs)
  .add('Flexbox', Flexbox, Flexbox.options)
  .add('Grid', Grid, Grid.options)
  .add('Hero', Hero, Hero.options)
  .add('Navbar', Navbar, Navbar.options)
