import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Button,
  FormInput,
  InputGroup,
  Navbar,
  NavbarBrand,
  NavbarSection,
} from '../../../src/index'

const component = () => {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarBrand
          href="#"
          className={text('navbar-brand-className', 'text-bold mr-2')}
        >
          SPECTRE.CSS
        </NavbarBrand>
        <Button color="link">Docs</Button>
        <Button color="link">Github</Button>
      </NavbarSection>
      <NavbarSection>
        <InputGroup>
          <FormInput type="text" placeholder="search" />
          <Button type="button" color="primary" inputGroup>
            Search
          </Button>
        </InputGroup>
      </NavbarSection>
    </Navbar>
  )
}

export default component
