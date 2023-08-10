var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

//* Vanilla JS
// const reactElement = React.createElement('h1', {}, 'Hello From react!!!');
// const reactHeaderElement = React.createElement(
//   'header',
//   { className: 'site-header' },
//   reactElement
// );

//* JSX
var reactHeaderElement = React.createElement(
  "header",
  { className: "site-header" },
  React.createElement(
    "h1",
    null,
    "Hello From React JSX"
  )
);

root.render(reactHeaderElement);