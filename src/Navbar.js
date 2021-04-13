import { Link } from 'react-router-dom';

//stateless functional Component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tech Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={
                    {   
                        color:'white',
                        backgroundColor:'#17327e',
                        borderRadius:'8px'
                    }
                    }>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;