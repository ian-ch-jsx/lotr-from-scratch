import { useState, useEffect } from 'react';
import BookList from '../../components/Books/BookList';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {books.map((book) => {
        return <BookList key={book.id} {...book} />;
      })}
    </div>
  );
}
