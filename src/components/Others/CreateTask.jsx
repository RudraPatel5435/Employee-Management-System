import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDes, setTaskDes] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setnewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()
        setnewTask({taskTitle, taskDes, taskDate, category, active:false, newTask:true, failed:false, complete:false})

        const data = userData

        data.forEach(elem => {
            if (assignTo == elem.name){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setTaskDes('')
        setAssignTo('')
        setCategory('')
        setTaskDate('')
    }

  return (
    <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='mt-5 rounded-xl bg-zinc-800 flex w-full items-start justify-between flex-wrap p-5'>
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="">
                        <h3>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }} className='w-[70%] bg-zinc-900 outline-none border-2 border-zinc-400 p-1 text-white rounded' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div className="">
                        <h3>Date</h3>
                        <input value={taskDate} onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }} className='w-[70%] bg-zinc-900 outline-none border-2 border-zinc-400 p-1 text-white rounded' type="date" />
                    </div>
                    <div className="">
                        <h3>Assign To</h3>
                        <input value={assignTo} onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }} className='w-[70%] bg-zinc-900 outline-none border-2 border-zinc-400 p-1 text-white rounded' type="text" placeholder='Employee Name' />
                    </div>
                        <div className=""><h3>Category</h3>
                        <input value={category} onChange={(e)=>{
                            setCategory(e.target.value)
                        }} className='w-[70%] bg-zinc-900 outline-none border-2 border-zinc-400 p-1 text-white rounded' type="text" placeholder='Design, Dev, etc.' />
                    </div>
                </div>
                <div className="w-[40%] flex flex-col">
                    <h3>Description</h3>
                    <textarea value={taskDes} onChange={(e)=>{
                            setTaskDes(e.target.value)
                        }} className='bg-zinc-900 border-2 outline-none rounded border-zinc-400' cols='5' rows='5'></textarea>
                    <button className='bg-emerald-600 rounded p-2 mt-4'>Create Task </button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask
