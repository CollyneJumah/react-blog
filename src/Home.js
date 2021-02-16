
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const title="All Blogs!"
    const [blogs, setBlogs] = useState([
        {title: 'My New Website',body: 'lorem ipsum', author: 'Jumah', id: 1},
        {title: 'DevFest Kenya',body: 'lorem ipsum', author: 'Ngesa', id: 2},
        {title: 'GDG KISII',body: 'lorem ipsum', author: 'Jumah', id: 3}
    ]);

     return (
        <div className="home">
           <BlogList blogs={blogs} title={title}/>
           {/* filter blogs to specific autho */}
           <BlogList blogs={blogs.filter((blog) =>blog.author== 'Jumah'  )} title="Jumah's Blogs"/>
        </div>
    );
    }
   
   

export default Home