exports.ids = [5];
exports.modules = {

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("b2b7567a", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_359cdf55_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_359cdf55_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_359cdf55_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_359cdf55_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartItem_vue_vue_type_style_index_0_id_359cdf55_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cart-item[data-v-359cdf55]{position:relative;display:flex;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:0.375rem;--tw-text-opacity:1;color:rgba(208, 213, 244, var(--tw-text-opacity));--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.delete-item[data-v-359cdf55]{top:50%;transform:translateY(-50%);position:absolute;right:0px}.delete-item button[data-v-359cdf55]{display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.cart-item[data-v-359cdf55]:hover{background-size:cover;--tw-bg-opacity:1;background-color:rgba(33, 37, 76, var(--tw-bg-opacity))}.cart-item div[data-v-359cdf55]{display:flex;justify-content:center;padding:0.5rem}.cart-item div[data-v-359cdf55]:nth-child(2), .cart-item div[data-v-359cdf55]:nth-child(3){width:16.666667%}.cart-item div[data-v-359cdf55]:nth-child(4){width:25%}.cart-item div[data-v-359cdf55]:nth-child(5){width:16.666667%}.cart-item div[data-v-359cdf55]:first-child{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Molecules/cartlist/CartItem.vue?vue&type=template&id=359cdf55&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('div', {
    staticClass: "cart-item"
  }, [_vm._ssrNode(_vm._ssrList(_vm.item, function (value, index) {
    return "<div data-v-359cdf55>" + _vm._ssrEscape("\n    " + _vm._s(value) + "\n  ") + "</div>";
  }) + " <div class=\"delete-item\" data-v-359cdf55><button class=\"bg-red-500 p-2\" data-v-359cdf55>x</button></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Molecules/cartlist/CartItem.vue?vue&type=template&id=359cdf55&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Molecules/cartlist/CartItem.vue?vue&type=script&lang=ts&


/* harmony default export */ var CartItemvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    item: {
      type: Object,
      required: true
    },
    supplier: {
      type: String,
      required: true
    }
  },

  mounted() {
    console.log(this.item);
  },

  computed: {
    cart() {
      return store["cart"];
    }

  }
}));
// CONCATENATED MODULE: ./components/Molecules/cartlist/CartItem.vue?vue&type=script&lang=ts&
 /* harmony default export */ var cartlist_CartItemvue_type_script_lang_ts_ = (CartItemvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Molecules/cartlist/CartItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cartlist_CartItemvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "359cdf55",
  "46d06d4e"
  
)

/* harmony default export */ var CartItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart-item.js.map