import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'
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

  @Action({ rawError: true })
  public async set() {
    const list = await $axios.$get(
      'https://ath.gs-rp.net/api/products?data=' + new Date().getTime()
    )
    this.context.commit('setProductsList', list)
    console.log(list)
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

  @Action({ rawError: true })
  public async get(data: string) {
    try {
      const infos = await $axios.$get(`/product/${data}`)
      return infos
    } catch (err: any) {
      console.log(err.response)
    }
  }

  @Action({ rawError: true })
  public async update(data: any) {
    try {
      const status = await $axios.$put(`/product`, data)
      return status
    } catch (err: any) {
      console.log(err.response)
    }
  }

  public async test(list: any) {
    this.context.commit('setProductsList', list)
    console.log(list)
  }
}
