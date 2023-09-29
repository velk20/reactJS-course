import {useEffect, useState} from 'react';

export const CharacterList = (props) => {
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        fetch(`https://swapi.dev/api/people`)
          .then(res => res.json())
          .then(res => setCharacters(res.results))
          .catch(err => console.log(err));
    },[]);

    return (
      <ul>
          {!characters.length && <li>Loading...</li>}
          {
              characters.map(c=>(
                <li key={c.name}>{c.name}</li>
              ))
          }
      </ul>
    );
};