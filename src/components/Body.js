import React from 'react'
import Transaction from './Transaction'
import LineChart from './LineChart'
import PieChart from './PieChart'
import Schedule from './Schedule'


const Body = () => {
  return (
    <div className='mr-20 ml-5 flex flex-col gap-3'>
    <Transaction />
    <LineChart />
    <div className='flex'>
    <PieChart />
    <Schedule />
    </div>
    
    </div>
  )
}

export default Body