import {usersProfileAPI} from "../api/api";

export const ADD_POST = 'socialNetwork/profile/ADD_POST';
export const SET_PROFILE_USER = 'socialNetwork/profile/SET_PROFILE_USER';
export const SET_CONTACTS_USER_COUNT = 'socialNetwork/profile/SET_CONTACTS_USER_COUNT';
export const SET_STATUS = 'socialNetwork/profile/SET_STATUS';
export const DELETE_POST = 'socialNetwork/profile/DELETE_POST';

const initialState = {
    messagesPosts: [
        {message: 'Доброго дня, я сегодня задержусь на работе. Всем продуктивного дня!',
            id: 1,
            likesCount: 5},
        {message: 'Всем привет, у меня перервыв, кто-то может составить компанию за обедом?',
            id: 2,
            likesCount: 10}
    ],
    profile: null,
    contacts: [],
    status: "",
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                messagesPosts: [ ...state.messagesPosts, {id: 5, message: action.textPost, likesCount: 0}],
            };
        case DELETE_POST:
            return {
                ...state,
                messagesPosts: state.messagesPosts.filter(post => {
                    return post.id !== action.postId;
                }),
            };
        case SET_PROFILE_USER:
            return { ...state, profile: action.profile };
        case SET_CONTACTS_USER_COUNT:
            return { ...state, contacts: action.contacts};
        case SET_STATUS:
            return { ...state, status: action.newStatus};
        default:
            return state;
    }

}
export const addPost = (textPost) => ({type: ADD_POST, textPost});
export const deletePost = (postId) => ({type:DELETE_POST, postId});
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile});
export const setContactsUserCount = (contacts) => ({type: SET_CONTACTS_USER_COUNT, contacts});
export const setStatus = (newStatus) => ({type: SET_STATUS, newStatus});

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await usersProfileAPI.getProfile(userId);
    dispatch(setProfileUser(data));
    dispatch(setContactsUserCount(data.contacts));
}

export const getStatusProfile = (userId) => async (dispatch) => {
    const data = await usersProfileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatusProfile = (newStatus) => async (dispatch) => {
    const data = await usersProfileAPI.updateStatus(newStatus);

    if (data.resultCode === 0) {
        dispatch(setStatus(newStatus));
    }
}

export default profileReducer;