import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//styling
import 'bootstrap/dist/css/bootstrap.min.css';
//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import journalReducer from './redux/journalReducer'
//routing
import {BrowserRouter as Router} from 'react-router-dom';


let storeObj = createStore(journalReducer)

ReactDOM.render(
<Provider store={storeObj}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
