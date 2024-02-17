import React from 'react'

const CardMain = () => {

    return (
        <>
            <div className="workspace_card_main">
                <div className="workspace_card">
                    <p className="card_name">"Название"</p>
                    <div className="card_btns">
                        <button className='btn_users'>участники</button>
                        <button className='btn_delete_card'>удалить</button>
                    </div>
                </div>
                <div className="workspace_tasks">
                    <div className="circle" />
                    <p className="card_task">Задача</p>
                </div>
            </div>
            
        </>
    )
}

export default CardMain