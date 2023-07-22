
import './App.css';
import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import App1 from './App1';
import BookCard1 from './BookCard1';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
    fetchBooks('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
  }, []);

  const fetchBooks = (query) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks((prevBooks) => [...prevBooks, ...data.items]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='compositions'>
      <h1>Online Bookstore</h1>
    <App1/>
     <BookCard1/>
     <BookList books={books} />
      </div>
      
      

  
  );
};

export default App;




