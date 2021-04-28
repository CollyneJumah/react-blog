import { Link } from 'react-router-dom';

//stateless functional Component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>
                <Link to="/">Tech Blog</Link>
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={
                    {   
                        color:'white',
                        backgroundColor:'#17327e',
                        borderRadius:'8px'
                    }
                    }>New Blog</Link>
                <a target="_blank" href="https://mernstack.atlassian.net/l/c/LG6ALPZk">Guide</a>
            </div>
        </nav>
     );
}
 
export default Navbar;