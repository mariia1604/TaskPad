import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './header'

function Add_request() {
  const [deadline, setDeadline] = useState('')
  const [task_name, setTaskName] = useState('')
  const [task_description, setTaskDescription] = useState('')

  const token = useSelector((state) => state.auth.token)


  async function add(task_name1, task_description1, deadline1) {
    const data = new FormData();

    data.append('task_name', task_name)
    data.append('task_description', task_description)
    data.append('deadline', deadline)
    
    console.log(data)
    await fetch("http://localhost:3000/add/", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        task_name, task_description, deadline
      })
    });
    setTaskName('')
    setTaskDescription('')
    setDeadline('')

  }

  return (
    <>

      <div className="main">

        <Header />

        <h1>Добавить задачу</h1>

        <form encType='multipart/form-data' onSubmit={(e) => {
          e.preventDefault()
          console.log("asjdsadjiasdj")
          add(task_name, task_description, deadline)

        }}>
          <div className='div_form'>
            <input type="text" id="place" name="place" placeholder="Название:" value={task_name} onChange={(e) => {
              setTaskName(e.target.value)
            }} required />
            <input type="text" id="task_description" name="task_description" placeholder="Описание:" value={task_description} onChange={(e) => {
              setTaskDescription(e.target.value)
            }} required />
            <input type='date' id="date" name="date" placeholder="Выполнить до:" value={deadline} onChange={(e) => {
              setDeadline(e.target.value)
            }} required />
          </div>
          <div>
            <input type="submit" value="сохранить" />
          </div>
        </form>

      </div>

    </>
  )
}

export default Add_request
