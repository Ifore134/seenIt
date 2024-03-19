export default function PostPage(props){
    function generateComment(){

    }
    
    return(
        <div>
            <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
            </div>

            <div className="comments">
                <input type="text"/>
            </div>

            {/* <div className="post-comments">
                <ul>
                    {props.post.comments.map(post => (
                        <div className="post-div">
                            g Insert method to search using comment ID
                        <hr className="post-breaks"/>
                        </div>
                    ))}
                </ul>
            </div>  */}

        </div>
    )
    
}