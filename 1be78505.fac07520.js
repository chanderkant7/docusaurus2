(window.webpackJsonp=window.webpackJsonp||[]).push([[5,25],{94:function(e,a,n){"use strict";var r=n(0),c=n.n(r),s=n(92),t=n.n(s),l=n(89),o=n(85);a.a=e=>{const a=Object(r.useRef)(!1),s=Object(r.useRef)(null),h=Object(l.useHistory)(),{siteConfig:i={}}=Object(o.a)(),{baseUrl:d}=i,u=()=>{a.current||(Promise.all([fetch(d+"search-doc.json").then(e=>e.json()),fetch(d+"lunr-index.json").then(e=>e.json()),Promise.all([n.e(30),n.e(34)]).then(n.bind(null,100)),n.e(22).then(n.t.bind(null,98,7))]).then(([e,a,{default:n}])=>{((e,a,n)=>{new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,n)=>{const r=d+n.url;document.createElement("a").href=r,h.push(r)}})})(e,a,n)}),a.current=!0)},b=Object(r.useCallback)(a=>{s.current.contains(a.target)||s.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:t()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:t()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:b,onBlur:b,ref:s}))}}}]);