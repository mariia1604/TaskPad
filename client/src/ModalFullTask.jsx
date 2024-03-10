import Modal from "./ModalEditTask"
import { useState } from "react"

const ModalFullTask = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = event => {
      setIsVisible(current => !current);
    };
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal_head">
            <div class="dropdown">
              <button class="dropbtn">ещё</button>
              <div class="dropdown-content">
                <button>выполнить</button>
                <button>редактировать</button>
                <button>удалить</button>
              </div>
            </div>
            <button className="close_card" onClick={onCloseButtonClick}>х</button>
          </div>
          <div className="body_task_value">
            <div className="body_task_values">
              <div className="values">
                <p className="full_task_p">Задача:</p>
                <p className="full_task_value">Значение</p>
              </div>
              <div>
                <button className="edit_task_button" onClick={handleClick}>редактировать</button>
              </div>
            </div>
            <div className={`my-class ${isVisible ? 'visible' : 'hidden'}`}>
              <div className="inputs_edit">
                <input type="text" className="input_edit" placeholder="Введите новое название задачи..." />
                <button className="save_changes">сохранить</button>
              </div>
            </div>
          </div>
          <div className="body_task_value">
            <p className="full_task_p">Создана:</p>
            <p className="full_task_value">Значение</p>
          </div>
          <div className="body_task_value">
            <div className="body_task_values">
              <div className="values">
                <p className="full_task_p">Описание:</p>
                <p className="full_task_value">Значение</p>
              </div>
              <div>
                <button className="edit_task_button" onClick={handleClick}>редактировать</button>
              </div>
            </div>
            <div className={`my-class ${isVisible ? 'visible' : 'hidden'}`}>
              <div className="inputs_edit">
                <input type="text" className="input_edit" placeholder="Введите новое описание задачи..." />
                <button className="save_changes">сохранить</button>
              </div>
            </div>
          </div>
          <div className="body_task_value">
            <div className="body_task_values">
              <div className="values">
                <p className="full_task_p">Выполнить до:</p>
                <div className="value_deadline">
                  <div className="circle" />
                  <p className="full_task_value">Значение</p>
                </div>
              </div>
              <div>
                <button className="edit_task_button" onClick={handleClick}>редактировать</button>
              </div>
            </div>
            <div className={`my-class ${isVisible ? 'visible' : 'hidden'}`}>
              <div className="inputs_edit">
                <input type="datetime-local" className="input_edit" />
                <button className="save_changes">сохранить</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      
    );
};

export default ModalFullTask;
  