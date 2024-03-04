import './App.css'
import { useState } from "react"
import Modal from './ModalAddTask';
import Task from './task';

const Group = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
        <div className="tasks_group">
            <div className="main_tasks_group">
                <p className="p_main_tasks_group">Группа</p>
                <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
                <button className='add_task_btn' onClick={toggleShowModal}>+</button>
            </div>
            <div className="tasks">
                <Task />
            </div>
            <button className='delete_tasks_group'>удалить группу</button>
        </div>
    
    </>
  )
}

export default Group