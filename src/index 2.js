import Form, { Group as FormGroup, Label as FormLabel } from './form/Form';
import Autocomplete from './components/Autocomplete';
import Checkbox from './form/Checkbox';
import Input, { Group as InputGroup, Addon as InputGroupAddon } from './form/Input';
import Radio from './form/Radio';
import Select from './form/Select';
import Switch from './form/Switch';

import Accordion, { Item as AccordionItem } from './components/Accordion';

import Button, { Group as ButtonGroup } from './Button';

import Dropdown from './components/Dropdown';

import Menu, { Badge as MenuBadge, Item as MenuItem } from './components/Menu';

import {
  ArrayField,
  BooleanField,
  DescriptionField,
  NumberField,
  ObjectField,
  SchemaField,
  StringField,
  TitleField,
  UnsupportedField,
} from './fields';

import {
  PasswordWidget,
  RadioWidget,
  UpDownWidget,
  RangeWidget,
  SelectWidget,
  TextWidget,
  DateWidget,
  DateTimeWidget,
  AltDateWidget,
  AltDateTimeWidget,
  EmailWidget,
  URLWidget,
  TextareaWidget,
  HiddenWidget,
  ColorWidget,
  FileWidget,
  CheckboxWidget,
  CheckboxesWidget,
} from './widgets';

const widgets = {
  PasswordWidget,
  RadioWidget,
  UpDownWidget,
  RangeWidget,
  SelectWidget,
  TextWidget,
  DateWidget,
  DateTimeWidget,
  AltDateWidget,
  AltDateTimeWidget,
  EmailWidget,
  URLWidget,
  TextareaWidget,
  HiddenWidget,
  ColorWidget,
  FileWidget,
  CheckboxWidget,
  CheckboxesWidget,
};

const fields = {
  ArrayField,
  BooleanField,
  DescriptionField,
  NumberField,
  ObjectField,
  SchemaField,
  StringField,
  TitleField,
  UnsupportedField,
};

export {
  Form, FormGroup, FormLabel,
  Autocomplete,
  Checkbox,
  Input, InputGroup, InputGroupAddon,
  Radio,
  Select,
  Switch,
  Accordion, AccordionItem,
  Button, ButtonGroup,
  Dropdown,
  Menu, MenuBadge, MenuItem,
  fields, widgets,
};
