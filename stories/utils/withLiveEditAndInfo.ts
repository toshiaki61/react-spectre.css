import * as React from 'react'

import {withLiveEdit, LivePreview} from 'storybook-addon-react-live-edit'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Options } from '@storybook/addon-info'
import { StoryFn } from '@storybook/addons'
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types'

export interface Context {
  context: React.ComponentType<any>[]
}
export interface InfoParams {
  options: {info: Options}
}
export function withLiveEditAndInfo(
  render: () => JSX.Element,
  context: {[key: string]: React.ComponentType<any>}
) {
  const original = render()
  const liveEdit = withLiveEdit(reactElementToJSXString(original), {
    React,
    ...context,
  })({})
  const renderFunction: StoryFn<StoryFnReactReturnType> = () => {
    return liveEdit
  }
  const options = {
    info: {
      propTables: Object.values(context),
      propTablesExclude: [LivePreview],
    },
  }
  return  [renderFunction, options] as const
}
