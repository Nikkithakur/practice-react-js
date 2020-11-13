import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
//import {Greet} from './components/Greet';

/**
 * @author Nikhilprasad
 * when not using default export functionality, use below changes
 * //import Greet from './components/Greet'; -> import {Greet} from './components/Greet';
 */
function App() {
  return (
    <div className="App">
     <Greet/>
     <Welcome/>
     <Hello/>
    </div>
  );
}

export default App;
