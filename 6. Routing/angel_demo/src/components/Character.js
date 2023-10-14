import {Link, Route, Routes, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Navigation} from './Navigation';

const baseUrl = 'https://swapi.dev/api/people';

export const Character = () => {
    const {characterId} = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/${characterId}`)
          .then(res => res.json())
          .then(data => {
              setCharacter(data);
          });
    }, [characterId]);

    const onBackButtonCLick = () => {
        navigate('/characters');
    };

    return (
      <>
          <h1>Character Page</h1>
          <h2>{character.name}</h2>
          <button onClick={onBackButtonCLick}>Back</button>
          <Navigation>
              <li><Link to={'films'}>Films</Link></li>
              <li><Link to={'vehicles'}>Vehicles</Link></li>
              <li><Link to={'starships'}>Starships</Link></li>
          </Navigation>


          <Routes>
              <Route path={'/films'} element={<h5>Films</h5>}/>
              <Route path={'/vehicles'} element={<h5>Vehicles</h5>}/>
              <Route path={'/starships'} element={<h5>Starships</h5>}/>
          </Routes>
      </>
    );
};