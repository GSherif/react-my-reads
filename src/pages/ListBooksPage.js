import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
class ListBooksPage extends Component {
  render() {
    const {handleChangeShelf} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf books={this.props.books} handleChangeShelf={handleChangeShelf}/>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Search Books</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default ListBooksPage;
