import React from 'react';
import {addPost, onPostChange} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState();
                const onChangeHandler = e => store.dispatch(onPostChange(e.target.value));
                const addPostHandler = () => store.dispatch(addPost());
                return <MyPosts
                    onPostChange={onChangeHandler}
                    addPost={addPostHandler}
                    messagesPosts={state.profilePage.messagesPosts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }

        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;