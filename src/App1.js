import React, { useState } from 'react';
import BookList from './BookList';

const App1 = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchBooks = () => {
    if (searchQuery.trim() !== '') {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.items);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleSearch = () => {
    fetchBooks();
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {/* <h1>Online Bookstore</h1> */}
      <div>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <BookList books={books} />
    </div>
  );
};

export default App1;
