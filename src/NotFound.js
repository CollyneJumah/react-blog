import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you browsing could not be found.</p>
            <Link to="/">Back home</Link>
        </div>
     );
}
 
export default NotFound;