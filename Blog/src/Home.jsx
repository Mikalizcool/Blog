import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
    }, []);
    return (
        <div className="home">
            {isPending && <div> loading... </div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs"/>}
        </div>
      );
}
 
export default Home;