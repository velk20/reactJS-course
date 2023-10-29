import {AuthContext} from '../../contexts/AuthContext';
import {useContext} from 'react';
import {useForm} from '../../hooks/useForm';
import {Link} from 'react-router-dom';

const LoginFormKeys ={
    Email: 'email',
    Password: 'password'
};
export const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
      <section id="login-page" className="auth">
          <form id="login" method={'POST'} onSubmit={onSubmit}>

              <div className="container">
                  <div className="brand-logo"></div>
                  <h1>Login</h1>
                  <label htmlFor="email">Email:</label>
                  <input value={values[LoginFormKeys.Email]}
                         onChange={changeHandler}
                         type="email" id="email" name={LoginFormKeys.Email} placeholder="Sokka@gmail.com"/>

                  <label htmlFor="login-pass">Password:</label>
                  <input value={values[LoginFormKeys.Password]}
                         onChange={changeHandler}
                         type="password" id="login-password" name={LoginFormKeys.Password}/>
                  <input type="submit" className="btn submit" value="Login"/>
                  <p className="field">
                      <span>If you don't have profile click <Link to="/register">here</Link></span>
                  </p>
              </div>
          </form>
      </section>
    );
};