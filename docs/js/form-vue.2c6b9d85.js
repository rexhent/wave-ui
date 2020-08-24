(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["form-vue"],{"4fa2":function(t,e,s){},"97f8":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-link",{staticClass:"mt4 code",attrs:{h1:"",slug:"w-form"}},[t._v("w-form"),s("w-tag",{staticClass:"ml3",attrs:{"bg-color":"orange",lg:"",color:"white"}},[t._v("In Progress")])],1),s("alert",{staticClass:"mt6",attrs:{tip:""}},[s("ul",[s("li",{staticClass:"title5"},[t._v("The "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" component is used for validation.")]),s("li",[t._v("A "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" is invisible and has no style by default. You can put it in a\n"),s("span",{staticClass:"code"},[t._v("w-card")]),t._v(" (or put a "),s("span",{staticClass:"code"},[t._v("w-card")]),t._v(" in it) to have some style. Alternatively,\nyou can apply colors and spaces CSS classes on it (e.g. "),s("span",{staticClass:"code"},[t._v(".blue--bg")]),t._v(", "),s("span",{staticClass:"code"},[t._v(".pa4")]),t._v(").\n")])])]),s("title-link",{attrs:{h2:""}},[t._v("How it works")]),s("div",{staticClass:"title3"},[t._v("The validation works in 3 steps:")]),s("ol",[s("li",[t._v("Add a validator function on the field you want validated"),s("ssh-pre",{attrs:{language:"html-vue",label:"Vue template"}},[t._v('<w-input label="First name" :validators="[validators.required]"></w-input>')]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})")])],1),s("li",{staticClass:"mt6"},[t._v("Wrap it in a "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" and add a submit button"),s("ssh-pre",{attrs:{language:"html-vue",label:"Vue template"}},[t._v('<w-form>\n  <w-input label="First name" :validators="[validators.required]"></w-input>\n\n  <w-button type="submit">Submit</w-button>\n</w-form>')])],1),t._m(0)]),s("title-link",{attrs:{h2:""}},[t._v("Basic validation")]),t._m(1),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-form(v-model="valid")\n  w-input(label="First name" :validators="[validators.required]")\n  w-input.mt3(label="Last name" :validators="[validators.required]")\n  .text-right.mt6\n    strong v-model:\n    code.ml2.mr4 '+t._s("{{ valid === false ? 'false' : valid || 'null' }}")+'\n    w-button(type="submit" :disabled="valid === false") Validate')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})")]},proxy:!0}])},[s("w-form",{model:{value:t.form1.valid,callback:function(e){t.$set(t.form1,"valid",e)},expression:"form1.valid"}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required,t.validators.alphabetical]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("strong",[t._v("v-model:")]),s("code",{staticClass:"ml2 mr4"},[t._v(t._s(!1===t.form1.valid?"false":t.form1.valid||"null"))]),s("w-button",{attrs:{type:"submit",disabled:!1===t.form1.valid}},[t._v("Validate")])],1)],1)],1),s("alert",{attrs:{warning:""}},[s("strong",[t._v("Heads up!")]),s("div",[t._v("The v-model value has 3 states: "),s("code",[t._v("true")]),t._v(" and "),s("code",[t._v("false")]),t._v(" for success and error, but also\n"),s("code",[t._v("null")]),t._v(" for pristine."),s("br"),t._v("\nPristine represents the moment where the form is still untouched, neither valid, nor invalid.")])]),s("alert",{attrs:{success:""}},[t._v("Even in the most advanced case, Wave UI's form validation is very simple, it doesn't\nrequire you to use "),s("code",[t._v("$refs")]),t._v(".\n")]),s("title-link",{attrs:{h2:""}},[t._v("Submission to a server")]),t._m(2),t._m(3),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-form(action="test.php" method="post" target="_blank" allow-submit)\n  w-input(label="First name" :validators="[validators.required]")\n  w-input.mt3(label="Last name" :validators="[validators.required]")\n  .text-right.mt6\n    w-button(type="submit") Validate')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-form",{attrs:{action:"test.php",method:"post",target:"_blank","allow-submit":""}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("title-link",{attrs:{h2:""}},[t._v("Validate on submit, on blur, on keyup")]),t._m(4),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-form(no-keyup-validation no-blur-validation)\n  w-input(label="First name" :validators="[validators.required]")\n  w-input.mt3(label="Last name" :validators="[validators.required]")\n  .text-right.mt6\n    w-button(type="submit") Validate')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-form",{attrs:{"no-keyup-validation":"","no-blur-validation":""}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("title-link",{attrs:{h2:""}},[t._v("Reset the form")]),t._m(5),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-form(v-model="valid")\n  w-input(label="First name" :validators="[validators.required]")\n  w-input.mt3(label="Last name" :validators="[validators.required]")\n  .text-right.mt6\n    w-button.mr2(bg-color="warning" type="reset" @click="valid = null") Reset\n    w-button(type="submit") Validate')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-form",{model:{value:t.form4.valid,callback:function(e){t.$set(t.form4,"valid",e)},expression:"form4.valid"}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{staticClass:"mr2",attrs:{"bg-color":"warning",type:"reset"},on:{click:function(e){t.form4.valid=null}}},[t._v("Reset")]),s("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("title-link",{attrs:{h2:""}},[t._v("On validate, on success & on error events")]),s("p",{staticClass:"title5"},[t._v("These events are fired on submit.")]),t._m(6),s("alert",{attrs:{tip:""}},[t._v("The form status is always accurate (through the "),s("span",{staticClass:"code"},[t._v("v-model")]),t._v("), and the "),s("code",[t._v("error")]),t._v(" &\n"),s("code",[t._v("success")]),t._v(" events return the "),s("span",{staticClass:"code"},[t._v("errorsCount")]),t._v("."),s("br"),t._v("\nSo the only thing you could be missing at this point is the exact number of errors between the\nsubmission attempts (if you need it) since a "),s("span",{staticClass:"code"},[t._v("keyup")]),t._v(" or "),s("span",{staticClass:"code"},[t._v("blur")]),t._v(" event may trigger\nan error or success on that element. The next example introduces the "),s("code",[t._v("errors-count")]),t._v(" syncing\nfor this purpose.")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-alert(:success="success" :error="error" :info="!success && !error")\n  | '+t._s("{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}")+"\np The form has been validated "+t._s("{{ validated }}")+' time(s).\nw-form(\n  @validate="validated++;success = error = false"\n  @success="success = true"\n  @error="error = true")\n  w-input(label="First name" :validators="[validators.required]")\n  w-input.mt3(label="Last name" :validators="[validators.required]")\n  .text-right.mt6\n    w-button(type="submit") Validate')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  success: null,\n  error: null,\n  validated: 0,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-alert",{attrs:{success:t.form5.success,error:t.form5.error,info:!t.form5.success&&!t.form5.error}},[t._v(t._s(t.form5.success||t.form5.error?t.form5.success?"Success":"Error":"The form is still pristine"))]),s("p",[t._v("The form has been validated "+t._s(t.form5.validated)+" time(s).")]),s("w-form",{on:{validate:function(e){t.form5.validated++,t.form5.success=t.form5.error=!1},success:function(e){t.form5.success=!0},error:function(e){t.form5.error=!0}}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("title-link",{attrs:{h2:""}},[t._v("Advanced validation with everything")]),t._m(7),t._m(8),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-card.white--bg(content-class="pa0")\n  .message-box\n    w-transition-fade\n      w-alert.my0.text-light(v-if="form.submitted" success no-border)\n        | The form is valid, ready to send it!\n      w-alert.my0.text-light(v-else-if="form.valid === false" error no-border)\n        | The form has '+t._s("{{ form.errorsCount }}")+' errors.\n\n  w-form.px8.pt2.pb12(\n    v-model="form.valid"\n    :errors-count.sync="form.errorsCount"\n    @validate="onValidate"\n    @success="onSuccess")\n    w-input(required label="First name" :validators="[validators.required]")\n    w-input.mt3(required label="Last name" :validators="[validators.required]")\n    w-input.mt3(disabled required label="User name" :validators="[validators.required]")\n    w-flex.mt4(wrap align-center justify-end)\n      w-checkbox I agree to the terms & conditions\n      .spacer\n      w-button.mr2(\n        bg-color="warning"\n        type="reset"\n        @click="form.valid = null;form.submitted = form.sent = false") Reset\n      w-button(\n        type="submit"\n        :disabled="form.valid === false"\n        :loading="form.submitted && !form.sent") Validate\n\n  w-notification(\n    v-model="form.sent"\n    success\n    transition="bounce"\n    absolute\n    plain\n    round\n    bottom) The form was sent successfully!')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  form: {\n    valid: null,\n    submitted: false,\n    sent: false,\n    errorsCount: 0\n  },\n  validators: {\n    firstName: value => !!value || 'This field is required',\n    lastName: value => !!value || 'This field is required'\n  }\n}),\n\nmethods: {\n  onSuccess () {\n    setTimeout(() => (this.form.sent = true), 2000)\n  },\n  onValidate () {\n    this.form.sent = false\n    this.form.submitted = this.form.errorsCount === 0\n  }\n}")]},proxy:!0},{key:"css",fn:function(){return[t._v(".message-box {min-height: 35px;}")]},proxy:!0}])},[s("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[s("div",{staticClass:"message-box"},[s("w-transition-fade",[t.form6.submitted?s("w-alert",{staticClass:"my0 text-light",attrs:{success:"","no-border":""}},[t._v("The form is valid, ready to send it!")]):!1===t.form6.valid?s("w-alert",{staticClass:"my0 text-light",attrs:{error:"","no-border":""}},[t._v("The form has "+t._s(t.form6.errorsCount)+" errors.")]):t._e()],1)],1),s("w-form",{staticClass:"px8 pt2 pb12",attrs:{"errors-count":t.form6.errorsCount},on:{"update:errorsCount":function(e){return t.$set(t.form6,"errorsCount",e)},"update:errors-count":function(e){return t.$set(t.form6,"errorsCount",e)},validate:t.onValidate,success:t.onSuccess},model:{value:t.form6.valid,callback:function(e){t.$set(t.form6,"valid",e)},expression:"form6.valid"}},[s("w-input",{attrs:{required:"",label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{required:"",label:"Last name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{disabled:"",required:"",label:"User name",validators:[t.validators.required]}}),s("w-flex",{staticClass:"mt4",attrs:{wrap:"","align-center":"","justify-end":""}},[s("w-checkbox",{attrs:{required:"",validators:[t.validators.consent]}},[t._v("I agree to the terms & conditions")]),s("div",{staticClass:"spacer"}),s("w-button",{staticClass:"mr2",attrs:{"bg-color":"warning",type:"reset"},on:{click:function(e){t.form6.valid=null,t.form6.submitted=t.form6.sent=!1}}},[t._v("Reset")]),s("w-button",{attrs:{type:"submit",disabled:!1===t.form6.valid,loading:t.form6.submitted&&!t.form6.sent}},[t._v("Validate")])],1)],1),s("w-notification",{attrs:{success:"",transition:"bounce",absolute:"",plain:"",round:"",bottom:""},model:{value:t.form6.sent,callback:function(e){t.$set(t.form6,"sent",e)},expression:"form6.sent"}},[t._v("The form was sent successfully!")])],1)],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"mt6"},[t._v("Let the "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" component do the rest. But you might want more options, discover them in the examples bellow.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("In this example and by default, the fields are validated on keyup, on blur, and on submit."),s("br"),t._v("\nThe v-model on the "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" gets updated with the form status.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt6"},[t._v("The "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" prevents the form submission by default - for modern usage where an AJAX\ncall is made on success ("),s("a",{attrs:{href:"#advanced-validation"}},[t._v("see the last example: Advanced validation")]),t._v(")."),s("br"),t._v("\nBut in case you need to send the form as is to the server you can set the "),s("code",[t._v("allow-submit")]),t._v("\noption to "),s("span",{staticClass:"code"},[t._v("true")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt2"},[t._v("In this example, the "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" will handle the validation and block the form submission\nuntil the form is valid. Then the form will be submitted in another tab to a fake "),s("span",{staticClass:"code"},[t._v("test.php")]),t._v(".\n")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("By default the validation happens on keyup, on blur and on submit. You can disable the\nkeyup and blur validations with "),s("code",[t._v("no-keyup-validation")]),t._v(" and "),s("code",[t._v("no-blur-validation")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Once the form is invalid, you can reset it with a basic HTML reset button."),s("br"),t._v("\nFor that what you need to do is to set the v-model value to "),s("code",[t._v("null")]),t._v(", like pristine.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"mt1"},[s("code",[t._v("before-validate")]),t._v(" is always fired as soon as a submission is attempted (e.g. submit button click), prior validation.")]),s("li",{staticClass:"mt1"},[s("code",[t._v("validate")]),t._v(" is always fired as soon as a submission is attempted, after validation.")]),s("li",{staticClass:"mt1"},[s("code",[t._v("success")]),t._v(" is fired after submission when the validation is successfull.\nYou should send the data to the server from this hook.")]),s("li",{staticClass:"mt1"},[s("code",[t._v("error")]),t._v(" is fired after submission when the validation is failing.\nYou can show an error message from this hook.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("This example shows a full form validation and lifecycle - everything you could need."),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("It handles the error and success states of the form elements on keyup, on blur and submit.")]),s("li",[t._v("It allows resetting the form.")]),s("li",[t._v("It keeps track of the form errors count at any time and displays a global message using the fired\n"),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" custom events."),s("br")]),s("li",[t._v("When the form is valid and submitted, it simulates a form sending to a backend and displays\na notification.")])])}],i={data:function(){return{form1:{valid:null},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},validators:{required:function(t){return!!t||"This field is required"},alphabetical:function(t){return/^[a-z \-']+$/i.test(t)||"This field only accepts letters."},consent:function(t){return!!t||"You must agree"}}}},methods:{onSuccess:function(){var t=this;setTimeout((function(){return t.form6.sent=!0}),2e3)},onValidate:function(){this.form6.sent=!1,this.form6.submitted=0===this.form6.errorsCount}}},n=i,o=(s("df8a"),s("2877")),l=Object(o["a"])(n,a,r,!1,null,null,null);e["default"]=l.exports},df8a:function(t,e,s){"use strict";var a=s("4fa2"),r=s.n(a);r.a}}]);
//# sourceMappingURL=form-vue.2c6b9d85.js.map