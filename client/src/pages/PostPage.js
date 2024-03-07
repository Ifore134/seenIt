export default function postPage(props){
    
    return(
        <div>
            <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
            </div>

            <div className="post-comments">
                <ul>
                    {props.post.comments.map(post => (
                        <div className="post-div">
                            {/* <p></p>g Insert method to search using comment ID*/}
                        <hr className="post-breaks"/>
                        </div>
                    ))}
                </ul>
            </div>

        </div>
    )
    
}