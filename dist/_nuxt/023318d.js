(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{397:function(t,e,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(107).default)("17e339e0",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r(397)},424:function(t,e,r){var n=r(106)((function(i){return i[1]}));n.push([t.i,".count[data-v-36ac0f4f]{height:100%;width:100%;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.box-count[data-v-36ac0f4f]{display:flex;width:100%;flex-direction:column;gap:2rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(66, 85, 212, var(--tw-border-opacity));padding:1rem}@media (min-width: 768px){.box-count[data-v-36ac0f4f]{width:50%}}.box-count div[data-v-36ac0f4f]{display:flex;gap:0.5rem}input[data-v-36ac0f4f]{width:100%;--tw-text-opacity:1;color:rgba(66, 85, 212, var(--tw-text-opacity))}.test[data-v-36ac0f4f]{height:50%;width:83.333333%}",""]),n.locals={},t.exports=n},437:function(t,e,r){"use strict";r.r(e);r(37),r(46);var n=r(8),o=(r(41),r(1)),c=r(84),d=o.default.extend({data:function(){return{product:{},new_value:0}},computed:{page:function(){return c.pages.$page}},watch:{product:function(){this.$forceUpdate}},methods:{onDecode:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.products.get(t);case 2:n=r.sent,e.product=n[0];case 4:case"end":return r.stop()}}),r)})))()},set:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.products.update(t.product);case 1:case"end":return e.stop()}}),e)})))()}}}),l=(r(423),r(66)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return 2==t.page?e("div",{staticClass:"count"},[e("div",{staticClass:"box-count"},[e("div",{staticClass:"name"},[e("label",{attrs:{for:"product-name"}},[t._v("Product:")]),t._v(" "),e("div",{attrs:{id:"product-name"}},[t._v(t._s(t.product.description))])]),t._v(" "),e("div",{staticClass:"quantity"},[e("label",{attrs:{for:"product-quantity"}},[t._v("Qtt:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_value,expression:"new_value"}],attrs:{type:"number",placeholder:"quantity"},domProps:{value:t.new_value},on:{input:function(e){e.target.composing||(t.new_value=e.target.value)}}})]),t._v(" "),e("button",{on:{click:function(e){return t.set()}}},[t._v("Set")])]),t._v(" "),e("div",{staticClass:"test"},[e("qrcode-stream",{staticClass:"qr-capture",on:{decode:t.onDecode}})],1)]):t._e()}),[],!1,null,"36ac0f4f",null);e.default=component.exports}}]);