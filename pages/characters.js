// pages/characters.js
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setCharacters(response.data.results);
    };
    fetchCharacters();
  }, [page]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Personagens</h1>
      <div className="characters-grid">
        {characters.map((character) => (
          <Link href={`/characters/${character.id}`} key={character.id} legacyBehavior>
            <div className="character-card">
              <img src={character.image} alt={character.name} className="character-image" />
              <h3 className="character-name">{character.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="button-container">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="button">
          Anterior
        </button>
        <span> Página {page} </span>
        <button onClick={() => setPage(page + 1)} className="button">
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Characters;
