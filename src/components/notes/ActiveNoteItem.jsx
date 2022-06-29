import { showFormattedDate } from '../../utils/helper';

const ActiveNoteItem = ({
  id = 0,
  title = '',
  createdAt = '',
  body = '',
  onDelete = (id = 0) => {},
  onArchive = (id = 0) => {},
  onDetail = (id = 0) => {},
}) => (
  <article className="active-note-item">
    <div className="active-note-item-content">
      <h3 title={title}>{title}</h3>
      <p className="date">{showFormattedDate(createdAt)}</p>
      <p className="body">{body}</p>
    </div>

    <div className="active-note-item-action">
      <button
        onClick={onDelete.bind(null, id)}
        className="active-note-item-action__btn delete"
      >
        Hapus
      </button>

      <button
        onClick={onArchive.bind(null, id)}
        className="active-note-item-action__btn archive"
      >
        Arsipkan
      </button>

      <button
        onClick={onDetail.bind(null, id)}
        className="active-note-item-action__btn detail"
      >
        Detail
      </button>
    </div>
  </article>
);

export default ActiveNoteItem;
