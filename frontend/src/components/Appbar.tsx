import { Link } from "react-router-dom";
import { Avatar } from "./BlogsCard";

export const Appbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-3">
            <Link
                to={"/blogs"}
                className="flex flex-col justify-center cursor-pointer"
            >
                Medium
            </Link>
            <div>
                <Link to={"/publish"}>
                    <button
                        type="button"
                        className=" mr-4 text-white bg-green-700 hover:bg-green-800
                     focus:ring-4 focus:ring-green-300 font-medium rounded-full
                    text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        New
                    </button>
                </Link>
                <Avatar size={"big"} name="sumit" />
            </div>
        </div>
    );
};

 