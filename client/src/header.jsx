import { useState } from "react"
import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)


  return (
    <>
    <div className="header">
        <Link to={'/'}><a href="" className="nickname">@имя_пользователя</a></Link>
        <div className="a_header">
          <Link to={'/edit_user'} className="settings">настройки</Link>
          <button className="logout" onClick={() => { dispatch(logOut()) }}>выйти</button>
        </div>
    </div>
    </>
  )
}

export default Header
