import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {MainNavigation} from './components/MainNavigation';
import {CharacterList} from './components/CharacterList';
import {Character} from './components/Character';

function App() {
    return (<div className="App">
        <header className="App-header">
            <MainNavigation />
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/about/*'} element={<h1>All abouts pages</h1>}/>
                <Route path={'/characters'} element={<CharacterList/>}/>
                <Route path={'/characters/:characterId/*'} element={<Character/>}/>
                <Route path={'*'} element={<h1>Error: 404</h1>}/>
            </Routes>
        </header>
    </div>);
}

export default App;
