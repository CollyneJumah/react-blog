
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Clock from './Clock';

const Home = () => {
    const title="All Blogs!"
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError]=useState(null)
   
    //useEffect
    useEffect(() => {
        setTimeout(()=> {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                // console.log(res)
                if(!res.ok){
                    throw Error('Could not fetch data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null)
            })
            .catch( err=>{
                console.table(err)
                setIsPending(false)
                setError(err.message)
            })
       }, 1000)
    },[]);
       
     return (   
        <div className="home">
            {/* show loading message */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title={title}/>}
           {/*filter blogs to specific autho */}
           
           {/* <BlogList 
                blogs={blogs.filter((blog) =>blog.author === 'Jumah'  )} 
                title="Jumah's Blogs"
                handleDelete={handleDelete} 
            /> */}
            
            {/* <button onClick={ ()=>setName('Jumah') }>Change name</button> */}
            {/* <p>{ name }</p>
            <hr/>*/}
        <Clock date={ new Date() } /> 
        </div>
    );
   

    }
   
export default Home