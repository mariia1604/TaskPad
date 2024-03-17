import { useState } from 'react'
import { useSelector } from 'react-redux'


const ModalAddCard = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }

    const [name, setName] = useState('')

    const token = useSelector((state) => state.auth.token)

    async function add(name1) {
      const data = new FormData();

      data.append('name', name)

      console.log(data)

      await fetch("http://localhost:3000/add_workspace/", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: data
    });
    setName('')

    }
  
    return (
      <div className="modal-wrapper">
        <form encType='multipart/form-data' onSubmit={(e) => { e.preventDefault()
          console.log("asjdsadjiasdj")
          add(name)

        }}>
          <div className="modal">
            <div className="modal_head">
              <p className="p_modal_head">Добавить доску</p>
              <button className="close_card" onClick={onCloseButtonClick}>х</button>
            </div>
            <div className="body">
              <input type="text" placeholder="Введите название доски..." value={name} onChange={(e) => { setName(e.target.value) }} required />
              <button type='submit' className="btn_add_card">добавить</button>
            </div>
          </div>
        </form>
        
      </div>
    );
};
  
export default ModalAddCard;
  