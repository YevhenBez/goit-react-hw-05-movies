"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[453],{580:function(t,e,n){n.d(e,{Ai:function(){return l},Bt:function(){return v},Mc:function(){return p},wr:function(){return s},y:function(){return f}});var r=n(861),a=n(687),c=n.n(a),u=n(243),o="bb93938b285723bfd82d9b17341efab3",i="https://api.themoviedb.org/3/",s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/movie/").concat("week","?api_key=").concat(o,"&page=1"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},453:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(687),u=n.n(c),o=n(791),i=n(87),s=n(689),p=n(580),f=n(184);e.default=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],v=(0,i.lr)(),l=(0,a.Z)(v,2),m=l[0],h=l[1],d=m.get("eventname"),x=(0,s.TH)();(0,o.useEffect)((function(){if(""!==d&&null!==d){var t=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Ai)(e);case 3:n=t.sent,r=n.results,c(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();t(d)}}),[d]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;h({eventname:e.elements.eventname.value}),e.reset()},children:[(0,f.jsx)("input",{type:"text",name:"eventname"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:n.map((function(t){var e=t.title,n=t.id;return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(n),state:{from:x},children:e})},n)}))})]})}}}]);
//# sourceMappingURL=453.eb75b9c3.chunk.js.map