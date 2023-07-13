import React from 'react'
const TransactionCards = (props) => {
  return (
    <div className={`p-4 rounded-2xl m-0 h-[120px] w-[220px] ${props.className}`}>
        <img className='ml-[160px]' src={props.image} alt="" />
        <p className='text-xl'>{props.name}</p>
        <p className='text-2xl font-semibold'>{props.amount}</p>
    </div>
  )
}

export default TransactionCards