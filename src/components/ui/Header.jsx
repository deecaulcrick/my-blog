import { Link } from "react-router-dom";
import logo from '../../assets/dc-logo.png'

function Header() {
    return (
        <div className="header">
            <div className="logo-bar">
                <div className="logo">
                    <img src={logo} width='60px' />
                </div>
                <div className="site-identity">
                    <h4 className="site-title">Dee Caulcrick's Blog</h4>
                    <h5 className="site-subtitle">Designer, Teacher, Engineer (in view).</h5>
                </div>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to='/' className="navlink">Home</Link>
                    </li>
                    <li>
                        <Link to='posts' className="navlink">Posts</Link>
                    </li>
                    <li><Link to='projects' className="navlink">Projects</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header