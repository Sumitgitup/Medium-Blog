import { BlogContent } from "../components/BlogContent";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";

import { useParams } from "react-router-dom";


export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} =  useBlog({id: id || ""});
    if (loading || !blog) {
        return <div>
            <Spinner></Spinner>
        </div>
    }
    return <div>
        <BlogContent blog={blog}/>
    </div>
}

