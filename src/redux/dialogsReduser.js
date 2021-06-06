export const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    interlocutors: [
        {id: 1, name: 'Артём'},
        {id: 2, name: 'Катя'},
        {id: 3, name: 'Саша'},
        {id: 4, name: 'Настя'}
    ],
    messages: [
        {id:1, message: 'Всё хорошо,пойдёшь со мной гулять?'},
        {id:2,message: 'Привет,а как дела?)'},
        {id:3,message: 'Привет)'},
        {id:4,message: 'Привет,посмотри какую щарлотку я приготовила!'}
    ],
    newMessageText: ''
}
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.newMessage };
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages].concat([{id: 5, message: state.newMessageText }]),
                newMessageText: ''
            }
        default:
            return state;
    }
}

export const onMessageChange = (newMessage) => {
    console.log(newMessage)
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage};
};
export const sendMessage = () => ({type: SEND_NEW_MESSAGE});