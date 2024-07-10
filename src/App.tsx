import './App.css'
import { Greet } from "./components/Greet";
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person";
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar text</Heading>
      </Oscar>
      <Greet name='Swathi' isLoggedIn={false}/>
    </div>
  );
}

export default App;
