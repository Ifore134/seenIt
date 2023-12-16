import axios from 'axios';
export default function CreatePost(props){
    function createPost(postData) {
        axios.post('http://localhost:8000/posts', postData)
          .then(response => {
            if (response.status === 201) {
              console.log('Post created successfully:', response.data);
            } else {
              console.log('Received response, but with a non-success status:', response.status);
            }
          })
          .catch(error => {
            if (error.response) {
              console.error('Server responded with an error:', error.response.status, error.response.data);
            } else if (error.request) { 
              console.error('No response received:', error.request);
            } else {
              console.error('Error setting up the POST request:', error.message);
            }
          });
      }
      

    function handleSubmit(){
        let model=props.posts
        let newtitle=document.getElementById("post-title").value;
        let newtext=document.getElementById("post-text").value;
        let newPost={
            title:newtitle,
            content:newtext,
            posted_by: "test",
            community: "popular"
        }
        createPost(newPost)
    }
    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={()=>handleSubmit()}>
            <input type="text" id="post-title" />
            <input type="text" id="post-text"/>
            <button >Create post</button>
            </form>
        </div>
    )
}