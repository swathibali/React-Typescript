import './App.css';
import { Container } from './components/Container';
import { Counter } from './components/state/Counter';
import { User } from './components/state/User';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
