import{c as i,r as t,j as e}from"./index-3uGikSrC.js";/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M5 12h14",key:"1ays0h"}]],d=i("minus",u);/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],_=i("plus",x),m="_frame_1xxh4_1",p="_title_1xxh4_8",j="_content_1xxh4_34",s={frame:m,"title-bar":"_title-bar_1xxh4_8",title:p,content:j,"children-container":"_children-container_1xxh4_40"},N=({title:o,children:f,normalTitleFont:a=!1})=>{const[n,h]=t.useState(!1),c=t.useRef(null),l=t.useRef(null),r=t.useRef(null);return t.useEffect(()=>{r.current&&a&&(r.current.style.fontSize="1rem",r.current.style.fontWeight="400")},[a]),t.useEffect(()=>{c.current&&l.current&&(n?c.current.style.height=`${l.current.scrollHeight}px`:c.current.style.height="0")},[n]),e.jsxs("div",{className:s.frame,children:[e.jsxs("div",{className:s["title-bar"],onClick:()=>h(!n),children:[e.jsx("span",{ref:r,className:s.title,children:o}),n?e.jsx(d,{}):e.jsx(_,{})]}),e.jsx("div",{ref:c,className:s.content,children:e.jsx("div",{ref:l,className:s["children-container"],children:f})})]})};export{N as default};
