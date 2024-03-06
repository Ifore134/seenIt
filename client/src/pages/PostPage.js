export default function postPage(props){
    return(
        <div>
            <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
            </div>

            <div className="post-comments">

            </div>

        </div>
    )
    
}