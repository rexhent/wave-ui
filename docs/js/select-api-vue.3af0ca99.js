(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["select-api-vue"],{"0a8b":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),o("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("api",{attrs:{items:e.slots,title:"Slots"}}),o("api",{attrs:{items:e.events,title:"Events"}})],1)},a=[],i=(o("13d5"),o("5530")),r=o("c0bc"),l=o("12fd"),n={items:"",value:"",multiple:"",placeholder:"",label:"",labelPosition:"",innerIconLeft:"",innerIconRight:"",staticLabel:"",itemLabel:"",itemValue:"",itemClass:"Applies a custom CSS class to each seelct list item.",menuClass:"Applies a custom CSS class to the select list's floatting menu element.",color:'Applies a color to the select\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the select\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',outline:"",round:"Sets a maximum border-radius on the corners of the component, giving it a round look.",shadow:"Applies a drop shadow to the component.",tile:"Removes the default border-radius and sets sharp edges on the component.",dark:"",returnObject:"",name:"",disabled:"",readonly:"",required:"",validators:""},c={default:{description:"The label content, if the label prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.<br>This slot provides the parameter <code>item</code> containing the selected item(s) object(s). It may be an array if <code>multiple</code> is true, or a single object otherwise."},item:{description:"Provide a common custom template for all the list items.<br>This slot provides the parameter <code>item</code> containing the current item object."}},d={input:"Emitted each time the selected item(s) changes. It updates the v-model value in Vue 2.x only.<br>The new selected value(s) is/are passed as a parameter.","update:modelValue":"Emitted each time the selected item(s) changes. It updates the v-model value in Vue 3 only.<br>The new selected value(s) is/are passed as a parameter.",focus:"Emitted on select focus. The focus DOM event is returned as a parameter.",blur:"Emitted on select blur. The blur DOM event is returned as a parameter.","click:inner-icon-left":"Emitted on click of the left inner icon, if any.","click:inner-icon-right":"Emitted on click of the right inner icon, if any."},p={data:function(){return{propsDescs:n,slots:c}},computed:{props:function(){return Object(i["a"])(Object(i["a"])({},l["a"].props),r["a"].props)},events:function(){return l["a"].emits.reduce((function(e,t){return(e[t]={description:d[t]||""})&&e}),{})}}},u=p,m=o("2877"),h=Object(m["a"])(u,s,a,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=select-api-vue.3af0ca99.js.map