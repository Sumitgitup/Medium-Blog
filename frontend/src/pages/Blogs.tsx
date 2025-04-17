import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { Spinner } from "../components/Spinner";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if (loading) {
        return <div>
            <Spinner></Spinner>
        </div>
    }
    return <div >
        <Appbar />
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogsCard
                    id={blog.id.toString()}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"13 Apr 2025"}
                />)}
                
            </div>
        </div>
    </div>
}