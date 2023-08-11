export default function Book(props) {
    return (
        <li>
            <h2>{props.title}</h2>
            <main>Price: {props.price}$</main>
            <footer>
                <span>Author: {props.author}</span>
                <br />
                <span>Year: {props.year}</span>
            </footer>
        </li>
    );
}
