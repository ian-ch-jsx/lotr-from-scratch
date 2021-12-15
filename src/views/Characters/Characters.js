import { useState, useEffect } from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setCharacters(data);
    };
    fetchData();
  }, [race]);
  return (
    <>
      <div>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
      </div>
      <div>
        {characters.map((character) => {
          return <CharacterList key={character.id} {...character} />;
        })}
      </div>
    </>
  );
}
