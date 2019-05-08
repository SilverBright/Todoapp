import React, { Component }from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        fetch('https://jsonplaceholder.typicode.com/posts')
            // .then(res => {
            .then(response => response.json())
            // this.setState({
                // posts: res.data.slice(0,10)
            .then(data => {
                this.setState({
                    posts: data.slice(0,10)
                })
            })
        }
        // })
    // })
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                { postList }
            </div>
        )   
    }
}

export default Home;