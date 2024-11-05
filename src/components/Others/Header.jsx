import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='border-4 border-emerald-500 py-2 px-4 rounded-xl text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>{props.username} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-3 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
