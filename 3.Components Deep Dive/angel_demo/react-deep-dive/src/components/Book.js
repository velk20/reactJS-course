import { useState, useEffect } from 'react';
import styles from './Book.module.css';

export default function Book(props) {
    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    //! every time no matter first time or updating or unmounting
    // useEffect(() => {
    //     console.log('Every time ' + props.title);
    // });

    //* only when first time rendering
    useEffect(() => {
        // debugger;
        console.log('Mounting ' + props.title);
    }, []);

    //* every time when updated withing these dependencies in the array
    useEffect(() => {
        console.log('Updating ' + props.title);
    }, [highlighted, props.title]);

    const clickHandler = (e) => {
        setHighlighted((oldState) => !oldState);
    };

    const deleteHandler = (e) => {
        setDeleted(true);
    };

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'blue';
    }

    if (deleted) {
        style.backgroundColor = 'red';
    }

    return (
        <li style={style} className={styles['book-item']}>
            <h2>{props.title}</h2>
            <main>Price: {props.price}$</main>
            <footer>
                <span>Author: {props.author}</span>
                <span className={styles.author}>
                    Year: {props.year_written}
                </span>
                <button onClick={clickHandler}>Highlight</button>
                <button onClick={deleteHandler}>Delete</button>
            </footer>
        </li>
    );
}
