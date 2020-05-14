(function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("Navbar")],1),n("div",{staticClass:"container"},[n("router-view")],1)])},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav-wrapper green"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v(" Employee Manager ")])],1)])},l=[],s={name:"Navbar"},c=s,p=n("2877"),u=Object(p["a"])(c,i,l,!1,null,"1df439bf",null),d=u.exports,m={components:{Navbar:d}},f=m,v=Object(p["a"])(f,o,r,!1,null,null,null),y=v.exports,h=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("ul",{staticClass:"collection width-header"},[e._m(0),e._l(e.employees,(function(t){return n("li",{key:t.id,staticClass:"collection-item"},[n("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(" "+e._s(t.employee_id)+":"+e._s(t.name)+" "),n("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[n("i",{staticClass:"fa fa-eye"})])],1)}))],2),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[n("i",{staticClass:"fa fa-plus"})])],1)])},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"collection-header"},[n("h4",[e._v("Employees")])])}],w=(n("4160"),n("159b"),n("96cf"),n("1da1")),x=n("8aa50"),g=n.n(x),E=(n("e71f"),{apiKey:"AIzaSyA-W2EgEFGQDLjEACI7iwDLfGcUeJIugDw",authDomain:"vuefs-prod-a45d7.firebaseapp.com",databaseURL:"https://vuefs-prod-a45d7.firebaseio.com",projectId:"vuefs-prod-a45d7",storageBucket:"vuefs-prod-a45d7.appspot.com",messagingSenderId:"311992806552",appId:"1:311992806552:web:ae32385a5f40fea20df4ed"}),C=g.a.initializeApp(E),k=C.firestore(),j={name:"Dashboard",data:function(){return{employees:[]}},mounted:function(){this.getEmployees()},methods:{getEmployees:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.collection("employees").orderBy("dept").get();case 2:n=t.sent,n.forEach((function(t){var n=t.data();n.id=t.id,e.employees.push(n)}));case 4:case"end":return t.stop()}}),t)})))()}}},O=j,V=Object(p["a"])(O,b,_,!1,null,"24a06bc4",null),D=V.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-row",{attrs:{id:"new-employee"}},[n("v-col",[n("h3",[e._v(" New Employee ")]),n("v-card",[n("v-container",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[n("v-text-field",{attrs:{type:"text",label:"Employee Id"},model:{value:e.employee_id,callback:function(t){e.employee_id=t},expression:"employee_id"}}),n("v-text-field",{attrs:{type:"text",label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"Department"},model:{value:e.dept,callback:function(t){e.dept=t},expression:"dept"}}),n("v-text-field",{attrs:{type:"text",label:"Position"},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation()}}},[e._v("Update Employee")]),n("router-link",{staticClass:"btn grey",attrs:{to:{name:"view-employee",params:{employee_id:e.employee_id}}}},[e._v("Back")])],1)],1)],1)],1)],1)],1)},R=[],P=(n("b0c0"),{name:"EditEmployee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.collection("employees").where("employee_id","==",e.$route.params.employee_id).get();case 2:n=t.sent,n.forEach((function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position}));case 4:case"end":return t.stop()}}),t)})))()},updateEmployee:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.collection("employees").where("employee_id","==",e.$route.params.employee_id).get();case 2:return n=t.sent,n.forEach((function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position})})),t.next=6,e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}});case 6:case"end":return t.stop()}}),t)})))()}}}),I=P,A=n("6544"),B=n.n(A),N=n("7496"),S=n("8336"),F=n("b0af"),M=n("62ad"),T=n("a523"),J=n("4bd4"),L=n("0fd9"),U=n("8654"),z=Object(p["a"])(I,$,R,!1,null,"68281761",null),G=z.exports;B()(z,{VApp:N["a"],VBtn:S["a"],VCard:F["a"],VCol:M["a"],VContainer:T["a"],VForm:J["a"],VRow:L["a"],VTextField:U["a"]});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-row",{attrs:{id:"new-employee"}},[n("v-col",[n("h3",[e._v(" New Employee ")]),n("v-card",[n("v-container",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[n("v-text-field",{attrs:{type:"text",label:"Employee Id"},model:{value:e.employee_id,callback:function(t){e.employee_id=t},expression:"employee_id"}}),n("v-text-field",{attrs:{type:"text",label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"Department"},model:{value:e.dept,callback:function(t){e.dept=t},expression:"dept"}}),n("v-text-field",{attrs:{type:"text",label:"Position"},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation()}}},[e._v("Add Employee")]),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")])],1)],1)],1)],1)],1)],1)},Q=[],W={name:"NewEmployee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.collection("employees").add({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position});case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()}}},q=W,H=Object(p["a"])(q,K,Q,!1,null,"b3bcf5ac",null),X=H.exports;B()(H,{VApp:N["a"],VBtn:S["a"],VCard:F["a"],VCol:M["a"],VContainer:T["a"],VForm:J["a"],VRow:L["a"],VTextField:U["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"view-employee"}},[n("ul",{staticClass:"collection with-header"},[n("li",{staticClass:"collection-header"},[n("h4",[e._v(e._s(e.name))])]),n("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_id))]),n("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),n("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),n("v-btn",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[n("i",{staticClass:"fa fa-pencil"})])],1)],1)},Z=[],ee={name:"ViewEmployee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},mounted:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.collection("employees").where("employee_id","==",e.$route.params.employee_id).get();case 2:n=t.sent,n.forEach((function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position}));case 4:case"end":return t.stop()}}),t)})))()},deleteEmployee:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("Are you sure?")){t.next=5;break}return t.next=3,k.collection("employees").where("employee_id","==",e.$route.params.employee_id).get();case 3:n=t.sent,n.forEach((function(t){t.ref.delete(),e.$router.push("/")}));case 5:case"end":return t.stop()}}),t)})))()}}},te=ee,ne=Object(p["a"])(te,Y,Z,!1,null,"0e3ef2e2",null),ae=ne.exports;B()(ne,{VBtn:S["a"]}),a["a"].use(h["a"]);var oe=[{path:"/",name:"dashboard",component:D},{path:"/new",name:"new-employee",component:X},{path:"/edit/:employee_id",name:"edit-employee",component:G},{path:"/:employee_id",name:"view-employee",component:ae}],re=new h["a"]({routes:oe}),ie=re,le=n("f309");a["a"].use(le["a"]);var se=new le["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:se,router:ie,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.b8fe5afe.js.map