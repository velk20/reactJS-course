import {useEffect, useState} from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
          .then(res => res.json())
          .then(result => setTodos(Object.values(result)))
          .catch(err => console.log(err));
    }, []);


    const changeStatusClickHandler = (todo) => {
        console.log(todo);

        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...todo, isCompleted: !todo.isCompleted})
        })
          .then(res => res.json())
          .then(modifiedTodo =>
            setTodos(oldTodos => oldTodos.map(todo => todo._id == modifiedTodo._id ? modifiedTodo : todo)))
          .catch(err => console.log(err));

        setTodos(oldTodos => oldTodos.map(x => x._id == todo._id ? {...x, isCompleted: !x.isCompleted} : x));
    }

    return (<table className="table">
          <thead>
          <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
          </tr>
          </thead>
          <tbody>
          {todos.map(t => <TodoItem key={t._id} {...t} onClick={changeStatusClickHandler}/>)}
          </tbody>
      </table>

    );
};