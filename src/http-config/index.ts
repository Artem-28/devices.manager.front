import axios from "axios";
import store from '../store/index'
import router from "@/router";

const baseURL = 'http://localhost:8000'


const axiosInstance = axios.create({
    baseURL
})

// Перехватчик ошибки на самом верхнем уровне
axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        const status = error.response.status;
        if (status === 401) {
            await router.push('/auth')
        }
        store.commit("notifyHandler/updateNotify", { type: 'error', message: error.response.statusText })
        return false;
    }
)

function getAuthToken() {
    return `Bearer ${localStorage.getItem('accessToken')}`
}

async function POST(url: string, payload: object = {}) {
    const response = await axiosInstance.post(url, payload );
    return response.data || false
}

async function POST_WITH_TOKEN(url: string, payload: object = {}) {
    const response = await axiosInstance.post(url, payload, {
        headers: {
            Authorization: getAuthToken(),
            Accept: 'application/json'
        }
    });
    return response.data || false;
}

async function GET_WITH_TOKEN(url: string, params: any = {}) {
    const response = await axiosInstance.get(url, {
        headers: {
            Authorization: getAuthToken(),
            Accept: 'application/json'
        }
    });
    return response.data || false;
}

async function DELETE_WITH_TOKEN(url: string) {
    const response = await axiosInstance.delete(url, {
        headers: {
            Authorization: getAuthToken()
        }
    });
    return response.data || false;
}

export {
    POST,
    POST_WITH_TOKEN,
    GET_WITH_TOKEN,
    DELETE_WITH_TOKEN,
    getAuthToken
}
