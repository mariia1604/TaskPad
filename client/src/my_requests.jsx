import { useState } from 'react'
import './App.css'
import My_request from './my_request'
import { Link } from 'react-router-dom'
import Header from './header'

function My_requests() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="main">

    <Header />

      <h1>Выполненные задачи</h1>

      <form action="/users/register" method="GET">
        <div className='main_content'>
          <div className="workspaces">
            <My_request />
          </div>
        </div>
      </form>

    </div>
      
    </>
  )
}

export default My_requests
