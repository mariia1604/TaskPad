import './App.css'
import Group from './group'
import Header from './header'

function Workspace() {

  return (
    <>
    <div className="main">
        <Header />
        <h1>Workspace</h1>
        <div className="workspace_main">
          <Group />
          <form className="add_tasks_group">
            <input type="text" className='input_add_group' placeholder='Добавить...' />
            <button className='add_group_btn'>+</button>
          </form>

        </div>
    </div>
    
    </>
  )
}

export default Workspace
