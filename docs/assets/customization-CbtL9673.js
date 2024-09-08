import{r as p,o as m,g,a as l,w as n,b as e,d as a,h as b,_ as y}from"./index-DJW-wguP.js";const f=["dark"],v={class:"ml4 mt2"},c={class:"ml1",href:"https://github.com/sass/sass/issues/2565",target:"_blank"},k={class:"mt2"},S=["dark"],w=["dark"],x={class:"ml2",href:"https://github.com/antoniandre/wave-ui/blob/master/src/wave-ui/scss/_layout.scss",target:"_blank"};function C(t,s){const o=p("title-link"),i=p("alert"),r=p("ssh-pre"),d=p("w-icon"),u=p("w-accordion");return m(),g("main",null,[l(o,{class:"mt4",h1:"",slug:"customization"},{default:n(()=>s[0]||(s[0]=[e("Customization Via SCSS (optional)")])),_:1}),l(i,{info:""},{default:n(()=>s[1]||(s[1]=[a("strong",null,"If you are using Nuxt",-1),e(", the steps to follow are different. Check the last paragraph of the"),a("a",{class:"ml1",href:"/getting-started#installation-on-nuxt"},"Nuxt installation",-1),e(".")])),_:1}),s[31]||(s[31]=a("p",{class:"mt8"},`Wave UI components rely on SCSS variables that you can easily override from your SCSS file,
just like this:`,-1)),a("pre",{class:"ssh-pre","data-label":"SCSS",dark:t.$store.state.darkMode},s[2]||(s[2]=[b('<span class="purple text-bold">@import </span><span class="red-light2">&#39;wave-ui/src/wave-ui/scss/_variables&#39;</span><span class="blue-grey">;</span><br><br><span class="pink">$base-font-size</span><span class="blue-grey">: </span><span class="deep-orange">14px</span><span class="blue-grey">;</span><br><span class="pink">$base-increment</span><span class="blue-grey">: </span><span class="deep-orange">5px</span><span class="blue-grey">;</span>',14)]),8,f),s[32]||(s[32]=a("div",{class:"title4"},"But to do so, you need to slightly modify your config.",-1)),l(o,{h2:""},{default:n(()=>s[3]||(s[3]=[e("Modify your config")])),_:1}),s[33]||(s[33]=a("div",{class:"title4 mt4"},"1. Install the devDependencies",-1)),l(r,{class:"mb2 d-iblock",language:"shell",dark:t.$store.state.darkMode},{default:n(()=>s[4]||(s[4]=[e("npm i -D pug sass")])),_:1},8,["dark"]),s[34]||(s[34]=a("p",{class:"caption"},"The dev dependencies are only needed for building the project. They will not ship to production.",-1)),l(u,{class:"mt3",items:1,"expand-icon-rotate-90":""},{"item-title":n(()=>s[5]||(s[5]=[a("div",{class:"body"},"Notes if you use Vue 2 and Vue CLI:",-1)])),"item-content":n(()=>[a("div",v,[s[14]||(s[14]=a("p",null,"You may need to install other dependencies:",-1)),l(r,{class:"mb2 mt0 d-iblock",language:"shell",dark:t.$store.state.darkMode},{default:n(()=>s[6]||(s[6]=[e(`npm i -D pug pug-plain-loader sass sass-loader@10
`)])),_:1},8,["dark"]),a("ul",null,[s[13]||(s[13]=a("li",null,[a("span",{class:"code"},"sass-loader 11+"),e(" is not compatible with Webpack 4 or less.")],-1)),a("li",null,[s[9]||(s[9]=e("The ")),s[10]||(s[10]=a("span",{class:"code"},"sass",-1)),s[11]||(s[11]=e(" update is needed to handle the")),a("a",c,[s[8]||(s[8]=e("new Sass division")),l(d,{class:"ml1"},{default:n(()=>s[7]||(s[7]=[e("mdi mdi-open-in-new")])),_:1})]),s[12]||(s[12]=e("."))])])])]),_:1}),s[35]||(s[35]=a("div",{class:"title4 mt8"},[e("2. Update "),a("span",{class:"code"},"main.js")],-1)),s[36]||(s[36]=a("p",null,"In main.js, replace the 2 Wave UI imports with:",-1)),l(r,{class:"mt5",language:"js",label:"main.js",dark:t.$store.state.darkMode},{default:n(()=>s[15]||(s[15]=[e("import WaveUI from 'wave-ui/src/wave-ui'")])),_:1},8,["dark"]),s[37]||(s[37]=a("div",{class:"title4 mt8"},"3. Create an SCSS file & import it globally",-1)),a("ul",null,[s[21]||(s[21]=a("li",null,[e("In your project "),a("span",{class:"code"},"src"),e(" folder, create a "),a("code",null,"_variables.scss"),e(" (usually in an "),a("span",{class:"code"},"scss"),e(`
folder), and import Wave UI's variables: `),a("code",null,"@import 'wave-ui/src/wave-ui/scss/_variables';"),e(`.
`)],-1)),a("li",k,[s[20]||(s[20]=e("Import your SCSS variables file globally from Vite config and re-serve the app.")),l(r,{language:"js",label:"vite.config.js",dark:t.$store.state.darkMode},{default:n(()=>s[16]||(s[16]=[e(`css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "@/scss/variables";'
    }
  }
}`)])),_:1},8,["dark"]),l(u,{class:"mt3",items:1,"expand-icon-rotate-90":""},{"item-title":n(()=>s[17]||(s[17]=[a("div",{class:"body"},"Or if you use Vue CLI",-1)])),"item-content":n(()=>[l(r,{class:"mt5",language:"js",label:"vue.config.js",dark:t.$store.state.darkMode},{default:n(()=>s[18]||(s[18]=[e(`module.exports = {
  transpileDependencies: ['wave-ui'],
  css: {
    loaderOptions: {
      // \`additionalData\` was called \`prependData\` prior sass-loader 9.
      sass: { additionalData: '@import "@/scss/_variables.scss";' }
    }
  }
}
`)])),_:1},8,["dark"]),l(i,{info:""},{default:n(()=>s[19]||(s[19]=[e(`Note from the above code that since you import Wave UI source code, you need to transpile
it if you don't use ESM.`),a("br",null,null,-1),e(`Vite uses ESM.
`)])),_:1})]),_:1})])]),s[38]||(s[38]=a("div",{class:"title4 mt8"},"Voilà !",-1)),s[39]||(s[39]=a("p",null,"You're all set, you can now override the SCSS variables.",-1)),s[40]||(s[40]=a("div",{class:"w-divider my12"},null,-1)),l(o,{h2:""},{default:n(()=>s[22]||(s[22]=[e("Basic SCSS overrides")])),_:1}),a("pre",{class:"ssh-pre","data-label":"@/scss/_variables.scss",dark:t.$store.state.darkMode},s[23]||(s[23]=[b('<span class="grey-light1 text-italic">// First import the Wave UI variables, then override what you want.</span><br><span class="purple text-bold">@import </span><span class="red-light2">&#39;wave-ui/src/wave-ui/scss/_variables&#39;</span><span class="blue-grey">;</span><br><br><span class="pink">$base-font-size</span><span class="blue-grey">: </span><span class="deep-orange">14px</span><span class="blue-grey">;</span><br><span class="pink">$base-increment</span><span class="blue-grey">: </span><span class="purple text-bold">round</span><span class="blue-grey">(</span><span class="pink">$base-font-size</span><span class="blue-grey mx1">/</span><span class="orange">4</span><span class="blue-grey">)</span><span class="blue-grey">;</span><br><span class="pink">$layout-padding</span><span class="blue-grey">: </span><span class="pink">$base-increment</span><span class="blue-grey mx1">*</span><span class="orange">4</span><span class="blue-grey">;</span><br><span class="pink">$border-radius</span><span class="blue-grey">: </span><span class="deep-orange">3px</span><span class="blue-grey">;</span><br><span class="pink">$border</span><span class="blue-grey">: </span><span class="deep-orange">1px solid rgba(0, 0, 0, 0.15)</span><span class="blue-grey">;</span><br><span class="pink">$drawer-max-size</span><span class="blue-grey">: </span><span class="deep-orange">380px</span><span class="blue-grey">;</span><br><span class="pink">$transition-duration</span><span class="blue-grey">: </span><span class="deep-orange">0.25s</span><span class="blue-grey">;</span><br><span class="pink">$box-shadow</span><span class="blue-grey">: </span><span class="deep-orange">0 3px 1px -2px rgba(0, 0, 0, 0.2),</span><br><span class="deep-orange">             0 2px 2px 0 rgba(0, 0, 0, 0.15),</span><br><span class="deep-orange">             0 1px 5px 0 rgba(0, 0, 0, 0.15)</span><span class="blue-grey">;</span>',57)]),8,S),l(o,{h2:""},{default:n(()=>s[24]||(s[24]=[e("Give Wave UI CSS more priority")])),_:1}),s[41]||(s[41]=a("p",null,"It is also possible to control Wave UI's CSS rules priorities by overriding the CSS base scope:",-1)),a("pre",{class:"ssh-pre","data-label":"SCSS",dark:t.$store.state.darkMode},s[25]||(s[25]=[a("span",{class:"pink"},"$css-scope",-1),a("span",{class:"blue-grey mr1"},":",-1),a("span",{class:"red-light2"},"'.w-app'",-1),a("span",{class:"blue-grey"},";",-1)]),8,w),s[42]||(s[42]=a("p",null,[e("For instance if you set the scope to "),a("code",null,"html > body > div.w-app"),e(`, the default
`),a("code",null,".w-app .primary {color: #234781;}"),e(` would become
`),a("code",null,"html > body > div.w-app .primary {color: #234781;}"),e(".")],-1)),l(i,{class:"mt6 py3",success:""},{default:n(()=>s[26]||(s[26]=[e(`This means you can control all the css rules specificity and consequently their priority!
`)])),_:1}),l(o,{h2:""},{default:n(()=>s[27]||(s[27]=[e("Disable the CSS layout classes (not recommended)")])),_:1}),s[43]||(s[43]=a("p",null,[e(`You may want to use another CSS framework (like Tailwind) instead of the Wave UI's built-in CSS
layout classes.`),a("br"),e(`
This is not recommended, but it's possible to disable the CSS layout classes of Wave UI so they
don't conflict with the external library.`),a("br"),e(`
For this, follow the above steps in `),a("a",{href:"#modify-your-config"},"Modify your config"),e(`, then you
can set the `),a("code",{class:"pink"},"$use-layout-classes"),e(" variable to "),a("code",null,"false"),e(".")],-1)),a("p",null,[s[30]||(s[30]=e("You can have a look at all the classes that will not be generated in this file:")),a("a",x,[s[29]||(s[29]=e("layout.scss on Github")),l(d,{class:"ml1",sm:""},{default:n(()=>s[28]||(s[28]=[e("mdi mdi-open-in-new")])),_:1})])])])}const $={},M=y($,[["render",C]]);export{M as default};
