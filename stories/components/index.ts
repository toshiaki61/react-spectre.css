// import {withKnobs} from '@storybook/addon-knobs'
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
  // .addDecorator(withKnobs)
  .add('Accordion', Accordion[0], Accordion[1])
  .add('Avatar', Avatar[0], Avatar[1])
  .add('Bar', Bar[0], Bar[1])
  .add('Breadcrumb', Breadcrumb[0], Breadcrumb[1])
  .add('Card', Card[0], Card[1])
  .add('Chip', Chip[0], Chip[1])
  .add('Dropdown', Dropdown[0], Dropdown[1])
  .add('Empty', Empty[0], Empty[1])
  .add('Menu', Menu[0], Menu[1])
  .add('Modal', Modal[0], Modal[1])
  .add('Nav', Nav[0], Nav[1])
  .add('Pagination', Pagination[0], Pagination[1])
  .add('Panel', Panel[0], Panel[1])
  .add('Popover', Popover[0], Popover[1])
  .add('Step', Step[0], Step[1])
  .add('Tab', Tab[0], Tab[1])
  .add('Tile', Tile[0], Tile[1])
  .add('Toast', Toast[0], Toast[1])
  .add('Tooltip', Tooltip[0], Tooltip[1])
