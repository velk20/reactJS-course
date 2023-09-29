import {Book} from './Book';
import {useEffect} from 'react';

export const BookList = (props) => {

    const bookElements = props.books.map(book => <Book key={book.title} {...book}/>);

    return (
    <ul>
        {bookElements}
    </ul>
  )
}