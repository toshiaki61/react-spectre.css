import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Modal, ModalSizeType} from '../../../src'
const modalSizeTypes: OptionalKeyMap<ModalSizeType> = {
  sm: 'sm',
  lg: 'lg',
  'No Value': '',
}

// export type ModalSizeType = 'sm' | 'lg'

// export interface ModalBaseProps extends Partial<StyleProps> {
//   active: boolean
//   size: ModalSizeType
// }

// export interface ModalAttrProps extends Partial<ModalBaseProps> {
//   content: ReactNode
//   onClearClick: MouseEventHandler
//   title?: string
//   footer?: ReactNode
// }

// export interface ModalChildrenProps extends Partial<ModalBaseProps> {
//   children: ReactNode
// }

// export type ModalProps = ModalAttrProps | ModalChildrenProps

// export type ModalPartProps = Partial<BasePartProps>

// export interface ModalCloseable {
//   onClearClick?: MouseEventHandler
// }

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

export default component
