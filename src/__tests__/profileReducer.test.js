import profileReducer, {addPost, deletePost, setProfileUser, setStatus} from "../redux/profileReducer";
import {setContactsUserCount} from "../redux/profileReducer";

describe('profileReducer test', () => {

    const state = {
        messagesPosts: [
            {
                message: 'Доброго дня, я сегодня задержусь на работе. Всем продуктивного дня!',
                id: 1,
                likesCount: 5
            },
            {
                message: 'Всем привет, у меня перервыв, кто-то может составить компанию за обедом?',
                id: 2,
                likesCount: 10
            }
        ],
        profile: null,
        contacts: [],
        status: ""
    };

    const newProfile = {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: "https://vk.com/strawberryk",
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "Горлов Артём Сергеевич",
        userId: 5,
        photos: {
            small: null,
            large: null
        }
    };
    const newStatus = "New status"

    it('new post should be added', () => {
        const message = 'test post'
        const newState = profileReducer(state, addPost(message));
        expect(newState.messagesPosts.length).toBe(3);
    });

    it('new post should be correctly added', () => {
        const message = 'test post'
        const newState = profileReducer(state, addPost(message));
        expect(newState.messagesPosts[newState.messagesPosts.length - 1].message).toBe(message);
    });

    it('after delete length of posts should be decremented', () => {
        const newState = profileReducer(state, deletePost(1));
        expect(newState.messagesPosts.length).toBe(state.messagesPosts.length - 1);
    });

    it('after delete length of posts should not be decremented if id is incorrect', () => {
        const newState = profileReducer(state, deletePost(1000));
        expect(newState.messagesPosts.length).toBe(state.messagesPosts.length);
    });

    it('the new state should have fullName in new profile', () => {
        const newState = profileReducer(state, setProfileUser(newProfile));
        expect(newState.profile.fullName).toBe(newProfile.fullName);
    });

    it('the new state should have contacts in new profile', () => {
        const newState = profileReducer(state, setContactsUserCount(newProfile.contacts));
        expect(newState.contacts).toBe(newProfile.contacts);
    });

    it('the new state should have status in new profile', () => {
        const newState = profileReducer(state, setStatus(newStatus));
        expect(newState.status).toBe(newStatus);
    });
});