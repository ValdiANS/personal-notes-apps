import { showFormattedDate } from '../../utils/helper';

const ArchivedNoteItem = ({
  id = 0,
  title = '',
  createdAt = '',
  body = '',
  onDelete = (id = 0) => {},
  onUnarchive = (id = 0) => {},
  onDetail = (id = 0) => {},
}) => (
  <article className="archived-note-item">
    <div className="archived-note-item-content">
      <h3 title={title}>{title}</h3>
      <p className="date">{showFormattedDate(createdAt)}</p>
      <p className="body">{body}</p>
    </div>

    <div className="archived-note-item-action">
      <button
        onClick={onDelete.bind(null, id)}
        className="archived-note-item-action__btn delete"
      >
        Hapus
      </button>

      <button
        onClick={onUnarchive.bind(null, id)}
        className="archived-note-item-action__btn archive"
      >
        Pindahkan
      </button>

      <button
        onClick={onDetail.bind(null, id)}
        className="archived-note-item-action__btn detail"
      >
        Detail
      </button>
    </div>
  </article>
);

export default ArchivedNoteItem;
