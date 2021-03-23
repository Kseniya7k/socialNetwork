import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store = createStore(reducers);
export default store;