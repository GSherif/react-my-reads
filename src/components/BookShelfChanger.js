import React, { Component } from "react";
class BookShelfChanger extends Component {
  render() {
    const { label, handleChange, value, options } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          name={label}
          id={label}
          onChange={handleChange}
          value={value}
        >
          <option value="move" disabled>
            Move to...
          </option>
          {options.map(({ key, value: val }) => (
            <option key={key} value={key}>
              {val}
            </option>
          ))}
          <option key="NONE" value="None">
            None
          </option>
        </select>
      </div>
    );
  }
}
export default BookShelfChanger;
