import { Link } from "react-router-dom"
import Header from './header'

const Nav = ({topics}) => {
    return (
        <nav className="navbar">
            <div className="logo"><Header /></div>
            <ul className="nav-links">
                <div className="menu">
                    <li><Link to="/" >all articles</Link></li>
                    {topics.map((topic, index) => {
                        return(
                            <li key={index}>
                                <Link to={`/${topic.slug}`}>{topic.slug} articles</Link>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </nav>
    )
}

export default Nav