import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Accordion from './Accordion'
import Avatar from './Avatar'
import Bar from './Bar'
import Breadcrumb from './Breadcrumb'
import Card from './Card'
import Chip from './Chip'
import Dropdown from './Dropdown'
import Empty from './Empty'
import Menu from './Menu'
import Modal from './Modal'
import Nav from './Nav'
import Pagination from './Pagination'
import Panel from './Panel'
import Popover from './Popover'
import Step from './Step'
import Tab from './Tab'
import Tile from './Tile'
import Toast from './Toast'
import Tooltip from './Tooltip'

const stories = storiesOf('Components', module)

stories
  .addDecorator(withKnobs)
  .add('Accordion', Accordion)
  .add('Avatar', Avatar)
  .add('Bar', Bar)
  .add('Breadcrumb', Breadcrumb)
  .add('Card', Card)
  .add('Chip', Chip)
  .add('Dropdown', Dropdown)
  .add('Empty', Empty)
  .add('Menu', Menu)
  .add('Modal', Modal)
  .add('Nav', Nav)
  .add('Pagination', Pagination)
  .add('Panel', Panel)
  .add('Popover', Popover)
  .add('Step', Step)
  .add('Tab', Tab)
  .add('Tile', Tile)
  .add('Toast', Toast)
  .add('Tooltip', Tooltip)
