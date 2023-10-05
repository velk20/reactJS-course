import {Header} from './components/common/Header';
import {Footer} from './components/common/Footer';
import {Search} from './components/search/Search';
import {UserList} from './components/user-list/UserList';
import {useEffect, useState} from 'react';
import * as userService from './services/userService';
import {deleteUser} from './services/userService';


function App() {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        userService.getAll()
          .then(users => setUsers(users))
          .catch(err => console.log(err));
    }, []);

    const addUserHandler = (user) => {
        setUsers(oldUsers => [...oldUsers, user]);
    }

    const editUserHandler = (user) => {
        setUsers(oldUsers => oldUsers.map(u => u._id === user._id ? user : u));
    }

    const deleteUserHandler = (userId) => {
        setUsers(oldUsers => oldUsers.filter(u => u._id !== userId))
    }

    return (
      <div className="App">
        <Header/>
        <main className="main">
            <section className="card users-container">
                <Search/>
                <UserList users={users} addUser={addUserHandler} editUser={editUserHandler} deleteUser={deleteUserHandler}/>
            </section>
        </main>
        <Footer/>
    </div>);
}

export default App;
