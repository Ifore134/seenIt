function HomePage(props){
    function ShowPosts(){
        let hpPosts=[]
        for(let i=0;i<props.posts.length;i++){
            hpPosts.push(
                <div>
                    <h3>{props.posts[i].title}</h3>
                    <p>{props.posts[i].text}</p>
                </div>
            )
        }
        
        return (
            <div>
                {hpPosts}
            </div>
        )
    }
    return (
        <div className="homepage">
            <div className="hp-posts" id="hp-posts">
                <p>test</p>
                {/* <ShowPosts/> */}
                <ul>
                    {props.posts.map(post => (
                        <div className="post-div">
                    <li key={post._id} class="home-posts">
                        
                        <h2 className="post-header">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                           
                    </li>
                    <hr className="post-breaks"/>
                    </div>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default HomePage;