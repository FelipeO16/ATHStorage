import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ namespaced: true, stateFactory: true, name: 'products' })
export default class Products extends VuexModule {
  private products_list = {} as object
  private products_register = {} as object

  // Get products list

  public get $productsList() {
    return this.products_list
  }

  // Set products list

  @Mutation
  private setProductsList(list: object): void {
    this.products_list = list
  }

  @Action
  public async set() {
    const list = await $axios.$get('/products')
    this.context.commit('setProductsList', list)
  }

  @Action({ rawError: true })
  public async add(data: object) {
    try {
      const infos = await $axios.$post('/product', data)
      return infos
    } catch (err: any) {
      console.log(err.response)
    }
  }
}
