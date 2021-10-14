import React from "react";
import {connect} from "react-redux";
import { requestUsers, toggleIsFetching, toggleIsFollowInProgress,
    unfollowUser, followUser } from "../../redux/findUsersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {page, pageSize, requestUsers} = this.props;
        requestUsers(page, pageSize);
    };

    onPageChanged = (pageNumber) => {
        const {requestUsers, pageSize} = this.props;
        requestUsers(pageNumber, pageSize);
    }

    render() {
        const {totalUsersCount, pageSize, page,
            users, followingInProgress, unfollow, follow} = this.props;

        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       page={page}
                       onPageChanged={this.onPageChanged}
                       users={users}
                       followingInProgress={followingInProgress}
                       unfollow={unfollow}
                       follow={follow}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    page: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),

})

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        toggleIsFetching,
        toggleIsFollowInProgress,
        requestUsers,
        unfollow: unfollowUser,
        follow: followUser})
)(UsersContainer)