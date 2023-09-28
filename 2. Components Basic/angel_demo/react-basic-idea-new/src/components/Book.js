export  const Book = (props) => {
    return <article>
        <h2>{props.title}</h2>
        <div>Price: {props.price}$</div>
        <div>Year: {props.year}</div>
        <div>Author: {props.author}</div>

    </article>;
}