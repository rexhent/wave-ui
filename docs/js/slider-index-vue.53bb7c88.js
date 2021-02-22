(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["slider-index-vue","slider-api-vue","slider-examples-vue"],{"063c":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),l("example",{attrs:{"content-class":"mt5 px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider :value="50"></w-slider>\n')]},proxy:!0}])},[l("w-slider",{attrs:{value:50}})],1),l("title-link",{attrs:{h2:""}},[e._v("V-model & external controls")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex align-center>\n  <w-button\n    @click="sliderValue -= 5"\n    icon="wi-minus"\n    bg-color="success"\n    sm>\n  </w-button>\n\n  <w-slider\n    class="mx3 grow"\n    v-model="sliderValue"\n    color="green">\n  </w-slider>\n\n  <w-button\n    @click="sliderValue += 5"\n    icon="wi-plus"\n    bg-color="success"\n    sm>\n  </w-button>\n</w-flex>\n\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ sliderValue }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 50\n})\n")]},proxy:!0}])},[l("w-flex",{attrs:{"align-center":""}},[l("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(t){e.sliderValue-=5}}}),l("w-slider",{staticClass:"mx3 grow",attrs:{color:"green"},model:{value:e.sliderValue,callback:function(t){e.sliderValue=t},expression:"sliderValue"}}),l("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(t){e.sliderValue+=5}}})],1),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.sliderValue))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Min & max")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb4">From 4 to 5</div>\n<w-slider\n  v-model="sliderValue"\n  :min="4"\n  :max="5">\n</w-slider>\n\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ sliderValue }}")+'</code>\n</div>\n\n<div class="title4 mt8 mb4">From -10 to 10</div>\n<w-slider\n  v-model="slider2Value"\n  :min="-10"\n  :max="10">\n</w-slider>\n\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ slider2Value }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 4.5,\n  slider2Value: 0\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4 mb4"},[e._v("From 4 to 5")]),l("w-slider",{attrs:{min:4,max:5},model:{value:e.minMaxValue,callback:function(t){e.minMaxValue=t},expression:"minMaxValue"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue))])]),l("div",{staticClass:"title4 mt8 mb4"},[e._v("From -10 to 10")]),l("w-slider",{attrs:{min:-10,max:10},model:{value:e.minMaxValue2,callback:function(t){e.minMaxValue2=t},expression:"minMaxValue2"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.minMaxValue2))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider class="mt2" :value="50" disabled></w-slider>\n<w-slider class="mt8" :value="50" readonly></w-slider>\n')]},proxy:!0}])},[l("w-slider",{staticClass:"mt2",attrs:{value:50,disabled:""}}),l("w-slider",{staticClass:"mt8",attrs:{value:50,readonly:""}})],1),l("title-link",{attrs:{h2:""}},[e._v("Labels on the left & right")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="mt2"\n  :value="50"\n  label-left="0"\n  label-right="100">\n</w-slider>\n\n<w-slider\n  class="mt6"\n  :value="50"\n  label-left="Left">\n</w-slider>\n\n<w-slider\n  class="mt6"\n  :value="50"\n  label-right="Right">\n</w-slider>\n\n<w-slider\n  class="mt12"\n  :value="50">\n  <template #label-left>\n    <span>Weight</span>\n    <w-icon class="ml2 green">mdi mdi-feather</w-icon>\n  </template>\n  <template #label-right>\n    <w-icon class="red">mdi mdi-weight</w-icon>\n    <w-icon class="red">mdi mdi-weight</w-icon>\n  </template>\n</w-slider>\n')]},proxy:!0}])},[l("w-slider",{staticClass:"mt2",attrs:{value:50,"label-left":"0","label-right":"100"}}),l("w-slider",{staticClass:"mt6",attrs:{value:50,"label-left":"Left"}}),l("w-slider",{staticClass:"mt6",attrs:{value:50,"label-right":"Right"}}),l("w-slider",{staticClass:"mt12",attrs:{value:50},scopedSlots:e._u([{key:"label-left",fn:function(){return[l("span",[e._v("Weight")]),l("w-icon",{staticClass:"ml2 green"},[e._v("mdi mdi-feather")])]},proxy:!0},{key:"label-right",fn:function(){return[l("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")]),l("w-icon",{staticClass:"red"},[e._v("mdi mdi-weight")])]},proxy:!0}])})],1),l("title-link",{attrs:{h2:""}},[e._v("Thumb label")]),l("example",{attrs:{"content-class":"pt12 px8"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="mt12"\n  :value="24"\n  thumb-label\n  color="primary-light3">\n</w-slider>\n')]},proxy:!0}])},[l("w-slider",{staticClass:"mb4",attrs:{value:24,"thumb-label":"",color:"primary-light3"}})],1),l("title-link",{attrs:{h3:"",slug:"custom-label-with-label-slot"}},[e._v("Customize the label with the "),l("span",{staticClass:"code"},[e._v("label")]),e._v(" slot")]),l("example",{attrs:{"content-class":"pt12 pb8 px8"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="ma12"\n  :value="46.3"\n  thumb-label\n  color="primary-light3">\n  <template #label="{ value }">\n    '+e._s("{{ parseInt(value * 10) / 10 }}")+"%\n  </template>\n</w-slider>\n")]},proxy:!0}])},[l("w-slider",{attrs:{value:46.3,"thumb-label":"",color:"primary-light3"},scopedSlots:e._u([{key:"label",fn:function(t){var l=t.value;return[e._v(e._s(~~(10*l)/10)+"%")]}}])})],1),l("title-link",{attrs:{h3:""}},[e._v("Droplet style label")]),l("p",[e._v("With this option you can have a more modern look, but the drawback is that it can't contain long texts.")]),e._m(1),e._m(2),e._m(3),l("example",{attrs:{"content-class":"pt12 pl10 pr12"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-slider\n  class="ma12"\n  :value="30"\n  thumb-label="droplet">\n</w-slider>\n\n<w-slider\n  class="big-label.ma12"\n  :value="60"\n  thumb-label="droplet"\n  thumb-label-class="info--bg">\n</w-slider>')]},proxy:!0},{key:"css",fn:function(){return[e._v(".big-label {font-size: 1.4em;}\n")]},proxy:!0}])},[l("w-slider",{staticClass:"mt2 mb12",attrs:{value:30,"thumb-label":"droplet"}}),l("w-slider",{staticClass:"big-label mt12 mb4",attrs:{value:60,"thumb-label":"droplet","thumb-label-class":"info--bg"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Steps")]),e._m(4),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb4">Step = 1</div>\n<w-slider v-model="sliderValue" :step="1"></w-slider>\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ sliderValue }}")+'</code>\n</div>\n\n<div class="title4 mt8 mb4">Step = 10</div>\n<w-slider v-model="slider2Value" :step="10"></w-slider>\n<div class="mt4">\n  v-model:\n  <code class="ml1">'+e._s("{{ slider2Value }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 50,\n  slider2Value: 50\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4 mb4"},[e._v("Step = 1")]),l("w-slider",{attrs:{step:1},model:{value:e.sliderStepsValue1,callback:function(t){e.sliderStepsValue1=t},expression:"sliderStepsValue1"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue1))])]),l("div",{staticClass:"title4 mt8 mb4"},[e._v("Step = 10")]),l("w-slider",{attrs:{step:10},model:{value:e.sliderStepsValue2,callback:function(t){e.sliderStepsValue2=t},expression:"sliderStepsValue2"}}),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.sliderStepsValue2))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Step labels")]),l("example",{attrs:{"content-class":"px6"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb4">Default step labels</div>\n<w-slider\n  v-model="sliderValue"\n  color="primary-light2"\n  :step="20"\n  step-labels>\n</w-slider>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 40\n})")]},proxy:!0}])},[l("div",{staticClass:"title4 mb4"},[e._v("Default step labels")]),l("w-slider",{attrs:{color:"primary-light2",step:20,"step-labels":""},model:{value:e.sliderStepsValue3,callback:function(t){e.sliderStepsValue3=t},expression:"sliderStepsValue3"}})],1)],1)},a=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("By default the range will have the "),l("code",[e._v("primary")]),e._v(" color.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is a breeze to override the droplet label size via CSS, this will suffice:"),l("code",[e._v(".w-slider {font-size: 1.4em}")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("If you need you can also adjust the content font-size with:"),l("code",[e._v(".w-slider__thumb-label div {font-size: 2em;}")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is also possible to add classes to the thumb label through the "),l("code",[e._v("thumb-label-class")]),e._v(" option\nto add a color for instance.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("There is no step by default to ensure a very smooth movement while dragging. This also means that\nthe v-model will contain decimals."),l("br"),e._v("\nIf you don't want to deal with decimals you can use the "),l("code",[e._v("step")]),e._v(" option to make the slider only\nstop on integer values.")])}],n={data:function(){return{sliderValue:50,minMaxValue:4.5,minMaxValue2:0,sliderStepsValue1:50,sliderStepsValue2:50,sliderStepsValue3:40,sliderStepsValue4:40,sliderStepsValue5:40}}},i=n,r=(l("9d40"),l("2877")),o=Object(r["a"])(i,s,a,!1,null,null,null);t["default"]=o.exports},"1cd1":function(e,t,l){},"9d40":function(e,t,l){"use strict";l("1cd1")},e498:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"w-divider my12"}),l("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),l("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),l("component-api",{attrs:{items:e.slots,title:"Slots"}}),l("component-api",{attrs:{items:e.events,title:"Events"}})],1)},a=[],n=(l("13d5"),l("1352")),i={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the range selection of the slider. When the user changes the range, the <code>v-model</code> value will be updated.',color:'Applies a foreground color to the slider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color to the slider\'s track. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',stepLabels:"A Boolean to display or hide the labels of each steps under the slider.<br>A future version will allow passing an array of custom labels.",thumblabel:"Sets a visible label for the slider.",thumbLabelClass:"Applies a custom CSS class to the slider's thumb label.",trackClass:"Applies a custom CSS class to the slider's track.",rangeClass:"Applies a custom CSS class to the slider's highlighted range.",step:"Sets an incremental/decremental integer or floating step number for the slider, e.g. <code>0.3</code>.",min:"Sets an integer or floating minimum number for the slider.",max:"Sets an integer or floating maximum number for the slider.",labelLeft:"Defines a label to display on the left of the slider.",labelRight:"Defines a label to display on the right of the slider.",name:"Provide a native HTML <code>name</code> attribute to the slider. If not provided, a unique name will be computed.",disabled:"Disables the slider making it unreactive to user interactions.",readonly:"The slider will still look like an interactive slider except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the slider.",validators:'<span class="deep-orange">Only for validation, when the slider is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the slider. Each function will be executed on slider validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the slider.'},r={},o={input:{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current value of the slider."}},"update:modelValue":{description:"Emitted each time the slider range changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current value of the slider."}},focus:{description:"Emitted when the slider is focused (the thumb button).",params:{"[DOM event object]":"The associated focus DOM event."}}},c={data:function(){return{propsDescs:i,slots:r}},computed:{props:function(){return n["a"].props},events:function(){return n["a"].emits.reduce((function(e,t){return(e[t]=o[t]||{})&&e}),{})}}},d=c,u=l("2877"),m=Object(u["a"])(d,s,a,!1,null,null,null);t["default"]=m.exports},e930:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("main",[l("ui-component-title",[e._v("w-slider")]),l("examples"),l("api")],1)},a=[],n=l("063c"),i=l("e498"),r={components:{Examples:n["default"],Api:i["default"]}},o=r,c=l("2877"),d=Object(c["a"])(o,s,a,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=slider-index-vue.53bb7c88.js.map