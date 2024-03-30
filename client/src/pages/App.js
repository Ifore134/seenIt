//import logo from './logo.svg';
//import './App.css';
import HomePage from './homepage';
import About from './About';
import NavBar from '../components/navbar';
import CreatePost from './CreatePosts';
import PostPage from './PostPage';
import Registration from './Registration';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import Model from '../components/model';
import axios from 'axios';
import '../stylesheets/App.css'
let model = new Model();
function App() {

  const [posts,setPosts]=useState([]);//used for posts shown on the homepage
  const [viewPost, setViewPost]=useState(null);//Used for viewing a post when clicked
  const [comments, setComments]= useState([]);
  const [user, setUser] = useState(null);

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
  useEffect(() => {
    axios.get('http://localhost:8000/comments')
      .then(response => {
        console.log('Posts fetched successfully:', response.data);
        setComments(response.data); // Update the state with the fetched posts
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className='content'>
          <Routes className="routes">
            <Route path="/" element={<HomePage posts={posts} setView={setViewPost}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/create" element={<CreatePost posts={posts} setPosts={setPosts} />}/>
            <Route path="/postpage" element={<PostPage post={viewPost} 
            posts={posts} comments={comments}  setComments={setComments} setPosts={setPosts}/>}/>
            <Route path="/register"  element={<Registration setUser={setUser}   />}  />
          </Routes>

        </div>
      
      </div>
    </Router>
  );
}

export default App;
