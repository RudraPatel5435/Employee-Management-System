import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
      <div className="w-96 bg-yellow-400 text-black rounded-xl p-5 h-full flex-shrink-0">
        <div className="flex justify-between items-center">
            <h3 className='bg-cyan-700 text-white rounded px-3 py-1 items-center text-lg'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-base mt-2'>{data.taskDescription}</p>
        <div className="flex justify-between mt-4">
            <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
