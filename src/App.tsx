
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const personName = {
    fName: 'John',
    lName: 'Constantine'
  }

  const nameList = [
    {
      fName: 'John',
      lName: 'Constantine'
    },
    {
      fName: 'Clark',
      lName: 'Kent'
    },
    {
      fName: 'Bruce',
      lName: 'Wayne'
    }
  ]

  return (
    <div className="App">
      <Greet name='John' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
