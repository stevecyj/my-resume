(function(t){function s(s){for(var e,l,n=s[0],r=s[1],o=s[2],d=0,f=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);v&&v(s);while(f.length)f.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var t,s=0;s<c.length;s++){for(var a=c[s],e=!0,n=1;n<a.length;n++){var r=a[n];0!==i[r]&&(e=!1)}e&&(c.splice(s--,1),t=l(l.s=a[0]))}return t}var e={},i={app:0},c=[];function l(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=e,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)l.d(a,e,function(s){return t[s]}.bind(null,e));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=s,n=n.slice();for(var o=0;o<n.length;o++)s(n[o]);var v=r;c.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},1263:function(t,s,a){t.exports=a.p+"img/vue.c5439280.png"},2261:function(t,s,a){t.exports=a.p+"img/nodejs.36700bee.png"},"3f65":function(t,s,a){t.exports=a.p+"img/javascript.7d1ebefa.png"},"56d7":function(t,s,a){"use strict";a.r(s);var e=a("2b0e"),i=a("f13c"),c=a.n(i),l=a("58ca"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o=(a("5c0b"),a("2877")),v={},d=Object(o["a"])(v,n,r,!1,null,null,null),f=d.exports,p=a("8c4f"),u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",["works"==t.navActive||"experience"==t.navActive||"contact"==t.navActive?e("div",{staticClass:"bg-img2"}):e("div",{staticClass:"bg-img1"}),e("nav",{staticClass:"navbar navbar-expand-lg myNav",class:{"scroll-color":t.viewprotH>300}},[t._m(0),t._m(1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[e("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"nav-link",class:{active:"about"==t.navActive},attrs:{href:"#about"}},[t._v("About")])]),e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skill",expression:"'#skill'"}],staticClass:"nav-link",class:{active:"skill"==t.navActive},attrs:{href:"#skill"}},[t._v("Skills")])]),e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],staticClass:"nav-link",class:{active:"works"==t.navActive},attrs:{href:"#works"}},[t._v("Projects")])]),e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#experience",expression:"'#experience'"}],staticClass:"nav-link",class:{active:"experience"==t.navActive},attrs:{href:"#experience"}},[t._v("Experience")])]),e("li",{staticClass:"nav-item"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"nav-link",class:{active:"contact"==t.navActive},attrs:{href:"#contact"}},[t._v("Contact")])])])])]),t._m(2),e("div",{attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"myTitle-white"},[t._v("About Myself")]),e("div",{staticClass:"row aboutHide",class:{active:t.aboutShow}},[t._m(3),t._m(4)])])]),e("div",{attrs:{id:"skill"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"myTitle-white"},[t._v("Skills")]),e("div",{staticClass:"d-flex justify-content-center pb-5"},[e("div",{staticClass:"btn-group btn-group-lg",attrs:{role:"group","aria-label":"Basic example"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(s){t.skillDispaly="list"}}},[t._v("\n            清單 "),e("i",{staticClass:"far fa-list-alt fa-1x"})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){t.skillDispaly="gallery"}}},[t._v("\n            圖示 "),e("i",{staticClass:"fas fa-grip-horizontal fa-1x"})])])]),"list"==t.skillDispaly?e("div",{staticClass:"row d-flex justify-content-center"},[t._m(5)]):t._e(),"gallery"==t.skillDispaly?e("div",{staticClass:"row"},[t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15)]):t._e()])]),e("div",{attrs:{id:"works"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"myTitle-blue"},[t._v("Projects")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"transform_3d"},[e("div",{staticClass:"myCard"},[e("div",{staticClass:"myCard_img"},[e("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.openModal(t.works[0])}}},[e("img",{staticClass:"img-fluid",attrs:{src:a("fafb"),alt:"img"}})])])]),e("h3",{staticClass:"text-center py-4"},[t._v("AS Monitor")])])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"transform_3d"},[e("div",{staticClass:"myCard"},[e("div",{staticClass:"myCard_img"},[e("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.openModal(t.works[1])}}},[e("img",{staticClass:"img-fluid",attrs:{src:a("9ece"),alt:"img"}})])])]),e("h3",{staticClass:"text-center py-4"},[t._v("Canvas Shoot Game")])])])])])]),e("div",{staticClass:"d-none"},t._l(t.works,(function(t,s){return e("img",{key:s,attrs:{src:t.imgUrl,alt:""}})})),0),e("div",{staticClass:"modal fade",attrs:{id:"worksModal",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content myCard_content"},[e("div",{staticClass:"modal-header border-0"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n            "+t._s(t.works_modal.title)+"\n          ")]),t._m(16)]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"img-fluid",attrs:{src:t.works_modal.imgUrl,alt:"img"}}),e("ul",{staticClass:"mt-3"},t._l(t.works_modal.content,(function(s,a){return e("li",{key:a,staticClass:"py-2"},[t._v("\n              "+t._s(s)+"\n            ")])})),0)]),e("div",{},[""==t.works_modal.href?e("div",{staticClass:" text-center m-3 pb-4"},[e("button",{staticClass:"goToWeb-noDemo rounded-pill"},[t._v("\n              版權問題無法提供 Demo\n            ")])]):e("div",{staticClass:" text-center m-3 pb-4"},[e("a",{staticClass:"goToWeb rounded-pill",attrs:{href:t.works_modal.href,target:"_blank"}},[t._v("點擊前往作品網頁")])])])])])]),t._m(17),e("div",{attrs:{id:"contact"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-md-6 text-center text-white"},[e("div",{staticClass:"contact_card",class:{active:t.contactShow}},[e("h1",{staticClass:"py-4"},[t._v("Contact Me")]),t._m(18),e("h3",{staticClass:"py-3"},[t._v("Steve")]),t._m(19),t._m(20),t._m(21),t._m(22)])])])])]),t._m(23)])},m=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"navbar-toggler text-white",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03"}},[a("span",[a("i",{staticClass:"fas fa-list-ul"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-feather-alt"}),t._v(" Steve Resume")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"h100 top-img text-white d-flex align-items-center",staticStyle:{backgroundPosition:"center center"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6  d-flex justify-content-center"},[a("div",{staticClass:"imgHide"},[a("div",{staticClass:"img-profile"})])]),a("div",{staticClass:"col-md-6 d-flex align-items-md-center justify-content-center"},[a("div",{staticClass:"titleHide mx-md-5"},[a("div",{staticClass:"top-content text-center"},[a("h1",{staticClass:"text_effect pb-3"},[t._v("Hello I'm Steve")]),a("h4",{staticClass:"text_effect py-2 "},[t._v("There is nothing difficult")]),a("h4",{staticClass:"text_effect py-2 "},[t._v("in this world")]),a("h4",{staticClass:"text_effect py-2"},[t._v("As long as there is")]),a("h4",{staticClass:"text_effect py-2"},[t._v("enthusiasm and interest")]),a("h4",{staticClass:"text_effect py-2"},[t._v("Can maintain their motivation")]),a("h4",{staticClass:"text_effect py-2"},[t._v("to move forward")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid myShadow rounded my-3",attrs:{src:"https://fakeimg.pl/500x400/?text=Hello",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6 d-flex align-items-center"},[a("div",{staticClass:"p-4 my-3 bgWhite"},[a("p",[t._v("Hello, my name is Cao Youjing (Steve)")]),a("p",[t._v("\n              Work hard to study various technologies and integrate them. In the process of continuous pursuit,\n              continuous learning, and continuous creation, Seeing others smile on my work, this sense of\n              accomplishment makes me feel that life is extremely rich.\n            ")]),a("p",[t._v("\n              In 2019, I started to set the front-end career direction for myself, and during this period began to\n              develop the skill tree.\n            ")]),a("p",[t._v("\n              2019 officially entered the front-end work, and also began to study the use of the Laravel framework,\n              currently mainly involved in 3 large-scale projects as follows.\n            ")]),a("p",[t._v("1. Vue-based entertainment city system")]),a("p",[t._v("2. Vue-based monitoring backstage system")]),a("p",[t._v("3. PHP monitoring system refactoring into Laravel and Vue architecture")]),a("p",[t._v("Interesting research directions in the future：")]),a("p",[t._v("* Linux system")]),a("p",[t._v("* Cloud service")]),a("p",[t._v("* docker、kubernetes automated deployment")]),a("p",[t._v("* CI/CD")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-8 text-white skillList"},[a("h3",[t._v("前端(Front-end)")]),a("ul",[a("li",[a("b",[t._v("Vue")]),t._v(" - data 雙向綁定、模板元件化、Router、Vuex")]),a("li",[a("b",[t._v("JavaScript")]),t._v(" - 熟悉 DOM 模型、閉包、AJAX、ES6+ 等基本概念")]),a("li",[a("b",[t._v("jQuery")]),t._v(" - 為網頁添加具互動性的效果")]),a("li",[a("b",[t._v("HTML/CSS")]),t._v(" - 撰寫語意化標籤、排版")])]),a("h3",[t._v("UI 框架(UI-framework)")]),a("ul",[a("li",[a("b",[t._v("Bootstrap")])]),a("li",[a("b",[t._v("AntD Vue")])]),a("li",[a("b",[t._v("Tailwind CSS")])])]),a("h3",[t._v("後端(Back-end)")]),a("ul",[a("li",[a("b",[t._v("Laravel")]),t._v(" - 建立 API")]),a("li",[a("b",[t._v("Postman")]),t._v(" - API 測試")])]),a("h3",[t._v("DataBase")]),a("ul",[a("li",[a("b",[t._v("Firebase")]),t._v(" - mysql")])]),a("h3",[t._v("其他(Other)")]),a("ul",[a("li",[a("b",[t._v("Git")]),t._v(" - 團隊協作")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("6d2e"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("HTML")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" 善用語意化命名結構")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" SVG 繪圖")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("8858"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("CSS")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" RWD 手刻 breakpoints")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" Flex / Grid 排版")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("3f65"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("JavaScript")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" 熟悉 DOM 模型、AJAX、ES6+ 等基本概念")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card "},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("60bd"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("jQuery")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" 靈活操作 DOM 元素")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" AJAX 方法使用")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticClass:"mt-3",staticStyle:{width:"180px",height:"180px"},attrs:{src:a("8898"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("Bootstrap")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" flexbox 網格")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" RWD 自適應排版")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticClass:"mt-5",staticStyle:{width:"130px",height:"130px"},attrs:{src:a("1263"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("Vue")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" data 雙向綁定")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" 模板元件化")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" Vuex")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" Router")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:a("2261"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("Node.js")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" npm 工具使用")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("867b"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("Postman")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" API 測試")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticClass:"mt-3",staticStyle:{width:"130px",height:"150px"},attrs:{src:a("9808"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("Webpack")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" 轉換 ES6、CSS預處理(less、sass) 檔案打包網站")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[e("img",{staticClass:"mt-3",staticStyle:{width:"130px",height:"130px"},attrs:{src:a("683c"),alt:"Avatar"}})]),e("div",{staticClass:"flip-card-back"},[e("h2",[t._v("Git")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" Github 進行團隊協作")]),e("p",[e("i",{staticClass:"far fa-check-circle"}),t._v(" Github 部署")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"experience"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"myTitle-white"},[t._v("Experience")]),e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[e("div",{staticClass:"position-relative exInner"},[e("img",{staticClass:"img-fluid exImg",attrs:{src:a("beb6"),alt:"img"}}),e("div",{staticClass:"exLine"})])]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"exContent text-white"},[e("h4",{staticClass:"pb-4"},[t._v("\n              Neithnet | 助理工程師 |\n              "),e("span",{staticClass:"d-inline-block"},[e("i",{staticClass:"fas fa-clock"}),t._v(" 2019 年 11 月 - 2021 年")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v(" Vue 專案開發")]),e("ul",[e("li",[t._v("跨部門合作")]),e("li",[t._v("開發2個平台專案")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 監控管理自動化")]),e("ul",[e("li",[t._v("測試、操作網管設備 api")]),e("li",[t._v("操作歷史記錄留存")]),e("li",[t._v("客製化功能")]),e("li",[t._v("上架設備至監控平台")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 建立監控 api")]),e("ul",[e("li",[t._v("維護已上線的監控平台")]),e("li",[t._v("根據設備實際狀況，調整、新增 api、資料庫內容")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 辦公室環控監控及告警系統")]),e("ul",[e("li",[t._v("偵測主機蓄電量、溫度、漏水情況、連外線路是否正常")]),e("li",[t._v("發送告警訊息至通訊軟體")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 串接第三方服務")]),e("ul",[e("li",[t._v("測試第三方服務 api")]),e("li",[t._v("平台服務自動化")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 客製監控系統")]),e("ul",[e("li",[t._v("使用 Vue 建立後台頁面")]),e("li",[t._v("使用 Laravel 建立 api")]),e("li",[t._v("監控數量約 40 部設備")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v("技術分享")]),e("ul",[e("li",[t._v("整理Vue、Larave 常用功能，協助單位導入框架開發環境")]),e("li",[t._v("將部分既有專案導入 Vue、 Laravel")])]),e("p",[e("i",{staticClass:"fas fa-tools pr-3"}),t._v("建立形象網站後台")]),e("ul",[e("li",[t._v("將形象網站建立內容管理系統，以利上架文章、上傳檔案")])])])])]),e("div",{staticClass:"row d-flex justify-content-center py-4"},[e("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[e("div",{staticClass:"position-relative exInner"},[e("img",{staticClass:"img-fluid exImg",attrs:{src:a("f82e"),alt:"img"}})])]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"exContent text-white"},[e("h4",{staticClass:"pb-4"},[t._v("\n              中原大學 | 機械工程 |\n              "),e("span",{staticClass:"d-inline-block"},[e("i",{staticClass:"fas fa-clock"}),t._v(" 2004 年 6 月 畢業")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"px-3"},[a("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"https://i.imgur.com/zqTebNt.jpg",alt:""}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",{staticClass:"pb-3"},[a("a",{staticClass:"text-white",attrs:{href:"mailto:ycsteven.tsao@gmail.com"}},[a("i",{staticClass:"fas fa-envelope"}),t._v(" livepower0815@gmail.com")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",{staticClass:"pb-3"},[a("i",{staticClass:"fas fa-phone"}),t._v(" 0953-335-979")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"https://github.com/stevecyj",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"https://www.linkedin.com/in/steve-tsao-67620811b/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"footer"}},[a("p",{staticClass:"text-white"},[t._v("Copyright © Steve Resume Website")])])}],_=a("1157"),h=a.n(_),C={name:"home",data(){return{viewprotH:0,viewprotW:0,windowH:0,skillDispaly:"list",works_modal:{},navLinksH:{},works:[{title:"辦公室主機監控平台",imgUrl:a("a769"),href:"",content:["前端框架： Vue.js","Vux 管理全域 User 、圖表資料，使 component 能更靈活的取得父級資訊","後端框架：Laravel","UI：AntD Vue","圖表：Highcharts"]},{title:"Canvas Shoot Game",imgUrl:a("fc8e"),href:"https://metyc.github.io/",content:["根據設計稿完成切版","使用 Canvas 呈現動畫","使用 JavaScript、TweenLite 開發功能"]}]}},computed:{contactShow(){const t=this;return t.viewprotH>t.navLinksH.contact-t.windowH/3},aboutShow(){const t=this;return t.viewprotH>t.navLinksH.about-t.windowH/4},bgImgScroll(){const t=this;let s="0px "+t.viewprotH/2+"px",a="center center";return t.viewprotW<768?a:s},contactScroll(){const t=this;let s="0px "+(t.viewprotH-t.navLinksH.contact)+"px",a="center center";return t.viewprotW<768?a:s},navActive(){const t=this;let s="";return s=t.viewprotH+5>t.navLinksH.contact?"contact":t.viewprotH+5>t.navLinksH.experience?"experience":t.viewprotH+5>t.navLinksH.works?"works":t.viewprotH+5>t.navLinksH.skill?"skill":t.viewprotH+5>t.navLinksH.about?"about":"",s}},methods:{openModal(t){const s=this;s.works_modal=t,h()("#worksModal").modal("show")}},mounted(){const t=this,s=document.querySelector("#about"),a=document.querySelector("#skill"),e=document.querySelector("#works"),i=document.querySelector("#experience"),c=document.querySelector("#contact");t.viewprotW=window.outerWidth,t.windowH=window.outerHeight,window.addEventListener("resize",(function(){t.viewprotW=window.outerWidth,t.windowH=window.outerHeight})),window.addEventListener("scroll",(function(){t.viewprotH=window.pageYOffset,t.navLinksH.about=s.offsetTop,t.navLinksH.skill=a.offsetTop,t.navLinksH.works=e.offsetTop,t.navLinksH.experience=i.offsetTop,t.navLinksH.contact=c.offsetTop})),setTimeout(()=>{document.querySelector(".titleHide").classList.add("active")},2500),setTimeout(()=>{document.querySelector(".imgHide").classList.add("active")},2e3)}},g=C,b=(a("7543"),Object(o["a"])(g,u,m,!1,null,"95f884d4",null)),x=b.exports;e["a"].use(p["a"]);var w=new p["a"]({routes:[{path:"/",name:"home",component:x}]}),k=a("2f62");e["a"].use(k["a"]);var y=new k["a"].Store({state:{},mutations:{},actions:{}});a("4989");e["a"].config.productionTip=!1,e["a"].use(c.a,{container:"body",duration:1e3,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),e["a"].use(l["a"]),new e["a"]({router:w,store:y,render:t=>t(f)}).$mount("#app")},"5c0b":function(t,s,a){"use strict";a("e332")},"60bd":function(t,s,a){t.exports=a.p+"img/jquery.2be752cf.png"},"683c":function(t,s,a){t.exports=a.p+"img/git.451352fc.png"},"6d2e":function(t,s,a){t.exports=a.p+"img/html.126e68aa.png"},7543:function(t,s,a){"use strict";a("f093")},"867b":function(t,s,a){t.exports=a.p+"img/postman.0ea9bba1.png"},8858:function(t,s,a){t.exports=a.p+"img/css.8e348af7.png"},8898:function(t,s,a){t.exports=a.p+"img/bootstrap.d1d7a23a.png"},9808:function(t,s,a){t.exports=a.p+"img/webpack.3ef52f14.png"},"9ece":function(t,s,a){t.exports=a.p+"img/shoot-game-1.49c11656.png"},a769:function(t,s,a){t.exports=a.p+"img/as-2.d778aae0.png"},beb6:function(t,s,a){t.exports=a.p+"img/iconfinder_Notebook_by_Artdesigner_60879.759c605e.png"},e332:function(t,s,a){},f093:function(t,s,a){},f82e:function(t,s,a){t.exports=a.p+"img/Graduation.aee1f51b.png"},fafb:function(t,s,a){t.exports=a.p+"img/as-1-m.fcdc3875.png"},fc8e:function(t,s,a){t.exports=a.p+"img/shoot-game-2.4b5130d4.png"}});
//# sourceMappingURL=app.19ac1a10.js.map