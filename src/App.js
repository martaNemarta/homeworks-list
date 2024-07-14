import Kitty from './Kitty.avif'
import './App.css';
import Dark from "./Dark.avif"
import { Plan } from './Plan';

function App() {
  return (
    <div className='App'>
      <div className='cat'>
      <img src={Kitty} alt='catt' width="200px"/>
      </div>
      <div className='cat'>
      <h1>Things to do after exams :</h1>
      </div>
      <Plan/>
      <div className='cat'>
        <img src={Dark} alt='dark' width="200px" /> 
        </div>
    </div>
  );
}

export default App;
