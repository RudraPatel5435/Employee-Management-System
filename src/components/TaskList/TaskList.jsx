import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[63%] py-5 w-full mt-10 flex items-center justify-start gap-5 flex-nowrap'>
      {data.tasks.map((elem, idx)=>{
        if(elem.newTask){
          return <NewTask key={idx} task={elem} employeesData={data} />
        }
        if(elem.active){
          return <AcceptTask key={idx} task={elem} employeesData={data} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList
