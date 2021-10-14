import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d7506b98-dba6-4067-bc3b-a41fb7920b7a"
    }
})

export const usersAPI = {
    getUsers(page = 1, pageSize = 7) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => {
            return response.data;
        });
    }
}

export const friendsAPI = {
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    friends(page = 1,pageSize = 7, friend = true) {
        return instance.get(`users?page=${page}&count=${pageSize}&friend=${friend}`).then(response => {
            return response.data;
        });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        });
    },
    logout() {
        return instance.delete(`/auth/login`).then(response => {
            return response.data
        });
    }
}

export const usersProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
                return response.data;
            });
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId).then(response => {
            return response.data
        });
    },
    updateStatus(newStatus) {
        return instance.put(`profile/status`, {status: newStatus}).then(response => {
            return response.data
        });
    },
    getUserFriend(userId) {
        return instance.get(`follow/` + userId).then(response => {
            console.log(response);
            return response.data;
        });
    }
}



