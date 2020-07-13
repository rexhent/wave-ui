(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialog-vue"],{f029:function(o,t,i){"use strict";i.r(t);var a=function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",[i("title-link",{staticClass:"mt-4 code",attrs:{h1:""}},[o._v("w-dialog")]),i("p",[o._v("This dialog contains some basic options to toggle on and off.")]),i("w-button",{staticClass:"px-4 mr-6 shrink",attrs:{"bg-color":"primary",dark:""},on:{click:function(t){o.dialog1.show=!0}}},[o._v("Open dialog")]),i("w-dialog",{attrs:{fullscreen:o.dialog1.fullscreen,"max-width":o.dialog1.maxWidth,persistent:o.dialog1.persistent,"persistent-no-animation":o.dialog1.persistentNoAnimation},scopedSlots:o._u([{key:"title",fn:function(){return[i("w-icon",{staticClass:"mr-2"},[o._v("mdi mdi-tune")]),o._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[i("div",{staticClass:"spacer"}),i("w-button",{on:{click:function(t){o.dialog1.show=!1}}},[o._v("Close")])]},proxy:!0}]),model:{value:o.dialog1.show,callback:function(t){o.$set(o.dialog1,"show",t)},expression:"dialog1.show"}},[i("w-checkbox",{staticClass:"mt-2",attrs:{label:"Fullscreen"},model:{value:o.dialog1.fullscreen,callback:function(t){o.$set(o.dialog1,"fullscreen",t)},expression:"dialog1.fullscreen"}}),i("w-checkbox",{staticClass:"mt-2",attrs:{label:"Persistent (try to click outside)"},model:{value:o.dialog1.persistent,callback:function(t){o.$set(o.dialog1,"persistent",t)},expression:"dialog1.persistent"}}),i("w-checkbox",{staticClass:"mt-2",attrs:{disabled:!o.dialog1.persistent,label:"Persistent with no animation"},model:{value:o.dialog1.persistentNoAnimation,callback:function(t){o.$set(o.dialog1,"persistentNoAnimation",t)},expression:"dialog1.persistentNoAnimation"}}),i("div",{staticClass:"w-flex mt-6 no-grow"},[i("span",{staticClass:"mr-2"},[o._v("Max width:")]),i("w-radios",{attrs:{items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},model:{value:o.dialog1.maxWidth,callback:function(t){o.$set(o.dialog1,"maxWidth",t)},expression:"dialog1.maxWidth"}})],1)],1),i("title-link",{attrs:{h2:""}},[o._v("Persistent prompt dialog")]),i("w-button",{staticClass:"px-4",attrs:{"bg-color":"primary",dark:""},on:{click:function(t){o.dialog2.show=!0}}},[o._v("Open dialog")]),i("w-dialog",{attrs:{persistent:"","max-width":550},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Terms and conditions")]},proxy:!0},{key:"actions",fn:function(){return[i("div",{staticClass:"spacer"}),i("w-button",{staticClass:"mr-2",attrs:{"bg-color":"error"},on:{click:function(t){o.dialog2.show=!1}}},[o._v("I disagree")]),i("w-button",{attrs:{"bg-color":"success"},on:{click:function(t){o.dialog2.show=!1}}},[o._v("I agree")])]},proxy:!0}]),model:{value:o.dialog2.show,callback:function(t){o.$set(o.dialog2,"show",t)},expression:"dialog2.show"}},[i("p",[o._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,\nquisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas\nodit dolor labore eveniet at vel sequi nostrum."),i("br"),i("br"),o._v("\nVoluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi\ndolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi\naliquid dolore quo amet deserunt asperiores placeat maxime perferendis.")])]),i("title-link",{attrs:{h2:""}},[o._v("Nesting")]),i("w-button",{staticClass:"px-4",attrs:{"bg-color":"primary",dark:""},on:{click:function(t){o.dialog3.show=!0}}},[o._v("Open dialog")]),i("w-dialog",{attrs:{"max-width":600},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Dialog 1")]},proxy:!0},{key:"actions",fn:function(){return[i("div",{staticClass:"spacer"}),i("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(t){o.dialog3.show=!1}}},[o._v("Close")])]},proxy:!0}]),model:{value:o.dialog3.show,callback:function(t){o.$set(o.dialog3,"show",t)},expression:"dialog3.show"}},[i("p",[o._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit...")]),i("w-button",{staticClass:"mt-6",attrs:{"bg-color":"indigo-lighter-1",dark:""},on:{click:function(t){o.dialog4.show=!0}}},[o._v("Open dialog 2")])],1),i("w-dialog",{attrs:{"max-width":250},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Dialog 2")]},proxy:!0}]),model:{value:o.dialog4.show,callback:function(t){o.$set(o.dialog4,"show",t)},expression:"dialog4.show"}},[i("w-button",{staticClass:"my-6",attrs:{"bg-color":"error",dark:""},on:{click:function(t){o.dialog4.show=!1}}},[o._v("Close")])],1),i("title-link",{attrs:{h2:""}},[o._v("Transitions")]),i("div",{staticClass:"w-flex"},[i("w-button",{staticClass:"px-4 mr-6",attrs:{"bg-color":"primary",dark:""},on:{click:function(t){o.dialog5.show=!0}}},[o._v("Open dialog")]),i("div",{staticClass:"w-flex wrap"},[i("div",{staticClass:"ma-2"},[i("div",{staticClass:"subtitle mb-2"},[o._v("Transition names")]),i("w-radios",{attrs:{items:o.transitions,"item-value":"label"},on:{change:function(t){o.dialog5.fullscreen=null}},scopedSlots:o._u([{key:"label",fn:function(t){var a=t.item;return[i("code",[o._v(o._s(a.label))])]}}]),model:{value:o.dialog5.transition,callback:function(t){o.$set(o.dialog5,"transition",t)},expression:"dialog5.transition"}})],1),i("div",{staticClass:"ma-2"},[i("div",{staticClass:"subtitle mb-2"},[o._v("Slide transitions for fullscreen")]),i("w-radios",{attrs:{items:o.transitionsForFullscreen,"item-value":"label"},on:{change:function(t){o.dialog5.fullscreen=null}},scopedSlots:o._u([{key:"label",fn:function(t){var a=t.item;return[i("code",[o._v(o._s(a.label))])]}}]),model:{value:o.dialog5.transition,callback:function(t){o.$set(o.dialog5,"transition",t)},expression:"dialog5.transition"}}),i("w-checkbox",{staticClass:"mt-2",attrs:{value:null===o.dialog5.fullscreen?o.fullscreenTransition:o.dialog5.fullscreen,label:"Fullscreen dialog"},on:{change:function(t){o.dialog5.fullscreen=t}}})],1)])],1),i("w-dialog",{attrs:{"max-width":(null===o.dialog5.fullscreen?o.fullscreenTransition:o.dialog5.fullscreen)?0:400,fullscreen:null===o.dialog5.fullscreen?o.fullscreenTransition:o.dialog5.fullscreen,transition:o.dialog5.transition},scopedSlots:o._u([{key:"title",fn:function(){return[o._v("Dialog with custom transition")]},proxy:!0}]),model:{value:o.dialog5.show,callback:function(t){o.$set(o.dialog5,"show",t)},expression:"dialog5.show"}},[i("div",{staticClass:"w-flex fill-height align-center justify-center"},[i("w-button",{staticClass:"my-6",attrs:{"bg-color":"error",dark:""},on:{click:function(t){o.dialog5.show=!1}}},[o._v("Close")])],1)]),i("title-link",{attrs:{h2:""}},[o._v("Overlay opacity and color")]),i("w-button",{staticClass:"px-4",attrs:{"bg-color":"primary",dark:""},on:{click:function(t){o.dialog6.show=!0}}},[o._v("Open control panel")]),i("w-dialog",{attrs:{"max-width":500,"overlay-opacity":"opacity"===o.dialog6.overlayChoice&&o.dialog6.overlayOpacity,"overlay-color":"opacity"!==o.dialog6.overlayChoice&&o.dialog6.overlayChoice},scopedSlots:o._u([{key:"title",fn:function(){return[i("w-icon",{staticClass:"mr-2"},[o._v("mdi mdi-tune")]),o._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[i("div",{staticClass:"spacer"}),i("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(t){o.dialog6.show=!1}}},[o._v("Close")])]},proxy:!0}]),model:{value:o.dialog6.show,callback:function(t){o.$set(o.dialog6,"show",t)},expression:"dialog6.show"}},[i("w-radio",{staticClass:"mt-1",attrs:{"return-value":"opacity"},model:{value:o.dialog6.overlayChoice,callback:function(t){o.$set(o.dialog6,"overlayChoice",t)},expression:"dialog6.overlayChoice"}},[o._v("Overlay opacity"),i("input",{directives:[{name:"model",rawName:"v-model",value:o.dialog6.overlayOpacity,expression:"dialog6.overlayOpacity"}],staticClass:"ml-2",attrs:{type:"number",step:"0.1",min:"0",max:"1"},domProps:{value:o.dialog6.overlayOpacity},on:{input:function(t){t.target.composing||o.$set(o.dialog6,"overlayOpacity",t.target.value)}}})]),i("w-radio",{staticClass:"mt-1",attrs:{"return-value":"rgba(35, 71, 129, 0.5)"},model:{value:o.dialog6.overlayChoice,callback:function(t){o.$set(o.dialog6,"overlayChoice",t)},expression:"dialog6.overlayChoice"}},[o._v("Custom color: transparent blue")]),i("w-radio",{staticClass:"mt-1",attrs:{"return-value":"#e91e63"},model:{value:o.dialog6.overlayChoice,callback:function(t){o.$set(o.dialog6,"overlayChoice",t)},expression:"dialog6.overlayChoice"}},[o._v("Custom color: opaque pink")]),i("w-radio",{staticClass:"mt-1",attrs:{"return-value":"transparent"},model:{value:o.dialog6.overlayChoice,callback:function(t){o.$set(o.dialog6,"overlayChoice",t)},expression:"dialog6.overlayChoice"}},[o._v("Custom color: transparent")])],1)],1)},l=[],e=(i("caad"),i("d81d"),i("2532"),{data:function(){return{dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,maxWidth:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-top"},{label:"slide-fade-bottom"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"}],transitionsForFullscreen:[{label:"slide-top"},{label:"slide-bottom"},{label:"slide-left"},{label:"slide-right"}]}},computed:{fullscreenTransition:function(){return this.transitionsForFullscreen.map((function(o){return o.label})).includes(this.dialog5.transition)}}}),s=e,n=i("2877"),r=Object(n["a"])(s,a,l,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=dialog-vue.826bb611.js.map