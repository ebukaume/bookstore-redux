import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ data, removeBook }) => (
  <>
    <div
      className="book flex justify-between"
    >
      <div className="details flex-column">
        <span className="category">{data.category}</span>
        <h2 className="title">{data.title}</h2>
        <span className="author">{data.author}</span>
      </div>
      <div className="actions flex justify-between align-center">
        <button
          className="red"
          onClick={() => removeBook(data)}
          type="button"
        >
          Remove
        </button>
        <div className="vertical" />
        <button
          type="button"
          className="blue"
        >
          Edit
        </button>
      </div>
    </div>
  </>
);

Book.propTypes = {
  removeBook: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
