export default function CreatePost(props){
    function handleSubmit(){
        let newtitle=document.getElementById("post-title");
        let newtext=document.getElementById("post-text");
        let newPost={
            title:newtitle,
            text:newtext
        }
        props.setPosts(props.posts+newPost);
    }
    return (
        <div>
            <h1>Create Post</h1>
            <form>
            <input type="text" id="post-title" />
            <input type="text" id="post-text"/>
            <button onSubmit={()=>handleSubmit()}>Create post</button>
            </form>
        </div>
    )
}