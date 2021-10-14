import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    const { profile, status, updateStatus, userId, isFollowingDisabled, unfollow, follow, followed, users} = props;

    if (!profile) {
        return <MyPostsContainer/>
    } else {
        return <ProfileInfo profile={profile}
                            status={status}
                            updateStatus={updateStatus}
                            userId={userId}
                            isFollowingDisabled={isFollowingDisabled}
                            unfollow={unfollow}
                            follow={follow}
                            followed={followed}
                            users={users} />
    }
}

export default Profile;