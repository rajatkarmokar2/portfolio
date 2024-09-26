import{c as s,j as e,C as i,N as l,r as n,H as c,O as d}from"./index-e28NVFnt.js";/**
 * @license @tabler/icons-react v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var h=s("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var p=s("outline","brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var m=s("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var x=s("outline","phone","IconPhone",[["path",{d:"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",key:"svg-0"}]]);const k=[{type:"Phone",href:"tel:+919930339479",text:"+91 99303 39479",icon:x},{type:"Email",href:"mailto:rajatkarmokar2@gmail.com",text:"rajatkarmokar2@gmail.com",icon:m},{type:"LinkedIn",href:"https://www.linkedin.com/in/rajat-karmokar-20a462221",text:"https://www.linkedin.com/in/rajat-karmokar-20a462221",icon:p}],v=()=>e.jsx("footer",{className:"py-6 border-t border-dashed border-gray-400",children:e.jsx(i,{children:e.jsx("div",{className:"space-y-10",children:e.jsxs("div",{className:"flex justify-between gap-6 items-center flex-wrap",children:[e.jsx("div",{className:"flex gap-x-6 gap-y-4 items-center justify-center sm:justify-start flex-grow flex-wrap ",children:k.map((a,t)=>e.jsx("div",{children:e.jsx(l,{target:"_blank",to:a.href,children:e.jsx("div",{className:"flex items-center gap-2 break-words",children:e.jsx("span",{className:"rounded-full border size-10 flex",children:e.jsx(a.icon,{className:"size-5 m-auto"})})})})},t))}),e.jsx("div",{className:"text-center sm:text-end flex-grow text-sm text-nowrap",children:"Made with ❤️ by Rajat."})]})})})}),f=()=>{const[a,t]=n.useState(!1);n.useEffect(()=>{const r=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx("button",{className:`fixed bottom-4 right-4 z-50 transition-opacity size-9 rounded-full bg-darkblue dark:bg-white shadow-lg flex items-center justify-center ${a?"opacity-100":"opacity-0"}`,onClick:o,children:e.jsx(h,{className:" dark:stroke-darkblue stroke-white"})})},g=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx("main",{children:e.jsx(d,{})}),e.jsx(v,{}),e.jsx(f,{})]});export{g as default};
