import React, { useState } from 'react';

const BookCard1 = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBookClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div onClick={handleBookClick}>
      {book && book.volumeInfo ? (
        <React.Fragment>
          <h2>{book.volumeInfo.title}</h2>
          {isExpanded ? (
            <div>
              {/* {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              )} */}
              {/* {book.volumeInfo.description && <p>{book.volumeInfo.description}</p>}
              {book.volumeInfo.previewLink && (
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                  Read Now
                </a>
              )} */}
              {book.volumeInfo.infoLink && (
                <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
              )}
            </div>
          ) : (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          )}
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookCard1;


