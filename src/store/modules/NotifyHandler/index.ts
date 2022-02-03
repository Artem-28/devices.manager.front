import {NotifyHandlerState} from "@/store/modules/NotifyHandler/interfaces";
import {GetterTree, Module, MutationTree} from "vuex";
import RootState from "@vuex-orm/core/dist/src/modules/contracts/RootState";

const namespaced: boolean = true;

const state: NotifyHandlerState = {
    show: false,
    type: 'error',
    message: null
}

const getters: GetterTree<NotifyHandlerState, RootState> = {
    notify: state => state
}

const mutations: MutationTree<NotifyHandlerState> = {
    updateNotify(state, payload) {
        state.show = true
        state.message = payload.message
        state.type = payload.type
    },
    clearNotify(state) {
        state.show = false
        state.type = 'error'
        state.message = null
    }
}

const notifyHandler: Module<NotifyHandlerState, RootState> = {
    namespaced,
    state,
    getters,
    mutations
}

export default notifyHandler
