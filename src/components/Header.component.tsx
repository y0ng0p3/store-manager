import React, { useState, } from 'react'
import { DefaultButton } from '@fluentui/react'
import { NavLink } from 'react-router-dom'

export interface IHeaderProps {

}

export const HeaderComponent: React.FC<IHeaderProps> = () => {
  return (
    <nav className='app__header'>
      <NavLink to="listing">
        <DefaultButton
          text='Listing'
        />
      </NavLink>
      <NavLink to="visualize">
        <DefaultButton
          text='Visualize'
        />
      </NavLink>
    </nav>
  )
}
