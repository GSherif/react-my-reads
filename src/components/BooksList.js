import React, { Component } from "react";
import BookCard from "./BookCard";

class BooksList extends Component {
  render() {
    const { filteredBooks, books, handleChangeShelf } = this.props;
    const updatedBooksList =
      filteredBooks.length > 0
        ? filteredBooks.map((book) => {
            books.map((b) => {
              if (b.id === book.id) {
                book.shelf = b.shelf;
              }
              return b;
            });
            return book;
          })
        : [];
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {updatedBooksList.length > 0 ? (
            updatedBooksList.map((book) => (
              <BookCard
                key={book.id}
                bookDetails={book}
                handleChangeShelf={handleChangeShelf}
              />
            ))
          ) : (
            <div />
          )}
        </ol>
      </div>
    );
  }
}
export default BooksList;
