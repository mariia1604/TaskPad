const ModalSettings = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
            <div className="modal_head">
                <p className="p_modal_head">Настройки</p>
                <button className="close_card" onClick={onCloseButtonClick}>х</button>
            </div>
            <div className="change">
                <p className="p_name">Имя:</p>
                <p className="p_username">Имя пользователя</p>
                <div className="change_settings">
                    <input type="text" placeholder="Введите новое имя пользователя..." />
                    <button className="btn_add_card">сохранить</button>
                </div>
            </div>
            <div className="change">
                <p className="p_name">Email:</p>
                <p className="p_username">email@mail.ru</p>
                <div className="change_settings">
                    <input type="email" placeholder="Введите новый email пользователя..." />
                    <button className="btn_add_card">сохранить</button>
                </div>
            </div>
        </div>
      </div>
    );
};
  
export default ModalSettings;
  