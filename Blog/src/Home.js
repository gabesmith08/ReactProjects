import { useState, useEffect } from "react";
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8800/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;


// use this in the cmd prompt to start mock db with db.json file
// npx json-server --watch data/db.json --port 8800