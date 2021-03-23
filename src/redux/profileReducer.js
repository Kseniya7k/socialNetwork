export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    messagesPosts: [
        {message: 'Доброго дня, я сегодня задержусь на работе. Всем продуктивного дня!',
            id: 1,
            likesCount: 5},
        {message: 'Всем привет, у меня перервыв, кто-то может составить компанию за обедом?',
            id: 2,
            likesCount: 10}
    ],
        newPostText: ''
}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.messagesPosts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}
export const addPost = () => ({type: ADD_POST});

export const onPostChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });