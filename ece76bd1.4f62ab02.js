(window.webpackJsonp=window.webpackJsonp||[]).push([[26,5,25],{78:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),s=t(86),l=t(93),o=t(87),i=t(85),u=t(90),d=t(79),m=t.n(d);const h=[{title:c.a.createElement(c.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:c.a.createElement(c.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:c.a.createElement(c.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/undraw_docusaurus_tree.svg",description:c.a.createElement(c.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",c.a.createElement("code",null,"docs")," directory.")},{title:c.a.createElement(c.a.Fragment,null,"Powered by React"),imageUrl:"img/undraw_docusaurus_react.svg",description:c.a.createElement(c.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function b({imageUrl:e,title:a,description:t}){const n=Object(u.a)(e);return c.a.createElement("div",{className:Object(s.a)("col col--4",m.a.feature)},n&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:m.a.featureImage,src:n,alt:a})),c.a.createElement("h3",null,a),c.a.createElement("p",null,t))}a.default=function(){const e=Object(i.a)(),{siteConfig:a={}}=e;return c.a.createElement(l.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:Object(s.a)("hero hero--primary",m.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:m.a.buttons},c.a.createElement(o.a,{className:Object(s.a)("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),c.a.createElement("main",null,h&&h.length>0&&c.a.createElement("section",{className:m.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},h.map((e,a)=>c.a.createElement(b,Object(n.a)({key:a},e))))))))}},94:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(92),s=t.n(c),l=t(89),o=t(85);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(l.useHistory)(),{siteConfig:u={}}=Object(o.a)(),{baseUrl:d}=u,m=()=>{a.current||(Promise.all([fetch(d+"search-doc.json").then(e=>e.json()),fetch(d+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(30),t.e(34)]).then(t.bind(null,100)),t.e(22).then(t.t.bind(null,98,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=d+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)}),a.current=!0)},h=Object(n.useCallback)(a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:h,onBlur:h,ref:c}))}}}]);