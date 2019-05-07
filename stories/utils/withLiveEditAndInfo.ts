import * as React from 'react'

import {withLiveEdit} from 'storybook-addon-react-live-edit'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {RenderFunction} from '@storybook/react'

export function withLiveEditAndInfo(
  render: () => JSX.Element,
  context: {}
): RenderFunction {
  const original = render()
  const liveEdit = withLiveEdit(reactElementToJSXString(original), {
    React,
    ...context,
  })({})
  console.log(original.type.__docgenInfo)
  console.log(liveEdit)
  return () => {
    liveEdit.type.__docgenInfo = original.type.__docgenInfo
    liveEdit.type.displayName = original.type.displayName
    // liveEdit.props.children = original.props.children
    // liveEdit.props = {...liveEdit.props, children: original.props.children}
    return liveEdit
  }
}
