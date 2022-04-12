import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Exercise1 from './Components/Exercise1';
import Exercise2 from './Components/Exercise2';
import Exercise3 from './Components/Exercise3';
import Exercise4 from './Components/Exercise4';
import Exercise5and6 from './Components/Exercise5and6';
import Exercise7 from './Components/Exercise7';
import Exercise8 from './Components/Exercise8';
import Exercise9 from './Components/Exercise9';
import NavBar from './Components/NavBar';

const App = () => {

  return (
    <div className='app'>
      <Router>
        <NavBar/>
        <div className='exercises'>
        <Routes>
          <Route element={<Exercise1 />} path="/exercicio1" />
          <Route element={<Exercise2 />} path="/exercicio2" />
          <Route element={<Exercise3 />} path="/exercicio3" />
          <Route element={<Exercise4 />} path="/exercicio4" />
          <Route element={<Exercise5and6 />} path="/exercicio5e6" />
          <Route element={<Exercise7 />} path="/exercicio7" />
          <Route element={<Exercise8 />} path="/exercicio8" />
          <Route element={<Exercise9 />} path="/exercicio9" />
        </Routes>
        </div>
       
      </Router>
    </div>

  );
}

export default App;
