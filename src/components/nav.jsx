import { Link } from "react-router-dom"
import Header from './header'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="logo"><Header /></div>
            <ul className="nav-links">
                <div className="menu">
                    <li><Link to="/articles" >Articles</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav