import { useState } from 'react'
import './App.css'
import Done_request from './done_request'
import { Link } from 'react-router-dom'
import Header from './header'

function Done_requests() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="main">

    <Header />

      <h1>Невыполненные задачи</h1>

      <form action="/users/register" method="GET">
        <div className='div_form'>
          <Done_request />
        </div>
      </form>

    </div>
      
    </>
  )
}

export default Done_requests
