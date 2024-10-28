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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {characters.map((character) => (
          <Link
            href={`/characters/${character.id}`}
            key={character.id}
            legacyBehavior
          >
            <div>
              <img src={character.image} alt={character.name} width="150" />
              <h3>{character.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <span> Página {page} </span>
        <button onClick={() => setPage(page + 1)}>Próxima</button>
      </div>
    </div>
  );
};

export default Characters;
