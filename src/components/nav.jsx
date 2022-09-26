import { Link } from "react-router-dom"
import Header from './header'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="logo"><Header /></div>
            <ul className="nav-links">
                <div className="menu">
                    <li><Link to="/articles" >All Articles</Link></li>
                    <li><Link to="/coding">Coding Articles</Link></li>
                    <li><Link to="/cooking">Cooking Articles</Link></li>
                    <li><Link to="/football">Football Articles</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav