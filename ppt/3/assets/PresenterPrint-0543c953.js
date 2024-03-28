import{d,u as _,a as p,c as m,b as u,r as h,o as a,e as n,f as t,t as s,g as r,F as f,h as g,n as v,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-5fc2957e.js";import{N as w}from"./NoteDisplay-d7c28bda.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),R={key:0,class:"border-gray-400/50 mb-8"},j=d({__name:"PresenterPrint",setup(z){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(a(),n("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",D,[t("h1",L,s(r(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(r(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",R)):k("v-if",!0)]))),128))])],4))}}),M=P(j,[["__file","C:/Users/Ruiyu/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
