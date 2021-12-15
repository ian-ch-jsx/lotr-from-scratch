
import { useState, useEffect } from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, '');
      setCharacters(data);
    };
    fetchData();
  }, [race]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, query);
      setCharacters(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [race, query, loading]);
  return (
    <>
      <div className="search">
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
        <input
          type="text"
          placeholder="search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button onClick={() => setLoading(true)}>search</button>
      </div>
      <div>
        {characters.map((character) => {
          return <CharacterList key={character.id} {...character} />;
        })}
      </div>
    </>
  );
}