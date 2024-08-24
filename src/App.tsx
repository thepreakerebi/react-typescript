
import './App.css';
import Button from './components/Button';
import Input from './components/Input';


function App() {

 

  return (
    <div className="App">
      <Input value='' handleChange={(event) => console.log(event)} />
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id);
      }} />

    </div>
  );
}

export default App;
