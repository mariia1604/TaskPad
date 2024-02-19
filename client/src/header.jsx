import { useState } from "react"
import React from 'react'
import Modal from "./ModalSettings"
import './App.css'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'

const Header = () => {

  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <div className="header">
        <a href="" className="nickname">@имя_пользователя</a>
        <div className="a_header">
          <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
          <button className="settings" onClick={toggleShowModal}>настройки</button>
          <button className="logout" onClick={() => { dispatch(logOut()) }}>выйти</button>
        </div>
    </div>
    </>
  )
}

export default Header
