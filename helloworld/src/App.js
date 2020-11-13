import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
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
    </div>
  );
}

export default App;
