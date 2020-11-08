import React from 'react';
import { Link } from 'react-router-dom';
import characters from './characters.json';

function CharacterList() {
  return (
    <div className="CharacterList">
      <h3>List of characters</h3>
      {characters.map(character => (
        <p key={character.id} className="Character">
          <Link to={`/characters/${character.id}`}>{character.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default CharacterList;
