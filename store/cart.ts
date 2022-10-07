import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'
import { CartItem } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ namespaced: true, stateFactory: true, name: 'cart' })
export default class Cart extends VuexModule {
  private cart_list = {} as any

  // Get products list

  public get $cartList() {
    return this.cart_list
  }
  // Set products list

  @Mutation
  private setCartList(newItem: CartItem): void {
    if (!this.cart_list[newItem.suplier]) {
      this.cart_list[newItem.suplier] = []
    } else {
      this.cart_list[newItem.suplier].map((item: CartItem) => {
        if (item.id === newItem.id) {
          item.quantity = newItem.quantity
          return
        }
      })
    }

    this.cart_list[newItem.suplier].push(newItem)
    console.log(this.cart_list)
  }

  @Action({ rawError: true })
  public async set() {
    const list = await $axios.$get('/products/')
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
      const infos = await $axios.$get(`/product/${data}`)
      return infos
    } catch (err: any) {
      console.log(err.response)
    }
  }

  @Action({ rawError: true })
  public async increment(item: CartItem) {
    this.context.commit('setCartList', item)
  }
}
