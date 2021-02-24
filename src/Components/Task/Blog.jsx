'use strict'

import Comments from './StaticData/Comments.json'
import Post from './Post'

const Blog = () => {
    return (
        <>
            {Comments.map((post) => (
                <Post key={post.id} name={post.name} body={post.body} email={post.email}></Post>
            ))}
        </>
    );
}

export default Blog