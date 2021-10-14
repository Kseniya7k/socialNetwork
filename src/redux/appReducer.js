import {authMe} from "./authReducer";

export const IS_INITIALIZED = 'IS_INITIALIZED';


const initialState = {
    initialized: false
}
export const appReducer = (state = initialState, action) =>{
    switch (action.type) {
        case IS_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }

}
export const isInitialized = () => ({type: IS_INITIALIZED});

export const isInitializeThunkCreator = () => (dispatch) => {
    const promise = dispatch(authMe());

    promise.then(() => {
        dispatch(isInitialized())
    })
}

export default appReducer;
