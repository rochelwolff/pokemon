
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllPokemon from './AllPokemon';
import SinglePokemon from './SinglePokemon';


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<AllPokemon/>} />
        <Route path='/pokemon/:id' element= {<SinglePokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
