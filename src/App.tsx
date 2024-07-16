import './App.css'
import { Button } from './components/Button';
import { Greet } from "./components/Greet";
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person";
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
        <Button handleClick={(event, id)=>{
          console.log('Button Clicked', event, id)
        }} />
        <Input value='' handleChange = { event => console.log(event)} />
    </div>
  );
}

export default App;
