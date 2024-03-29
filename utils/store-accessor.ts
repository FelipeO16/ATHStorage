import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Darkmode from '@/store/darkmode'
import Dialogue from '@/store/dialogue'
import Products from '@/store/products'
import Pages from '@/store/pages'
import Cart from '@/store/cart'

/* eslint-disable import/no-mutable-exports */
let darkmode: Darkmode
let dialogue: Dialogue
let products: Products
let pages: Pages
let cart: Cart

const initializeStores = (store: Store<any>): void => {
  darkmode = getModule(Darkmode, store)
  dialogue = getModule(Dialogue, store)
  products = getModule(Products, store)
  pages = getModule(Pages, store)
  cart = getModule(Cart, store)
}

export { initializeStores, darkmode, dialogue, products, pages, cart }
