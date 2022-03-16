import './App.css';
import Pokeapi from './services/Pokeapi'
import PokeapiTypes from './services/PokeapiTypes'

function App() {
  return (
    <div className="App">
      <h1>Hello Word !</h1>
      <Pokeapi/>
      <PokeapiTypes/>
    </div>
  );
}

export default App;
