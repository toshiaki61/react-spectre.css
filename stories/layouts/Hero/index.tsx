import * as React from 'react'

import {object, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Hero, HeroSizeType} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const heroSizeTypes: OptionalKeyMap<HeroSizeType> = {
  sm: 'sm',
  lg: 'lg',
  'No Value': '',
}

const component = () => {
  return (
    <Hero
      size={optionalSelect('size', heroSizeTypes, '')}
      title={text('title', 'Hero title')}
      content={text('content', 'This is a hero example')}
      className={text('className', 'bg-dark')}
      style={object('style', {})}
    />
  )
}

export default withLiveEditAndInfo(component, {Hero})
