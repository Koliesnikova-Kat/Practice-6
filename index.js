import{a as p,P as m}from"./assets/vendor-C8dIjPPj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const g="uHSLi07StIOlriMPxJGxUbSYsHDs6AFx";p.defaults.baseURL="https://app.ticketmaster.com/discovery/v2/";async function y(t,s){const n={params:{apikey:g,page:t,keyword:s}};return(await p.get("events.json",n)).data}const v=t=>{const s=t.map(({name:n})=>`
    <li class='listEl'>
      <p class='list-text'>${n}</p>
    </li>
  `).join("");u.innerHTML=s},u=document.querySelector(".list"),f=document.querySelector(".form");let r="";const b={totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},c=new m("pagination",b),d=c.getCurrentPage();function h(t){c.reset(t)}c.on("afterMove",t=>{const s=t.page;l(s,r)});async function l(t,s){try{const n=await y(t,s);if(!n.page.totalElements){alert("Try again!");return}t===1&&h(n.page.totalElements),v(n._embedded.events)}catch(n){console.log(n)}}l(d,r);const P=t=>{t.preventDefault(),u.innerHTML="",r=t.target.elements.input.value,l(d,r),f.reset()};f.addEventListener("submit",P);
//# sourceMappingURL=index.js.map