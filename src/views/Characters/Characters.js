import { useState, useEffect } from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, query);
      setCharacters(data);
      console.log(data);
    };
    fetchData();
  }, [race, query]);
  return (
    <div>
      {characters.map((character) => {
        return <CharacterList key={character.id} {...character} />;
      })}
    </div>
  );
}
