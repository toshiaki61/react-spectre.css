import {storiesOf} from '@storybook/react'

import Button from './Button'
import Form from './Form'
import Icon from './Icon'
import Label from './Label'
import Table from './Table'

const stories = storiesOf('Elements', module)

stories
  .add('Button', Button, Button.options)
  .add('Form', Form, Form.options)
  .add('Icon', Icon, Icon.options)
  .add('Label', Label, Label.options)
  .add('Table', Table, Table.options)
