import {useParams} from 'react-router-dom';
import * as gameService from '../../../services/gameService';
import {useEffect, useState} from 'react';
export const Details = () => {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const {gameId} = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        gameService.getOne(gameId)
          .then(res=> {
              setGame(res);
          })

    }, [gameId]);
    
    const onCommentSubmit = async (e) => {
        e.preventDefault();
        await gameService.addComment(
           gameId,
        {username,
            comment},
        );

        setUsername('');
        setComment('');
    }

    const onCommentChange = (e) => {
        setComment(e.target.comment);
    }
    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }
  return (
    <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {game.comments && Object.values(game.comments).map(x=> (
                      <li key={x._id} className="comment">
                          <p>{x.username}: {x.comment}</p>
                      </li>
                    ))}
                </ul>
                {!Object.values(game.comments)?.length === 0 && <p className="no-comment">No comments.</p>}

            </div>

            {/* // <!-- Edit/Delete buttons ( Only htmlFor creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        {/* // <!-- Bonus --> */}
        {/* // <!-- Add Comment ( Only htmlFor logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onCommentSubmit}>
                <input type={'text'} name={'username'} placeholder={'pesho'} value={username} onChange={onUsernameChange} />
                <textarea name="comment" placeholder="Comment......" value={comment} onChange={onCommentChange}></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>

    </section>
  )
}