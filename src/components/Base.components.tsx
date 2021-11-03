import React, { useState, } from 'react'
import { DefaultButton } from '@fluentui/react'

export interface IBaseProps {

}

export const BaseComponent: React.FC<IBaseProps> = () => {
  return (
    <div>
      hello world
    </div>
  )
}
