//stateless functional Component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tech Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={
                    {   
                        color:'white',
                        backgroundColor:'#17327e',
                        borderRadius:'8px'
                    }
                    }>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;