import{a as m,b as p,j as s,L as g,r as i}from"./index-JIrHwwen.js";import{u as w,c as j,f as b,a as y,L as N}from"./use-analitics-1jhc2os7.js";import{s as L,f as z,L as E}from"./utils-c5BdE0Hj.js";const H="_row_1g1zy_1",S="_title__row_1g1zy_13",V="_car__number_1g1zy_29",q="_car__quantity_1g1zy_43",$="_gate__number_1g1zy_57",k="_highlighted_1g1zy_69",A="_gate__notAssigned_1g1zy_79",T="_tj__notAssigned_1g1zy_79",u={row:H,title__row:S,car__number:V,car__quantity:q,gate__number:$,highlighted:k,gate__notAssigned:A,tj__notAssigned:T},D=({carData:r})=>{const{searchValue:e}=m(p(a=>({searchValue:a.searchValue}))),{t,translation:o}=w(),c=L(r.carNumber,e);return console.log("render item"),s.jsx(s.Fragment,{children:s.jsx(g,{to:`/${r.carNumber.toLowerCase()}`,children:s.jsxs("div",{className:u.row,children:[s.jsxs("div",{className:u.car__number,children:[r.carsQuantity!==null&&s.jsx("span",{className:u.car__quantity,children:`${r.carsQuantity}.`}),c.map((a,_)=>s.jsxs(i.Fragment,{children:[_===1?s.jsx("span",{className:u.highlighted,children:e}):_>0&&e,a]},_))]}),r.gateName?s.jsxs("div",{className:u.gate__number,children:["→ ",r.gateName]}):s.jsx("div",{className:o!=="tj"?u.gate__notAssigned:u.tj__notAssigned,children:t("wait")})]},r.carsQuantity)})})},C=r=>{i.useEffect(()=>{if(r.current){const e=r.current,t=()=>{e&&(e.scrollHeight-e.scrollTop-e.clientHeight<=1&&(e.scrollTop-=2),e.scrollTop===0&&(e.scrollTop+=2))};return e&&e.addEventListener("scroll",t),()=>{e&&e.removeEventListener("scroll",t)}}},[r])},F=()=>{const{focus:r}=m(p(e=>({focus:e.focus})));i.useEffect(()=>{var t,o;const e=c=>{c.preventDefault()};return r&&((t=document.querySelector("header"))==null||t.addEventListener("touchmove",e),(o=document.querySelector("#search"))==null||o.addEventListener("touchmove",e)),()=>{var c,a;(c=document.querySelector("header"))==null||c.removeEventListener("touchmove",e),(a=document.querySelector("#search"))==null||a.removeEventListener("touchmove",e)}},[r])},M="_content__wrapper_x83fh_1",O="_column__wrapper_x83fh_13",Q="_column_x83fh_13",R="_row_x83fh_59",B="_title__row_x83fh_69",P="_result__wrapper_x83fh_105",W="_one_x83fh_117",G="_result__btn_x83fh_141",l={content__wrapper:M,column__wrapper:O,column:Q,row:R,title__row:B,result__wrapper:P,one:W,result__btn:G},I=i.memo(function(){var x;const{t:e}=w(),t=i.useRef(null),{overflow:o,focus:c,houseData:a,searchValue:_,setOverflow:h}=m(p(n=>({houseData:n.houseData,searchValue:n.searchValue,focus:n.focus,overflow:n.overflow,setOverflow:n.setOverflow}))),d=i.useMemo(()=>z(a,_),[a,_]),v=d&&((x=d[0])==null?void 0:x.carNumber.toLowerCase());return i.useEffect(()=>{setTimeout(()=>{var n;t.current&&((n=t.current)==null||n.scrollTo({top:2}))},0)},[c,_,h]),C(t),F(),s.jsx(s.Fragment,{children:s.jsx("div",{className:l.content__wrapper,children:s.jsx("div",{ref:t,style:{overflow:o},className:l.column__wrapper,children:s.jsxs("div",{onClick:n=>n.stopPropagation(),className:l.column,children:[s.jsxs("div",{className:j(l.title__row,l.row),children:[s.jsx("div",{children:e("table-number")}),s.jsx("div",{children:e("table-gates")})]}),d&&d.map(n=>s.jsx(D,{carData:n},n.carNumber)),d&&d.length===1?s.jsxs("div",{className:c?l.result__wrapper:j(l.result__wrapper,l.one),children:[s.jsx("button",{onMouseDown:n=>n.preventDefault(),className:l.result__btn,children:s.jsx(g,{to:`/${v}`,children:e("search-finded")})}),s.jsx("div",{children:e("search-not-finded")})]}):s.jsx("div",{children:e("search-not-finded")})]})})})})}),J="_search__wrapper_9zdkb_1",K="_search__input_9zdkb_35",U="_highlighted_9zdkb_65",X="_search__info_9zdkb_73",f={search__wrapper:J,search__input:K,highlighted:U,search__info:X},Y=r=>{const{query:e}=r,{t}=w(),{searchValue:o,setSearchValue:c,focusHandler:a,blurHandler:_}=m(p(h=>({searchValue:h.searchValue,focusHandler:h.focusHandler,blurHandler:h.blurHandler,setSearchValue:h.setSearchValue})));return s.jsx(s.Fragment,{children:s.jsxs("div",{id:"search",className:f.search__wrapper,children:[s.jsx("input",{type:"number",placeholder:t("search-field"),inputMode:"numeric",pattern:"[0-9]*",className:f.search__input,value:o,onInput:c,onFocus:a,onBlur:_}),s.jsx("p",{className:f.search__info,children:t("search-notice")}),s.jsx(g,{className:f.search__link,to:`/${e==null?void 0:e.query}/schema`,children:t("search-question")})]})})},Z="_wrapper_veuw4_1",ee={wrapper:Z},ne=()=>{const{houseData:r,fetchHouseData:e}=m(p(o=>({houseData:o.houseData,fetchHouseData:o.fetchHouseData}))),t=b(r);return i.useEffect(()=>{t&&e(t),window.scrollTo({top:0})},[e,t]),y(),s.jsx(N,{children:r&&r.length>=0?s.jsxs("div",{className:ee.wrapper,children:[s.jsx(I,{}),s.jsx(Y,{query:t})]}):s.jsx(E,{})})};export{ne as default};
