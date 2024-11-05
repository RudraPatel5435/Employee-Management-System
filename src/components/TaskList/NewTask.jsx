import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      <div className="w-96 bg-blue-500 rounded-xl p-5 h-full flex-shrink-0">
        <div className="flex justify-between items-center">
            <h3 className='bg-cyan-700 rounded px-3 py-1 items-center text-lg'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-base mt-2'>{data.taskDescription}</p>
        <div className="mt-4">
        <button className='bg-yellow-500 px-2 py-1 text-sm rounded'>Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
