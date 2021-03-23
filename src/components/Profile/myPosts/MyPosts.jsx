import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/Post";

const MyPosts = (props) => {
    const {newPostText, messagesPosts} = props;
    const textNewsPosts = React.createRef();
    const isEmpty = !newPostText;
    const onChangeHandler = (e) => props.onPostChange(e);
    const addPostHandler = () => props.addPost();

    return (
        <div className={s.postsBlock}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} ref={textNewsPosts} value={newPostText} />
                </div>
                <div>
                    <button onClick={addPostHandler} disabled={isEmpty}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { messagesPosts.map(p => <Post key={p.id} massage={p.message} likesCount={p.likesCount}/>) }
            </div>
        </div>
    )
}

export default MyPosts;