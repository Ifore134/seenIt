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
                    <li key={post._id} class="home-posts">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default HomePage;