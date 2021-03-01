let state = {
    profilePage: {
        massagesPosts: [
            {message: 'Доброго дня, я сегодня задержусь на работе. Всем продуктивного дня!',
            id: 1,
            likesCount: 5},
            {message: 'Всем привет, у меня перервыв, кто-то может составить компанию за обедом?',
            id: 2,
            likesCount: 10}
        ],
        newPostText: ''
    },
    dialogsPage: {
        interlocutors: [
            {id: 1, name: 'Артём'},
            {id: 2, name: 'Катя'},
            {id: 3, name: 'Саша'},
            {id: 4, name: 'Настя'}
        ],
        messages: [
            {message: 'Всё хорошо,пойдёшь со мной гулять?'},
            {message: 'Привет,а как дела?)'},
            {message: 'Привет)'},
            {message: 'Привет,посмотри какую щарлотку я приготовила!'}
        ]
    }
}
let observers = [];

let call = () => {
    observers.forEach(obs => obs());
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.massagesPosts.push(newPost);
    state.profilePage.newPostText = '';
    call();
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    call();
}

export const subscribe = (observer) => {
    observers.push(observer);
}

export default state;