import { useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function Done_request() {
  const [date_of_creation, setDateOfCreation] = useState('')
  const [status, setStatus] = useState('')

  const [my_requests, setMyRequests] = useState([])

  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetch("http://localhost:3000/done_requests/", {
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
            <a className="a_my_request">Статус: <a className="notaccept_task">{el.status}</a></a>
          </div>

         
        )
      }
      
    </>
  )
}

export default Done_request
