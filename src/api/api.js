import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d7506b98-dba6-4067-bc3b-a41fb7920b7a"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
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
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    }
}

export const usersProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
                return response.data;
            });
    }
}



