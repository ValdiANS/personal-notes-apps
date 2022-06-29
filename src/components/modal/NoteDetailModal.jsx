import { showFormattedDate } from '../../utils/helper';
import Modal from './Modal';

const NoteDetailModal = ({
  title = '',
  createdAt = '',
  body = '',
  onHide = () => {},
}) => (
  <Modal className="note-detail-modal" onHide={onHide}>
    <h2>{title}</h2>
    <p className="date">{showFormattedDate(createdAt)}</p>
    <p className="body">{body}</p>

    <div className="modal-action">
      <button onClick={onHide} className="modal-action__btn cancel">
        Tutup
      </button>
    </div>
  </Modal>
);

export default NoteDetailModal;
