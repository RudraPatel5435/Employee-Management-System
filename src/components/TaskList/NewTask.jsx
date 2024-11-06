import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = (props) => {
  const [userData, setUserData] = useContext(AuthContext)
  const employeeData = props.employeesData

  const taskAccepted = () =>{
    props.task.newTask=false
    props.task.active=true

    employeeData.tasks.forEach((e, index) => {
      if (e.taskTitle == props.task.taskTitle) {
        employeeData.tasks[index] = props.task
      }
    })

    employeeData.taskCounts.active = employeeData.taskCounts.active + 1
    employeeData.taskCounts.newTask = employeeData.taskCounts.newTask - 1
    userData.forEach((e,index)=>{
      if (e.name == employeeData.name){
        userData[index] = employeeData
      }
    })
    console.log(userData[0])
    localStorage.setItem('employees', JSON.stringify(userData))
  }

  return (
    <div>
      <div className="w-96 bg-blue-500 rounded-xl p-5 h-full flex-shrink-0">
        <div className="flex justify-between items-center">
            <h3 className='bg-cyan-700 rounded px-3 py-1 items-center text-lg'>{props.task.category}</h3>
            <h4 className='text-sm'>{props.task.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{props.task.taskTitle}</h2>
        <p className='text-base mt-2'>{props.task.taskDescription}</p>
        <div className="mt-4">
        <button onClick={taskAccepted} className='bg-yellow-500 px-2 py-1 text-sm rounded font-semibold'>Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
