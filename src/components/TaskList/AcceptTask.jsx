import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = (props) => {

  const [userData, setUserData] = useContext(AuthContext)
  const employeeData = props.employeesData

  const taskCompleted = () =>{
    props.task.active=false
    props.task.completed=true
  
    employeeData.tasks.forEach((e, index) => {
      if (e.taskTitle == props.task.taskTitle) {
        employeeData.tasks[index] = props.task
      }
    })
  
    employeeData.taskCounts.completed += 1
    employeeData.taskCounts.active -= 1
  
    const updatedUserData = userData.map((user) => {
      if (user.name == employeeData.name){
        return {...employeeData}
      }
      return user
    })
  
    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedUserData))
  }

  const taskFailed = () =>{
    props.task.active=false
    props.task.failed=true
  
    employeeData.tasks.forEach((e, index) => {
      if (e.taskTitle == props.task.taskTitle) {
        employeeData.tasks[index] = props.task
      }
    })
  
    employeeData.taskCounts.failed += 1
    employeeData.taskCounts.active -= 1
  
    const updatedUserData = userData.map((user) => {
      if (user.name == employeeData.name){
        return {...employeeData}
      }
      return user
    })
  
    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedUserData))
  }

  return (
    <div>
      <div className="w-96 bg-yellow-400 text-black rounded-xl p-5 h-full flex-shrink-0">
        <div className="flex justify-between items-center">
            <h3 className='bg-cyan-700 text-white rounded px-3 py-1 items-center text-lg'>{props.task.category}</h3>
            <h4 className='text-sm'>{props.task.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{props.task.taskTitle}</h2>
        <p className='text-base mt-2'>{props.task.taskDescription}</p>
        <div className="flex justify-between mt-4 text-white">
            <button onClick={taskCompleted} className='bg-green-500 py-1 px-2 text-sm rounded font-semibold'>Mark as Completed</button>
            <button onClick={taskFailed} className='bg-red-500 py-1 px-2 text-sm rounded font-semibold'>Mark as Failed</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
