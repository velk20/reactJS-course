import Book from './Book.js';
import { useEffect } from 'react';

export default function BookList(props) {
    const books = props.books.map((book, index) => (
        //! <Book
        //!     title={book.title}
        //!     author={book.author}
        //!     year_written={book.year_written}
        //!     price={book.price}
        //! />

        //* <Book data={book} />

        <Book key={index} {...book} />
    ));

    return <ul>{books}</ul>;
}
