import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as s}from"./index.DhYZZe0J.js";function v({className:c=""}){const[t,h]=s.useState({width:0,height:0}),d=s.useRef(null);s.useEffect(()=>{const i=()=>{if(d.current){const{scrollHeight:r}=document.documentElement;h({width:window.innerWidth,height:Math.max(window.innerHeight,r)})}};return window.addEventListener("resize",i),window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i)}},[]);const l=t.width<640?20:t.width<768?30:t.width<1024?45:88,n=Math.ceil(t.width/l),o=Math.ceil(t.height/l);return e.jsxs("div",{ref:d,className:`absolute flex h-full w-full justify-center overflow-hidden bg-white dark:bg-black ${c}`,style:{height:`${t.height}px`,zIndex:0},children:[e.jsxs("div",{className:"absolute left-0 top-0 h-full w-1/2",children:[e.jsx("div",{className:"absolute inset-0 z-50 bg-gradient-to-tl from-white from-50% via-transparent via-90% to-transparent to-100% dark:from-black"}),e.jsx("div",{className:"flex h-full w-full flex-col divide-y divide-black/25 border-l border-t border-white dark:divide-white/25 dark:border-black",children:Array.from({length:o}).map((i,r)=>e.jsx("div",{className:"relative flex w-full divide-x divide-black/25 dark:divide-white/25",style:{height:`${l}px`},children:Array.from({length:Math.ceil(n/2)}).map((f,a)=>e.jsx("div",{className:"relative w-full bg-white dark:bg-black",children:e.jsx("div",{className:"absolute inset-0.5 bg-white dark:bg-black"})},a))},r))})]}),e.jsxs("div",{className:"absolute right-0 top-0 h-full w-1/2",children:[e.jsx("div",{className:"absolute inset-0 z-50 bg-gradient-to-tr from-white from-50% via-transparent via-90% to-transparent to-100% dark:from-black"}),e.jsx("div",{className:"flex h-full w-full flex-col divide-y divide-black/25 border-l border-t border-white dark:divide-white/25 dark:border-black",children:Array.from({length:o}).map((i,r)=>e.jsx("div",{className:"relative flex w-full divide-x divide-black/25 dark:divide-white/25",style:{height:`${l}px`},children:Array.from({length:Math.ceil(n/2)}).map((f,a)=>e.jsx("div",{className:"relative w-full bg-white dark:bg-black",children:e.jsx("div",{className:"absolute inset-0.5 bg-white dark:bg-black"})},a))},r))})]})]})}export{v as default};
