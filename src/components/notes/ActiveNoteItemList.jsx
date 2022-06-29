import ActiveNoteItem from './ActiveNoteItem';

const ActiveNoteItemList = ({
  activeNotes = [],
  searchKeyword = '',
  isSearchingNotes = false,
  onDeleteNote = (id = 0) => {},
  onArchiveNote = (id = 0) => {},
  onDetailNote = (id = 0) => {},
}) => (
  <div className="active-note">
    <h2>Catatan Aktif</h2>

    {!isSearchingNotes && activeNotes.length === 0 && (
      <p className="active-note__empty-note">Tidak ada catatan aktif . . .</p>
    )}

    {isSearchingNotes && activeNotes.length === 0 && (
      <p className="active-note__empty-search">
        Hasil pencarian catatan aktif <b>{searchKeyword}</b> tidak ditemukan . .
        .
      </p>
    )}

    <div className="active-note-list">
      {activeNotes.map((activeNote) => (
        <ActiveNoteItem
          key={activeNote.id}
          id={activeNote.id}
          title={activeNote.title}
          createdAt={activeNote.createdAt}
          body={activeNote.body}
          onDelete={onDeleteNote}
          onArchive={onArchiveNote}
          onDetail={onDetailNote}
        />
      ))}
    </div>
  </div>
);

export default ActiveNoteItemList;
