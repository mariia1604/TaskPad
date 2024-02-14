import './App.css'

function Header() {

  return (
    <>
    <div className="header">
        <a href="" className="nickname">@имя_пользователя</a>
        <div className="a_header">
            <a href="" className="settings">настройки</a>
            <a href="" className="logout">выйти</a>
        </div>
    </div>
    </>
  )
}

export default Header
