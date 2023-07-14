import React from 'react'
const TransactionCards = (props) => {
  return (
    <div className={`p-3 rounded-2xl m-0 h-[100px] w-[220px] ${props.className}`}>
        <img className='ml-[160px] h-5 w-5' src={props.image} alt="" />
        <p className='text-base'>{props.name}</p>
        <p className='text-lg font-semibold'>{props.amount}</p>
    </div>
  )
}

export default TransactionCards