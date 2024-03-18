import { useState, useEffect } from "react"
import React from 'react'
import Modal from "./ModalMembers"
import { Link } from "react-router-dom";
import Workspace_task from "./workspace_tasks";
import { useSelector } from 'react-redux'

function CardMain() {

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const [name, setName] = useState('')

  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetch("http://localhost:3000/workspaces", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    })
      .then(data => data.json())
      .then(data => setName(data))
  }, [])

    return (

        <>
        {
        name.map(el =>

            <div className="workspace_card_main">
                <div className="workspace_card">
                <Link to={'/workspace'}><p className="card_name">{el.name}</p></Link>
                    <div className="card_btns">
                        <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
                        <button className='btn_users' onClick={toggleShowModal}>участники</button>
                        <button className='btn_delete_card'>удалить</button>
                    </div>
                </div>
                <Workspace_task />
            </div>
        )
        }
            
        </>
    )
}

export default CardMain