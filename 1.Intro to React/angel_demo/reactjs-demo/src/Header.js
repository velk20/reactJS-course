import logo from './logo.svg';

export const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {props.text} and {props.name}
      </p>
    </header>
  );
};
