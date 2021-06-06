import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";
import {findUsersReducer} from "./findUsersReduser";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: findUsersReducer
})

const store = createStore(reducers);

// window.store = store;
export default store;