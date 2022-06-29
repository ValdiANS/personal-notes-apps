import { Component } from 'react';

import { createNoteObject } from '../../utils/helper';

const CHARACTERS_LIMIT = 50;

class AddNoteForm extends Component {
  constructor(props) {
    /**
     * Props:
     * - onAddNote => add note object
     */

    super(props);

    this.state = {
      titleCharacterLimit: CHARACTERS_LIMIT,
      enteredTitle: '',
      enteredBody: '',
    };

    // Bind 'this'
    this.titleInputHandler = this.titleInputHandler.bind(this);
    this.notesChangeHandler = this.notesChangeHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleInputHandler(e = new InputEvent()) {
    const remainingCharacters = CHARACTERS_LIMIT - e.target.value.trim().length;

    if (remainingCharacters <= 0) {
      this.setState((prevState) => ({
        ...prevState,
        titleCharacterLimit: 0,
        enteredTitle: e.target.value.slice(0, CHARACTERS_LIMIT),
      }));

      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      titleCharacterLimit: remainingCharacters,
      enteredTitle: e.target.value,
    }));
  }

  notesChangeHandler(e = new InputEvent()) {
    this.setState((prevState) => ({
      ...prevState,
      enteredBody: e.target.value,
    }));
  }

  resetHandler() {
    this.setState({
      titleCharacterLimit: CHARACTERS_LIMIT,
      enteredTitle: '',
      enteredBody: '',
    });
  }

  submitHandler(e = new Event()) {
    e.preventDefault();

    const newNote = createNoteObject(
      this.state.enteredTitle.trim(),
      this.state.enteredBody.trim()
    );

    this.props.onAddNote(newNote);

    this.resetHandler();
  }

  render() {
    return (
      <form
        onSubmit={this.submitHandler}
        onReset={this.resetHandler}
        className="add-note__form"
      >
        <h2>Add Note Form</h2>

        <div className="add-note__form__input-field-container">
          <div className="add-note__form__input-field">
            <div className="add_note__form__input-field__title-label-container">
              <label htmlFor="title">Judul</label>

              <span
                className={`remaining-characters ${
                  this.state.titleCharacterLimit === 0
                    ? 'remaining-characters--invalid'
                    : ''
                }`}
              >
                Sisa Karakter: <span>{this.state.titleCharacterLimit}</span>
              </span>
            </div>

            <input
              type="text"
              name="title"
              id="title"
              value={this.state.enteredTitle}
              onInput={this.titleInputHandler}
              required
            />
          </div>

          <div className="add-note__form__input-field">
            <label htmlFor="notes">Catatan</label>

            <textarea
              name="notes"
              id="notes"
              rows="10"
              value={this.state.enteredBody}
              onChange={this.notesChangeHandler}
              required
            ></textarea>
          </div>
        </div>

        <div className="add-note__form__btn-container">
          <button type="reset" className="add-note__form__btn reset">
            Reset
          </button>

          <button type="submit" className="add-note__form__btn submit">
            Tambah
          </button>
        </div>
      </form>
    );
  }
}

export default AddNoteForm;
