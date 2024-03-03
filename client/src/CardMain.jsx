import { useState } from "react"
import React from 'react'
import Modal from "./ModalMembers"
import { Link } from "react-router-dom";
import Workspace_task from "./workspace_tasks";

const CardMain = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
    setShowModal(!showModal);
  };

    return (

        <>
            <div className="workspace_card_main">
                <div className="workspace_card">
                <Link to={'/workspace'}><p className="card_name">"Название"</p></Link>
                    <div className="card_btns">
                        <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
                        <button className='btn_users' onClick={toggleShowModal}>участники</button>
                        <button className='btn_delete_card'>удалить</button>
                    </div>
                </div>
                <Workspace_task />
            </div>
            
        </>
    )
}

export default CardMain