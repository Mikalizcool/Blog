import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log("use effect ran");
    }, []);
    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
        </div>
      );
}
 
export default Home;