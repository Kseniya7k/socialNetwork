import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'socialNetwork/auth/SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }

}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const authMe = () => async (dispatch) => {
    const data = await authAPI.me();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginMe = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email.toString(), password.toString(), rememberMe);

    if (data.resultCode === 0) {
        dispatch(authMe());
    } else {
        let messageError = data.messages.length > 0 ? data.messages[0] : "Ошибочный email или password";
        dispatch(stopSubmit("login", {_error: messageError}));
    }
}

export const logoutMe = () => async (dispatch) => {
    const data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
