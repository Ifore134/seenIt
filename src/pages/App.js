//import logo from './logo.svg';
//import './App.css';
import HomePage from './homepage';
import About from './About';
import NavBar from '../components/navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            
          </Routes>

        </div>
      
      </div>
    </Router>
  );
}

export default App;
