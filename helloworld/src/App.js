import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
//import {Greet} from './components/Greet';

/**
 * @author Nikhilprasad
 * when not using default export functionality, use below changes
 * //import Greet from './components/Greet'; -> import {Greet} from './components/Greet';
 */
function App() {
  return (
    <div className="App">
     { /*<Greet name="Props Batman" realName="BruceWayne">
        <p>This is children props</p>
      </Greet>
      <Greet name="Props Superman" realName="ClarkKent">
        <button>Action</button>
      </Greet>
      <Welcome name="Welcome props"/>
      <Hello /> 
      <Message/>
      */}
      <Greet name="Props Superman" realName="ClarkKent">
      </Greet>
      <Welcome name="Welcome props"/>
      <Counter></Counter>
    </div>
  );
}

export default App;
