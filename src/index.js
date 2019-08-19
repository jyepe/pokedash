import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokePage from './App';
import * as serviceWorker from './serviceWorker';

var baseUrl = "https://pokeapi.co/api/v2/pokemon";

ReactDOM.render(<PokePage baseUrl={baseUrl} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
