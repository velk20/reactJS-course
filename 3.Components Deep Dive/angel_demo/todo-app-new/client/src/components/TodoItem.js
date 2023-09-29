export const TodoItem = (props) => {


  return (
    <tr className={`todo ${props.isCompleted ? 'is-completed' : ''}`}>
        <td>{props.text}</td>
        <td>{props.isCompleted ? 'Complete' : 'Incomplete'}</td>
        <td className="todo-action">
            <button className="btn todo-btn" onClick={() =>props.onClick(props)}>Change status</button>
        </td>
    </tr>
  )
}