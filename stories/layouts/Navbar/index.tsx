import * as React from 'react'

import {text} from '@storybook/addon-knobs'

import {
  Button,
  FormInput,
  InputGroup,
  Navbar,
  NavbarBrand,
  NavbarSection,
} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {
  Button,
  FormInput,
  InputGroup,
  Navbar,
  NavbarBrand,
  NavbarSection,
})
