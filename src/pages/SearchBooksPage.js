import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksList from "../components/BooksList";
class SearchBooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  updateQuery = (e) => {
    e.preventDefault();
    let text = e.target.value;
    this.setState({ query: text });
    this.props.handleSearch(text);
  };

  render() {
    const {
      filteredBooks,
      books,
      handleChangeShelf,
      handleResetSearch,
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={handleResetSearch}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event)}
            />
          </div>
        </div>
        <BooksList
          filteredBooks={filteredBooks}
          books={books}
          handleChangeShelf={handleChangeShelf}
        />
      </div>
    );
  }
}
export default SearchBooksPage;
