import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from '../../../src/index'

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

export default component
