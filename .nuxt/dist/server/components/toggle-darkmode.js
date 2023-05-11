exports.ids = [24];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleDarkmode_vue_vue_type_style_index_0_id_0737e900_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleDarkmode_vue_vue_type_style_index_0_id_0737e900_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleDarkmode_vue_vue_type_style_index_0_id_0737e900_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleDarkmode_vue_vue_type_style_index_0_id_0737e900_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleDarkmode_vue_vue_type_style_index_0_id_0737e900_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".toggle[data-v-0737e900]{display:flex;cursor:pointer;align-items:center;justify-content:center;font-size:1.25rem;line-height:1.75rem;font-weight:200;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.toggle[data-v-0737e900]:hover{--tw-text-opacity:1;color:rgba(66, 85, 212, var(--tw-text-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Atoms/default/ToggleDarkmode.vue?vue&type=template&id=0737e900&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('button', {
    staticClass: "toggle",
    on: {
      "click": _vm.toggleDarkmode
    }
  }, [_vm.darkmode.$darkmode ? _c('font-awesome-icon', {
    attrs: {
      "icon": _vm.faMoon
    }
  }) : _vm._e(), _vm._ssrNode(" "), !_vm.darkmode.$darkmode ? _c('font-awesome-icon', {
    attrs: {
      "icon": _vm.faSun
    }
  }) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Atoms/default/ToggleDarkmode.vue?vue&type=template&id=0737e900&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(14);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Atoms/default/ToggleDarkmode.vue?vue&type=script&lang=ts&



/* harmony default export */ var ToggleDarkmodevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  computed: {
    darkmode() {
      return store["darkmode"];
    },

    faMoon() {
      return free_solid_svg_icons_["faMoon"];
    },

    faSun() {
      return free_solid_svg_icons_["faSun"];
    }

  },
  methods: {
    toggleDarkmode() {
      store["darkmode"].toggle(); // this.$toast.success('Teste Sucesso...', { duration: 3000 })
      // this.$toast.error('Teste Erro...', { duration: 3000 })
      // this.$toast.info('Teste Informação...', { duration: 3000 })
      // this.$toast.show('Teste Padrão...', { duration: 3000 })
    }

  }
}));
// CONCATENATED MODULE: ./components/Atoms/default/ToggleDarkmode.vue?vue&type=script&lang=ts&
 /* harmony default export */ var default_ToggleDarkmodevue_type_script_lang_ts_ = (ToggleDarkmodevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Atoms/default/ToggleDarkmode.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  default_ToggleDarkmodevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0737e900",
  "688b9b74"
  
)

/* harmony default export */ var ToggleDarkmode = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("0ec82140", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=toggle-darkmode.js.map