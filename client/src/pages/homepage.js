import { useNavigate } from 'react-router-dom';
function HomePage(props){
    const navigate = useNavigate();
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

    function goToPost(p){
        console.log("testing")
        props.setView(p);
        navigate('/postpage');
    }
    return (
        <div className="homepage" >
            <div className="hp-posts" id="hp-posts">
                {/* <ShowPosts/> */}
                <ul>
                    {props.posts.map(post => (
                        <div className="post-div" onClick={()=>goToPost(post)} key={post._id}>
                    <li key={post._id} className="home-posts">
                        
                        <h2 className="post-header">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                        <p className="post-time">{post.post_date_time}</p>
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