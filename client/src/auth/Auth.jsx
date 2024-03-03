import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginThunk } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Log = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {

    }, [authState])

    return (
        authState.error ? <p>{authState.error}</p> :
            authState.loading ? <p>Loading...</p> :
                <div className='main_reg'>
                <h1>Авторизация</h1>
                
                <div className="reg_inputes">
                    <div className="reg_text">
                        <input className='input_reg' value={username} onChange={(e) => { setUsername(e.target.value) }} type="text"  placeholder="Введите имя пользователя..." />
                        <input className='input_reg' value={password} onChange={(e) => { setPassword(e.target.value) }} type="password"  placeholder="Введите пароль..." />
                    </div>
                    
                    <button className='reg_btn' onClick={() => { dispatch(loginThunk({
                        username: username,
                        password: password
                    })) }}>войти</button>
                    <a className="footer_a">Еще нет аккаунта? <Link to={'/reg'} className="footer_a_link"><a>Создать</a></Link></a>

                </div>
                    
                </div>
    )
}

export default Log