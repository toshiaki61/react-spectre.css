import {storiesOf} from '@storybook/react'

import Button from './Button'
import Form from './Form'
import Icon from './Icon'
import Label from './Label'
import Table from './Table'

const stories = storiesOf('Elements', module)

stories
  .add('Button', Button[0], Button[1])
  .add('Form', Form[0], Form[1])
  .add('Icon', Icon[0], Icon[1])
  .add('Label', Label[0], Label[1])
  .add('Table', Table[0], Table[1])
