import React, { Component } from "react";
import BookCard from "./BookCard";
import Shelf from "../constants/Shelf";
class BookShelf extends Component {
  render() {
    const { handleChangeShelf } = this.props;
    return (
      <div>
        {Object.entries(Shelf).map(([key, value]) => (
          <div className="bookshelf" key={key}>
            <h2 className="bookshelf-title">{value}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books
                  .filter((book) => book.shelf === key)
                  .map((book) => (
                    <BookCard
                      key={book.id}
                      bookDetails={book}
                      handleChangeShelf={handleChangeShelf}
                    />
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BookShelf;
