import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Modal, ModalSizeType} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const modalSizeTypes: OptionalKeyMap<ModalSizeType> = {
  sm: 'sm',
  lg: 'lg',
  'No Value': '',
}

const component = () => {
  return (
    <Modal
      content={text('content', 'This is the content inside the modal.')}
      onClearClick={action('clear_clicked')}
      title={text('title', 'Modal title')}
      footer={text('footer', 'Footer content')}
      size={optionalSelect('size', modalSizeTypes, '')}
      active={boolean('active', true)}
    />
  )
}

export default withLiveEditAndInfo(component, {Modal})
