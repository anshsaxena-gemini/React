import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hookcounter from './components/HookCounter';
import Counter from './components/Counter';
import Signup from './Signup';

class App extends Component{
  render(){
    return(
      <div className='App'>
      
       <Signup></Signup>
      </div>
    );
  }
}
export default App;