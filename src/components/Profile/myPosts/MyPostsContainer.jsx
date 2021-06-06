import React from 'react';
import {addPost, onPostChange} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 const state = store.getState();
//                 const onChangeHandler = e => store.dispatch(onPostChange(e.target.value));
//                 const addPostHandler = () => store.dispatch(addPost());
//                 return <MyPosts
//                     onPostChange={onChangeHandler}
//                     addPost={addPostHandler}
//                     messagesPosts={state.profilePage.messagesPosts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }
//         }
//
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        messagesPosts: state.profilePage.messagesPosts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (event) => {
            dispatch(onPostChange(event.target.value))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;