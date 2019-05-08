import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {text} from '@storybook/addon-knobs'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={text('title-class', 'h5')}>
          {text('title', 'title')}
        </CardTitle>
        <CardSubtitle className={text('subtitle-class', 'text-gray')}>
          {text('subtitle', 'subtitle')}
        </CardSubtitle>
      </CardHeader>
      <CardBody>{text('body', 'body')}</CardBody>
      <CardFooter>
        <Button onClick={action('button_clicked')}>button</Button>
      </CardFooter>
    </Card>
  )
}

export default withLiveEditAndInfo(component, {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
})
