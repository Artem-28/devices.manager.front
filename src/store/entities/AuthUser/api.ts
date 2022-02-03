import {AuthUserPayload} from "@/store/entities/AuthUser/interfaces";
import store from '../../index'
import {GET_WITH_TOKEN, POST, POST_WITH_TOKEN} from "@/http-config";
import AuthUser from "@/store/entities/AuthUser/index";
import axios from "axios";

export default {
    // Авторизация пользователя
    async login(payload: AuthUserPayload) {
        const response = await POST('api/auth/login', payload)
        if (response.success) {
            localStorage.setItem('accessToken', response.access_token)
            await AuthUser.create({data: response.user})
        }
    },

    // Регистрация пользователя
    async registration(payload: AuthUserPayload) {
        const response = await POST('api/auth/register', payload)
        if (response.success) {
            const notify = {
                message: 'Регистрация пользователя прошла успешно',
                type: 'success'
            }
            await store.commit('notifyHandler/updateNotify', notify)
            return response.success
        }
        return false
    },

    async logout() {
        const response = await POST_WITH_TOKEN('api/auth/logout')
        if (response.success) {
            await AuthUser.deleteAll()
            localStorage.removeItem('accessToken');
        }
    },

    // Получить информацию о профиле пользователя используется в main.ts
    async authUser() {
        const token = localStorage.getItem('accessToken')
        const baseURL = 'http://localhost:8000'
        if (token) {
            try {
                const response = await axios.get(`${baseURL}/api/auth/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                })
                await AuthUser.create({data: response.data.user})
            } catch (error) {
                return false
            }
        }
        return false
    }
}
