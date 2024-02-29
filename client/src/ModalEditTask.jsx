const ModalEditTask = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal_head">
            <p className="p_modal_head">Добавить доску</p>
            <button className="close_card" onClick={onCloseButtonClick}>х</button>
          </div>
          <div className="body">
            <input type="text" placeholder="Введите название доски..." />
            <button className="btn_add_card">добавить</button>
          </div>
        </div>
      </div>
    );
};
  
export default ModalEditTask;
  