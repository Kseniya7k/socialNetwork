import {friendsAPI, usersAPI} from "../api/api";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT  = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING  = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_IN_PROGRESS  = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const findUsersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(usr => {
                    if (usr.id === action.idUser) {
                        return {...usr, followed: true}
                    }
                    return usr;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(usr => {
                    if (usr.id === action.idUser) {
                        return {...usr, followed: false}
                    }
                    return usr;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.idUser]
                    : state.followingInProgress.filter(id => id != action.idUser)
            }
        default:
            return state;
    }

}

export const acceptFollow = (idUser) => ({type: FOLLOW, idUser});
export const acceptUnfollow = (idUser) => ({type: UNFOLLOW, idUser});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowInProgress = (followingInProgress, idUser) => ({type:TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress, idUser});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const unfollowThunkCreator = (idUser) => {
    return (dispatch) => {
        dispatch(toggleIsFollowInProgress(true, idUser));
        friendsAPI.unfollow(idUser).then(data => {
            if (data.resultCode == 0) {
                dispatch(acceptUnfollow(idUser))
            }
            dispatch(toggleIsFollowInProgress(false, idUser));
        });
    }
}

export const followThunkCreator = (idUser) => {
    return (dispatch) => {
        dispatch(toggleIsFollowInProgress(true, idUser));
        friendsAPI.follow(idUser).then(data => {
            if (data.resultCode == 0) {
                dispatch(acceptFollow(idUser))
            }
            dispatch(toggleIsFollowInProgress(false, idUser));
        });
    }
}

export default findUsersReducer;



