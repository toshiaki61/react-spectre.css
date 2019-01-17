import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Column,
  Form,
  FormCheckbox,
  FormGroup,
  FormInput,
  FormLabel,
  FormRadio,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from '../../../src'

const component = () => {
  return (
    <Form horizontal>
      <FormGroup>
        <Column size={3} sm={12}>
          <FormLabel htmlFor="input-example-4">Name</FormLabel>
        </Column>
        <Column size={9} sm={12}>
          <FormInput id="input-example-4" type="text" placeholder="Name" />
        </Column>
      </FormGroup>
      <FormGroup>
        <Column size={3} sm={12}>
          <FormLabel htmlFor="input-example-5">Email</FormLabel>
        </Column>
        <Column size={9} sm={12}>
          <FormInput id="input-example-5" type="email" placeholder="Email" />
        </Column>
      </FormGroup>
      <FormGroup>
        <Column size={3} sm={12}>
          <FormLabel>Gender</FormLabel>
        </Column>
        <Column size={9} sm={12}>
          <FormRadio label="Male" name="gender" />
          <FormRadio label="Female" name="gender" checked />
        </Column>
      </FormGroup>
      <FormGroup>
        <Column size={3} sm={12}>
          <FormLabel>Source</FormLabel>
        </Column>
        <Column size={9} sm={12}>
          <FormSelect multiple>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
          </FormSelect>
        </Column>
      </FormGroup>
      <FormGroup>
        <Column size={9} sm={12} autoWidth>
          <FormSwitch label="Send me emails with news and tips" name="email" />
        </Column>
      </FormGroup>

      <FormGroup>
        <Column size={3} sm={12}>
          <FormLabel htmlFor="input-example-6">Message</FormLabel>
        </Column>
        <Column size={9} sm={12}>
          <FormTextarea id="input-example-6" placeholder="Textarea" rows={3} />
        </Column>
      </FormGroup>

      <FormGroup>
        <Column size={9} sm={12} autoWidth>
          <FormCheckbox label="Remember me" name="rememberMe" />
        </Column>
      </FormGroup>
    </Form>
  )
}

export default component
