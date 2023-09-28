import { useState, useEffect } from 'react';

export default function CharacterList(props) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then((res) => res.json())
            .then((res) => {
                setCharacters(res.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ul>
            {!characters.length && <li>Loading...</li>}
            {characters.map((character) => (
                <li key={character.name}>{character.name}</li>
            ))}
        </ul>
    );
}
