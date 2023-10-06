import {useState} from 'react';

export const ControlledForm = () => {
    const [values, setValues] = useState({});

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('m');
    const [userType, setUserType] = useState('corporate');
    const [tac, setTac] = useState(false);

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(username,password,age,bio, gender,userType,tac);
    };
    return (<form onSubmit={submitHandler}>
        <div>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" name="username"
                   onChange={usernameChangeHandler}
                   value={username}/>
        </div>
        <div>

            <label htmlFor="password">Password: </label>
            <input id="password" type="password" name="password"
                   onChange={passwordChangeHandler}
                   value={password}/>
        </div>
        <div>
            <label htmlFor="age">Age: </label>
            <input id="age" type="number" name="age"
                   value={age}
                   onChange={(e) => setAge(Number(e.target.value))}/>
        </div>
        <div>
            <label htmlFor="bio">Bio: </label>
            <textarea id="bio" name="bio" cols={30} rows={10}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="gender">Gender: </label>
            <select name="gender" id="gender"
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)}>
                <option value="m">Male</option>
                <option value="f">Female</option>
            </select>
        </div>
        <div>
            <label htmlFor="individual-user-type">Individual: </label>
            <input id="individual-user-type" type="radio" name="userType" value="individual"
                   onChange={(e)=>{setUserType(e.target.value)}}
                   checked={userType === 'individual'}/>
            <label htmlFor="corporate-user-type">Corporate: </label>
            <input id="corporate-user-type" type="radio" name="userType" value="corporate"
                   onChange={(e)=>{setUserType(e.target.value)}}
                   checked={userType === 'corporate'}/>
        </div>
        <div>
            <label htmlFor="tac">Tac: </label>
            <input id="tac" type="checkbox" name="tac"
                   checked={tac}
                   onChange={()=>setTac(!tac)}/>
        </div>
        <div>
            {/*<input type="submit" value="Login"/> */}
            <button type="submit">Login</button>
        </div>
    </form>);
};