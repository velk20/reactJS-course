const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

//* Vanilla JS
// const reactElement = React.createElement('h1', {}, 'Hello From react!!!');
// const reactHeaderElement = React.createElement(
//   'header',
//   { className: 'site-header' },
//   reactElement
// );

//* JSX
const reactHeaderElement = (
  <header className="site-header">
    <h1>Hello From React JSX</h1>
  </header>
);

root.render(reactHeaderElement);
