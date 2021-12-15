import React from 'react';
import './FilmList.css';

export default function FilmList({ title, box_office_total, academy_award_nominations }) {
  return (
    <div className="films-container">
      <div className="film-cards">
        <h1>{title}</h1>
        <p>box office total: {box_office_total} million</p>
        <p>{academy_award_nominations} academy award nominations</p>
      </div>
    </div>
  );
}
