import ArchivedNoteItem from './ArchivedNoteItem';

const ArchivedNoteItemList = ({
  archivedNotes = [],
  searchKeyword = '',
  isSearchingNotes = false,
  onDeleteNote = (id = 0) => {},
  onUnarchiveNote = (id = 0) => {},
  onDetailNote = (id = 0) => {},
}) => (
  <details className="archived-note">
    <summary>
      <h2>Arsip</h2>
    </summary>

    {!isSearchingNotes && archivedNotes.length === 0 && (
      <p className="active-note__empty-note">Tidak ada arsip catatan . . .</p>
    )}

    {isSearchingNotes && archivedNotes.length === 0 && (
      <p className="active-note__empty-search">
        Hasil pencarian arsip catatan <b>{searchKeyword}</b> tidak ditemukan . .
        .
      </p>
    )}

    <div className="archived-note-list">
      {archivedNotes.map((archivedNote) => (
        <ArchivedNoteItem
          key={archivedNote.id}
          id={archivedNote.id}
          title={archivedNote.title}
          createdAt={archivedNote.createdAt}
          body={archivedNote.body}
          onDelete={onDeleteNote}
          onUnarchive={onUnarchiveNote}
          onDetail={onDetailNote}
        />
      ))}
    </div>
  </details>
);

export default ArchivedNoteItemList;
