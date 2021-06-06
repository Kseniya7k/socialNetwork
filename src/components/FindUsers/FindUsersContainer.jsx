import React from "react";
import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {followAC, setUsersAC, unfollowAC} from "../../redux/findUsersReduser";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps =(dispatch) => {
    return {
        follow: (idUser) => {
            dispatch(followAC(idUser));
        },
        unfollow: (idUser) => {
            dispatch(unfollowAC(idUser));
        },
        setUser: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FindUsers);