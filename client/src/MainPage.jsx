import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './header'

const MainPage = () => {

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const role = useSelector((state) => state.auth.role)

    return (
        <>

            {
                role === "ADMIN" ? 
                <div className='main'>
                    <h1>Личный кабинет администратора</h1>
                    <div className="main_profile">
                        <Link to={'/done_requests'}><a>Обработанные заявки</a></Link>
                        <Link to={'/undone_requests'}><a>Необработанные заявки</a></Link>
                        <Link to={'/edit_admin'}><a>Мои данные</a></Link>
                    </div>
                    <button onClick={() => {
                        dispatch(logOut())
                    }}>выйти</button>
                </div>
                 : 
                <div className='main'>
                    <Header />
                    <h1>Workspaces</h1>
                    <div className="main_content">
                        <div className="workspaces">
                            <div className="workspace_card"><Link to={'/add_request'}><a className="card_name">Добавить задачу</a></Link></div>
                            <div className="workspace_card"><Link to={'/my_requests'}><a className="card_name">Выполненные задачи</a></Link></div>
                            <div className="workspace_card"><Link to={'/done_requests'}><a className="card_name">Невыполненные задачи</a></Link></div>
                            <div className="workspace_card"><Link to={'/undone_requests'}><a className="card_name">В процессе</a></Link></div>
                        </div>
                    </div>
                </div>
            }
            
        </>
    )
}

export default MainPage