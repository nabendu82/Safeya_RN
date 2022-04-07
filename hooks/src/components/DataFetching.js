import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => setPosts(res.data))
    //         .catch(err => console.log(err))
    // },[])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    return (
        <>
            <h1>List Post</h1>
            {posts && posts.map(post => <h2 key={post.id}>{post.title}</h2>)}
        </>
    )
}

export default DataFetching