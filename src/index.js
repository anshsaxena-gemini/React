import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import Greet from './components/Greet';
import Signup from './Signup';
import Register from './components/Register';
import HookUseState1 from './Hooks/HookUseState1';
import HookUseState2 from './Hooks/HookUseState2';
import HookUseState3 from './Hooks/HookUseState3';
import HookUseEffect1 from './Hooks/HookUseEffect1';
import UseEffect_Data_Fetch from './Hooks/UseEffect_Data_Fetch';
import UseEffect_Data_Fetching_OneByOne from './Hooks/UseEffect_DataFetching_OneByOne';
import Quiz_data_fetching from './Hooks/Quiz_data_fetching';
import UseReducer1 from './Hooks/UseReducer1';
import UseReducer2 from './Hooks/UseReducer2';
import DataFetching_UseReducer from './Hooks/DataFetching_UseReducer';
import USeRef from './Hooks/USeRef';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <USeRef/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
