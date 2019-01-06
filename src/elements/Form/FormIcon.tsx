import React, {SFC} from 'react'

import {Icon} from '@elements/Icon'

import {attr} from '@utils/attr'

import {FormIconProps} from './interfaces'

const FormIcon: SFC<FormIconProps> = ({iconType, loading}) =>
  iconType ? (
    <Icon type={iconType} className="form-icon" />
  ) : (
    <i {...attr({className: 'form-icon', loading})} />
  )

export default FormIcon
