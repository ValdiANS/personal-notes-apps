import Modal from './Modal';

const DeleteNoteModal = ({
  id = 0,
  title = '',
  onDelete = (id = 0) => {},
  onHide = () => {},
}) => {
  const deleteClickHandler = () => {
    onDelete(id);
    onHide();
  };

  return (
    <Modal className="delete-note-modal" onHide={onHide}>
      <p className="delete-note-modal__title">
        Apakah anda yakin akan menghapus catatan dengan judul <b>{title}</b>?
      </p>

      <div className="modal-action">
        <button onClick={onHide} className="modal-action__btn cancel">
          Tidak
        </button>

        <button
          onClick={deleteClickHandler}
          className="modal-action__btn submit"
        >
          Ya
        </button>
      </div>
    </Modal>
  );
};

export default DeleteNoteModal;
