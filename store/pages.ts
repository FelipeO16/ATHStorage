import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { products } from '@/store'
// import { $axios } from '@/utils/nuxt-instance'

@Module({ namespaced: true, stateFactory: true, name: 'pages' })
export default class Pages extends VuexModule {
  private page = -1 as number

  public get $page() {
    return this.page
  }

  @Mutation
  private setPage(page: number): void {
    this.page = page
  }

  @Action
  public async set(page: number) {
    console.log(page)
    if (page == 0 || page == 5) {
      await products.set()
    }
    this.context.commit('setPage', page)
  }
}
