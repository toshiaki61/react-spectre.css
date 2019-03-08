import React, {FC} from 'react'

import {Icon} from 'elements/Icon'

import {attr} from 'utilities/attr'

import {FormIconProps} from './interfaces'

const FormIcon: FC<FormIconProps> = ({iconType, loading}) =>
  iconType ? (
    <Icon type={iconType} className="form-icon" />
  ) : (
    <i {...attr({className: 'form-icon', loading})} />
  )

export default FormIcon
