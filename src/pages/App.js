//import logo from './logo.svg';
//import './App.css';
import HomePage from './homepage';
import About from './About';
import NavBar from '../components/navbar';
import CreatePost from './CreatePosts';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React,{ useState } from 'react';


function App() {

  const [posts,setPosts]=useState([]);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage posts={posts}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/create" element={<CreatePost posts={posts} setPosts={setPosts}/>}/>
          </Routes>

        </div>
      
      </div>
    </Router>
  );
}

export default App;
