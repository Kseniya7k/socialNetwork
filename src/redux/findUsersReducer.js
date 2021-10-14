import {friendsAPI, usersAPI} from "../api/api";
import {updateObjectArray} from "../util/objectHelper";

export const FOLLOW = 'socialNetwork/users/FOLLOW';
export const UNFOLLOW = 'socialNetwork/users/UNFOLLOW';
export const SET_USERS = 'socialNetwork/users/SET_USERS';
export const SET_CURRENT_PAGE = 'socialNetwork/users/SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT  = 'socialNetwork/users/SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING  = 'socialNetwork/users/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_IN_PROGRESS  = 'socialNetwork/users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';
export const SET_FRIENDS = 'socialNetwork/users/SET_FRIENDS';

const initialState = {
    users: [],
    friends: [],
    pageSize: 5,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: []
}

export const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.idUser, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.idUser, "id", {followed: false})
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_FRIENDS:
            return {...state, friends: action.friends};
        case SET_CURRENT_PAGE:
            return {...state, page: action.page};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.idUser]
                    : state.followingInProgress.filter(id => id !== action.idUser)
            };
        default:
            return state;
    }
}

export const acceptFollow = (idUser) => ({type: FOLLOW, idUser});
export const acceptUnfollow = (idUser) => ({type: UNFOLLOW, idUser});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowInProgress = (followingInProgress, idUser) => ({
    type:TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress, idUser});
export const setFriendsUsers = (friends) => ({type: SET_FRIENDS, friends});


export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const friendsUsers = (page, pageSize, friend) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await friendsAPI.friends(page, pageSize, friend);
    dispatch(toggleIsFetching(false));
    dispatch(setFriendsUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, idUser, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowInProgress(true, idUser));

    const data = await apiMethod(idUser);
    if (data.resultCode === 0) {
        dispatch(actionCreator(idUser))
    }
    dispatch(toggleIsFollowInProgress(false, idUser));
}

export const unfollowUser = (idUser) => (dispatch) => {
    followUnfollowFlow(dispatch, idUser, friendsAPI.unfollow.bind(idUser), acceptUnfollow);
}

export const followUser = (idUser) => (dispatch) => {
    followUnfollowFlow(dispatch, idUser, friendsAPI.follow.bind(idUser), acceptFollow);
}

export default findUsersReducer;



