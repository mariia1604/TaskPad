import { useState } from 'react'
import Undone_request from './undone_request'
import { Link } from 'react-router-dom'
import './App.css'
import Header from './header'

function Undone_requests() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="main">

    <Header />

      <h1>В процессе</h1>

      <form action="/users/register" method="GET">
        <div className='div_form'>
          <Undone_request />
        </div>
      </form>

    </div>
      
    </>
  )
}

export default Undone_requests
