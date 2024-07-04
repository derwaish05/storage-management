"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6372],{5063:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(3645),n=a.n(r)()((function(t){return t[1]}));n.push([t.id,".mobile-header[data-v-17905508]{background:#fff;display:none;padding:10px 0;position:-webkit-sticky;position:sticky;text-align:center;top:0;z-index:6}.mobile-header>div[data-v-17905508]{align-self:center;flex-grow:1;white-space:nowrap}.mobile-header .go-back[data-v-17905508]{text-align:left}.mobile-header .location-name[data-v-17905508]{color:#1b2539;display:inline-block;font-size:.9375em;font-weight:700;line-height:1;max-width:220px;overflow:hidden;text-align:center;text-overflow:ellipsis;vertical-align:middle;width:100%}.mobile-header .mobile-menu[data-v-17905508]{text-align:right}.mobile-header .icon[data-v-17905508]{margin-top:-4px;vertical-align:middle}@media only screen and (max-width:690px){.mobile-header[data-v-17905508]{display:flex;margin-bottom:15px}}.dark .mobile-header[data-v-17905508]{background:#151515}.dark .mobile-header .location-name[data-v-17905508]{color:#bec6cf}",""]);const o=n},6798:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(3645),n=a.n(r)()((function(t){return t[1]}));n.push([t.id,".color-label.purple[data-v-d470f17c]{background:rgba(157,102,254,.1);color:#9d66fe}.color-label.yellow[data-v-d470f17c]{background:rgba(255,189,45,.1);color:#ffbd2d}.color-label.green[data-v-d470f17c]{background:rgba(0,188,126,.1);color:#00bc7e}.color-label.red[data-v-d470f17c]{background:rgba(253,57,122,.1);color:#fd397a}",""]);const o=n},5377:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(3645),n=a.n(r)()((function(t){return t[1]}));n.push([t.id,".page-header[data-v-719f11ff]{align-items:center;background:#fff;display:flex;padding-bottom:20px;padding-top:20px;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:9}.page-header .title[data-v-719f11ff]{color:#1b2539;font-size:1.125em;font-weight:700}.page-header .go-back[data-v-719f11ff]{cursor:pointer;margin-right:10px}.page-header .go-back svg[data-v-719f11ff]{margin-top:-4px;vertical-align:middle}@media only screen and (max-width:960px){.page-header .title[data-v-719f11ff]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-719f11ff]{display:none}}.dark .page-header[data-v-719f11ff]{background:#151515}.dark .page-header .title[data-v-719f11ff]{color:#bec6cf}.dark .page-header .icon path[data-v-719f11ff]{fill:#00bc7e}",""]);const o=n},820:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(3645),n=a.n(r)()((function(t){return t[1]}));n.push([t.id,".text-label[data-v-b266b276]{color:#afafaf;display:block;font-size:.75em;font-weight:700;margin-bottom:20px}.dark .text-label[data-v-b266b276]{color:#00bc7e}",""]);const o=n},3187:(t,e,a)=>{a.d(e,{Z:()=>n});const r={name:"CardNavigation",props:["pages"],computed:{routeName:function(){return this.$route.name}},data:function(){return{fixedNav:!1}},created:function(){var t=this;window.addEventListener("scroll",(function(){var e=document.getElementById("card-navigation");t.fixedNav=e.getBoundingClientRect().top<0}))}};const n=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-7",staticStyle:{height:"62px"},attrs:{id:"card-navigation"}},[a("div",{class:{"fixed top-0 left-0 right-0 z-10 rounded-none bg-white bg-opacity-50 px-6 backdrop-blur-lg backdrop-filter dark:bg-dark-foreground":t.fixedNav}},[a("div",{staticClass:"overflow-x-auto whitespace-nowrap"},t._l(t.pages,(function(e,r){return a("router-link",{key:r,staticClass:"border-bottom-theme inline-block border-b-2 border-transparent px-4 py-5 text-sm font-bold",class:{"text-theme":t.routeName===e.route,"text-gray-600 dark:text-gray-100":t.routeName!==e.route},attrs:{to:{name:e.route},replace:""}},[t._v("\n                "+t._s(e.title)+"\n            ")])})),1)])])}),[],!1,null,null,null).exports},3802:(t,e,a)=>{a.d(e,{Z:()=>c});a(826);var r=a(9101);const n={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:r.wyc,MenuIcon:r.Oqj},methods:{goBack:function(){this.$router.back()}}};var o=a(3379),i=a.n(o),s=a(5063),l={insert:"head",singleton:!1};i()(s.Z,l);s.Z.locals;const c=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"mobile-header"},[a("div",{staticClass:"go-back",on:{click:t.goBack}},[a("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"location-name"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"mobile-menu",on:{click:function(e){return t.$showMobileMenu("user-navigation")}}},[a("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"17905508",null).exports},3426:(t,e,a)=>{a.d(e,{Z:()=>l});const r={name:"ColorLabel",props:["color"]};var n=a(3379),o=a.n(n),i=a(6798),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const l=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b",{staticClass:"color-label inline-block rounded-lg py-1 px-2 text-xs font-bold capitalize",class:t.color},[t._t("default")],2)}),[],!1,null,"d470f17c",null).exports},522:(t,e,a)=>{a.d(e,{Z:()=>l});const r={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a(9101).wyc}};var n=a(3379),o=a.n(n),i=a(5377),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const l=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[t.canBack?a("div",{staticClass:"go-back",on:{click:function(e){return t.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"719f11ff",null).exports},1726:(t,e,a)=>{a.d(e,{Z:()=>l});const r={name:"SectionTitle"};var n=a(3379),o=a.n(n),i=a(820),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const l=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b",{staticClass:"text-label"},[t._t("default")],2)}),[],!1,null,"b266b276",null).exports},3561:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var r=a(3187),n=a(9101),o=a(3802),i=a(1726),s=a(522),l=a(3426),c=a(7318),d=a(826),u=a(629),f=a(9669),p=a.n(f);function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const h={name:"Profile",components:{MemberAvatar:a(167).Z,CardNavigation:r.Z,CreditCardIcon:n.ciH,HardDriveIcon:n.zvn,SectionTitle:i.Z,FileTextIcon:n.zPP,MobileHeader:o.Z,PageHeader:s.Z,ColorLabel:l.Z,Trash2Icon:n.Bf1,UserIcon:n.tBG,LockIcon:n.mBM,Spinner:c.Z},watch:{"$route.fullPath":function(){this.fetchUser()}},computed:g(g({},(0,u.Se)(["config"])),{},{admin:function(){return this.$store.getters.user?this.$store.getters.user:void 0},pages:function(){return"none"===this.config.subscriptionType?[{title:this.$t("detail"),route:"UserDetail"},{title:this.$t("storage"),route:"UserStorage"},{title:this.$t("password"),route:"UserPassword"},{title:this.$t("delete_account"),route:"UserDelete"}]:[{title:this.$t("detail"),route:"UserDetail"},{title:this.$t("storage"),route:"UserStorage"},{title:this.$t("billing"),route:"UserSubscription"},{title:this.$t("password"),route:"UserPassword"},{title:this.$t("delete_account"),route:"UserDelete"}]}}),data:function(){return{isLoading:!0,user:void 0}},methods:{fetchUser:function(){var t=this;p().get("/api/admin/users/"+this.$route.params.id).then((function(e){t.user=e.data,t.isLoading=!1}))}},created:function(){var t=this;this.fetchUser(),d.U.$on("reload:user",(function(){return t.fetchUser()}))}};const m=(0,a(1900).Z)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?t._e():a("div",{attrs:{id:"page-content"}},[a("div",{staticClass:"card sticky top-0 z-10 pt-4 shadow-card",staticStyle:{"padding-bottom":"0"}},[a("div",{staticClass:"mb-3 flex items-center"},[a("MemberAvatar",{staticClass:"shadow-lg rounded-xl",attrs:{size:64,"is-border":!1,member:t.user}}),t._v(" "),a("div",{staticClass:"ml-4"},[a("b",{staticClass:"text-md block font-bold sm:text-lg"},[t._v("\n                            "+t._s(t.user.data.relationships.settings.data.attributes.first_name)+"\n                            "+t._s(t.user.data.relationships.settings.data.attributes.last_name)+"\n\n                            "),a("ColorLabel",{attrs:{color:"purple"}},[t._v("\n                                "+t._s(t.$t(t.user.data.attributes.role))+"\n                            ")])],1),t._v(" "),a("small",{staticClass:"block text-xs text-gray-600 sm:text-sm"},[t._v("\n                            "+t._s(t.user.data.attributes.email)+"\n                        ")])])],1),t._v(" "),a("CardNavigation",{staticClass:"-mx-1",attrs:{pages:t.pages}})],1),t._v(" "),a("router-view",{attrs:{user:t.user},on:{"reload-user":t.fetchUser}})],1),t._v(" "),t.isLoading?a("div",{attrs:{id:"loader"}},[a("Spinner")],1):t._e()])}),[],!1,null,null,null).exports}}]);