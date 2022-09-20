import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    lang: "en" as "en" | "fa"
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    lang: state => state.lang,
}

export const mutations: MutationTree<RootState> = {
    CHANGE_LANG: (state, newName: RootState['lang']) => (state.lang = newName),
}

export const actions: ActionTree<RootState, RootState> = {
    async changeLang({ commit }, newlang: RootState['lang']) {

        commit('CHANGE_LANG', newlang)
    },
}