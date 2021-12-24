import React, { Component } from "react";
import Shelf from "../constants/Shelf";
import BookShelfChanger from "./BookShelfChanger";
class BookCard extends Component {
  onChangeShelf = (e) => {
    this.props.handleChangeShelf(this.props.bookDetails, e.target.value);
  };

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  this.props.bookDetails.imageLinks &&
                  this.props.bookDetails.imageLinks.thumbnail
                    ? this.props.bookDetails.imageLinks.thumbnail
                    : ""
                })`,
              }}
            />
            <BookShelfChanger
              {...{
                label: "Shelf",
                handleChange: this.onChangeShelf,
                value: `${this.props.bookDetails.shelf}`,
                // defaultValue: `None`,
                options: Object.entries(Shelf).map(([key, value]) => ({
                  key,
                  value,
                })),
              }}
            />
          </div>
          <div className="book-title">{this.props.bookDetails.title}</div>
          <div className="book-authors">
            {this.props.bookDetails.authors
              ? this.props.bookDetails.authors
              : ""}
          </div>
        </div>
      </li>
    );
  }
}
export default BookCard;
