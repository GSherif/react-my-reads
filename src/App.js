import React from "react";
import "./App.css";
import ListBooksPage from "./pages/ListBooksPage";
import SearchBooksPage from "./pages/SearchBooksPage";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: "",
      filteredBooks: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  };

  handleSearchBook = (query) => {
    query.length > 0
      ? BooksAPI.search(query)
          .then((books) => {
            const updatedBooks = books.map((b) => {
              if (b.shelf === undefined) b.shelf = "None";
              return b;
            });
            this.setState({ filteredBooks: updatedBooks });
          })
          .catch((err) => {
            console.log(err);
          })
      : this.setState({ filteredBooks: [] });
  };

  resetSearch = () => {
    this.setState({ filteredBooks: [] });
  };

  handleChangeShelf = (book, shelf) => {
    const exist = this.state.books.filter((b) => b.id === book.id).length > 0;
    if (!exist) {
      this.setState({
        books: [...this.state.books, { ...book, shelf: shelf }],
      });
      BooksAPI.update(book, shelf);
    }
    if (exist) {
      const newBooks = this.state.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelf;
          BooksAPI.update(b, shelf);
        }
        return b;
      });
      this.setState({
        books: newBooks,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ListBooksPage
                books={this.state.books}
                handleChangeShelf={this.handleChangeShelf}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <SearchBooksPage
                books={this.state.books}
                filteredBooks={this.state.filteredBooks}
                handleSearch={this.handleSearchBook}
                handleChangeShelf={this.handleChangeShelf}
                handleResetSearch={this.resetSearch}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
