import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', genre: '' });
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://library-books-back-end.onrender.com/books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createBook = async () => {
    try {
      await axios.post('https://library-books-back-end.onrender.com/books', newBook);
      setNewBook({ title: '', author: '', genre: '' });
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`https://library-books-back-end.onrender.com/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  const editBook = async (id) => {
    try {
      const response = await axios.get(`https://library-books-back-end.onrender.com/books/${id}`);
      setSelectedBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async () => {
    try {
      await axios.put(`https://library-books-back-end.onrender.com/books/${selectedBook._id}`, selectedBook);
      setSelectedBook(null);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <div>
        <h2>Add New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        />
        <button onClick={createBook}>Add Book</button>
      </div>
      <div>
        <h2>All Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author} ({book.genre})
              <button onClick={() => deleteBook(book._id)}>Delete</button>
              <button onClick={() => editBook(book._id)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedBook && (
        <div>
          <h2>Edit Book</h2>
          <input
            type="text"
            placeholder="Title"
            value={selectedBook.title}
            onChange={(e) => setSelectedBook({ ...selectedBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={selectedBook.author}
            onChange={(e) => setSelectedBook({ ...selectedBook, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Genre"
            value={selectedBook.genre}
            onChange={(e) => setSelectedBook({ ...selectedBook, genre: e.target.value })}
          />
          <button onClick={updateBook}>Save</button>
          <button onClick={() => setSelectedBook(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Books;
