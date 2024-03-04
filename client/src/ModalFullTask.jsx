const ModalFullTask = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }

  
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
            <p className="full_task_p">Задача:</p>
            <p className="full_task_value">Значение</p>
          </div>
          <div className="body_task_value">
            <p className="full_task_p">Создана:</p>
            <p className="full_task_value">Значение</p>
          </div>
          <div className="body_task_value">
            <p className="full_task_p">Описание:</p>
            <p className="full_task_value">Значение</p>
          </div>
          <div className="body_task_value">
            <p className="full_task_p">Выполнить до:</p>
            <div className="value_deadline">
              <div className="circle" />
              <p className="full_task_value">Значение</p>
            </div>
          </div>
        </div>
      </div>
      
      
    );
};

export default ModalFullTask;
  