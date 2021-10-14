import findUsersReducer, {
    acceptFollow,
    acceptUnfollow,
    setCurrentPage, setFriendsUsers,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowInProgress
} from "../redux/findUsersReducer";


describe('findUsersReducer tests', () => {
    const state = {
        users: [{
            name: "Kseniya",
            id: 3,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: "Annet",
            id: 5,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: true
        }],
        friends: [],
        pageSize: 5,
        totalUsersCount: 0,
        page: 1,
        isFetching: true,
        followingInProgress: []
    };
    const newUsers = [
    {
        name: "Agata",
        id: 2,
        uniqueUrlName: null,
        photos: {
            small: null,
            large: null
        },
        status: null,
        followed: false
    },
    {
        name: "Milana",
        id: 4,
        uniqueUrlName: null,
        photos: {
            small: null,
            large: null
        },
        status: null,
        followed: false
    }];

    const newFriends = [
        {
            name: "nina",
            id: 2,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: true
        },
        {
            name: "kira",
            id: 4,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: true
        }]
    it('property status follow must be true', () => {
        const newState = findUsersReducer(state, acceptFollow(3));
        expect(newState.users[0].followed).toBe(true);
    });
    it('property status follow must be false', () => {
        const newState = findUsersReducer(state, acceptUnfollow(3));
        expect(newState.users[0].followed).toBe(false);
    });

    it('users update', () => {
        const newState = findUsersReducer(state, setUsers(newUsers));
        expect(newState.users.length).toBe(newUsers.length);
    });

    it('current page should be changed', () => {
        const newPage = 2;
        const newState = findUsersReducer(state, setCurrentPage(newPage));
        expect(newState.page).toBe(newPage);
    });

    it('total users count should be changed', () => {
        const newTotalUsersCount = 2000;
        const newState = findUsersReducer(state, setTotalUsersCount(newTotalUsersCount));
        expect(newState.totalUsersCount).toBe(newTotalUsersCount);
    });

    it('toggle should be changed', () => {
        const newToggleIsFetching = true;
        const newState = findUsersReducer(state, toggleIsFetching(newToggleIsFetching));
        expect(newState.isFetching).toBe(newToggleIsFetching);
    });

    // it('toggle should be changed', () => {
    //     const newToggleIsFetching = true;
    //     const newState = findUsersReducer(state, toggleIsFollowInProgress(newToggleIsFetching));
    //     expect(newState.isFetching).toBe(newToggleIsFetching);
    // });

    it('friends update', () => {
        const newState = findUsersReducer(state, setFriendsUsers(newFriends));
        expect(newState.friends.length).toBe(newFriends.length);
    });

})