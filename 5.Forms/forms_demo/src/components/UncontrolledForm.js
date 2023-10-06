export const UncontrolledForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();

        // //! Old style
        // const formData = new FormData(e.currentTarget);
        // const username = formData.get('username');
        // const password = formData.get('password');
        // console.log(username, password);

        //! Hacking style
        const fromEntries = Object.fromEntries(new FormData(e.currentTarget));
        console.log(fromEntries);


    };

    return (
      <form onSubmit={submitHandler}>
          <div>
              <label htmlFor="username">Username: </label>
              <input id="username" type="text" name="username"/>
          </div>
          <div>

              <label htmlFor="password">Password: </label>
              <input id="password" type="password" name="password"/>
          </div>
          <div>
              {/*<input type="submit" value="Login"/> */}
              <button type="submit">Login</button>
          </div>
      </form>
    )
}