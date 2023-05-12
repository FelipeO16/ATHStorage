export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const AddProduct = () => import('../..\\components\\Organisms\\addproduct\\AddProduct.vue' /* webpackChunkName: "components/add-product" */).then(c => wrapFunctional(c.default || c))
export const Cart = () => import('../..\\components\\Organisms\\cart\\Cart.vue' /* webpackChunkName: "components/cart" */).then(c => wrapFunctional(c.default || c))
export const Sidebar = () => import('../..\\components\\Organisms\\default\\Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const Logs = () => import('../..\\components\\Organisms\\logs\\Logs.vue' /* webpackChunkName: "components/logs" */).then(c => wrapFunctional(c.default || c))
export const ProductList = () => import('../..\\components\\Organisms\\productlist\\ProductList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c))
export const ShowQr = () => import('../..\\components\\Organisms\\showqr\\ShowQr.vue' /* webpackChunkName: "components/show-qr" */).then(c => wrapFunctional(c.default || c))
export const AddProductForm = () => import('../..\\components\\Molecules\\addproduct\\AddProductForm.vue' /* webpackChunkName: "components/add-product-form" */).then(c => wrapFunctional(c.default || c))
export const QrCode = () => import('../..\\components\\Molecules\\addproduct\\QrCode.vue' /* webpackChunkName: "components/qr-code" */).then(c => wrapFunctional(c.default || c))
export const CartCategories = () => import('../..\\components\\Molecules\\cartlist\\CartCategories.vue' /* webpackChunkName: "components/cart-categories" */).then(c => wrapFunctional(c.default || c))
export const CartItem = () => import('../..\\components\\Molecules\\cartlist\\CartItem.vue' /* webpackChunkName: "components/cart-item" */).then(c => wrapFunctional(c.default || c))
export const CartList = () => import('../..\\components\\Molecules\\cartlist\\CartList.vue' /* webpackChunkName: "components/cart-list" */).then(c => wrapFunctional(c.default || c))
export const CartListHeader = () => import('../..\\components\\Molecules\\cartlist\\CartListHeader.vue' /* webpackChunkName: "components/cart-list-header" */).then(c => wrapFunctional(c.default || c))
export const Carts = () => import('../..\\components\\Molecules\\cartlist\\Carts.vue' /* webpackChunkName: "components/carts" */).then(c => wrapFunctional(c.default || c))
export const SidebarIcons = () => import('../..\\components\\Molecules\\default\\SidebarIcons.vue' /* webpackChunkName: "components/sidebar-icons" */).then(c => wrapFunctional(c.default || c))
export const ProductCountMain = () => import('../..\\components\\Molecules\\productcount\\ProductCountMain.vue' /* webpackChunkName: "components/product-count-main" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Atoms\\default\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Notify = () => import('../..\\components\\Atoms\\default\\Notify.vue' /* webpackChunkName: "components/notify" */).then(c => wrapFunctional(c.default || c))
export const SidebarIcon = () => import('../..\\components\\Atoms\\default\\SidebarIcon.vue' /* webpackChunkName: "components/sidebar-icon" */).then(c => wrapFunctional(c.default || c))
export const ToggleDarkmode = () => import('../..\\components\\Atoms\\default\\ToggleDarkmode.vue' /* webpackChunkName: "components/toggle-darkmode" */).then(c => wrapFunctional(c.default || c))
export const StatusCategories = () => import('../..\\components\\Molecules\\productlist\\StatusCategories.vue' /* webpackChunkName: "components/status-categories" */).then(c => wrapFunctional(c.default || c))
export const StatusDialogue = () => import('../..\\components\\Molecules\\productlist\\StatusDialogue.vue' /* webpackChunkName: "components/status-dialogue" */).then(c => wrapFunctional(c.default || c))
export const StatusHeader = () => import('../..\\components\\Molecules\\productlist\\StatusHeader.vue' /* webpackChunkName: "components/status-header" */).then(c => wrapFunctional(c.default || c))
export const StatusItem = () => import('../..\\components\\Molecules\\productlist\\StatusItem.vue' /* webpackChunkName: "components/status-item" */).then(c => wrapFunctional(c.default || c))
export const StatusMain = () => import('../..\\components\\Molecules\\productlist\\StatusMain.vue' /* webpackChunkName: "components/status-main" */).then(c => wrapFunctional(c.default || c))
export const StatusProductList = () => import('../..\\components\\Molecules\\productlist\\StatusProductList.vue' /* webpackChunkName: "components/status-product-list" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
