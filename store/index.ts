import { GetterTree, ActionTree, MutationTree } from 'vuex'
import MAINNAV from '@/apollo/query/top-nav.gql'
import { MainNavQuery, MainNavQueryVariables } from '@/types/types'
import { Context, NuxtAppOptions } from '@nuxt/types'
type NavItem = {
  label: string
  link: string
  id: string
  lang: string
}

export const state = () => ({
  navItem: [] as NavItem[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  navItems: (state) => state.navItem,
}

export const mutations: MutationTree<RootState> = {
  ADD_NAV: (state, newNav: NavItem[]) => {
    newNav.forEach((i) => state.navItem.push(i))
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, ctx: Context) {
    // i18n bug
    // const cookie = (ctx.req.headers.cookie) || '1=1';
    // const parsedCookie = Object.fromEntries(cookie.split(/;\s+/).map(i => i.split("="))) as { [key: string]: string | undefined }
    // if (parsedCookie.i18n_redirected === undefined) {
    //     console.log(999)
    // }

    const variable: MainNavQueryVariables = {}
    // $apolloProvider.defaultClient.query

    const res = await ctx.app.apolloProvider.defaultClient.query({
      query: MAINNAV,
      variable,
    })

    const data = res.data as MainNavQuery
    const navItem: NavItem[] = data
      .menus!.edges!.map((e) =>
        e!.node!.menuItems!.edges!.map((ed) => ({
          label: ed!.node!.label || '',
          id: ed!.node!.id || '',
          lang: e!.node!.name!.search(/-en$/) > -1 ? 'en' : 'fa',
          link: ed!.node!.uri || '',
        }))
      )
      .flat()

    commit('ADD_NAV', navItem)
  },
  async addNav({ commit }, newlang: NavItem[]) {
    commit('ADD_NAV', newlang)
  },
}
