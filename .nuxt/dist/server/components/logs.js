exports.ids = [10];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("8df5afd0", content, true, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_style_index_0_id_baeba2e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_style_index_0_id_baeba2e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_style_index_0_id_baeba2e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_style_index_0_id_baeba2e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logs_vue_vue_type_style_index_0_id_baeba2e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".email-logs[data-v-baeba2e8]{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;gap:1rem;overflow:auto;--tw-bg-opacity:1;background-color:rgba(20, 24, 52, var(--tw-bg-opacity));padding-top:1rem;padding-bottom:1rem}.dark .email-logs[data-v-baeba2e8]{--tw-bg-opacity:1;background-color:rgba(190, 190, 196, var(--tw-bg-opacity))}table[data-v-baeba2e8]{width:91.666667%;table-layout:auto}@media (min-width: 1024px){table[data-v-baeba2e8]{width:50%}}th[data-v-baeba2e8]{border-width:2px;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(190, 190, 196, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(20, 24, 52, var(--tw-text-opacity))}.dark th[data-v-baeba2e8]{--tw-bg-opacity:1;background-color:rgba(20, 24, 52, var(--tw-bg-opacity))}td[data-v-baeba2e8]{border-width:2px;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(66, 85, 212, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.dark td[data-v-baeba2e8]{--tw-bg-opacity:1;background-color:rgba(190, 190, 196, var(--tw-bg-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Organisms/logs/Logs.vue?vue&type=template&id=baeba2e8&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _vm.page == 5 ? _c('div', {
    staticClass: "email-logs"
  }, [_vm._ssrNode("<table class=\"table table-striped table-hover\" data-v-baeba2e8>", "</table>", [_vm._ssrNode("<thead data-v-baeba2e8><tr data-v-baeba2e8><th scope=\"col\" data-v-baeba2e8>Supplier</th> <th scope=\"col\" data-v-baeba2e8>Date</th> <th scope=\"col\" data-v-baeba2e8>Status</th></tr></thead> "), _vm._ssrNode("<tbody data-v-baeba2e8>", "</tbody>", [_c('client-only', _vm._l(_vm.list, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_vm._v(_vm._s(item.data.email.subject))]), _vm._v(" "), _c('td', [_vm._v("\n            " + _vm._s(new Date(item.created_at).toLocaleString('en-US', {
      timeZone: 'Australia/Brisbane'
    })) + "\n          ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.data.email.status))])]);
  }), 0)], 1)], 2)]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Organisms/logs/Logs.vue?vue&type=template&id=baeba2e8&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Organisms/logs/Logs.vue?vue&type=script&lang=ts&


/* harmony default export */ var Logsvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  computed: {
    page() {
      return store["pages"].$page;
    }

  },

  data() {
    return {
      list: {}
    };
  },

  async created() {
    const respon = await store["cart"].getLogs();
    this.list = respon;
  }

}));
// CONCATENATED MODULE: ./components/Organisms/logs/Logs.vue?vue&type=script&lang=ts&
 /* harmony default export */ var logs_Logsvue_type_script_lang_ts_ = (Logsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Organisms/logs/Logs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  logs_Logsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "baeba2e8",
  "f54d87e6"
  
)

/* harmony default export */ var Logs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=logs.js.map