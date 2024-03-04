const ModalAddTask = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal_head">
            <p className="p_modal_head">Добавить задачу</p>
            <button className="close_card" onClick={onCloseButtonClick}>х</button>
          </div>
          <div className="body_add_task">
            <input type="text" placeholder="Название..." />
            <input type="text" placeholder="Описнаие..." />
            <input type="text" placeholder="Выполнить до..." />
            <div>
              <button className="btn_add_task">сохранить</button>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default ModalAddTask;
  