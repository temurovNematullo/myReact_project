"use strict";(self.webpackChunkmyreact_app=self.webpackChunkmyreact_app||[]).push([[215],{1215:(s,e,a)=>{a.r(e),a.d(e,{default:()=>m});var n=a(5043),t=a(3003),l=a(3465),r=a(8228),c=a(1522),o=a(1675),i=a(579);const d=s=>{let{user:e}=s;const a=(0,t.wA)(),n=(0,t.d4)((s=>s.UserPage.followingInProgress));return(0,i.jsxs)("div",{className:c.A.UsersInfo,children:[(0,i.jsxs)("div",{className:c.A.userInfo,children:[(0,i.jsx)(o.k2,{to:`/main/${e.id}`,children:(0,i.jsx)("img",{className:c.A.userImg,src:null!==e.photos.small?e.photos.small:r,alt:e.name})}),(0,i.jsx)("button",{disabled:n.some((s=>s===e.id)),className:c.A.userFollowButton,onClick:()=>{a((0,l.mH)(e))},children:e.followed?"Unfollow":"Follow"})]}),(0,i.jsxs)("div",{className:c.A.userLocationList,children:[(0,i.jsxs)("div",{className:c.A.userInfoText,children:[(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:e.name})}),(0,i.jsx)("p",{className:c.A.statustext,children:e.status})]}),(0,i.jsxs)("div",{className:c.A.userInfoText,children:[(0,i.jsx)("p",{children:e.country||"Country not "}),(0,i.jsx)("p",{children:e.location||"Location not "})]})]})]})},u=s=>{let{currentPage:e,totalPages:a,onPageChange:n}=s;return(0,i.jsxs)("div",{className:c.A.pagination,children:[(0,i.jsx)("button",{className:c.A.paginButton,onClick:()=>n(e-1),disabled:1===e,children:"\xab"}),(()=>{const s=[];s.push(1),e>4&&s.push("...");const n=Math.max(2,e-3),t=Math.min(a-1,e+3);for(let e=n;e<=t;e++)s.push(e);return e<a-3&&s.push("..."),a>1&&s.push(a),s})().map(((s,a)=>(0,i.jsx)("button",{onClick:()=>"number"===typeof s&&n(s),className:e===s?c.A.activePage:c.A.disabledPage,disabled:"number"!==typeof s,children:s},a))),(0,i.jsx)("button",{className:c.A.paginButton,onClick:()=>n(e+1),disabled:e===a,children:"\xbb"})]})};var h=a(8895);function m(){const s=(0,t.d4)((s=>s.UserPage.userData)),e=(0,t.d4)((s=>s.UserPage.currentPage)),a=(0,t.d4)((s=>s.UserPage.totalUsersCount)),r=(0,t.d4)((s=>s.UserPage.pageSize)),c=(0,t.d4)((s=>s.UserPage.isFetch)),o=(0,t.wA)();(0,n.useEffect)((()=>{o((0,l.lo)(e,r))}),[e,r,o]);return(0,i.jsxs)("div",{children:[c?(0,i.jsx)(h.A,{}):null,s.map((s=>(0,i.jsx)(d,{user:s},s.id))),(0,i.jsx)(u,{currentPage:e,totalPages:Math.ceil(a/r),onPageChange:s=>{s>0&&s<=Math.ceil(a/r)&&o((0,l.Tm)(s))}})]})}},8228:(s,e,a)=>{s.exports=a.p+"static/media/samurai.34ca7aafbc16c3cca061.png"}}]);
//# sourceMappingURL=215.a0ddbcde.chunk.js.map