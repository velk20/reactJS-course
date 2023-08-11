import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import BookList from './components/BookList.js';
import Timer from './components/Timer.js';
import Clicker from './components/Clicker.js';
import Counter from './components/Counter.js';

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
    return (
        <div className="App">
            <header className="App-header">
                <Counter start={0} />
                <Timer start={0} />
                <Header>
                    <span>Book </span>Library
                </Header>
                <Clicker />

                <BookList books={books} />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
