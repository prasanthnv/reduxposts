import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json()
    }).then(posts => {
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    })
}