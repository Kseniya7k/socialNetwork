import React from 'react';
import s from './myPosts.module.css';
import Post from "./post/Post";

const MyPosts = (props) => {
    const textNewsPosts = React.createRef();
    const addPost = () => {
        props.addPost();
    }
    const onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }
    const isEmpty = !props.newPostText;
    return (
        <div className={s.postsBlock}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={textNewsPosts} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost} disabled={isEmpty}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { props.massagesPosts.map(p => <Post key={p.id} massage={p.message} likesCount={p.likesCount}/>) }
            </div>
        </div>
    )
}

export default MyPosts;