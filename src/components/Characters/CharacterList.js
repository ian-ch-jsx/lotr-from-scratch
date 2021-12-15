import React from 'react';
import './CharacterList.css';

export default function CharacterList({ name }) {
  return (
    <div className="names">
      <p>{name}</p>
    </div>
  );
}
