import { Component, Fragment } from 'react';

import {
  createNoteObject,
  showBodyScroll,
  hideBodyScroll,
} from './utils/helper';
import { getInitialData } from './utils/initial-data';

import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import AddNoteForm from './components/notes/AddNoteForm';
import NotesSearchBar from './components/notes/NotesSearchBar';
import NoteList from './components/notes/NoteList';
import NoteDetailModal from './components/modal/NoteDetailModal';
import DeleteNoteModal from './components/modal/DeleteNoteModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
      isSearchingNotes: false,
      showDetailModal: false,
      showDeleteModal: false,
      viewedNote: {},
    };

    // Bind 'this'
    this.deleteNote = this.deleteNote.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.searchNotesHandler = this.searchNotesHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.unarchiveNoteHandler = this.unarchiveNoteHandler.bind(this);
    this.detailNoteHandler = this.detailNoteHandler.bind(this);
    this.hideDetailModalHandler = this.hideDetailModalHandler.bind(this);
    this.hideDeleteModalHandler = this.hideDeleteModalHandler.bind(this);
  }

  deleteNote(id = 0) {
    this.setState((prevState) => ({
      ...prevState,
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  // Handler
  addNoteHandler(newNote = createNoteObject()) {
    this.setState((prevState) => ({
      ...prevState,
      notes: [...prevState.notes, newNote],
      isSearchingNotes: false,
    }));
  }

  searchNotesHandler(enteredTitle = '') {
    this.setState((prevState) => ({
      ...prevState,
      searchKeyword: enteredTitle,
      isSearchingNotes: enteredTitle.length !== 0,
    }));
  }

  deleteNoteHandler(id = 0) {
    const targetNote = this.state.notes.find((note) => note.id === id);

    if (!targetNote) return;

    // Open delete modal and set viewed note data
    this.setState((prevState) => ({
      ...prevState,
      showDeleteModal: true,
      viewedNote: { ...targetNote },
    }));

    hideBodyScroll();
  }

  archiveNoteHandler(id = 0) {
    const targetNoteIdx = this.state.notes.findIndex((note) => note.id === id);

    if (targetNoteIdx === -1) return;

    const updatedNotes = [...this.state.notes];
    updatedNotes[targetNoteIdx].archived = true;

    this.setState((prevState) => ({
      ...prevState,
      notes: updatedNotes,
    }));
  }

  unarchiveNoteHandler(id = 0) {
    const targetNoteIdx = this.state.notes.findIndex((note) => note.id === id);

    if (targetNoteIdx === -1) return;

    const updatedNotes = [...this.state.notes];
    updatedNotes[targetNoteIdx].archived = false;

    this.setState((prevState) => ({
      ...prevState,
      notes: updatedNotes,
    }));
  }

  detailNoteHandler(id = 0) {
    const targetNote = this.state.notes.find((note) => note.id === id);

    if (!targetNote) return;

    // Open detail modal and set viewed note data
    this.setState((prevState) => ({
      ...prevState,
      showDetailModal: true,
      viewedNote: { ...targetNote },
    }));

    hideBodyScroll();
  }

  hideDeleteModalHandler() {
    showBodyScroll();

    this.setState((prevState) => ({
      ...prevState,
      showDeleteModal: false,
      viewedNote: {},
    }));
  }

  hideDetailModalHandler() {
    showBodyScroll();

    this.setState((prevState) => ({
      ...prevState,
      showDetailModal: false,
      viewedNote: {},
    }));
  }

  render() {
    return (
      <Fragment>
        <AppHeader />

        {/* Note Detail Modal */}
        {this.state.showDetailModal && (
          <NoteDetailModal
            title={this.state.viewedNote.title}
            createdAt={this.state.viewedNote.createdAt}
            body={this.state.viewedNote.body}
            onHide={this.hideDetailModalHandler}
          />
        )}

        {/* Delete Note Modal */}
        {this.state.showDeleteModal && (
          <DeleteNoteModal
            id={this.state.viewedNote.id}
            title={this.state.viewedNote.title}
            onDelete={this.deleteNote}
            onHide={this.hideDeleteModalHandler}
          />
        )}

        {/* Add Note Form Section */}
        <section className="add-note">
          <AddNoteForm onAddNote={this.addNoteHandler} />
        </section>

        {/* Main Content Section */}
        <section className="main-content">
          <NotesSearchBar
            onSearchNotes={this.searchNotesHandler}
            searchKeyword={this.state.searchKeyword}
            isSearchingNotes={this.state.isSearchingNotes}
          />

          <NoteList
            notes={this.state.notes}
            searchKeyword={this.state.searchKeyword}
            isSearchingNotes={this.state.isSearchingNotes}
            onDeleteNote={this.deleteNoteHandler}
            onArchiveNote={this.archiveNoteHandler}
            onUnarchiveNote={this.unarchiveNoteHandler}
            onDetailNote={this.detailNoteHandler}
          />
        </section>

        <AppFooter />
      </Fragment>
    );
  }
}

export default App;
