(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["menu-index-vue","menu-api-vue","menu-examples-vue"],{"36c2":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ui-component-title",[t._v("w-menu")]),e("examples"),e("api")],1)},a=[],s=e("e770"),r=e("decd"),l={components:{Examples:s["default"],Api:r["default"]}},i=l,u=e("2877"),c=Object(u["a"])(i,o,a,!1,null,null,null);n["default"]=c.exports},"3f64":function(t,n,e){"use strict";var o=e("f926"),a=e.n(o);a.a},decd:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("This API will soon be more detailed.")]),e("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("api",{attrs:{items:t.slots,title:"Slots"}}),e("api",{attrs:{items:t.events,title:"Events"}})],1)},a=[],s=(e("13d5"),e("8e58")),r={},l={},i={},u={data:function(){return{propsDescs:r,slots:l}},computed:{props:function(){return s["a"].props},events:function(){return s["a"].emits.reduce((function(t,n){return(t[n]={description:i[n]||""})&&t}),{})}}},c=u,m=e("2877"),p=Object(m["a"])(c,o,a,!1,null,null,null);n["default"]=p.exports},e770:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Show on click or on hover")]),e("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu\n  template(#activator="{ on }")\n    w-button.mr3(v-on="on" outline color="primary") Show menu on click\n  | Menu content\n\nw-menu(show-on-hover)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show menu on hover\n  | Menu content\n')]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example1"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on click")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example1","show-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on hover")])]}}])},[t._v("Menu content")])],1),e("title-link",{attrs:{h2:""}},[t._v("Position")]),e("example",{staticClass:"example2",attrs:{"content-class":"py12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex(:gap="3" wrap)\n  w-menu(left)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on left\n    | Menu content\n  w-menu\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on bottom\n    | Menu content\n  w-menu(top)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on top\n    | Menu content\n  w-menu(right)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show menu on right\n    | Menu content\n')]},proxy:!0}])},[e("w-flex",{attrs:{gap:3,wrap:""}},[e("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on left")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on bottom")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on top")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on right")])]}}])},[t._v("Menu content")])],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Alignments")]),e("p",[t._v("In addition to positions, you can align the menu with its activator.")]),e("example",{staticClass:"example2"},[e("div",{staticClass:"title4 mb2"},[t._v("top position")]),e("w-menu",{attrs:{"detach-to":".example2",top:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",top:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),e("div",{staticClass:"title4 mt6 mb2"},[t._v("Bottom position")]),e("w-menu",{attrs:{"detach-to":".example2","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),e("div",{staticClass:"title4 mt6 mb2"},[t._v("Right position")]),e("w-menu",{attrs:{"detach-to":".example2",right:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",right:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")]),e("div",{staticClass:"title4 mt6 mb2"},[t._v("Left position")]),e("w-menu",{attrs:{"detach-to":".example2",left:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example2",left:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")])],1),e("title-link",{attrs:{h2:""}},[t._v("Color & background color")]),t._m(0),e("example",{staticClass:"example3",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(color="blue-dark2" bg-color="blue-light5")\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a blue menu\n  | Menu content\n')]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example3",color:"blue-dark2","bg-color":"blue-light5"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a blue menu")])]}}])},[t._v("Menu content")])],1),e("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),e("example",{staticClass:"example4",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex(wrap :gap="3")\n  w-menu(tile)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show a tile menu\n    | Menu content\n  w-menu(round)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show a round menu\n    | Menu content\n  w-menu(shadow)\n    template(#activator="{ on }")\n      w-button(v-on="on" outline color="primary") Show a shadow menu\n    | Menu content\n')]},proxy:!0}])},[e("w-flex",{attrs:{wrap:"",gap:3}},[e("w-menu",{attrs:{"detach-to":".example4",tile:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a tile menu")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example4",round:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a round menu")])]}}])},[t._v("Menu content")]),e("w-menu",{attrs:{"detach-to":".example4",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a shadow menu")])]}}])},[t._v("Menu content")])],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Menu content: w-card")]),e("p",[t._v("By default the menu is a w-card, so it accepts all the props of a w-card.")]),e("example",{staticClass:"example5",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(shadow v-model="showMenu")\n  template(#activator="")\n    w-button.mr3(@click="showMenu = true" outline color="primary") Show a w-card menu\n  .title4 How much do you like Wave UI?\n  p Pick a serious answer.\n  w-flex.pl10.mt4(wrap justify-end)\n    w-button.mr1(text color="green" @click="showMenu = false") Love it!\n    w-button.mr1(text color="green" @click="showMenu = false") Love it!\n    w-button(text color="green" @click="showMenu = false") Love it!\nw-menu(shadow custom)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a list menu\n  w-card.white--bg(content-class="pa0")\n    w-toolbar\n      .title3.ma0 Menu Title\n      .spacer\n      span.ml1 Item 1\n      span.ml1 Item 2\n    .pa3 This is some content in a w-card component.')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false\n})\n")]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example5",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("w-button",{staticClass:"mr3 mb2",attrs:{outline:"",color:"primary"},on:{click:function(n){t.showMenu=!0}}},[t._v("Show a w-card menu")])]},proxy:!0}]),model:{value:t.showMenu,callback:function(n){t.showMenu=n},expression:"showMenu"}},[e("div",{staticClass:"title4"},[t._v("How much do you like Wave UI?")]),e("p",[t._v("Pick a serious answer.")]),e("w-flex",{staticClass:"pl10 mt4",attrs:{wrap:"","justify-end":""}},[e("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(n){t.showMenu=!1}}},[t._v("Love it!")]),e("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(n){t.showMenu=!1}}},[t._v("Love it!")]),e("w-button",{attrs:{text:"",color:"green"},on:{click:function(n){t.showMenu=!1}}},[t._v("Love it!")])],1)],1),e("w-menu",{attrs:{"detach-to":".example5",shadow:"",custom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}])},[e("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[e("w-toolbar",[e("div",{staticClass:"title3 ma0"},[t._v("Menu Title")]),e("div",{staticClass:"spacer"}),e("span",{staticClass:"ml1"},[t._v("Item 1")]),e("span",{staticClass:"ml1"},[t._v("Item 2")])]),e("div",{staticClass:"pa3"},[t._v("This is some content in a w-card component.")])],1)],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Custom content: List menu")]),e("p",[t._v("By default the menu is a w-card but if you need more flexibility, you can set the custom prop and put\nwhatever you want in it, free of style.")]),e("example",{staticClass:"example6",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(v-model="showMenu" shadow custom)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a list menu\n  w-list.white--bg(\n    v-model="listSelection"\n    :items="listItems"\n    item-class="px8"\n    @item-click="showMenu = false")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false,\n  listSelection: null,\n  listItems: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example6",shadow:"",custom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}]),model:{value:t.showListMenu1,callback:function(n){t.showListMenu1=n},expression:"showListMenu1"}},[e("w-list",{staticClass:"white--bg",attrs:{items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},on:{"item-click":function(n){t.showListMenu1=!1}},model:{value:t.list,callback:function(n){t.list=n},expression:"list"}})],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Menu with overlay")]),e("example",{staticClass:"example7",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-menu(v-model="showMenu" shadow custom overlay)\n  template(#activator="{ on }")\n    w-button(v-on="on" outline color="primary") Show a menu & overlay\n  w-list.white--bg(\n    nav\n    :items="listItems"\n    item-class="px8"\n    @item-click="showMenu = false")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showMenu: false,\n  listItems: [\n    { label: 'Item 1', route: '#item1' },\n    { label: 'Item 2', route: '#item2' },\n    { label: 'Item 3', route: '#item3' }\n  ]\n})")]},proxy:!0}])},[e("w-menu",{attrs:{"detach-to":".example7",shadow:"",custom:"",overlay:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a menu & overlay")])]}}]),model:{value:t.showListMenu2,callback:function(n){t.showListMenu2=n},expression:"showListMenu2"}},[e("w-list",{staticClass:"white--bg",attrs:{nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8"},on:{"item-click":function(n){t.showListMenu2=!1}}})],1)],1)],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Like in most components, you can define a "),e("code",[t._v("color")]),t._v(" and a  "),e("code",[t._v("bg-color")]),t._v(".")])}],s={data:function(){return{showMenu:!1,showListMenu1:!1,showListMenu2:!1,list:[]}}},r=s,l=(e("3f64"),e("2877")),i=Object(l["a"])(r,o,a,!1,null,null,null);n["default"]=i.exports},f926:function(t,n,e){}}]);
//# sourceMappingURL=menu-index-vue.9dbf9f5b.js.map