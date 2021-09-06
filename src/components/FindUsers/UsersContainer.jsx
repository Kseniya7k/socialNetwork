import React from "react";
import {connect} from "react-redux";
import {
    acceptFollow, getUsersThunkCreator, setCurrentPage,
    toggleIsFetching, toggleIsFollowInProgress, acceptUnfollow,
    unfollowThunkCreator, followThunkCreator } from "../../redux/findUsersReduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        const {totalUsersCount, pageSize, currentPage, users,
            acceptFollow, acceptUnfollow, followingInProgress,
            unfollowThunkCreator, followThunkCreator} = this.props;

        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={this.onPageChanged}
                       users={users}
                       acceptFollow={acceptFollow}
                       acceptUnfollow={acceptUnfollow}
                       followingInProgress={followingInProgress}
                       unfollowThunkCreator={unfollowThunkCreator}
                       followThunkCreator={followThunkCreator}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        acceptFollow,
        acceptUnfollow,
        setCurrentPage,
        toggleIsFetching,
        toggleIsFollowInProgress,
        getUsers: getUsersThunkCreator,
        unfollowThunkCreator,
        followThunkCreator})
)(UsersContainer)