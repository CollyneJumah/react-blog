
import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
    const title="All Blogs!"
    const {data: blogs,isPending,error } = useFetch('http://localhost:8000/blogs')
    //useEffect
    
     return (   
        <div className="home">
            {/* show loading message */}
            {error && <div className="text-red">{error}</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title={title}/>}
           
        {/* <Clock date={ new Date() } />  */}
        </div>
    );
   

    }
   
export default Home