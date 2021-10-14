export const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

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
    ]
}
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages].concat([{id: 5, message: action.massageText }]),
            }
        default:
            return state;
    }
}

export const sendMessage = (massageText) => ({type: SEND_NEW_MESSAGE, massageText});

export default dialogsReducer;