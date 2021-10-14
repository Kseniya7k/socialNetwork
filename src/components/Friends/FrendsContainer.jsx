import React from "react";
import Friends from "./Friends";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {
    acceptFollow, acceptUnfollow, followUser, friendsUsers,
    toggleIsFetching, toggleIsFollowInProgress, unfollowUser
} from "../../redux/findUsersReducer";
import {
    getCurrentPage, getFollowingInProgress, getFriends, getIsFetching, getPageSize, getTotalUsersCount
} from "../../redux/usersSelectors";
import Preloader from "../common/Preloader/Preloader";


class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.friendsUsers(this.props.page, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.friendsUsers(pageNumber, this.props.pageSize)
    }

    render() {
        const {friends, page, pageSize,
            totalUsersCount, followingInProgress, unfollow, follow} = this.props
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Friends
                    friends={friends}
                    pageSize={pageSize}
                    page={page}
                    totalUsersCount={totalUsersCount}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    friends: getFriends(state),
    page: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    followingInProgress: getFollowingInProgress(state),
    isFetching: getIsFetching(state)
})

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        friendsUsers,
        toggleIsFollowInProgress,
        unfollow: unfollowUser,
        follow: followUser,
        toggleIsFetching,
    })
)(FriendsContainer)