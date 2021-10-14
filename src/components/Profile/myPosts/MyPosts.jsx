import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/Post";
import PostForm from "./post/PostForm";

const MyPosts = React.memo(props => {
    const {messagesPosts} = props;

    const sendNewPost = (values) => {
        props.addPost(values.textPost)
    }
    return (
        <div className={s.postsBlock}>
            <h2>My post</h2>
            <PostForm onSubmit={sendNewPost}/>
            <div className={s.posts}>
                {messagesPosts.map(p => <Post key={p.id}
                                              massage={p.message}
                                              likesCount={p.likesCount}/>
                )}
            </div>
        </div>
    );
})

export default MyPosts;