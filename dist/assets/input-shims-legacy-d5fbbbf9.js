System.register(["./index8-legacy-d5d9fd69.js","./index-legacy-ab5b5700.js"],(function(e,t){"use strict";var n,o,i,r,s,a,d,l,c;return{setters:[e=>{n=e.f,o=e.g,i=e.a},e=>{r=e.K,s=e.b,a=e.d,d=e.a,l=e.e,c=e.f}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=new WeakMap,u=(e,n,o,i=0,r=!1)=>{t.has(e)!==o&&(o?m(e,n,i,r):f(e,n))},m=(e,n,o,i=!1)=>{const r=n.parentNode,s=n.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,i&&(s.disabled=!0),r.appendChild(s),t.set(e,s);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${a}px,${o}px,0) scale(0)`},f=(e,n)=>{const o=t.get(e);o&&(t.delete(e),o.remove()),e.style.pointerEvents="",n.style.transform=""},v="input, textarea, [no-blur], [contenteditable]",p=(e,t,n,o)=>{const i=e.top,r=e.bottom,s=t.top,a=s+15,d=Math.min(t.bottom,o-n)-50-r,l=a-i,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,i-s),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(i-a)}},w="$ionPaddingTimer",y=(e,t,n)=>{const o=e[w];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[w]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},g=(e,t,n)=>{e.addEventListener("focusout",(()=>{t&&y(t,0,n)}),{once:!0})};let h=0;const b="data-ionic-skip-scroll-assist",S=e=>{document.activeElement!==e&&(e.setAttribute(b,"true"),e.focus())},E=async(e,t,n,r,s,a,d=!1)=>{if(!n&&!r)return;const l=((e,t,n)=>{var o;const i=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return p(i.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||r,s);if(n&&Math.abs(l.scrollAmount)<4)return S(t),void(a&&null!==n&&(y(n,h),g(t,n,(()=>h=0))));if(u(e,t,!0,l.inputSafeY,d),S(t),c((()=>e.click())),a&&n&&(h=l.scrollPadding,y(n,h)),"undefined"!=typeof window){let r;const s=async()=>{void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",d),window.removeEventListener("ionKeyboardDidShow",s),n&&await i(n,0,l.scrollAmount,l.scrollDuration),u(e,t,!1,l.inputSafeY),S(t),a&&g(t,n,(()=>h=0))},d=()=>{window.removeEventListener("ionKeyboardDidShow",d),window.addEventListener("ionKeyboardDidShow",s)};if(n){const e=await o(n),i=e.scrollHeight-e.clientHeight;if(l.scrollAmount>i-e.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",d)):window.addEventListener("ionKeyboardDidShow",s),void(r=setTimeout(s,1e3))}s()}};e("startInputShims",(async(e,t)=>{const o=document,i="ios"===t,c="android"===t,m=e.getNumber("keyboardHeight",290),f=e.getBoolean("scrollAssist",!0),p=e.getBoolean("hideCaretOnScroll",i),w=e.getBoolean("inputBlurring",i),y=e.getBoolean("scrollPadding",!0),g=Array.from(o.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,S=new WeakMap,L=await r.getResizeMode(),x=async e=>{await new Promise((t=>d(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),i=n(e),r=i?null:e.closest("ion-footer");if(o){if(i&&p&&!h.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{var o;(o=t)===o.getRootNode().activeElement&&u(e,t,n)},i=()=>u(e,t,!1),r=()=>o(!0),d=()=>o(!1);return s(n,"ionScrollStart",r),s(n,"ionScrollEnd",d),t.addEventListener("blur",i),()=>{a(n,"ionScrollStart",r),a(n,"ionScrollEnd",d),t.removeEventListener("blur",i)}})(e,o,i);h.set(e,t)}if("date"!==o.type&&"datetime-local"!==o.type&&(i||r)&&f&&!S.has(e)){const t=((e,t,n,o,i,r,s,a=!1)=>{const d=r&&(void 0===s||s.mode===l.None),c=async()=>{t.hasAttribute(b)?t.removeAttribute(b):E(e,t,n,o,i,d,a)};return e.addEventListener("focusin",c,!0),()=>{e.removeEventListener("focusin",c,!0)}})(e,o,i,r,m,y,L,c);S.set(e,t)}}};w&&(()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},r=o=>{if(t)return void(t=!1);const i=n.activeElement;if(!i)return;if(i.matches(v))return;const r=o.target;r!==i&&(r.matches(v)||r.closest(v)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};s(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",r,!1)})();for(const n of g)x(n);o.addEventListener("ionInputDidLoad",(e=>{x(e.detail)})),o.addEventListener("ionInputDidUnload",(e=>{(e=>{if(p){const t=h.get(e);t&&t(),h.delete(e)}if(f){const t=S.get(e);t&&t(),S.delete(e)}})(e.detail)}))}))}}}));