import React, { Component } from 'react'

class ListPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ posts: data })
    }

    render() {
        const { posts } = this.state; // const posts = this.state.posts
        
        return (
            <>
                <h1>List Post</h1>
                {posts && posts.map(post => <h2 key={post.id}>{post.title}</h2>)}
            </>
        )
    }
}

export default ListPost
