import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Body from './Body'

const Home = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-9">
        <Header />
        <Body />
      </div>
    </div>
  )
}

export default Home