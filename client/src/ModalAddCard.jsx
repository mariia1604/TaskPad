const ModalAddCard = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <button className="close_add_card" onClick={onCloseButtonClick}>х</button>
          <div className="body">
            <input type="text" placeholder="Введите название доски..." />
            <button className="btn_add_card">добавить</button>
          </div>
        </div>
      </div>
    );
};
  
export default ModalAddCard;
  