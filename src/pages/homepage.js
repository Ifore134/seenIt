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
                <ShowPosts/>
            </div>

        </div>
    )
}

export default HomePage;