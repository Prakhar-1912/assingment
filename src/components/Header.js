import React from 'react'
import bellicon from '../assests/bellicon.png'
import usericon from '../assests/usericon.png'




const Header = () => {
  return (
    <div className='flex justify-between flex-wrap'>
    <div>
        <p className='text-2xl m-2 font-bold'>Dashboard</p>
    </div>
    <div className='flex'>
        <input className='m-2 p-2 border border-white rounded-full' type="text" placeholder='Search...' />
        <img className='h-8 w-8 m-2' alt='Bell-icon' src={bellicon} />
        <img className='h-8 w-8 m-2' alt='user-icon'  src={usericon} />
    </div>    
    </div>
  )
}

export default Header