//import logo from './logo.svg';
//import './App.css';
import HomePage from './homepage';
import About from './About';
import NavBar from '../components/navbar';
import CreatePost from './CreatePosts';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import Model from '../components/model';
import axios from 'axios';
import '../stylesheets/App.css'
let model = new Model();
function App() {

  const [posts,setPosts]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/posts')
      .then(response => {
        console.log('Posts fetched successfully:', response.data);
        setPosts(response.data); // Update the state with the fetched posts
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

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
