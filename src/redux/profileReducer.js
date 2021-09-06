import {usersProfileAPI} from "../api/api";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_PROFILE_USER = 'SET_PROFILE_USER';
export const SET_CONTACTS_USER_COUNT = 'SET_CONTACTS_USER_COUNT';

const initialState = {
    messagesPosts: [
        {message: 'Доброго дня, я сегодня задержусь на работе. Всем продуктивного дня!',
            id: 1,
            likesCount: 5},
        {message: 'Всем привет, у меня перервыв, кто-то может составить компанию за обедом?',
            id: 2,
            likesCount: 10}
    ],
    newPostText: '',
    profile: null,
    contacts: [],

}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                messagesPosts: [ ...state.messagesPosts].concat([{id: 5, message: state.newPostText, likesCount: 0}]),
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText };
        case SET_PROFILE_USER:
            return { ...state, profile: action.profile };
        case SET_CONTACTS_USER_COUNT:
            return { ...state, contacts: action.contacts};
        default:
            return state;
    }

}
export const addPost = () => ({type: ADD_POST});
export const onPostChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile});
export const setContactsUserCount = (contacts) => ({type: SET_CONTACTS_USER_COUNT, contacts});

export const getUserProfileThunkCreator = (idUser) => {
    return (dispatch) => {
        usersProfileAPI.getProfile(idUser).then(data => {
            dispatch(setProfileUser(data));
            dispatch(setContactsUserCount(data.contacts));
        });
    }
}

export default profileReducer;