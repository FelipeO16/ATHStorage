export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as Logo } from '../..\\components\\Atoms\\default\\Logo.vue'
export { default as Notify } from '../..\\components\\Atoms\\default\\Notify.vue'
export { default as SidebarIcon } from '../..\\components\\Atoms\\default\\SidebarIcon.vue'
export { default as ToggleDarkmode } from '../..\\components\\Atoms\\default\\ToggleDarkmode.vue'
export { default as AddProductForm } from '../..\\components\\Molecules\\addproduct\\AddProductForm.vue'
export { default as QrCode } from '../..\\components\\Molecules\\addproduct\\QrCode.vue'
export { default as CartCategories } from '../..\\components\\Molecules\\cartlist\\CartCategories.vue'
export { default as CartItem } from '../..\\components\\Molecules\\cartlist\\CartItem.vue'
export { default as CartList } from '../..\\components\\Molecules\\cartlist\\CartList.vue'
export { default as CartListHeader } from '../..\\components\\Molecules\\cartlist\\CartListHeader.vue'
export { default as Carts } from '../..\\components\\Molecules\\cartlist\\Carts.vue'
export { default as SidebarIcons } from '../..\\components\\Molecules\\default\\SidebarIcons.vue'
export { default as ProductCountMain } from '../..\\components\\Molecules\\productcount\\ProductCountMain.vue'
export { default as StatusCategories } from '../..\\components\\Molecules\\productlist\\StatusCategories.vue'
export { default as StatusDialogue } from '../..\\components\\Molecules\\productlist\\StatusDialogue.vue'
export { default as StatusHeader } from '../..\\components\\Molecules\\productlist\\StatusHeader.vue'
export { default as StatusItem } from '../..\\components\\Molecules\\productlist\\StatusItem.vue'
export { default as StatusMain } from '../..\\components\\Molecules\\productlist\\StatusMain.vue'
export { default as StatusProductList } from '../..\\components\\Molecules\\productlist\\StatusProductList.vue'
export { default as AddProduct } from '../..\\components\\Organisms\\addproduct\\AddProduct.vue'
export { default as Cart } from '../..\\components\\Organisms\\cart\\Cart.vue'
export { default as Sidebar } from '../..\\components\\Organisms\\default\\Sidebar.vue'
export { default as ProductList } from '../..\\components\\Organisms\\productlist\\ProductList.vue'
export { default as ShowQr } from '../..\\components\\Organisms\\showqr\\ShowQr.vue'

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
