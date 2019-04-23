import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import New from './New';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h1>hello</h1>,document.getElementById('root'));

function MyApp()
{
    return (
        <form>
            <label>gender</label>
            <input type="checkbox" name="gender" ></input>
        </form>
    )
}
ReactDOM.render(<MyApp />,document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
