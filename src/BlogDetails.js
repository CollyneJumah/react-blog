import { useHistory, useParams } from "react-router";
import SkeletonLoader from "./SkeletonLoader";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, error, isPending} =  useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    const handleClickDelete = () => {
        //fetch
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: "DELETE",
        }).then( ()=> {
            //redirect user to home page
            history.push('/')
        })
    }
    return (    
        <div className="blogDetails">
            {/* conditional rendering */}

            { isPending && <SkeletonLoader />}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p className="author">Written By <strong><em>{ blog.author }</em></strong></p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClickDelete}>Delete blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails