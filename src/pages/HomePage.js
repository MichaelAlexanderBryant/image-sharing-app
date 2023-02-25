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
        <div id="image-container">
            <div id="image-section">
                {posts.map(post => {
                    return (
                        <div className="image-card" key={post.title}>
                            <img src={post.image} alt={post.title} />
                            <p className="card-text" key={post.title}>{post.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }

export default HomePage;