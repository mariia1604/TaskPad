import { useState } from "react"
import React from 'react'
import Header from './header'
import CardMain from './CardMain'
import Modal from "./NewModalAddCard"

const MainPage = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
    setShowModal(!showModal);
  };

    return (
        <>
        <div className="main">
            <Header />
            <h1>Ваши рабочие пространства</h1>
            <div className="main_content">
                <div className="workspaces">
                    <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
                    <button className="add_workspace" onClick={toggleShowModal}>добавить доску</button>
                    <CardMain/>
                    <CardMain/>
                    <CardMain/>
                    <CardMain/>               
                </div>
            </div>
        </div>
            
        </>
    )
}

export default MainPage