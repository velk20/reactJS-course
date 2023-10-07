import {useEffect, useRef, useState} from 'react';

export const ControlledForm = () => {
    const infoRef = useRef('');

    const [values, setValues] = useState({
        username: '', password: '', age: '', bio: '', gender: 'm', userType: 'individual', tac: false, egn: '', eik: ''
    });

    useEffect(() => {
            if (values.username && values.age) {
                infoRef.current.value = `${values.username} - ${values.age}`;
            }
    }, [values.username, values.age]);

    const changeHandler = (e) => {
        e.preventDefault();
        setValues(prevState => ({
            ...prevState, [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value,
        }));
    };

    // * old style
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [age, setAge] = useState('');
    // const [bio, setBio] = useState('');
    // const [gender, setGender] = useState('m');
    // const [userType, setUserType] = useState('corporate');
    // const [tac, setTac] = useState(false);

    // const usernameChangeHandler = (e) => {
    //     setUsername(e.target.value);
    // };
    //
    // const passwordChangeHandler = (e) => {
    //     setPassword(e.target.value);
    // };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (<form onSubmit={submitHandler}>
        <div>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" name="username"
                   onChange={changeHandler}
                   value={values.username}/>
        </div>
        <div>

            <label htmlFor="password">Password: </label>
            <input id="password" type="password" name="password"
                   onChange={changeHandler}
                   value={values.password}/>
        </div>
        <div>
            <label htmlFor="age">Age: </label>
            <input id="age" type="number" name="age"
                   value={values.age}
                   onChange={changeHandler}/>
        </div>
        <div>
            <label htmlFor="bio">Bio: </label>
            <textarea id="bio" name="bio" cols={30} rows={10}
                      value={values.bio}
                      onChange={changeHandler}/>
        </div>
        <div>
            <label htmlFor="gender">Gender: </label>
            <select name="gender" id="gender"
                    value={values.gender}
                    onChange={changeHandler}>
                <option value="m">Male</option>
                <option value="f">Female</option>
            </select>
        </div>
        <div>
            <label htmlFor="individual-user-type">Individual: </label>
            <input id="individual-user-type" type="radio" name="userType" value="individual"
                   onChange={changeHandler}
                   checked={values.userType == 'individual'}/>
            <label htmlFor="corporate-user-type">Corporate: </label>
            <input id="corporate-user-type" type="radio" name="userType" value="corporate"
                   onChange={changeHandler}
                   checked={values.userType == 'corporate'}/>
        </div>
        <div>
            <label htmlFor="{'identifier'}">{values.userType == 'individual' ? 'EGN' : 'EIK'}</label>
            {values.userType == 'individual' ?
              <input type={'text'} id={'identifier'} name={'egn'} value={values.egn} onChange={changeHandler}/> :
              <input type={'text'} id={'identifier'} name={'eik'} value={values.eik} onChange={changeHandler}/>}
        </div>
        <div>
            <label htmlFor="tac">Tac: </label>
            <input id="tac" type="checkbox" name="tac"
                   checked={values.tac}
                   onChange={changeHandler}/>
        </div>
        <div>
            {/*<input type="submit" value="Login"/> */}
            <button type="submit" disabled={!values.tac}>Login</button>
        </div>

        <div>
            <label htmlFor="uncontrolled-input">Ref controlled input</label>
            <input type="text" name={'uncontrolled'} id="uncontrolled-input" ref={infoRef}/>
        </div>
    </form>);
};