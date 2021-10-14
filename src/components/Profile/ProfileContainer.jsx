import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { getStatusProfile, getUserProfile, updateStatusProfile } from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import { followUser, friendsUsers, requestUsers, toggleIsFollowInProgress, unfollowUser } from "../../redux/findUsersReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);

    }

    render() {
        const {profile, status, updateStatusProfile, userId, users, unfollow, follow, followingInProgress} = this.props;
        const activeUserId = +this.props.match.params.userId || userId;
        const activeUser = users.find(user => user.id === activeUserId);
        const followed = activeUser && activeUser.followed;
        const isFollowingDisabled = followingInProgress.some(id => id === activeUserId)

        return (
            <div>
                <Profile {...this.props}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatusProfile}
                         users={users}
                         unfollow={unfollow}
                         follow={follow}
                         userId={activeUserId}
                         isFollowingDisabled={isFollowingDisabled}
                         followed={followed}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        contacts: state.profilePage.contacts,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        userId: state.auth.userId,
        users: state.usersPage.users,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile: getUserProfile,
        updateStatusProfile: updateStatusProfile,
        getStatusProfile: getStatusProfile,
        friendsUsers,
        toggleIsFollowInProgress,
        unfollow: unfollowUser,
        follow: followUser,
        requestUsers
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer);