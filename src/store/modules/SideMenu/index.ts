import {GetterTree, Module, MutationTree} from "vuex";
import RootState from "@vuex-orm/core/dist/src/modules/contracts/RootState";
import {SideMenuState} from "@/store/modules/SideMenu/interfaces";

const namespaced: boolean = true;

const state: SideMenuState = {
    open: false,
}

const getters: GetterTree<SideMenuState, RootState> = {
    isOpen: state => state.open
}

const mutations: MutationTree<SideMenuState> = {
    toggleOpen(state) {
        state.open = !state.open
    }
}

const notifyHandler: Module<SideMenuState, RootState> = {
    namespaced,
    state,
    getters,
    mutations
}

export default notifyHandler
