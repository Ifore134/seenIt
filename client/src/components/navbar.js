import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav id="navigation-bar">
            <ul>
                {/* <h2 className="nvbar-content">SeenIt</h2> */}
                <li className="nvbar-content"><Link to="/">SeenIt</Link></li>
                <li className="nvbar-content"><Link to="/about">About</Link></li>
                <li className="nvbar-content"><Link to="/create">Create Post</Link></li>
                <li className="nvbar-content"><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}