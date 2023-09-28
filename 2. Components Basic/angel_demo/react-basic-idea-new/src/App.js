import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {BookList} from './components/BookList';
import {Timer} from './components/Timer';
import {Clicker} from './components/Clicker';
import {Counter} from './components/Counter';

function App() {
    const books = [
        {
            title: 'Northanger Abbey',
            author: 'Austen, Jane',
            year_written: 1814,
            edition: 'Penguin',
            price: 18.2,
        },
        {
            title: 'War and Peace',
            author: 'Tolstoy, Leo',
            year_written: 1865,
            edition: 'Penguin',
            price: 12.7,
        },
        {
            title: 'Anna Karenina',
            author: 'Tolstoy, Leo',
            year_written: 1875,
            edition: 'Penguin',
            price: 13.5,
        },
        {
            title: 'Mrs. Dalloway',
            author: 'Woolf, Virginia',
            year_written: 1925,
            edition: 'Harcourt Brace',
            price: 25,
        },
        {
            title: 'The Hours',
            author: 'Cunnningham, Michael',
            year_written: 1999,
            edition: 'Harcourt Brace',
            price: 12.35,
        },
    ];

    return (<div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <Header>
                  <span className="App-link">Hello there baby</span>
              </Header>
              <Counter/>
              <Clicker/>
              <Timer start={10}/>
              <BookList books={books}/>

          </header>
      </div>
    );
}

export default App;
