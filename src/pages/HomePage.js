import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

function HomePage() {
    let [posts, setPosts] = useState([]);
    let {authTokens, logoutUser} = useContext(AuthContext);

    useEffect(() => {
        getPosts()
    },[])

    let getPosts = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/v1/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access) 
            }
        })
        let data = await response.json()

        if (response.status === 200) {
            setPosts(data)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser();
        };
        
    }

    return (
        <div>
            <p>You are logged into the home page!</p>
                {posts.map(post => {
                    return (
                        <div key={post.title}>
                            <h2 key={post.title}>{post.title}</h2>
                            <img src={post.image} alt={post.title} />
                        </div>
                    )
                })}
        </div>
    )
    }

export default HomePage;