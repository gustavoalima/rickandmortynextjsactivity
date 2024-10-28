// pages/characters/[id].js
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

  if (!character) return <p>Carregando...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} width="300" />
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Gênero: {character.gender}</p>
      <p>Origem: {character.origin.name}</p>
    </div>
  );
};

export default CharacterDetail;
