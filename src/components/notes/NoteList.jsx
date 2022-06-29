import { Fragment } from 'react';
import ActiveNoteItemList from './ActiveNoteItemList';
import ArchivedNoteItemList from './ArchivedNoteItemList';

const NoteList = ({
  notes = [],
  searchKeyword = '',
  isSearchingNotes = false,
  onDeleteNote = (id = 0) => {},
  onArchiveNote = (id = 0) => {},
  onUnarchiveNote = (id = 0) => {},
  onDetailNote = (id = 0) => {},
}) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  let searchedActiveNotes = [];
  let searchedArchivedNotes = [];

  if (isSearchingNotes) {
    searchedActiveNotes = activeNotes.filter((activeNote) =>
      activeNote.title.toLowerCase().includes(searchKeyword)
    );

    searchedArchivedNotes = archivedNotes.filter((archivedNote) =>
      archivedNote.title.toLowerCase().includes(searchKeyword)
    );
  }

  return (
    <div className="notes-container">
      {!isSearchingNotes && (
        <Fragment>
          <ActiveNoteItemList
            activeNotes={activeNotes}
            isSearchingNotes={isSearchingNotes}
            onDeleteNote={onDeleteNote}
            onArchiveNote={onArchiveNote}
            onDetailNote={onDetailNote}
          />

          <ArchivedNoteItemList
            archivedNotes={archivedNotes}
            isSearchingNotes={isSearchingNotes}
            onDeleteNote={onDeleteNote}
            onUnarchiveNote={onUnarchiveNote}
            onDetailNote={onDetailNote}
          />
        </Fragment>
      )}

      {isSearchingNotes && (
        <Fragment>
          <ActiveNoteItemList
            activeNotes={searchedActiveNotes}
            searchKeyword={searchKeyword}
            isSearchingNotes={isSearchingNotes}
            onDeleteNote={onDeleteNote}
            onArchiveNote={onArchiveNote}
            onDetailNote={onDetailNote}
          />

          <ArchivedNoteItemList
            archivedNotes={searchedArchivedNotes}
            searchKeyword={searchKeyword}
            isSearchingNotes={isSearchingNotes}
            onDeleteNote={onDeleteNote}
            onUnarchiveNote={onUnarchiveNote}
            onDetailNote={onDetailNote}
          />
        </Fragment>
      )}
    </div>
  );
};

export default NoteList;
