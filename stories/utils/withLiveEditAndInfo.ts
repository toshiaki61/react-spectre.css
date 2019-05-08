import * as React from 'react'

import {withLiveEdit, LivePreview} from 'storybook-addon-react-live-edit'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {RenderFunction} from '@storybook/react'
import {Options} from '@storybook/addon-info'

export interface Context {
  context: React.ComponentType<any>[]
}
export interface InfoParams {
  options: {info: Options}
}
export function withLiveEditAndInfo(
  render: () => JSX.Element,
  context: {[key: string]: React.ComponentType<any>}
): RenderFunction & InfoParams {
  const original = render()
  const liveEdit = withLiveEdit(reactElementToJSXString(original), {
    React,
    ...context,
  })({})
  // console.log(original.type.__docgenInfo)
  // console.log(liveEdit)
  const renderFunction: RenderFunction & InfoParams = () => {
    // liveEdit.type.__docgenInfo = {} //original.type.__docgenInfo
    // // liveEdit.type.__docgenInfo.props.children = original.props.children
    // liveEdit.type.displayName = '' //original.type.displayName
    // liveEdit.props.children = original.props.children
    // liveEdit.props = {...liveEdit.props, children: original.props.children}
    return liveEdit
  }
  renderFunction.options = {
    info: {
      propTables: Object.values(context),
      propTablesExclude: [LivePreview],
    },
  }
  return renderFunction
}
