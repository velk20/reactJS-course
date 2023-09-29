import logo from './logo.svg';
import './App.css';
import {BookList} from './components/BookList';
import {CharacterList} from './components/CharacterList';

function App() {
  const books = [

  {
    title: 'War and Peace',
    author: 'Tolstoy, Leo',
    year: 1865,
    edition: 'Penguin',
    price: 12.7,
  },
  {
    title: 'Anna Karenina',
    author: 'Tolstoy, Leo',
    year: 1875,
    edition: 'Penguin',
    price: 13.5,
  },
  {
    title: 'Mrs. Dalloway',
    author: 'Woolf, Virginia',
    year: 1925,
    edition: 'Harcourt Brace',
    price: 25,
  },
  {
    title: 'The Hours',
    author: 'Cunnningham, Michael',
    year: 1999,
    edition: 'Harcourt Brace',
    price: 12.35,
  },
];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <CharacterList/>
        <BookList books={books}/>
      </header>
    </div>
  );
}

export default App;
