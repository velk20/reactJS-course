import {useEffect, useState} from 'react';
import styles from './Book.module.css';
export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Mounting: ' + props.title);
    }, []);

    useEffect(()=>{
        console.log('Updating:  ' + props.title);

    },[highlighted])

    const clickHandler = () => {
        setHighlighted(state => !state);
    };

    const deleteHandler = () => {
        setDeleted(true);
    }

    let style = {};
    if (highlighted){
        style.backgroundColor = 'red';
    }

    if (deleted){
        return <h2>deleted</h2>
    }

  return (
    <li className={styles['book-item']} style={{backgroundColor : highlighted ? 'blue' : 'black'}}>
        <h2>{props.title}</h2>
        <main>Price: {props.price}$</main>
        <footer>
            <span>Author: {props.author}</span>
            <br />
            <span>Year: {props.year}</span>
            <button onClick={clickHandler}>Highlight</button>
            <button onClick={deleteHandler}>Delete</button>
        </footer>
    </li>
  )
}