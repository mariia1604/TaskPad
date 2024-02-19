const ModalMembers = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
            <div className="modal_head">
                <p className="p_modal_head">Менеджер участников</p>
                <button className="close_card" onClick={onCloseButtonClick}>х</button>
            </div>
            <div className="body">
                <input type="text" placeholder="Введите имя пользователя..." />
                <button className="btn_add_card">добавить</button>
            </div>
            <div className="users_added">
                <p className="p_users_added">Участники</p>
                <div className="added_members">
                    <div className="added_member">
                        <p className="p_added_member">@имя_пользователя</p>
                        <button className="btn_delete_member">удалить</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};
  
export default ModalMembers;
  