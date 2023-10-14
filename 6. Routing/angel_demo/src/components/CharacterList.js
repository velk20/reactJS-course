import {useEffect, useState} from 'react';
import {CharacterListItem} from './CharacterListItem';

const baseUrl = 'https://swapi.dev/api/people';
export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
          .then(res => res.json())
          .then(data => {
              setCharacters(data.results);
          })
          .catch(err => console.log(err));
    }, []);

    return (
      <>
          <h1>Characters</h1>

          <ul>
              {characters.map((character) => (
              <CharacterListItem key={character.url} {...character}/>
              ))}
          </ul>
      </>
    );
}