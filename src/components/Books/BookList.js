import React from 'react';
import './BookList.css';

export default function BookList({ title }) {
  return (
    <div className="books">
      <h1>{title}</h1>
    </div>
  );
}
