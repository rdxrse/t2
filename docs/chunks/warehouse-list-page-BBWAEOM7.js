import{a as h,b as p,j as s,L as w,r as d}from"../entry/index-DYItNu3A.js";import{u as m,s as b,o as j,f as y,b as N,c as v,p as L,d as V,a as H,L as E}from"./use-analitics-D1b1w7lw.js";import{L as D}from"./loader-CCZA0sI4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="b82f595d-a051-4701-85c4-2fd1ed26d54b",r._sentryDebugIdIdentifier="sentry-dbid-b82f595d-a051-4701-85c4-2fd1ed26d54b")}catch{}})();const S="_row_1g1zy_1",T="_title__row_1g1zy_13",z="_car__number_1g1zy_29",$="_car__quantity_1g1zy_43",q="_gate__number_1g1zy_57",A="_highlighted_1g1zy_69",k="_gate__notAssigned_1g1zy_79",C="_tj__notAssigned_1g1zy_79",u={row:S,title__row:T,car__number:z,car__quantity:$,gate__number:q,highlighted:A,gate__notAssigned:k,tj__notAssigned:C},F=({carData:r})=>{const{searchValue:e}=h(p(a=>({searchValue:a.searchValue}))),{t,translation:o}=m(),n=b(r.carNumber,e);return s.jsx(s.Fragment,{children:s.jsx(w,{onMouseDown:j,to:`/${r.carNumber.toLowerCase()}`,children:s.jsxs("div",{className:u.row,children:[s.jsxs("div",{className:u.car__number,children:[r.carsQuantity!==null&&s.jsx("span",{className:u.car__quantity,children:`${r.carsQuantity}.`}),n.map((a,i)=>s.jsxs(d.Fragment,{children:[i===1?s.jsx("span",{className:u.highlighted,children:e}):i>0&&e,a]},i))]}),r.gateName?s.jsxs("div",{className:u.gate__number,children:["→ ",r.gateName]}):s.jsx("div",{className:o!=="tj"?u.gate__notAssigned:u.tj__notAssigned,children:t("wait")})]},r.carsQuantity)})})},B=r=>{d.useEffect(()=>{if(r.current){const e=r.current,t=()=>{e&&(e.scrollHeight-e.scrollTop-e.clientHeight<=1&&(e.scrollTop-=2),e.scrollTop===0&&(e.scrollTop+=2))};return e&&e.addEventListener("scroll",t),()=>{e&&e.removeEventListener("scroll",t)}}},[r])},I=()=>{const{focus:r,blur:e,setBlur:t,setHeight:o}=h(p(n=>({focus:n.focus,blur:n.blur,setBlur:n.setBlur,setHeight:n.setHeight})));d.useEffect(()=>{const n=()=>{window.visualViewport&&window.visualViewport.offsetTop>=0&&(e&&!r?(o("100%"),t(!1)):o(`${Math.max(0,window.visualViewport.height)}px`),setTimeout(scrollTo,0,0,0))};return window.visualViewport&&window.visualViewport.offsetTop>=0&&window.visualViewport.addEventListener("resize",n),()=>{window.visualViewport&&(window.visualViewport.removeEventListener("resize",n),o("100%"))}},[o,t,e,r])},M=()=>{const{focus:r}=h(p(e=>({focus:e.focus})));d.useEffect(()=>{var t,o;const e=n=>{n.preventDefault()};return r&&((t=document.querySelector("header"))==null||t.addEventListener("touchmove",e),(o=document.querySelector("#search"))==null||o.addEventListener("touchmove",e)),()=>{var n,a;(n=document.querySelector("header"))==null||n.removeEventListener("touchmove",e),(a=document.querySelector("#search"))==null||a.removeEventListener("touchmove",e)}},[r])},R="_content__wrapper_x83fh_1",O="_column__wrapper_x83fh_13",Q="_column_x83fh_13",P="_row_x83fh_59",W="_title__row_x83fh_69",G="_result__wrapper_x83fh_105",J="_one_x83fh_117",K="_result__btn_x83fh_141",_={content__wrapper:R,column__wrapper:O,column:Q,row:P,title__row:W,result__wrapper:G,one:J,result__btn:K},U=()=>{var g;const{t:r}=m(),e=d.useRef(null),{overflow:t,focus:o,houseData:n,searchValue:a,setOverflow:i}=h(p(l=>({houseData:l.houseData,searchValue:l.searchValue,focus:l.focus,overflow:l.overflow,setOverflow:l.setOverflow}))),c=y(n,a),x=c&&((g=c[0])==null?void 0:g.carNumber.toLowerCase());return d.useEffect(()=>{i("hidden"),setTimeout(()=>{var l;i("auto"),e.current&&((l=e.current)==null||l.scrollTo({top:2}))},0)},[o,a,i]),B(e),I(),M(),s.jsx(s.Fragment,{children:s.jsx("div",{className:_.content__wrapper,children:s.jsx("div",{ref:e,style:{overflow:t},className:_.column__wrapper,children:s.jsxs("div",{onClick:N,className:_.column,children:[s.jsxs("div",{className:v(_.title__row,_.row),children:[s.jsx("div",{children:r("table-number")}),s.jsx("div",{children:r("table-gates")})]}),c&&c.map(l=>s.jsx(F,{carData:l},l.carNumber)),c&&c.length===1?s.jsxs("div",{className:o?_.result__wrapper:v(_.result__wrapper,_.one),children:[s.jsx("button",{onMouseDown:L,className:_.result__btn,children:s.jsx(w,{to:`/${x}`,children:r("search-finded")})}),s.jsx("div",{children:r("search-not-finded")})]}):s.jsx("div",{children:r("search-not-finded")})]})})})})},X="_search__wrapper_1a3li_1",Y="_line_1a3li_31",Z="_search__input_1a3li_41",ee="_highlighted_1a3li_71",se="_search__info_1a3li_79",f={search__wrapper:X,line:Y,search__input:Z,highlighted:ee,search__info:se},re=r=>{const{query:e}=r,{t}=m(),{searchValue:o,setSearchValue:n,focusHandler:a,blurHandler:i}=h(p(c=>({searchValue:c.searchValue,focusHandler:c.focusHandler,blurHandler:c.blurHandler,setSearchValue:c.setSearchValue})));return s.jsx(s.Fragment,{children:s.jsxs("div",{id:"search",className:f.search__wrapper,children:[s.jsx("span",{className:f.line}),s.jsx("input",{type:"number",placeholder:t("search-field"),inputMode:"numeric",pattern:"[0-9]*",className:f.search__input,value:o,onInput:n,onFocus:a,onBlur:i}),s.jsx("p",{className:f.search__info,children:t("search-notice")}),s.jsx(w,{className:f.search__link,to:`/${e==null?void 0:e.query}/schema`,children:t("search-question")})]})})},te="_wrapper_veuw4_1",ne={wrapper:te},le=()=>{const{houseData:r,fetchHouseData:e}=h(p(o=>({houseData:o.houseData,fetchHouseData:o.fetchHouseData}))),t=V(r);return d.useEffect(()=>{t&&e(t),window.scrollTo({top:0})},[e,t]),H(),s.jsx(E,{children:r&&r.length>=0?s.jsxs("div",{className:ne.wrapper,children:[s.jsx(U,{}),s.jsx(re,{query:t})]}):s.jsx(D,{})})};export{le as default};
//# sourceMappingURL=warehouse-list-page-BBWAEOM7.js.map
