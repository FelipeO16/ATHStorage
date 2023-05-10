import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'
import { Item } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ namespaced: true, stateFactory: true, name: 'products' })
export default class Products extends VuexModule {
  private products_list = {} as object
  private products_register = {} as object
  private product_count = {} as Item

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
    const list = await $axios.$get('/products?data=' + new Date().getTime())
    this.context.commit('setProductsList', list)
    console.log(list)
  }

  @Action({ rawError: true })
  public async order(category: string) {
    console.log(category)
    const list = await $axios.$get(
      `/products/${category}?data=` + new Date().getTime()
    )
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

  @Action({ rawError: true })
  public async get(data: string) {
    try {
      const infos = await $axios.$get(
        `/product/${data}?data=${new Date().getTime()}`
      )
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

  public get $productCount() {
    return this.product_count
  }

  @Mutation
  private setProductCount(list: Item): void {
    this.product_count = list
  }

  @Action({ rawError: true, commit: 'setProductCount' })
  public count(list: Item) {
    return list
  }

  @Action({ rawError: true })
  public async add2() {
    try {
      const id = await $axios.$post('/', {
        version:
          '3554d9e699e09693d3fa334a79c58be9a405dd021d3e11281256d53185868912',
        input: { prompt: 'water' },
      })
      return id
    } catch (err: any) {
      console.log(err.response)
    }
  }
}
