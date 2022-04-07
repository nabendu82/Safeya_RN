import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching1 = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError('Error fetching data')
            })
    },[])

    return (
        <div>
            {loading ? <h1>Loading...</h1> : <h1>{post.title}</h1>}
            {error ? <h1>{error}</h1> : null}
        </div>
    )
}

export default DataFetching1