import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/groupProject/api/books') // 確保這裡的路徑正確
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching the books data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><a href="./aboutus">About Us</a></li>
          <li><a href="./contactus">Contact Us</a></li>
          <li><a href="./detail">Detail</a></li>
        </ul>
      </nav>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Price: ${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
