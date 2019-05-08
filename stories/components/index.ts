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
  .add('Accordion', Accordion, Accordion.options)
  .add('Avatar', Avatar, Avatar.options)
  .add('Bar', Bar, Bar.options)
  .add('Breadcrumb', Breadcrumb, Breadcrumb.options)
  .add('Card', Card, Card.options)
  .add('Chip', Chip, Chip.options)
  .add('Dropdown', Dropdown, Dropdown.options)
  .add('Empty', Empty, Empty.options)
  .add('Menu', Menu, Menu.options)
  .add('Modal', Modal, Modal.options)
  .add('Nav', Nav, Nav.options)
  .add('Pagination', Pagination, Pagination.options)
  .add('Panel', Panel, Panel.options)
  .add('Popover', Popover, Popover.options)
  .add('Step', Step, Step.options)
  .add('Tab', Tab, Tab.options)
  .add('Tile', Tile, Tile.options)
  .add('Toast', Toast, Toast.options)
  .add('Tooltip', Tooltip, Tooltip.options)
