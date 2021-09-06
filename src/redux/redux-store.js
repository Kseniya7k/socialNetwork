import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReduser";
import findUsersReducer from "./findUsersReduser";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: findUsersReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;