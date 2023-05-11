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

  @Mutation
  private removeCartList(index: string): void {
    delete this.cart_list[index]
    this.cart_list = { ...this.cart_list }
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
    return true
  }

  //action to remove list by index as string from cart
  @Action({ rawError: true })
  public async remove(index: string) {
    this.context.commit('removeCartList', index)
    return true
  }

  @Action({ rawError: true })
  public async buy({ title, products }: any ) {
    console.log(products)
    const name = "Aussie Tiny Houses"
    const email = "milton@aussietinyhouses.com.au"
    const obs = email
    console.log('title'+title)
    let data = {title, products, name, email, obs}
    try {
      const infos = await $axios.$post('/order',data)
      return infos
    } catch (err: any) {
      console.log(err.response)
    }
  }

  @Action({ rawError: true })
  public async getLogs() {
    try {
      const infos = await $axios.$get('/logs')
      console.log(infos.data[0])
      return infos.data
    } catch (err: any) {
      console.log(err.response)
    }
  }
}
