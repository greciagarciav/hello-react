import React from 'react'; // Análogo a createElement() - jsx para escribir html en JS
import ReactDOM from 'react-dom'; // Análogo a appendChild()
// import './index.css';
// eslint-disable-next-line
import App from './components/App';
// import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
// import BadgeNew from './pages/BadgeNew';
// import Badges from './pages/Badges';

const container = document.getElementById('root')

ReactDOM.render( //método de react para hacer el appendChild - se le pasa el qué y el dónde renderizar
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <App/>, container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
