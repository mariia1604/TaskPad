import './App.css'
import { useState } from "react"
import Modal from './ModalFullTask';

const Task = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
        <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
        <button className="task" onClick={toggleShowModal}>
            <div className="task_main_about">
                <p className="p_task_main_name">Задача: </p>
                <p className="p_task_main_deadline">Выполнить до: </p>
            </div>
            <div className="circle" />
            
        </button>
        
    
    </>
  )
}

export default Task