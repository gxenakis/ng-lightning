(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/osD":function(l,n,u){"use strict";u.d(n,"a",function(){return o}),u.d(n,"b",function(){return c});var e=u("CcnG"),t=u("Ip0R"),a=u("dwFs"),s=u("fz/N"),o=(u("zP4+"),e.ob({encapsulation:2,styles:[],data:{}}));function r(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,4,"li",[["role","presentation"]],[[2,"slds-is-active",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.select(l.context.$implicit)&&e),e},null,null)),e.pb(1,278528,null,0,t.l,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),(l()(),e.qb(2,0,null,null,2,"a",[["role","tab"]],[[1,"aria-selected",0],[1,"tabindex",0]],null,null,a.b,a.a)),e.pb(3,278528,null,0,t.l,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),e.pb(4,49152,null,0,s.a,[],{nglInternalOutlet:[0,"nglInternalOutlet"]},null)],function(l,n){var u=n.component;l(n,1,0,"slds-tabs_"+u.variant+"__item"),l(n,3,0,"slds-tabs_"+u.variant+"__link"),l(n,4,0,n.context.$implicit.label)},function(l,n){l(n,0,0,n.context.$implicit.active),l(n,2,0,n.context.$implicit.active,n.context.$implicit.active?0:1)})}function i(l){return e.Jb(0,[(l()(),e.hb(0,null,null,0))],null,null)}function c(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,3,"ul",[["role","tablist"]],null,[[null,"keydown.ArrowLeft"],[null,"keydown.ArrowRight"]],function(l,n,u){var e=!0,t=l.component;return"keydown.ArrowLeft"===n&&(e=!1!==t.move(u,-1)&&e),"keydown.ArrowRight"===n&&(e=!1!==t.move(u,1)&&e),e},null,null)),e.pb(1,278528,null,0,t.l,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),(l()(),e.hb(16777216,null,null,1,null,r)),e.pb(3,278528,null,0,t.m,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(4,0,null,null,3,"div",[["role","tabpanel"]],null,null,null,null,null)),e.pb(5,278528,null,0,t.l,[e.s,e.t,e.k,e.E],{ngClass:[0,"ngClass"]},null),(l()(),e.hb(16777216,null,null,1,null,i)),e.pb(7,540672,null,0,t.s,[e.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(l,n){var u=n.component;l(n,1,0,"slds-tabs_"+u.variant+"__nav"),l(n,3,0,u.tabs),l(n,5,0,"slds-tabs_"+u.variant+"__content"),l(n,7,0,null==u.activeTab?null:u.activeTab.templateRef)},null)}},M6rV:function(l,n,u){"use strict";var e="300";function t(){return Math.random().toString(36).substring(7)}function a(l){var n="";return l?(l.forceEmbedLayout&&(n+="embed=1"),l.clickToLoad&&(n+=(n.length?"&":"")+"ctl=1"),l.openFile&&(n+=(n.length?"&":"")+"file="+l.openFile),!l.view||"preview"!==l.view&&"editor"!==l.view||(n+=(n.length?"&":"")+"view="+l.view),l.hideExplorer&&(n+=(n.length?"&":"")+"hideExplorer=1"),l.hideNavigation&&(n+=(n.length?"&":"")+"hideNavigation=1;"),l.hideDevTools&&(n+=(n.length?"&":"")+"hidedevtools=1"),"number"==typeof l.devToolsHeight&&l.devToolsHeight>0&&l.devToolsHeight<100&&(n+=(n.length?"&":"")+"devtoolsheight="+l.devToolsHeight),n.length?"?"+n:n):n}function s(l,n,u){if(null===l.parentNode)throw new Error("Invalid Element");n.id=l.id,i(n,u),l.parentNode.replaceChild(n,l)}function o(l){if("string"==typeof l){var n=document.getElementById(l);if(null!==n)return n}else if(l instanceof HTMLElement)return l;throw new Error("Invalid Element")}function r(l){return l&&!1===l.newWindow?"_self":"_blank"}function i(l,n){n&&(n.hasOwnProperty("height")&&(l.height=""+n.height),n.hasOwnProperty("width")&&(l.width=""+n.width)),l.height||(l.height=e),l.width||l.setAttribute("style","width:100%;")}var c=function(l){var n=this;this.pending={},this.port=l,this.port.onmessage=function(l){if(l.data.payload.__reqid){var u=l.data.payload.__reqid,e=l.data.payload.__success;if(n.pending[u]){if(delete l.data.payload.__reqid,delete l.data.payload.__success,e){var t=0===Object.keys(l.data.payload).length&&l.data.payload.constructor===Object?null:l.data.payload;n.pending[u].resolve(t)}else n.pending[u].reject(l.data.payload.error?l.data.type+": "+l.data.payload.error:l.data.type);delete n.pending[u]}}}};c.prototype.request=function(l){var n=this,u=t();return new Promise(function(e,t){n.pending[u]={resolve:e,reject:t},l.payload.__reqid=u,n.port.postMessage(l)})};var b=function(l,n){var u=this;this.rdc=new c(l),this.preview={},Object.defineProperty(this.preview,"origin",{value:n.previewOrigin,writable:!1}),this.editor={openFile:function(l){return u.rdc.request({type:"SDK_OPEN_FILE",payload:{path:l}})}}};b.prototype.applyFsDiff=function(l){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:l})},b.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},b.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var p=[],d=function(l){var n=this;this.id=t(),this.element=l,this.pending=new Promise(function(l,u){var e=function(u){u.data.action&&"SDK_INIT_SUCCESS"===u.data.action&&u.data.id===n.id&&(n.vm=new b(u.ports[0],u.data.payload),l(n.vm),a())},t=function(){n.element.contentWindow&&n.element.contentWindow.postMessage({action:"SDK_INIT",id:n.id},"*")};function a(){window.clearInterval(o),window.removeEventListener("message",e)}window.addEventListener("message",e),t();var s=0,o=window.setInterval(function(){if(n.vm)a();else{if(s>=20)return a(),u("Timeout: Unable to establish a connection with the StackBlitz VM"),void p.forEach(function(l,u){l.id===n.id&&p.splice(u,1)});s++,t()}},500)}),p.push(this)},m=["typescript","create-react-app","angular-cli","javascript","polymer"],f="https://stackblitz.com/run";function g(l,n){var u=document.createElement("input");return u.type="hidden",u.name=l,u.value=n,u}function h(l){-1===m.indexOf(l.template)&&console.warn("Unsupported project template, must be one of: "+m.join(", "));var n=document.createElement("form");return n.method="POST",n.setAttribute("style","display:none;"),n.appendChild(g("project[title]",l.title)),n.appendChild(g("project[description]",l.description)),n.appendChild(g("project[template]",l.template)),l.tags&&l.tags.forEach(function(l){n.appendChild(g("project[tags][]",l))}),l.dependencies&&n.appendChild(g("project[dependencies]",JSON.stringify(l.dependencies))),l.settings&&n.appendChild(g("project[settings]",JSON.stringify(l.settings))),Object.keys(l.files).forEach(function(u){n.appendChild(g("project[files]["+u+"]",l.files[u]))}),n}function v(l,n){var u=h(l);return u.action=f+a(n),u.id="sb","<html><head><title></title></head><body>"+u.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}var k={connect:function(l){if(!l||!l.contentWindow)return Promise.reject("Provided element is not an iframe.");var n=function(l){var n=l instanceof Element?"element":"id";return p.find(function(u){return u[n]===l})||null}(l);return n?n.pending:new d(l).pending},openGithubProject:function(l,n){window.open("https://stackblitz.com/github/"+l+a(n),r(n))},openProject:function(l,n){!function(l,n){var u=h(l);u.action=f+a(n),u.target=r(n),document.body.appendChild(u),u.submit(),document.body.removeChild(u)}(l,n)},openProjectId:function(l,n){window.open("https://stackblitz.com/edit/"+l+a(n),r(n))},embedGithubProject:function(l,n,u){var e=o(l),t=document.createElement("iframe");return t.src="https://stackblitz.com/github/"+n+a(u),s(e,t,u),k.connect(t)},embedProject:function(l,n,u){var e=o(l),t=v(n,u),a=document.createElement("iframe");return s(e,a,u),a.contentDocument&&a.contentDocument.write(t),k.connect(a)},embedProjectId:function(l,n,u){var e=o(l),t=document.createElement("iframe");return t.src="https://stackblitz.com/edit/"+n+a(u),s(e,t,u),k.connect(t)}},q=k;function H(l){return l.charAt(0).toUpperCase()+l.slice(1)}u.d(n,"a",function(){return y});var y=function(){function l(){this.selectedTab=0}return l.prototype.tryItOut=function(){var l,n,u,e,t,a,s;l=this.dir,n=this.file,u=decodeURIComponent(this.tsRaw),e=decodeURIComponent(this.markupRaw),a="app-demo-"+l+"-"+n,s="Demo"+H(l)+H(n),q.openProject({files:(t={"angular.json":'{\n  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n  "version": 1,\n  "newProjectRoot": "projects",\n  "projects": {\n    "demo": {\n      "root": "",\n      "sourceRoot": "src",\n      "projectType": "application",\n      "prefix": "app",\n      "schematics": {},\n      "architect": {\n        "build": {\n          "builder": "@angular-devkit/build-angular:browser",\n          "options": {\n            "outputPath": "dist/demo",\n            "index": "src/index.html",\n            "main": "src/main.ts",\n            "polyfills": "src/polyfills.ts",\n            "tsConfig": "src/tsconfig.app.json",\n            "assets": [\n              "src/favicon.ico",\n              "src/assets"\n            ],\n            "styles": [\n              "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css",\n              "node_modules/@angular/cdk/overlay-prebuilt.css",\n              "src/styles.css"\n            ],\n            "scripts": []\n          },\n          "configurations": {\n            "production": {\n              "fileReplacements": [\n                {\n                  "replace": "src/environments/environment.ts",\n                  "with": "src/environments/environment.prod.ts"\n                }\n              ],\n              "optimization": true,\n              "outputHashing": "all",\n              "sourceMap": false,\n              "extractCss": true,\n              "namedChunks": false,\n              "aot": true,\n              "extractLicenses": true,\n              "vendorChunk": false,\n              "buildOptimizer": true\n            }\n          }\n        },\n        "serve": {\n          "builder": "@angular-devkit/build-angular:dev-server",\n          "options": {\n            "browserTarget": "demo:build"\n          },\n          "configurations": {\n            "production": {\n              "browserTarget": "demo:build:production"\n            }\n          }\n        },\n        "extract-i18n": {\n          "builder": "@angular-devkit/build-angular:extract-i18n",\n          "options": {\n            "browserTarget": "demo:build"\n          }\n        },\n        "test": {\n          "builder": "@angular-devkit/build-angular:karma",\n          "options": {\n            "main": "src/test.ts",\n            "polyfills": "src/polyfills.ts",\n            "tsConfig": "src/tsconfig.spec.json",\n            "karmaConfig": "src/karma.conf.js",\n            "styles": [\n              "styles.css"\n            ],\n            "scripts": [],\n            "assets": [\n              "src/favicon.ico",\n              "src/assets"\n            ]\n          }\n        },\n        "lint": {\n          "builder": "@angular-devkit/build-angular:tslint",\n          "options": {\n            "tsConfig": [\n              "src/tsconfig.app.json",\n              "src/tsconfig.spec.json"\n            ],\n            "exclude": [\n              "**/node_modules/**"\n            ]\n          }\n        }\n      }\n    },\n    "demo-e2e": {\n      "root": "e2e/",\n      "projectType": "application",\n      "architect": {\n        "e2e": {\n          "builder": "@angular-devkit/build-angular:protractor",\n          "options": {\n            "protractorConfig": "e2e/protractor.conf.js",\n            "devServerTarget": "demo:serve"\n          }\n        },\n        "lint": {\n          "builder": "@angular-devkit/build-angular:tslint",\n          "options": {\n            "tsConfig": "e2e/tsconfig.e2e.json",\n            "exclude": [\n              "**/node_modules/**"\n            ]\n          }\n        }\n      }\n    }\n  },\n  "defaultProject": "demo"\n}',"src/index.html":"<"+a+">loading</app-demo-"+a+">","src/main.ts":"import './polyfills';\nimport { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { AppModule } from './app/app.module';\nplatformBrowserDynamic().bootstrapModule(AppModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));","src/polyfills.ts":"/**\n * This file includes polyfills needed by Angular and is loaded before the app.\n * You can add your own extra polyfills to this file.\n *\n * This file is divided into 2 sections:\n *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.\n *   2. Application imports. Files imported after ZoneJS that should be loaded before your main\n *      file.\n *\n * The current setup is for so-called \"evergreen\" browsers; the last versions of browsers that\n * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),\n * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.\n *\n * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html\n */\n/***************************************************************************************************\n * BROWSER POLYFILLS\n */\n/** IE9, IE10 and IE11 requires all of the following polyfills. **/\n// import 'core-js/es6/symbol';\n// import 'core-js/es6/object';\n// import 'core-js/es6/function';\n// import 'core-js/es6/parse-int';\n// import 'core-js/es6/parse-float';\n// import 'core-js/es6/number';\n// import 'core-js/es6/math';\n// import 'core-js/es6/string';\n// import 'core-js/es6/date';\n// import 'core-js/es6/array';\n// import 'core-js/es6/regexp';\n// import 'core-js/es6/map';\n// import 'core-js/es6/set';\n/** IE10 and IE11 requires the following for NgClass support on SVG elements */\n// import 'classlist.js';  // Run `npm install --save classlist.js`.\n/** IE10 and IE11 requires the following to support `@angular/animation`. */\n// import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n/** Evergreen browsers require these. **/\nimport 'core-js/es6/reflect';\nimport 'core-js/es7/reflect';\n/** ALL Firefox browsers require the following to support `@angular/animation`. **/\n// import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n/***************************************************************************************************\n * Zone JS is required by Angular itself.\n */\nimport 'zone.js/dist/zone';  // Included with Angular CLI.\n/***************************************************************************************************\n * APPLICATION IMPORTS\n */\n/**\n * Date, currency, decimal and percent pipes.\n * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10\n */\n// import 'intl';  // Run `npm install --save intl`."},t["src/app/app.component.ts"]=u,t["src/app/"+n+".html"]=e,t["src/app/app.module.ts"]="import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { HttpClientModule } from '@angular/common/http';\nimport { NglModule } from 'ng-lightning';\nimport { "+s+" } from './app.component';\n\n@NgModule({\n  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NglModule ],\n  declarations: [ "+s+" ],\n  bootstrap:    [ "+s+" ],\n  providers   : [ ]\n})\nexport class AppModule { }\n",t["src/styles.css"]="/* Add application styles & imports to this file! */;",t),title:"Dynamically Generated Project",description:"Created with <3 by ng-lightning",template:"angular-cli",dependencies:{rxjs:"^6.3.3","@angular/cdk":"^7.0.0","@angular/core":"^7.0.0","@angular/forms":"^7.0.0","@angular/http":"^7.0.0","@angular/language-service":"^7.0.0","@angular/platform-browser":"^7.0.0","@angular/platform-browser-dynamic":"^7.0.0","@angular/common":"^7.0.0","@angular/router":"^7.0.0","@salesforce-ux/design-system":"~2.8.0",tslib:"^1.9.3",typescript:"~3.1.1","ng-lightning":"^4.0.0"},tags:["ng-lightning","stackblitz","sdk"]})},l}()},Yz2A:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),a=function(){return function(){}}(),s=u("pMnS"),o=u("JPmx"),r=u("nnK8"),i=u("ZYCi"),c=u("Ip0R"),b=u("bS5w"),p=e.ob({encapsulation:2,styles:[],data:{}});function d(l){return e.Jb(0,[(l()(),e.hb(0,null,null,0))],null,null)}function m(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"li",[["class","slds-breadcrumb__item"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,d)),e.pb(2,540672,null,0,c.s,[e.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(l,n){l(n,2,0,n.context.$implicit.templateRef)},null)}function f(l){return e.Jb(2,[(l()(),e.qb(0,0,null,null,3,"nav",[["role","navigation"]],[[1,"aria-label",0]],null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"ol",[["class","slds-breadcrumb slds-list_horizontal slds-wrap"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,m)),e.pb(3,278528,null,0,c.m,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.breadcrumbs)},function(l,n){l(n,0,0,n.component.assistiveText)})}var g=u("lDJE"),h=function(){return function(){}}(),v=e.ob({encapsulation:2,styles:[],data:{}});function k(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Home"]))],null,null)}function q(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"a",[["routerLink","../support"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.pb(1,671744,null,0,i.m,[i.k,i.a,c.k],{routerLink:[0,"routerLink"]},null),(l()(),e.Hb(-1,null,["Support"]))],function(l,n){l(n,1,0,"../support")},function(l,n){l(n,0,0,e.zb(n,1).target,e.zb(n,1).href)})}function H(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,6,"ngl-breadcrumbs",[["assistiveText","Breadcrumbs"]],null,null,null,f,p)),e.pb(1,49152,null,1,b.a,[],{assistiveText:[0,"assistiveText"]},null),e.Fb(603979776,1,{breadcrumbs:1}),(l()(),e.hb(0,null,null,1,null,k)),e.pb(4,16384,[[1,4]],0,g.a,[e.M],null,null),(l()(),e.hb(0,null,null,1,null,q)),e.pb(6,16384,[[1,4]],0,g.a,[e.M],null,null)],function(l,n){l(n,1,0,"Breadcrumbs")},null)}var y=u("tHxD"),w=u("M6rV"),x=e.ob({encapsulation:2,styles:[],data:{}});function C(l){return e.Jb(0,[(l()(),e.Hb(-1,null,["\n      "])),(l()(),e.qb(1,0,null,null,84,"pre",[["class","language-markup"],["ngNonBindable",""]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,83,"code",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,17,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<"])),(l()(),e.Hb(-1,null,["ngl-breadcrumbs"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(9,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["assistiveText"])),(l()(),e.qb(11,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["="])),(l()(),e.qb(14,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,['"'])),(l()(),e.Hb(-1,null,["Breadcrumbs"])),(l()(),e.qb(17,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,['"'])),(l()(),e.qb(19,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[">"])),(l()(),e.qb(21,0,null,null,20,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<"])),(l()(),e.Hb(-1,null,["a"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(27,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["*nglBreadcrumb"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(30,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["href"])),(l()(),e.qb(32,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),e.qb(33,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["="])),(l()(),e.qb(35,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,['"'])),(l()(),e.Hb(-1,null,["javascript:void(0)"])),(l()(),e.qb(38,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,['"'])),(l()(),e.qb(40,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[">"])),(l()(),e.Hb(-1,null,["Home"])),(l()(),e.qb(43,0,null,null,6,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(44,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(45,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["</"])),(l()(),e.Hb(-1,null,["a"])),(l()(),e.qb(48,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[">"])),(l()(),e.qb(50,0,null,null,20,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(51,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(52,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<"])),(l()(),e.Hb(-1,null,["a"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(56,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["*nglBreadcrumb"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(59,0,null,null,1,"span",[["class","token attr-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["routerLink"])),(l()(),e.qb(61,0,null,null,7,"span",[["class","token attr-value"]],null,null,null,null,null)),(l()(),e.qb(62,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["="])),(l()(),e.qb(64,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,['"'])),(l()(),e.Hb(-1,null,["../support"])),(l()(),e.qb(67,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,['"'])),(l()(),e.qb(69,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[">"])),(l()(),e.Hb(-1,null,["Support"])),(l()(),e.qb(72,0,null,null,6,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(73,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(74,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["</"])),(l()(),e.Hb(-1,null,["a"])),(l()(),e.qb(77,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[">"])),(l()(),e.qb(79,0,null,null,6,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(80,0,null,null,3,"span",[["class","token tag"]],null,null,null,null,null)),(l()(),e.qb(81,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["</"])),(l()(),e.Hb(-1,null,["ngl-breadcrumbs"])),(l()(),e.qb(84,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[">"])),(l()(),e.Hb(-1,null,["\n    "]))],null,null)}function j(l){return e.Jb(0,[(l()(),e.Hb(-1,null,["\n      "])),(l()(),e.qb(1,0,null,null,60,"pre",[["class","language-typescript"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,59,"code",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["import"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(6,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(7,null,["",""])),(l()(),e.Hb(-1,null,[" Component "])),(l()(),e.qb(9,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(10,null,["",""])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(12,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["from"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(15,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["'@angular/core'"])),(l()(),e.qb(17,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[";"])),(l()(),e.Hb(-1,null,["\n\n@"])),(l()(),e.qb(20,0,null,null,1,"span",[["class","token function"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Component"])),(l()(),e.qb(22,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["("])),(l()(),e.qb(24,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(25,null,["",""])),(l()(),e.Hb(-1,null,["\n  selector"])),(l()(),e.qb(27,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[":"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(30,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["'app-demo-breadcrumbs-basic'"])),(l()(),e.qb(32,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[","])),(l()(),e.Hb(-1,null,["\n  templateUrl"])),(l()(),e.qb(35,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[":"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(38,0,null,null,1,"span",[["class","token string"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["'./basic.html'"])),(l()(),e.qb(40,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[","])),(l()(),e.Hb(-1,null,["\n"])),(l()(),e.qb(43,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(44,null,["",""])),(l()(),e.qb(45,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[")"])),(l()(),e.Hb(-1,null,["\n"])),(l()(),e.qb(48,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["export"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(51,0,null,null,1,"span",[["class","token keyword"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["class"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(54,0,null,null,1,"span",[["class","token class-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["DemoBreadcrumbsBasic"])),(l()(),e.Hb(-1,null,[" "])),(l()(),e.qb(57,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(58,null,["",""])),(l()(),e.qb(59,0,null,null,1,"span",[["class","token punctuation"]],null,null,null,null,null)),(l()(),e.Hb(60,null,["",""])),(l()(),e.Hb(-1,null,["\n"])),(l()(),e.Hb(-1,null,["\n    "]))],null,function(l,n){l(n,7,0,"{"),l(n,10,0,"}"),l(n,25,0,"{"),l(n,44,0,"}"),l(n,58,0,"{"),l(n,60,0,"}")})}function E(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,3,"header",[["class","component__header slds-border_bottom slds-grid slds-wrap slds-m-bottom_medium"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","slds-has-flexi-truncate slds-align-middle"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Breadcrumbs "])),(l()(),e.qb(4,0,null,null,11,"div",[["class","slds-m-vertical_medium readme"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Breadcrumb provides contextual information about page hierarchy."])),(l()(),e.qb(7,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Heads up!"])),(l()(),e.qb(10,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["nglBreadcrumb"])),(l()(),e.Hb(-1,null,[" is a "])),(l()(),e.qb(13,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["structural"])),(l()(),e.Hb(-1,null,[" directive."])),(l()(),e.qb(16,0,null,null,10,"div",[["class","slds-m-vertical_medium"]],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Examples"])),(l()(),e.qb(19,0,null,null,7,"div",[["class","slds-box slds-theme_default slds-m-bottom_large"]],null,null,null,null,null)),(l()(),e.qb(20,0,null,null,1,"app-demo-breadcrumbs-basic",[],null,null,null,H,v)),e.pb(21,49152,null,0,h,[],null,null),(l()(),e.hb(0,[["markupbasic",2]],null,0,null,C)),(l()(),e.hb(0,[["tsbasic",2]],null,0,null,j)),(l()(),e.qb(24,0,null,null,2,"div",[["class","slds-is-relative slds-m-top_large"]],null,null,null,null,null)),(l()(),e.qb(25,0,null,null,1,"app-demo-example-docs",[["dir","breadcrumbs"],["file","basic"],["markupRaw","%0A%3Cngl-breadcrumbs%20assistiveText%3D%22Breadcrumbs%22%3E%3Ca%20*nglBreadcrumb%20href%3D%22javascript%3Avoid(0)%22%3EHome%3C%2Fa%3E%3Ca%20*nglBreadcrumb%20routerLink%3D%22..%2Fsupport%22%3ESupport%3C%2Fa%3E%3C%2Fngl-breadcrumbs%3E"],["tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-breadcrumbs-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoBreadcrumbsBasic%20%7B%7D%0A"]],null,null,null,y.b,y.a)),e.pb(26,49152,null,0,w.a,[],{dir:[0,"dir"],file:[1,"file"],ts:[2,"ts"],markup:[3,"markup"],tsRaw:[4,"tsRaw"],markupRaw:[5,"markupRaw"]},null),(l()(),e.qb(27,0,null,null,29,"div",[["class","slds-m-vertical_medium"]],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,1,"h2",[["class","callout"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["API"])),(l()(),e.qb(30,0,null,null,26,"div",[["class","slds-box slds-theme_default"]],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,25,"div",[["class","api"]],null,null,null,null,null)),(l()(),e.qb(32,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<ngl-breadcrumbs>"])),(l()(),e.qb(34,0,null,null,20,"table",[],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(37,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Property"])),(l()(),e.qb(39,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Description"])),(l()(),e.qb(41,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Type"])),(l()(),e.qb(43,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Default"])),(l()(),e.qb(45,0,null,null,9,"tbody",[],null,null,null,null,null)),(l()(),e.qb(46,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(47,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(48,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["[assistiveText]"])),(l()(),e.qb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Assistive text for accessibility."])),(l()(),e.qb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["string"])),(l()(),e.qb(54,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),e.qb(55,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["*nglBreadcrumb"]))],function(l,n){l(n,26,0,"breadcrumbs","basic",e.zb(n,23),e.zb(n,22),"import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-breadcrumbs-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoBreadcrumbsBasic%20%7B%7D%0A","%0A%3Cngl-breadcrumbs%20assistiveText%3D%22Breadcrumbs%22%3E%3Ca%20*nglBreadcrumb%20href%3D%22javascript%3Avoid(0)%22%3EHome%3C%2Fa%3E%3Ca%20*nglBreadcrumb%20routerLink%3D%22..%2Fsupport%22%3ESupport%3C%2Fa%3E%3C%2Fngl-breadcrumbs%3E")},null)}function _(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-demo-breadcrumbs",[],null,null,null,E,x)),e.pb(1,49152,null,0,t,[],null,null)],null,null)}var T=e.mb("app-demo-breadcrumbs",t,_,{},{},[]),A=u("eDkP"),S=u("Fzqc"),P=u("M2Lx"),D=u("gIcY"),B=u("OZ9h"),F=u("zKS0"),I=u("f61A"),O=u("59dH"),M=u("nLJH"),R=u("bkYU"),z=u("RVgz"),J=u("niFT"),L=u("x4ce"),N=u("4c35"),K=u("dWZg"),U=u("qAlS"),G=u("lLAP"),V=u("RapS"),Z=u("6ki1"),W=u("Lmz1"),Y=u("pvyG"),$=u("1KKX"),Q=u("TrQt"),X=u("UXyo"),ll=u("KkdI"),nl=u("Ow6k"),ul=u("Qv8b"),el=u("UFWM"),tl=u("ROA8"),al=u("JwXP"),sl=u("s5vW"),ol=u("gZax"),rl=u("awwr"),il=u("4SVB"),cl=u("s8pT"),bl=u("uhgx"),pl=u("poeR"),dl=u("uIKs"),ml=u("r2tc"),fl=u("EZV6"),gl=u("0gQ9"),hl=u("dH7C");u.d(n,"NglDemoBreadcrumbsModuleNgFactory",function(){return vl});var vl=e.nb(a,[],function(l){return e.wb([e.xb(512,e.j,e.cb,[[8,[s.a,o.a,r.a,T]],[3,e.j],e.x]),e.xb(4608,c.p,c.o,[e.u,[2,c.z]]),e.xb(4608,A.c,A.c,[A.h,A.d,e.j,A.g,A.e,e.q,e.z,c.d,S.b,[2,c.j]]),e.xb(5120,A.i,A.j,[A.c]),e.xb(4608,P.a,P.a,[]),e.xb(4608,D.p,D.p,[]),e.xb(1073742336,c.c,c.c,[]),e.xb(1073742336,i.n,i.n,[[2,i.t],[2,i.k]]),e.xb(1073742336,B.a,B.a,[]),e.xb(1073742336,F.a,F.a,[]),e.xb(1073742336,I.a,I.a,[]),e.xb(1073742336,O.a,O.a,[]),e.xb(1073742336,M.a,M.a,[]),e.xb(1073742336,R.a,R.a,[]),e.xb(1073742336,z.a,z.a,[]),e.xb(1073742336,J.a,J.a,[]),e.xb(1073742336,L.a,L.a,[]),e.xb(1073742336,S.a,S.a,[]),e.xb(1073742336,N.c,N.c,[]),e.xb(1073742336,K.b,K.b,[]),e.xb(1073742336,U.b,U.b,[]),e.xb(1073742336,A.f,A.f,[]),e.xb(1073742336,P.b,P.b,[]),e.xb(1073742336,G.a,G.a,[]),e.xb(1073742336,V.a,V.a,[]),e.xb(1073742336,Z.a,Z.a,[]),e.xb(1073742336,W.a,W.a,[]),e.xb(1073742336,Y.a,Y.a,[]),e.xb(1073742336,D.o,D.o,[]),e.xb(1073742336,D.g,D.g,[]),e.xb(1073742336,$.a,$.a,[]),e.xb(1073742336,Q.a,Q.a,[]),e.xb(1073742336,X.a,X.a,[]),e.xb(1073742336,ll.a,ll.a,[]),e.xb(1073742336,nl.a,nl.a,[]),e.xb(1073742336,ul.a,ul.a,[]),e.xb(1073742336,el.a,el.a,[]),e.xb(1073742336,tl.a,tl.a,[]),e.xb(1073742336,al.a,al.a,[]),e.xb(1073742336,sl.a,sl.a,[]),e.xb(1073742336,ol.a,ol.a,[]),e.xb(1073742336,rl.a,rl.a,[]),e.xb(1073742336,il.a,il.a,[]),e.xb(1073742336,cl.a,cl.a,[]),e.xb(1073742336,bl.a,bl.a,[]),e.xb(1073742336,pl.a,pl.a,[]),e.xb(1073742336,dl.a,dl.a,[]),e.xb(1073742336,ml.a,ml.a,[]),e.xb(1073742336,fl.a,fl.a,[]),e.xb(1073742336,gl.a,gl.a,[]),e.xb(1073742336,hl.a,hl.a,[]),e.xb(1073742336,a,a,[]),e.xb(1024,i.i,function(){return[[{path:"",component:t}]]},[])])})},dH7C:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){return function(){}}()},tHxD:function(l,n,u){"use strict";u.d(n,"a",function(){return r}),u.d(n,"b",function(){return d});var e=u("CcnG"),t=u("Ip0R"),a=u("/osD"),s=u("zP4+"),o=u("VMZN"),r=(u("M6rV"),e.ob({encapsulation:2,styles:[],data:{}}));function i(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function c(l){return e.Jb(0,[(l()(),e.hb(16777216,null,null,1,null,i)),e.pb(1,540672,null,0,t.s,[e.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.hb(0,null,null,0))],function(l,n){l(n,1,0,n.component.markup)},null)}function b(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function p(l){return e.Jb(0,[(l()(),e.hb(16777216,null,null,1,null,b)),e.pb(1,540672,null,0,t.s,[e.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(l()(),e.hb(0,null,null,0))],function(l,n){l(n,1,0,n.component.ts)},null)}function d(l){return e.Jb(2,[(l()(),e.qb(0,0,null,null,2,"button",[["class","slds-button slds-button_neutral slds-is-absolute"],["style","right: 10px;"],["title","Edit on Stackblitz"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.tryItOut()&&e),e},null,null)),(l()(),e.qb(1,0,null,null,0,"img",[["src","assets/images/stackblitz.svg"],["style","height:15px;"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Stackblitz"])),(l()(),e.qb(3,0,null,null,6,"ngl-tabset",[],null,[[null,"selectedChange"]],function(l,n,u){var e=!0;return"selectedChange"===n&&(e=!1!==(l.component.selectedTab=u)&&e),e},a.b,a.a)),e.pb(4,1097728,null,1,s.a,[e.k,e.E],{setSelected:[0,"setSelected"]},{selectedChange:"selectedChange"}),e.Fb(603979776,1,{tabs:1}),(l()(),e.hb(0,null,null,1,null,c)),e.pb(7,16384,[[1,4]],0,o.a,[[2,e.M]],{label:[0,"label"]},null),(l()(),e.hb(0,null,null,1,null,p)),e.pb(9,16384,[[1,4]],0,o.a,[[2,e.M]],{label:[0,"label"]},null)],function(l,n){l(n,4,0,n.component.selectedTab),l(n,7,0,"Markup"),l(n,9,0,"Typescript")},null)}}}]);