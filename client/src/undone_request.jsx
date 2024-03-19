import { useEffect, useState } from 'react'
import './App.css'
import NotAccept from './notaccept'
import Accept from './accept'
import { useSelector } from 'react-redux'

function Undone_request() {
  const [date_of_creation, setDateOfCreation] = useState('')
  const [deadline, setDeadline] = useState('')
  const [task_name, setTaskName] = useState('')
  const [task_description, setTaskDescription] = useState('')

  const [my_requests, setMyRequests] = useState([])

  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetch("http://localhost:3000/undone_requests/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    })
      .then(data => data.json())
      .then(data => setMyRequests(data))
  }, [])

  return (
    <>
    {
      my_requests.map(el =>
          
        <div className="my_request">
          <a className="a_my_request">Задача создана {el.date_of_creation}</a>
          <a className="a_my_request">Название: {el.task_name}</a>
          <a className="a_my_request">Описание: {el.task_description}</a>
          <a className="a_my_request">Выполнить до: {el.deadline}</a>

          <div className="a_my_request">
            <Accept id={el.task_id} />
            <NotAccept id={el.task_id} />
          </div>
        </div>

         
      )
    }

    
      
    </>
  )
}

export default Undone_request
