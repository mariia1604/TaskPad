import React from 'react'
import Header from './header'
import CardMain from './CardMain'

const MainPage = () => {

    return (
        <>
        <div className="main">
            <Header />
            <div className="main_content">
                <h1>Ваши рабочие пространства</h1>
                <div className="workspaces">
                    <button className="add_workspace">добавить доску</button>
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