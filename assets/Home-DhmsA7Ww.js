import{c as v,j as e,C as o,m as a,L as p,r as m}from"./index-e28NVFnt.js";import{I as j,a as b,b as g,c as y,d as w,e as N,f,g as k,p as I,H as S}from"./Helmet-DunKNfG5.js";import{S as B}from"./SectionH1-CnMyhnzl.js";import{P as H}from"./ProjectCard-D6zx52vj.js";/**
 * @license @tabler/icons-react v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R=v("outline","brand-nodejs","IconBrandNodejs",[["path",{d:"M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0",key:"svg-0"}],["path",{d:"M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5",key:"svg-1"}]]);const u=[{name:"JavaScript",icon:j,color:"yellow",level:70},{name:"HTML",icon:b,color:"red",level:90},{name:"CSS",icon:g,color:"blue",level:90},{name:"React Js",icon:y,color:"skyblue",level:80},{name:"React Native",icon:w,color:"skyblue",level:50},{name:"Next.js",icon:N,color:"black",level:70},{name:"Node.js",icon:R,color:"green",level:60},{name:"Tailwind",icon:f,color:"lightblue",level:90},{name:"Bootstrap",icon:k,color:"blue",level:90}],C={primary:"bg-darkblue text-white dark:text-darkblue dark:bg-white",gradient:"bg-gradient-to-tr from-violet-800 to-yellow-500 text-white"},x=({component:s=n=>e.jsx("button",{...n}),className:t,varient:l="primary",children:c,...d})=>{let n=s;return e.jsx(n,{...d,className:`inline-block px-4 py-2 font-medium rounded-lg cursor-pointer hover:scale-105 transition-all duration-200 ${C[l]} ${t} `,children:c})},V=()=>e.jsx("section",{className:"relative",children:e.jsx(o,{children:e.jsxs("div",{className:"min-h-max h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-4 gap-y-10 py-32",children:[e.jsx("div",{className:"",children:e.jsxs("div",{className:"text-center lg:text-start space-y-3 ",children:[e.jsx(a.div,{variants:{hidden:{opacity:0,y:-100},visible:{opacity:1,y:0}},initial:"hidden",animate:"visible",transition:{type:"just",duration:.5,delay:.6},viewport:{once:!0},children:e.jsxs("div",{className:" bg-grad ient-text animate-gr adient-text bg-clip-text text-tra nsparent",children:[e.jsxs("p",{className:"text-[clamp(36px,5vw,56px)] leading-tight",children:["HEY! ",e.jsx("b",{className:"font-bold",children:"I'm Rajat,"})]}),e.jsxs("p",{className:"text-[clamp(44px,5vw,64px)] leading-tight",children:[e.jsx("b",{className:"font-bold",children:"Website"})," Developer"]})]})}),e.jsx(a.div,{className:"lg:w-[400px]",variants:{hidden:{opacity:0},visible:{opacity:1}},initial:"hidden",animate:"visible",transition:{type:"just",duration:.5,delay:.8},viewport:{once:!0},children:e.jsx("p",{children:"Create your Design live with my personal touch of Web development skills."})}),e.jsx(a.div,{variants:{hidden:{opacity:0,y:10},visible:{opacity:1,y:0}},initial:"hidden",animate:"visible",transition:{type:"just",duration:.5,delay:1.5},viewport:{once:!0},children:e.jsx(x,{className:"mt-3",component:p,target:"_blank",to:"https://drive.google.com/file/d/1iob69RQ-uCG9l--i3hnBFAz8cNwa78eL/view?usp=sharing",children:"Download CV"})})]})}),e.jsx("div",{className:"relative m-auto",children:e.jsx(a.div,{variants:{hidden:{y:100,opacity:0},visible:{y:0,opacity:1}},initial:"hidden",animate:"visible",transition:{type:"just",duration:.5,delay:1},viewport:{once:!0},children:e.jsx("img",{className:"size-[300px] transition-all duration-1000 drop-shadow-2xl",src:"assets/images/profile/profile-pic.png",alt:""})})})]})})}),z=s=>{if(!Array.isArray(s))return[];let t=JSON.parse(JSON.stringify(s));for(let l=0;l<t.length;l++)t.shift(t.splice(Math.floor(Math.random()*t.length),1));return t},M=()=>{const s=z(I).slice(0,3);return e.jsxs(o,{children:[e.jsx("div",{className:"text-center",children:e.jsx(B,{children:"Projects"})}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:s.map((t,l)=>e.jsx(a.div,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:[0,1]},transition:{type:"just",duration:1,delay:l/5},viewport:{once:!0},children:e.jsx(H,{...t})},l))}),e.jsx("div",{className:"text-center mt-6",children:e.jsx(a.div,{initial:{y:10,opacity:0},whileInView:{y:0,opacity:1},transition:{type:"just",duration:1,delay:.8},viewport:{once:!0},children:e.jsx(x,{component:p,to:"/projects",children:"View All"})})})]})},q=()=>{const[s,t]=m.useState(0),[l,c]=m.useState(0),d="calc(var(--width)/2)",n=.005;return m.useEffect(()=>{const r=setTimeout(()=>{t(d)},2e3);let i=setInterval(()=>{c(h=>h+n)},16);return()=>{clearInterval(i),clearTimeout(r)}},[n]),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900 overflow-hidden py-6 lg:py-0",children:e.jsx(o,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[e.jsx("div",{children:e.jsxs(a.div,{className:"relative",initial:{scale:.5,opacity:0},whileInView:{scale:1,opacity:1},transition:{type:"just",duration:1,delay:.5},viewport:{once:!0},children:[e.jsxs("div",{className:"absolute inset-0 flex justify-center items-center ",children:[e.jsx(a.div,{initial:{scale:0},animate:{scale:[1,1.05,1]},transition:{delay:1.3,repeat:1/0,duration:2,type:"spring"},className:"absolute h-[180%] aspect-square bg-blue-100 dark:bg-blue-800 mx-auto rounded-full"}),e.jsx(a.div,{initial:{scale:0},animate:{scale:[1,1.05,1]},transition:{delay:1.2,repeat:1/0,duration:2,type:"spring"},className:"absolute h-[160%] aspect-square bg-blue-200 dark:bg-blue-700 mx-auto rounded-full"}),e.jsx(a.div,{initial:{scale:0},animate:{scale:[1,1.05,1]},transition:{delay:1.1,repeat:1/0,duration:2,type:"spring"},className:"absolute h-[140%] aspect-square bg-blue-300 dark:bg-blue-600 mx-auto rounded-full"}),e.jsx(a.div,{initial:{scale:0},animate:{scale:[1,1.05,1]},transition:{delay:1,repeat:1/0,duration:2,type:"spring"},className:"absolute h-[120%] aspect-square bg-blue-400 dark:bg-blue-500 mx-auto rounded-full"}),e.jsx(a.div,{className:"absolute h-[100%] transition-all duration-300 scale-100 gro up-hover:scale-[1.0] aspect-square bg-blue-500 dark:bg-white mx-auto rounded-full"})]}),e.jsx("div",{className:"py-14",children:e.jsxs("div",{className:"p-4 flex justify-center items-center relative aspect-square w-[var(--width)] mx-auto overflow-visible rounded-full",style:{"--width":"clamp(200px,30vw,400px)"},children:[e.jsx("div",{className:`absolute size-full rounded-full grid place-items-center shadow-lg text-6xl font-semibold bg-white dark:bg-dark text-dark dark:text-white ${s?"scale-100":"scale-0"}`,children:"Skills"}),u.map((r,i)=>e.jsx("div",{className:"absolute flex items-center justify-center",children:e.jsx("div",{className:"absolute will-change-transform transition-transform duration-100 peer z-10",style:{"--index":i,"--color":r.color,"--radius":s,"--rotate":i+l,"--angle":`calc(var(--rotate)*${360/u.length}*1deg)`,"--x":"calc(cos(var(--angle))*var(--radius))","--y":"calc(sin(var(--angle))*var(--radius))",transform:"translateX(var(--x)) translateY(var(--y))"},children:e.jsx("div",{className:"!size-14 bg-white dark:bg-dark grid place-items-center transition-all cursor- pointer lg:!size-20 rounded-full hover :scale-150",children:e.jsx(r.icon,{stroke:1,className:"size-2/3 stroke-dark dark:stroke-white transition-all !duration-700"})})},i)},i))]})})]})}),e.jsx(a.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{type:"just",duration:1,delay:1.5},viewport:{once:!0},className:" sm:m-auto relative bg-white dark:bg-darkblue rounded-xl p-5 shadow-lg dark:shadow-slate-900",children:e.jsx("table",{children:e.jsx("tbody",{children:u.map((r,i)=>e.jsxs(a.tr,{initial:{opacity:0},whileInView:{opacity:1},transition:{type:"just",duration:1,delay:i/10+1},viewport:{once:!0},children:[e.jsx("td",{className:" text-sm md:text-base text-nowrap font-medium py-1 pe-5",children:r.name}),e.jsx("td",{className:"text-xl font-medium w-full",children:e.jsx("div",{className:"sm:w-[200px] rounded-md overflow-hidden h-2 bg-dark dark:bg-white !bg-opacity-20",children:e.jsx(a.div,{viewport:{once:!0},whileInView:{width:[0,r.level+"%"]},transition:{type:"just",duration:1,delay:i/10+2},className:"h-full bg-dark dark:bg-white"})})})]},i))})})})]})})})},A=()=>e.jsx("div",{className:"pt-20",children:e.jsx(o,{children:e.jsxs("div",{className:"mx-auto lg:max-w-2xl ",children:[e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"About Me"})}),e.jsxs("p",{className:"indent-10 mb-6 text-lg leading-relaxed",children:["I am a ",e.jsx("b",{children:"Senior Frontend Developer"})," with ",e.jsx("b",{children:"3 years"})," of experience in Software Development. My expertise lies in modern JavaScript libraries like React.js, Next.js, and Node.js. I am passionate about learning new technologies and applying my skills to build innovative, real-world products."]}),e.jsx("div",{className:"text-center"})]})})}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx("title",{children:"Home - Rajat Karmokar"})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 h-full w-full bg-blue-200 opacity-15",children:e.jsx("img",{className:"block h-full mx-auto object-contain",src:"assets/images/29169113_7520071.jpg",alt:""})}),e.jsx(V,{})]}),e.jsxs("div",{className:"min-h-screen space-y-20 pb-20",children:[e.jsx(A,{}),e.jsx(q,{}),e.jsx(M,{})]})]});export{E as default};
