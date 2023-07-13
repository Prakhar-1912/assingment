import React from 'react'
import { FiSettings } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { LuCalendarClock,LuPieChart } from "react-icons/lu";
import { BsTags } from "react-icons/bs";


const Sidebar = () => {
  return (
    <div className='w-[280px] h-[800px] bg-black text-white m-5 p-5 rounded-3xl'>
    <p className='text-4xl pl-4 font-semibold'>Board.</p>
        <div className='text-xl flex flex-col gap-72 pl-4'>
            <ul>
                <div className='mt-16 flex-col flex-wrap space-y-8'>
                    <div className=''>
                        <LuPieChart className='text-xl cursor-pointer block float-left mr-2' />
                        <li>Dashboard</li>
                    </div>

                    <div className=''>
                        <BsTags className='text-xl cursor-pointer block float-left mr-2' />
                        <li>Transations</li>
                    </div>

                    <div className=''>
                        <LuCalendarClock className='text-xl cursor-pointer block float-left mr-2' />
                        <li>Schedules</li>
                    </div>

                    <div className=''>
                        <BiUserCircle className='text-xl cursor-pointer block float-left mr-2' />
                        <li>Users</li>
                    </div>

                    <div className=''>
                        <FiSettings className='text-xl cursor-pointer block float-left mr-2' />
                        <li> Settings</li>
                    </div>

                </div>    
            </ul>
        
            <ul>
                <div className='flex-col space-y-2'>
                    <li className='text-lg'>Help</li>
                    <li className='text-lg'>Contact Us</li>
                </div>  
            </ul>        

        </div>
    </div>
  )
}

export default Sidebar