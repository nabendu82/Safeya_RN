import './App.css';
import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet />
      <ReactGreet />
      <Greeting />
      <Welcome />
    </div>
  );
}

export default App;
