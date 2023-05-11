exports.ids = [19];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Molecules/productlist/StatusDialogue.vue?vue&type=template&id=57c965fe&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('div', {
    staticClass: "dialogue"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("dialogue-box", {
    'h-2/5': !_vm.showQrCode,
    'h-3/5': _vm.showQrCode
  }) + " data-v-57c965fe>", "</div>", [_vm._ssrNode("<button class=\"show-qrcode\" data-v-57c965fe>" + _vm._ssrEscape("\n      " + _vm._s(_vm.showQrCode ? 'Hidden QrCode' : 'Show QrCode') + "\n    ") + "</button> <img" + _vm._ssrAttr("src", `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${_vm.item.code}&bgcolor=161932`) + " class=\"qr\"" + _vm._ssrStyle(null, null, {
    display: _vm.showQrCode ? '' : 'none'
  }) + " data-v-57c965fe> " + (_vm.item.status == 'Bad' ? "<div class=\"dialogue-text\" data-v-57c965fe>\n      Add <span data-v-57c965fe>" + _vm._ssrEscape(_vm._s(_vm.item.description) + " ") + "</span>to cart?\n    </div>" : "<!---->") + " " + (_vm.item.status == 'Good' ? "<div class=\"dialogue-text\" data-v-57c965fe>\n      Product <span data-v-57c965fe>" + _vm._ssrEscape(_vm._s(_vm.item.description) + " ") + "</span>is good, add to cart?\n    </div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"dialogue-quantity\" data-v-57c965fe>", "</div>", [_vm._ssrNode("<label for=\"quantity\" data-v-57c965fe>Quantity</label> "), _vm._ssrNode("<button class=\"quantity-button\" data-v-57c965fe>", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.faMinus
    }
  })], 1), _vm._ssrNode(" <input id=\"quantity\" type=\"number\" name=\"quantity\"" + _vm._ssrAttr("value", _vm.item_quantity) + " data-v-57c965fe> "), _vm._ssrNode("<button class=\"quantity-button\" data-v-57c965fe>", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.faPlus
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dialogue-confirm\" data-v-57c965fe>", "</div>", [_vm._ssrNode("<button data-v-57c965fe>", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.faCircleCheck
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button data-v-57c965fe>", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": _vm.faCircleXmark
    }
  })], 1)], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Molecules/productlist/StatusDialogue.vue?vue&type=template&id=57c965fe&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./store/index.ts + 1 modules
var store = __webpack_require__(14);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Molecules/productlist/StatusDialogue.vue?vue&type=script&lang=ts&



/* harmony default export */ var StatusDialoguevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      item_quantity: 1,
      showQrCode: true
    };
  },

  computed: {
    item() {
      return store["dialogue"].$dialogue_item;
    },

    cart() {
      return store["cart"];
    },

    dialogueBox() {
      return store["dialogue"];
    },

    faCancel() {
      return free_solid_svg_icons_["faCancel"];
    },

    faCircleCheck() {
      return free_solid_svg_icons_["faCircleCheck"];
    },

    faCircleXmark() {
      return free_solid_svg_icons_["faCircleXmark"];
    },

    faPlus() {
      return free_solid_svg_icons_["faPlus"];
    },

    faMinus() {
      return free_solid_svg_icons_["faMinus"];
    }

  },
  methods: {
    closeDialogue(status) {
      this.dialogueBox.toggleDialogue(status);
    },

    addToCart(item) {
      // this.dialogueBox.$dialogue_box = false
      let data = {
        id: item.id,
        code: item.code,
        suplier: item.suplier,
        description: item.description,
        quantity: this.item_quantity
      };
      this.cart.increment(data);
      this.$toast.success(item.description + 'Added to cart!', {
        duration: 3000
      });
      this.closeDialogue(false);
    },

    sum() {
      var _a;

      this.item_quantity += 1;
      (_a = this.$refs.quantity) === null || _a === void 0 ? void 0 : _a.focus();
    },

    sub() {
      var _a;

      this.item_quantity -= 1;
      (_a = this.$refs.quantity) === null || _a === void 0 ? void 0 : _a.focus();
    },

    count() {}

  }
}));
// CONCATENATED MODULE: ./components/Molecules/productlist/StatusDialogue.vue?vue&type=script&lang=ts&
 /* harmony default export */ var productlist_StatusDialoguevue_type_script_lang_ts_ = (StatusDialoguevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Molecules/productlist/StatusDialogue.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productlist_StatusDialoguevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57c965fe",
  "42f7ef0c"
  
)

/* harmony default export */ var StatusDialogue = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("44911b68", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusDialogue_vue_vue_type_style_index_0_id_57c965fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusDialogue_vue_vue_type_style_index_0_id_57c965fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusDialogue_vue_vue_type_style_index_0_id_57c965fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusDialogue_vue_vue_type_style_index_0_id_57c965fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusDialogue_vue_vue_type_style_index_0_id_57c965fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "input[data-v-57c965fe]::-webkit-inner-spin-button,input[data-v-57c965fe]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-57c965fe]{-moz-appearance:textfield}.dialogue[data-v-57c965fe]{position:absolute;display:flex;height:83.333333%;width:83.333333%;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));--tw-bg-opacity:0.4}.dialogue-box[data-v-57c965fe]{display:flex;max-width:48rem;flex-direction:column;align-items:center;justify-content:space-around;gap:1rem;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(66, 85, 212, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(22, 25, 50, var(--tw-bg-opacity));padding:1rem}.show-qrcode[data-v-57c965fe]{--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity))}.dialogue-text[data-v-57c965fe]{text-align:center;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.dialogue-text span[data-v-57c965fe]{font-style:italic;--tw-text-opacity:1;color:rgba(179, 187, 238, var(--tw-text-opacity))}.dialogue-quantity[data-v-57c965fe]{position:relative;display:flex;align-items:center;justify-content:center;border-radius:0.375rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(66, 85, 212, var(--tw-border-opacity));padding:0.5rem}.dialogue-quantity label[data-v-57c965fe]{position:absolute;top:-0.625rem;left:50%;--tw-translate-x:-50%;transform:var(--tw-transform);transform:var(--tw-transform);--tw-bg-opacity:1;background-color:rgba(22, 25, 50, var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-size:0.875rem;line-height:1.25rem;text-transform:uppercase;letter-spacing:0.1em;--tw-text-opacity:1;color:rgba(236, 238, 251, var(--tw-text-opacity))}.dialogue-quantity input[data-v-57c965fe]{background-color:transparent;text-align:center;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.dialogue-quantity input[data-v-57c965fe]:focus{background-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}.quantity-button[data-v-57c965fe]:hover{--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity))}.dialogue-confirm[data-v-57c965fe]{display:flex;align-items:center;justify-content:center;gap:1.25rem}.dialogue-confirm button[data-v-57c965fe]:first-child{font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity))}.dialogue-confirm button[data-v-57c965fe]:nth-child(2){font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=status-dialogue.js.map