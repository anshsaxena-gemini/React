import React from 'react';
import ReactDOM from 'react-dom/client';
import UseStates from './Hooks/UseStates';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import Greet from './components/Greet';
import Signup from './Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signup></Signup>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
