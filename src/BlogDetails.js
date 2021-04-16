import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, error, isPending} =  useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div className="blogDetails">
            {/* conditional rendering */}

            { isPending && <div>loading details...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p className="author">Written By { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails