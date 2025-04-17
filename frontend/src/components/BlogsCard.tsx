import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    authorName: string;
    publishedDate: string;
    content: string;
    id: string;
}

export const BlogsCard = ({
    authorName,
    title,
    publishedDate,
    content,
    id,
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 pb-4 max-w-screen-md curson-pointer">
        <div className="flex pt-4">
            <Avatar name={authorName}/>
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                {authorName}
            </div>

            <div className="text-sm flex justify-center flex-col flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className="text-sm flex justify-center flex-col pl-2 font-thin text-slate-500">
                {publishedDate}
            </div>
            
        </div>
        <div className="pt-2 font-semibold text-xl">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-3">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
    </Link>
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-300">

    </div>
}

export function Avatar({name, size = "small"}: {name: string, size?: "small" | "big"}) {
    return (
        <div className={`relative inline-flex items-center justify-center w-6 h-6
            overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} text-xs text-gray-600 dark:text-gray-300`}>
            {name[0]}
        </span>
        </div>
    );
}