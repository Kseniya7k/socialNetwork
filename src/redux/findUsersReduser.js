import ava_Sacha from '../img/ava_Sacha.jpg'



export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';



const initialState = {
   users: []
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }

}
export const followAC = (idUser) => ({type: FOLLOW, idUser});
export const unfollowAC = (idUser) => ({type: UNFOLLOW, idUser});
export const setUsersAC = (users) => ({type: SET_USERS, users});


