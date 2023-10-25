import {Header} from './components/Header';
import {Home} from './components/Home';
import {Catalogue} from './components/Games/Catalogue';
import {Login} from './components/User/Login';
import {Register} from './components/User/Register';
import {Create} from './components/Games/Create';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import * as gameService from './services/gameService';
import {Details} from './components/Games/Details';


function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
          .then(res => {
              console.log(res);
              setGames(res);
          })
    }, []);

    const onCreateGameSubmit = async (data) => {

        const newGame = await gameService.create(data);
        setGames(state => [...state, newGame]);
        navigate('/catalogue');
    };

    return (
      <div id="box">
          <Header/>

          <main id="main-content">
              <Routes>
                  <Route path={'/'} element={<Home />}/>
                  <Route path={'/login'} element={<Login />}/>
                  <Route path={'/register'} element={<Register />}/>
                  <Route path={'/create'} element={<Create onCreate={onCreateGameSubmit}/>}/>
                  <Route path={'/catalogue'} element={<Catalogue games={games} />}/>
                  <Route path={'/catalogue/:gameId/details'} element={<Details />}/>
              </Routes>
          </main>
      </div>
    );
}

export default App;
