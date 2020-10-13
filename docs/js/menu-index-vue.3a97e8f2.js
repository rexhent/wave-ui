(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["menu-index-vue","menu-api-vue","menu-examples-vue"],{"36c2":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-component-title",[t._v("w-menu")]),n("examples"),n("api")],1)},a=[],s=n("e770"),r=n("decd"),l={components:{Examples:s["default"],Api:r["default"]}},i=l,u=n("2877"),c=Object(u["a"])(i,o,a,!1,null,null,null);e["default"]=c.exports},"3f64":function(t,e,n){"use strict";var o=n("f926"),a=n.n(o);a.a},decd:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),n("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("api",{attrs:{items:t.slots,title:"Slots"}}),n("api",{attrs:{items:t.events,title:"Events"}})],1)},a=[],s=(n("13d5"),n("8e58")),r={value:"This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.",showOnHover:"",hideOnMenuClick:"",color:'Applies a color to the menu\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the menu\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the menu.",custom:'By default, the menu layout is a <span class="code">w-card</span>. To have more flexibility, you can set this option to true.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Applies a custom CSS class to the menu element.",titleClass:"Applies a custom CSS class to the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Applies a custom CSS class to the menu's content when using the default card layout (when not using the <code>custom</code> prop).",detachTo:"",fixed:"",top:"",bottom:"",left:"",right:"",alignTop:"",alignBottom:"",alignLeft:"",alignRight:"",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",overlay:"",persistent:"When set to true, clicking outside of the menu will not close the menu."},l={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},i={input:"Emitted each time the state of the component changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).","update:modelValue":"Emitted each time the state of the component changes (when an item is expanded or collapsed). It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).",close:"Emitted on menu close.",open:"Emitted on menu open."},u={data:function(){return{propsDescs:r,slots:l}},computed:{props:function(){return s["a"].props},events:function(){return s["a"].emits.reduce((function(t,e){return(t[e]={description:i[e]||""})&&t}),{})}}},c=u,m=n("2877"),p=Object(m["a"])(c,o,a,!1,null,null,null);e["default"]=p.exports},e770:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-link",{attrs:{h2:""}},[t._v("Show on click or on hover")]),n("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu\n  template(#activator="{ on }")\n    w-button.mr3(v-on="on" outline color="primary") Show menu on click\n  | Menu content\n\nw-menu(show-on-hover)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show menu on hover\n  | Menu content\n')]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example1"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on click")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example1","show-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on hover")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Position")]),n("example",{staticClass:"example2",attrs:{"content-class":"py12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex(:gap="3" wrap)\n  w-menu(left)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on left\n    | Menu content\n  w-menu\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on bottom\n    | Menu content\n  w-menu(top)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on top\n    | Menu content\n  w-menu(right)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on right\n    | Menu content\n')]},proxy:!0}])},[n("w-flex",{attrs:{gap:3,wrap:""}},[n("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on bottom")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on right")])]}}])},[t._v("Menu content")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Alignments")]),n("p",[t._v("In addition to positions, you can align the menu with its activator.")]),n("example",{staticClass:"example2"},[n("div",{staticClass:"title4 mb2"},[t._v("top position")]),n("w-menu",{attrs:{"detach-to":".example2",top:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",top:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Bottom position")]),n("w-menu",{attrs:{"detach-to":".example2","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Right position")]),n("w-menu",{attrs:{"detach-to":".example2",right:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",right:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Left position")]),n("w-menu",{attrs:{"detach-to":".example2",left:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",left:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Color & background color")]),t._m(0),n("example",{staticClass:"example3",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(color="blue-dark2" bg-color="blue-light5")\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a blue menu\n  | Menu content\n')]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example3",color:"blue-dark2","bg-color":"blue-light5"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a blue menu")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),n("example",{staticClass:"example4",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex(wrap :gap="3")\n  w-menu(tile)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show a tile menu\n    | Menu content\n  w-menu(round)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show a round menu\n    | Menu content\n  w-menu(shadow)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show a shadow menu\n    | Menu content\n')]},proxy:!0}])},[n("w-flex",{attrs:{wrap:"",gap:3}},[n("w-menu",{attrs:{"detach-to":".example4",tile:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a tile menu")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example4",round:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a round menu")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example4",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a shadow menu")])]}}])},[t._v("Menu content")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Menu content: w-card")]),n("p",[t._v("By default the menu is a w-card, so it accepts all the props of a w-card.")]),n("example",{staticClass:"example5",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(shadow v-model="showMenu")\n  template(#activator="")\n    w-button.mr3(@click="showMenu = true" outline color="primary") Show a w-card menu\n  .title4 How much do you like Wave UI?\n  p Pick a serious answer.\n  w-flex.pl10.mt4(wrap justify-end)\n    w-button.mr1(text color="green" @click="showMenu = false") Love it!\n    w-button.mr1(text color="green" @click="showMenu = false") Love it!\n    w-button(text color="green" @click="showMenu = false") Love it!\nw-menu(shadow custom)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a list menu\n  w-card.white--bg(content-class="pa0")\n    w-toolbar\n      .title3.ma0 Menu Title\n      .spacer\n      span.ml1 Item 1\n      span.ml1 Item 2\n    .pa3 This is some content in a w-card component.')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false\n})\n")]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example5",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("w-button",{staticClass:"mr3 mb2",attrs:{outline:"",color:"primary"},on:{click:function(e){t.showMenu=!0}}},[t._v("Show a w-card menu")])]},proxy:!0}]),model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[n("div",{staticClass:"title4"},[t._v("How much do you like Wave UI?")]),n("p",[t._v("Pick a serious answer.")]),n("w-flex",{staticClass:"pl10 mt4",attrs:{wrap:"","justify-end":""}},[n("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")]),n("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")]),n("w-button",{attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")])],1)],1),n("w-menu",{attrs:{"detach-to":".example5",shadow:"",custom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}])},[n("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[n("w-toolbar",[n("div",{staticClass:"title3 ma0"},[t._v("Menu Title")]),n("div",{staticClass:"spacer"}),n("span",{staticClass:"ml1"},[t._v("Item 1")]),n("span",{staticClass:"ml1"},[t._v("Item 2")])]),n("div",{staticClass:"pa3"},[t._v("This is some content in a w-card component.")])],1)],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Custom content: List menu")]),n("p",[t._v("By default the menu is a w-card but if you need more flexibility, you can set the custom prop and put\nwhatever you want in it, free of style.")]),n("example",{staticClass:"example6",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(v-model="showMenu" shadow custom)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a list menu\n  w-list.white--bg(\n    v-model="listSelection"\n    :items="listItems"\n    item-class="px8"\n    @item-click="showMenu = false")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false,\n  listSelection: null,\n  listItems: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example6",shadow:"",custom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}]),model:{value:t.showListMenu1,callback:function(e){t.showListMenu1=e},expression:"showListMenu1"}},[n("w-list",{staticClass:"white--bg",attrs:{items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},on:{"item-click":function(e){t.showListMenu1=!1}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Menu with overlay")]),n("example",{staticClass:"example7",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(v-model="showMenu" shadow custom overlay)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a menu & overlay\n  w-list.white--bg(\n    nav\n    :items="listItems"\n    item-class="px8"\n    @item-click="showMenu = false")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false,\n  listItems: [\n    { label: 'Item 1', route: '#item1' },\n    { label: 'Item 2', route: '#item2' },\n    { label: 'Item 3', route: '#item3' }\n  ]\n})")]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example7",shadow:"",custom:"",overlay:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a menu & overlay")])]}}]),model:{value:t.showListMenu2,callback:function(e){t.showListMenu2=e},expression:"showListMenu2"}},[n("w-list",{staticClass:"white--bg",attrs:{nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8"},on:{"item-click":function(e){t.showListMenu2=!1}}})],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Like in most components, you can define a "),n("code",[t._v("color")]),t._v(" and a  "),n("code",[t._v("bg-color")]),t._v(".")])}],s={data:function(){return{showMenu:!1,showListMenu1:!1,showListMenu2:!1,list:[]}}},r=s,l=(n("3f64"),n("2877")),i=Object(l["a"])(r,o,a,!1,null,null,null);e["default"]=i.exports},f926:function(t,e,n){}}]);
//# sourceMappingURL=menu-index-vue.3a97e8f2.js.map