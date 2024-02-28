import './App.css'

function Group() {

  return (
    <>
        <div className="tasks_group">
            <div className="main_tasks_group">
                <p className="p_main_tasks_group">Название группы задач</p>
                <button className='add_task_btn'>+</button>
            </div>
            <div className="tasks">
                <button className="task">
                    <div className="task_main_about">
                        <p className="p_task_main_name">Задача: </p>
                        <p className="p_task_main_deadline">Выполнить до: </p>
                    </div>
                    <div className="circle" />
                </button>
            </div>
            <button className='delete_tasks_group'>удалить группу</button>
        </div>
    
    </>
  )
}

export default Group