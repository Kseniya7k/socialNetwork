import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts massagesPosts={props.massagesPosts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPosText}/>
        </div>
    )
}

export default Profile;