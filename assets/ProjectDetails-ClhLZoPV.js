import{u as t,j as e,C as l,N as c}from"./index-B6o01zr0.js";import{p as d,H as n,S as o}from"./Helmet-C_sXo07J.js";import{H as x}from"./HeroH1-DIms1JY_.js";const h=()=>{const{projectId:a}=t(),s=d.find((r,i)=>r.title===a);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs("title",{children:["Projects - ",a," - Rajat Karmokar"]})}),e.jsxs(l,{children:[e.jsx("div",{className:"my-16",children:e.jsxs("div",{className:"flex gap-2 items-center flex-wrap",children:[e.jsx("div",{children:e.jsx(c,{to:"/projects",className:"font-bold text-dark transition-all dark:text-white !text-opacity-50 hover:!text-opacity-100",children:"Projects"})}),e.jsx("span",{children:">"}),e.jsx("div",{children:a})]})}),e.jsxs("div",{className:"space-y-16 my-16",children:[e.jsxs("div",{className:"text-center my-16",children:[e.jsx(x,{children:s.title}),e.jsx("p",{className:"mb-3 max-w-[40rem] mx-auto",children:s.description}),e.jsx("div",{className:"text-center flex justify-center gap-4 flex-wrap",children:s.technologies.map((r,i)=>e.jsxs("div",{className:"flex flex-col items-center group relative cursor-pointer",content:r.name,children:[e.jsx("div",{className:"size-14 rounded-full grid place-items-center bg-dark text-white dark:bg-white dark:text-dark",children:e.jsx(r.icon,{className:"size-1/2"})}),e.jsx("div",{className:"absolute bottom-0 font-bold scale-0 group-hover:scale-100 group-hover:translate-y-6 transition-all duration-500 text-nowrap",children:r.name})]}))})]}),e.jsx("div",{children:s.images.noPreview&&e.jsx("div",{children:e.jsx("img",{className:"aspect-video lg:aspect-[8/2] object-contain",isBlurred:!0,src:s.images.noPreview})})||e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-9 gap-2 lg:gap-6",children:[e.jsx("div",{className:"md:col-span-7",children:e.jsx("img",{className:"aspect-video w-full rounded-xl",isBlurred:!0,src:s.images.desktop})}),e.jsx("div",{className:"md:col-span-2 flex justify-center",children:e.jsx("img",{className:"w-1/2 md:w-full mx-auto rounded-xl",isBlurred:!0,src:s.images.mobile})})]})}),e.jsxs("div",{className:"text-center",children:[e.jsx(o,{children:"Roles"}),e.jsx("ul",{className:"divide-y border rounded-xl",children:s.details.map((r,i)=>e.jsx("li",{className:"py-4 list-none border-dashed",children:r}))})]})]})]})]})};export{h as default};
