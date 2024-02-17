import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'

const Header = () => {

  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  return (
    <>
    <div className="header">
        <a href="" className="nickname">@имя_пользователя</a>
        <div className="a_header">
          <a href="" className="settings">настройки</a>
          <button className="logout" onClick={() => { dispatch(logOut()) }}>выйти</button>
        </div>
    </div>
    </>
  )
}

export default Header
