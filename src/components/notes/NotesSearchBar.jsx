import { Component } from 'react';

import SearchIcon from '../SVG/SearchIcon';

class NotesSearchBar extends Component {
  constructor(props) {
    /**
     * Props:
     * - onSearchNotes => search notes based on entered title
     * - searchKeyword => search keyword
     * - isSearchingNotes => is searching notes or not
     */

    super(props);

    this.state = {
      enteredTitle: '',
    };

    // Bind 'this'
    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleChangeHandler(e = new InputEvent()) {
    this.setState({
      enteredTitle: e.target.value,
    });
  }

  submitHandler(e = new Event()) {
    e.preventDefault();

    this.props.onSearchNotes(this.state.enteredTitle);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.submitHandler} className="search-bar__form">
          <input
            type="text"
            name="searchTitle"
            value={this.state.enteredTitle}
            onChange={this.titleChangeHandler}
            className="search-bar__form__input"
            placeholder="Cari Catatan"
          />

          <button type="submit" className="search-bar__form__btn">
            <SearchIcon className="search-icon" />
          </button>
        </form>

        {this.props.isSearchingNotes && (
          <span className="search-bar__span">
            Mencari catatan
            <strong>"{this.props.searchKeyword}"</strong>
          </span>
        )}
      </div>
    );
  }
}

export default NotesSearchBar;
