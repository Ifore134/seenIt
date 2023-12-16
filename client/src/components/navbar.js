import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav id="navigation-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/create">Create Post</Link></li>
            </ul>
        </nav>
    )
}