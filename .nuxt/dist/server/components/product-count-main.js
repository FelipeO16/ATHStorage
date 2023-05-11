exports.ids = [12];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("e58bb5ec", content, true, context)
};

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCountMain_vue_vue_type_style_index_0_id_b9df2b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCountMain_vue_vue_type_style_index_0_id_b9df2b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCountMain_vue_vue_type_style_index_0_id_b9df2b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCountMain_vue_vue_type_style_index_0_id_b9df2b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCountMain_vue_vue_type_style_index_0_id_b9df2b7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".count[data-v-b9df2b7e]{height:100%;width:100%;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.box-count[data-v-b9df2b7e]{display:flex;width:100%;flex-direction:column;gap:2rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(66, 85, 212, var(--tw-border-opacity));padding:1rem}@media (min-width: 768px){.box-count[data-v-b9df2b7e]{width:50%}}.scan-confirmation[data-v-b9df2b7e]{position:absolute;width:100%;height:100%;background-color:hsla(0,0%,100%,.8);display:flex;flex-flow:row nowrap;justify-content:center}.box-count div[data-v-b9df2b7e]{display:flex;gap:0.5rem}input[data-v-b9df2b7e]{width:100%;--tw-text-opacity:1;color:rgba(66, 85, 212, var(--tw-text-opacity))}.test[data-v-b9df2b7e]{height:50%;width:83.333333%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Molecules/productcount/ProductCountMain.vue?vue&type=template&id=b9df2b7e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _vm.page == 2 ? _c('div', {
    staticClass: "count"
  }, [_vm._ssrNode("<div class=\"box-count\"" + _vm._ssrStyle(null, null, {
    display: _vm.showProduct ? '' : 'none'
  }) + " data-v-b9df2b7e><div class=\"quantity\" data-v-b9df2b7e><label for=\"product-quantity\" data-v-b9df2b7e>Qtt:</label> <input type=\"number\" placeholder=\"quantity\"" + _vm._ssrAttr("value", _vm.new_value) + " data-v-b9df2b7e></div> <button data-v-b9df2b7e>Set</button></div> "), _vm._ssrNode("<div class=\"test\" data-v-b9df2b7e>", "</div>", [_c('qrcode-stream', {
    on: {
      "decode": _vm.onDecode,
      "init": _vm.onInit
    }
  })], 1)], 2) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Molecules/productcount/ProductCountMain.vue?vue&type=template&id=b9df2b7e&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(14);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Molecules/productcount/ProductCountMain.vue?vue&type=script&lang=ts&



/* harmony default export */ var ProductCountMainvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      new_value: 0,
      camera: 'auto',
      option: {
        text: 'rear camera (default)',
        value: 'environment'
      },
      product: {},
      result: '',
      showScanConfirmation: false,
      showProduct: true,
      description: '',
      error: ''
    };
  },

  computed: {
    page() {
      return store["pages"].$page;
    },

    check() {
      return free_solid_svg_icons_["faCheckCircle"];
    } // product() {
    //   return products.$productCount as Item
    // },


  },
  methods: {
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permission';
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device';
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)';
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?';
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable';
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser';
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },

    async onDecode(decodedString) {
      const check = await store["products"].get(decodedString);
      this.product = check[0];
      alert(this.product.description); // products.count(check[0])

      this.pause();
      await this.timeout(500);
      this.unpause();
    },

    async set() {
      this.product.storage = this.new_value;

      try {
        await store["products"].update(this.product);
        this.$toast.success("Product's storage updated!", {
          duration: 3000,
          position: 'top-center'
        });
      } catch (e) {
        this.$toast.error('Error', {
          duration: 3000,
          position: 'top-center'
        });
      }

      this.new_value = 0;
      this.product.description = '';
    },

    unpause() {
      this.camera = 'auto';
    },

    pause() {
      this.camera = 'off';
    },

    timeout(ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms);
      });
    }

  }
}));
// CONCATENATED MODULE: ./components/Molecules/productcount/ProductCountMain.vue?vue&type=script&lang=ts&
 /* harmony default export */ var productcount_ProductCountMainvue_type_script_lang_ts_ = (ProductCountMainvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Molecules/productcount/ProductCountMain.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productcount_ProductCountMainvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b9df2b7e",
  "312be532"
  
)

/* harmony default export */ var ProductCountMain = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-count-main.js.map