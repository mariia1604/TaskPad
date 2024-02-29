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
                    <input value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text"  placeholder="Введите имя пользователя..." />
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password"  placeholder="Введите пароль..." />
                    <button onClick={() => {
                        dispatch(loginThunk({
                            username: username,
                            password: password
                        }))
                    }}>войти</button>
                    <a className="footer_a">Еще нет аккаунта? <Link to={'/reg'}><a>Создать</a></Link></a>
                </div>
    )
}

export default Log