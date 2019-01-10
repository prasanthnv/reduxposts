import React, { Component } from 'react';
import './Posts.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <br />
                <h2>Posts</h2>
                <hr />
                {this.props.posts.map((post, index) => {
                    return (
                        <div key={index} className="jumbotron posts">
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})


export default connect(mapStateToProps, { fetchPosts })(Posts);