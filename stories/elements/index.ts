import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Button from './Button'
import Label from './Label'
import Table from './Table'

const stories = storiesOf('Elements', module)

stories
  .addDecorator(withKnobs)
  .add('Button', Button)
  .add('Label', Label)
  .add('Table', Table)
