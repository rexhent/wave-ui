import{r as s,o as c,c as p,w as e,f as n,g as i,m as f,k as w,j as u,i as t,e as $,G as C,A as D,a as A,t as U}from"./vendor.e64646cc.js";import{_ as x}from"./index.90e40c3f.js";const M=t("wi-wave"),j=i("span",{class:"grey-dark1"},"Wave UI",-1),R=i("div",{class:"spacer"},null,-1),N=["innerHTML"],V=t("mdi mdi-update"),L=t("Release notes"),P=t("mdi mdi-github"),G=i("div",{class:"text-center"},[t("View the project"),i("br"),t("on Github")],-1),z=t("mdi mdi-heart-multiple-outline"),B=t("Backers");function H(o,a,v,T,E,r){const d=s("w-icon"),m=s("router-link"),g=s("w-tooltip"),h=s("w-button"),k=s("w-toolbar");return c(),p(k,{class:"main-toolbar",fixed:""},{default:e(()=>[n(m,{class:"w-flex no-grow fill-height align-center home-link",to:"/",onClick:a[0]||(a[0]=l=>r.scrollTop(!1))},{default:e(()=>[n(d,{class:"wave-logo mr3",size:"3em"},{default:e(()=>[M]),_:1}),j]),_:1}),R,i("strong",{class:"version grey size--xs",innerHTML:`Version ${r.version}`},null,8,N),n(g,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:l})=>[i("div",f({class:"ml1"},w(l)),[n(m,{to:"/release-notes",onClick:a[1]||(a[1]=S=>r.scrollTop(!0))},{default:e(()=>[n(d,{lg:""},{default:e(()=>[V]),_:1})]),_:1})],16)]),default:e(()=>[L]),_:1}),n(g,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:l})=>[i("a",f({class:"grey-dark3 ml2"},w(l),{href:"https://github.com/antoniandre/wave-ui",target:"_blank"}),[n(d,{lg:""},{default:e(()=>[P]),_:1})],16)]),default:e(()=>[G]),_:1}),n(g,{"z-index":"20","align-right":"","append-to":".main-toolbar"},{activator:e(({on:l})=>[i("div",f({class:"ml2 mr1"},w(l)),[n(m,{class:"pink-light1",to:"/backers",onClick:a[2]||(a[2]=S=>r.scrollTop(!0))},{default:e(()=>[n(d,{lg:""},{default:e(()=>[z]),_:1})]),_:1})],16)]),default:e(()=>[B]),_:1}),o.$waveui.breakpoint.xs?(c(),p(h,{key:0,class:"mr-1 hamburger-menu",onClick:a[3]||(a[3]=l=>o.$emit("update:drawerOpen",!v.drawerOpen)),lg:"",text:"",round:"",icon:v.drawerOpen?"wi-cross":"mdi mdi-menu"},null,8,["icon"])):u("",!0)]),_:1})}const F={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],computed:{version(){return"2.32.3".replace(/-(\w)(\w+)\.(\d+)/,(o,a,v,T)=>` <strong>${a.toUpperCase()}${v} ${T}</strong>`)}},methods:{async scrollTop(o=!1){await this.$nextTick(),document.documentElement.scrollTop=o?document.querySelector(".content-wrap").offsetTop-42:0}}};var W=x(F,[["render",H]]);const q={class:"nav-menu-wrap"},K={class:"nav-menu"},X=i("div",{class:"title2 mt0"},"Knowledge base",-1),Y=i("div",{class:"title2 mt4"},"UI components",-1),Q=["innerHTML"],J=t("Coming soon"),Z=t("In progress"),ee=i("div",{class:"title3 mt4"},"External UI components",-1),ne=i("p",null,"By the same author",-1),oe=t("mdi mdi-update"),te=t("Release notes");function ae(o,a,v,T,E,r){const d=s("w-button"),m=s("w-list"),g=s("w-tag"),h=s("w-icon"),k=s("router-link");return c(),$("div",q,[i("div",K,[o.$waveui.breakpoint.xs?(c(),p(d,{key:0,class:"close",onClick:a[0]||(a[0]=l=>o.$emit("update:drawerOpen",!1)),sm:"",outline:"",round:"",color:"primary",icon:"wi-cross"})):u("",!0),X,n(m,{items:o.sections,nav:"",color:"primary",onItemSelect:r.onItemClick},null,8,["items","onItemSelect"]),Y,n(m,{items:o.components,nav:"",color:"primary",onItemSelect:r.onItemClick},{item:e(({item:l})=>[i("span",{innerHTML:l.label},null,8,Q),l.disabled?(c(),p(g,{key:0,class:"ml2 text-upper",round:"",xs:"",color:"red",outline:""},{default:e(()=>[J]),_:1})):u("",!0),l.inProgress?(c(),p(g,{key:1,class:"ml2 text-upper",round:"",xs:"",color:"orange",outline:""},{default:e(()=>[Z]),_:1})):u("",!0)]),_:1},8,["items","onItemSelect"]),ee,ne,n(m,{items:o.externalComponents,nav:"",color:"primary",onItemSelect:r.onItemClick},null,8,["items","onItemSelect"]),o.$waveui.breakpoint.xs?(c(),p(k,{key:1,class:"mt3 d-iblock",to:"/release-notes",onClick:r.onItemClick},{default:e(()=>[n(h,{class:"mr2"},{default:e(()=>[oe]),_:1}),te]),_:1},8,["onClick"])):u("",!0)])])}const ie={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],data:()=>({sections:[{label:"Why Wave UI?",route:"/why-wave-ui"},{label:"Getting started",route:"/getting-started"},{label:"Browser support",route:"/browser-support"},{label:"Customization",route:"/customization"},{label:"Breakpoints",route:"/breakpoints"},{label:"Layout",route:"/layout",children:[{label:"Spaces",route:"/layout--spaces"},{label:"Grid system (flexbox)",route:"/layout--grid-system"},{label:"Grid system (grid)",route:"/layout--simplified-grid-system"},{label:"Flex",route:"/layout--flex"},{label:"Other CSS classes",route:"layout--other-css-classes"}]},{label:"Typography",route:"/typography"},{label:"Colors",route:"/colors"},{label:"Shadows, borders &amp; radii",route:"/shadows-borders-radii"},{label:"Transitions",route:"/transitions"}],components:[{label:"Accordion",route:"/w-accordion"},{label:"Alert",route:"/w-alert"},{label:"App",route:"/w-app"},{label:"Badge",route:"/w-badge"},{label:"Breadcrumbs",route:"/w-breadcrumbs"},{label:"Button",route:"/w-button"},{label:"Card",route:"/w-card"},{label:"Confirm",route:"/w-confirm"},{label:"Dialog",route:"/w-dialog"},{label:"Divider",route:"/w-divider"},{label:"Drawer",route:"/w-drawer"},{label:"Icon",route:"/w-icon"},{label:"Image",route:"/w-image"},{label:"List",route:"/w-list"},{label:"Menu",route:"/w-menu"},{label:"Notification",route:"/w-notification"},{label:"Overlay",route:"/w-overlay"},{label:"Progress",route:"/w-progress"},{label:"Rating",route:"/w-rating"},{label:"Spinner",route:"/w-spinner"},{label:"Tabs",route:"/w-tabs"},{label:"Table",route:"/w-table"},{label:"Tag",route:"/w-tag"},{label:"Timeline",route:"/w-timeline"},{label:"Toolbar",route:"/w-toolbar"},{label:"Tooltip",route:"/w-tooltip"},{label:"Form elements",route:"/form",children:[{label:"Checkbox",route:"/w-checkbox"},{label:"Input",route:"/w-input"},{label:"Form",route:"/w-form"},{label:"Radio",route:"/w-radio"},{label:"Select",route:"/w-select"},{label:"Slider",route:"/w-slider"},{label:"Switch",route:"/w-switch"},{label:"Steps",route:"/w-steps",disabled:!0},{label:"Textarea",route:"/w-textarea"}]}],externalComponents:[{label:"Calendar",route:"/calendar"},{label:"Slideshow",route:"/slideshow"},{label:"Splitter",route:"/splitter"}]}),methods:{onItemClick(){this.$emit("update:drawerOpen",!1),setTimeout(()=>{document.documentElement.scrollTop=document.querySelector(".content-wrap").offsetTop-42},200)}}};var se=x(ie,[["render",ae]]);const _e={class:"no-shrink"},re={class:"content-wrap w-flex no-shrink"},le={class:"w-flex justify-end align-center no-grow wrap"},ce={class:"grey-light3 text-upper"},pe=i("div",{class:"spacer"},null,-1),de=t("mdi mdi-heart-multiple-outline"),me=t("Backers"),ue={class:"caption"},ge=t("Made with"),fe=t("mdi mdi-vuejs"),we=t("Vue.js"),ve=t("mdi mdi-language-css3"),be=t("CSS 3"),he=t("mdi mdi-language-html5"),ke=i("span",{class:"text-nowrap"},"Html 5 & Pug",-1),ye=t("mdi mdi-sass"),Te=t("SASS"),Se=t("mdi mdi-heart"),xe=t("Love");function Ee(o,a,v,T,E,r){const d=s("nav-menu"),m=s("w-drawer"),g=s("toolbar"),h=s("w-progress"),k=s("router-view"),l=s("w-button"),S=s("w-transition-bounce"),b=s("w-icon"),I=s("router-link"),y=s("w-tooltip"),O=s("w-app");return c(),p(O,null,{default:e(()=>[r.isMobile?(c(),p(m,{key:0,class:"nav-drawer",modelValue:o.drawerOpen,"onUpdate:modelValue":a[1]||(a[1]=_=>o.drawerOpen=_),right:"",width:330},{default:e(()=>[n(d,{"drawer-open":o.drawerOpen,"onUpdate:drawer-open":a[0]||(a[0]=_=>o.drawerOpen=_)},null,8,["drawer-open"])]),_:1},8,["modelValue"])):u("",!0),i("header",_e,[n(g,{"drawer-open":o.drawerOpen,"onUpdate:drawer-open":a[2]||(a[2]=_=>o.drawerOpen=_)},null,8,["drawer-open"])]),i("div",re,[n(C,{name:"fade"},{default:e(()=>[r.loading?(c(),p(h,{key:0,color:"primary",tile:"",absolute:""})):u("",!0)]),_:1}),r.isMobile?u("",!0):(c(),p(d,{key:0,class:"navigation no-shrink","drawer-open":o.drawerOpen,"onUpdate:drawer-open":a[3]||(a[3]=_=>o.drawerOpen=_)},null,8,["drawer-open"])),i("div",{class:D(["main-content w-flex column grow",`main-content--${o.$route.name}`])},[n(k,{class:D(["grow",`main--${o.$route.name}`])},{default:e(({Component:_})=>[n(C,{name:"fade-page",mode:"out-in"},{default:e(()=>[(c(),p(A(_)))]),_:2},1024)]),_:1},8,["class"]),o.goToTop?(c(),p(S,{key:0,appear:""},{default:e(()=>[n(l,{class:"go-top mb8 mr2",icon:"wi-chevron-up",fixed:"",bottom:"",right:"",xl:"","bg-color":"grey-light5",onClick:r.scrollTop},null,8,["onClick"])]),_:1})):u("",!0),i("footer",le,[i("small",ce,"Copyright \xA9 "+U(new Date().getFullYear())+" Antoni Andre, all rights reserved.",1),pe,n(I,{class:"pink-light1 mr4",to:"/backers",onClick:r.scrollTop},{default:e(()=>[n(b,{class:"mr1"},{default:e(()=>[de]),_:1}),me]),_:1},8,["onClick"]),i("div",ue,[ge,n(y,{top:""},{activator:e(({on:_})=>[n(b,f({class:"ml1"},w(_),{sm:""}),{default:e(()=>[fe]),_:2},1040)]),default:e(()=>[we]),_:1}),n(y,{top:""},{activator:e(({on:_})=>[n(b,f({class:"ml1"},w(_),{sm:""}),{default:e(()=>[ve]),_:2},1040)]),default:e(()=>[be]),_:1}),n(y,{top:""},{activator:e(({on:_})=>[n(b,f({class:"ml1"},w(_),{sm:""}),{default:e(()=>[he]),_:2},1040)]),default:e(()=>[ke]),_:1}),n(y,{top:""},{activator:e(({on:_})=>[n(b,f({class:"ml1"},w(_),{sm:""}),{default:e(()=>[ye]),_:2},1040)]),default:e(()=>[Te]),_:1}),n(y,{top:"","align-right":""},{activator:e(({on:_})=>[n(b,f({class:"ml1 heart"},w(_),{sm:""}),{default:e(()=>[Se]),_:2},1040)]),default:e(()=>[xe]),_:1})])])],2)])]),_:1})}const Ce={components:{Toolbar:W,NavMenu:se},data:()=>({drawerOpen:!1,fixNavMenu:!1,navMenuTop:0,scrollingEl:null,contentWrapEl:null,goToTop:!1}),computed:{loading(){return this.$router.status.loading},isMobile(){return this.$waveui.breakpoint.xs}},methods:{onScroll(){this.fixNavMenu=this.scrollingEl.scrollTop>=this.navMenuTop,this.goToTop=this.scrollingEl.scrollTop>=this.contentWrapEl.offsetTop},onResize(){this.navMenuTop=this.contentWrapEl.offsetTop-12},async scrollTop(){await this.$nextTick(),document.documentElement.scrollTo({top:0,behavior:"smooth"})}},mounted(){this.contentWrapEl=document.querySelector(".content-wrap"),this.navMenuTop=this.contentWrapEl.offsetTop-12,this.scrollingEl=document.documentElement;const o=window.location.hash.replace("#","");o&&setTimeout(()=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})},200),window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize)}};var Oe=x(Ce,[["render",Ee]]);export{Oe as default};
