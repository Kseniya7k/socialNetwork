import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            messagesPosts: [
                {message: 'Доброго дня, я сегодня задержусь на работе. Всем продуктивного дня!',
                    id: 1,
                    likesCount: 5},
                {message: 'Всем привет, у меня перервыв, кто-то может составить компанию за обедом?',
                    id: 2,
                    likesCount: 10}
            ],
        },
        dialogsPage: {
            interlocutors: [
                {id: 1, name: 'Артём'},
                {id: 2, name: 'Катя'},
                {id: 3, name: 'Саша'},
                {id: 4, name: 'Настя'}
            ],
            messages: [
                {id:1, message: 'Всё хорошо,пойдёшь со мной гулять?'},
                {id:2, message: 'Привет,а как дела?)'},
                {id:3, message: 'Привет)'},
                {id:4, message: 'Привет,посмотри какую щарлотку я приготовила!'}
            ],
            newMessageText: ''
        }
    },
    observers: [],

    getState() {
      return this._state
    },

    call() {
        this.observers.forEach(obs => obs());
    },

    subscribe(observer) {
        this.observers.push(observer);
    },

    dispatch(action) {
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        this.call();
    }
}

export default store;