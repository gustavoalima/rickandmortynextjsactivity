import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchCharacter = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      };
      fetchCharacter();
    }
  }, [id]);

  if (!character) return <p className="loading">Carregando...</p>;

  return (
    <div className="character-detail">
      <h1 className="character-name">{character.name}</h1>
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Espécie:</strong> {character.species}</p>
        <p><strong>Gênero:</strong> {character.gender}</p>
        <p><strong>Origem:</strong> {character.origin.name}</p>
      </div>
      <button onClick={() => router.back()} className="button">Voltar</button>
    </div>
  );
};

export default CharacterDetail;
