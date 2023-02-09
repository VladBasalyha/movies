"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[352],{5790:function(e,t,a){a.d(t,{Z:function(){return m}});a(2791);var r=a(1087),i=a(7689),n="Film_filmCard__DG+A+",s=a(184),o=function(e){var t=e.id,a=e.image,r=e.title;return(0,s.jsxs)("li",{className:n,children:[(0,s.jsx)("img",{src:a,alt:r}),(0,s.jsx)("p",{children:r})]},t)},l=a(491),c=a(7022),d=a(9743),m=function(e){var t=e.films,a=(0,i.TH)();return(0,s.jsx)(c.Z,{children:(0,s.jsx)(d.Z,{className:"justify-content-center p-3",xs:"auto",children:t.map((function(e){var t=e.id,i=e.poster_path,n=e.title;return(0,s.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:a},children:(0,s.jsx)(o,{image:i?"https://image.tmdb.org/t/p/w300"+i:l,title:n},t)},t)}))})})}},352:function(e,t,a){a.r(t);var r=a(9439),i=a(5790),n=a(2791),s=a(1087),o=a(7022),l=a(3360),c=a(2469),d=a(184);t.default=function(){var e,t=(0,n.useState)([]),a=(0,r.Z)(t,2),m=a[0],h=a[1],u=(0,s.lr)(),f=(0,r.Z)(u,2),A=f[0],v=f[1],p=null!==(e=A.get("movieName"))&&void 0!==e?e:"";(0,n.useEffect)((function(){""!==p&&fetch("https://api.themoviedb.org/3/search/movie?api_key=93580a7f0ca5f935ad0b81c9ee349049&language=en-US&query=".concat(p,"&page=1&include_adult=true")).then((function(e){return e.json()})).then((function(e){return h(e.results)}))}),[p]);return(0,d.jsxs)(o.Z,{children:[(0,d.jsx)("div",{children:(0,d.jsxs)("form",{className:"m-2",onSubmit:function(e){e.preventDefault();var t=e.currentTarget;t.elements.film.value!==p?""!==t.elements.film.value?v({movieName:t.elements.film.value}):alert("type something"):alert("you`ve already searched this")},children:[(0,d.jsx)("label",{htmlFor:"film",children:"Search Films"}),(0,d.jsx)("input",{type:"text",id:"film",name:"film"}),(0,d.jsx)(l.Z,{type:"submit",variant:"info",children:"Search"})]})}),(0,d.jsx)("div",{children:0===m.length?(0,d.jsx)(c.Z,{variant:"info",children:"No films weren`t found yet"}):(0,d.jsx)(i.Z,{films:m})})]})}},2469:function(e,t,a){var r=a(1413),i=a(5987),n=a(1694),s=a.n(n),o=a(2791),l=a(8580),c=a(9007),d=a(1691),m=a(162),h=a(2709),u=a(473),f=a(7472),A=a(6543),v=a(184),p=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Q=(0,f.Z)("h4");Q.displayName="DivStyledAsH4";var b=(0,A.Z)("alert-heading",{Component:Q}),Z=(0,A.Z)("alert-link",{Component:d.Z}),D={variant:"primary",show:!0,transition:h.Z,closeLabel:"Close alert"},M=o.forwardRef((function(e,t){var a=(0,l.Ch)(e,{show:"onClose"}),n=a.bsPrefix,o=a.show,d=a.closeLabel,f=a.closeVariant,A=a.className,Q=a.children,b=a.variant,Z=a.onClose,D=a.dismissible,M=a.transition,x=(0,i.Z)(a,p),k=(0,m.vE)(n,"alert"),H=(0,c.Z)((function(e){Z&&Z(!1,e)})),C=!0===M?h.Z:M,j=(0,v.jsxs)("div",(0,r.Z)((0,r.Z)({role:"alert"},C?void 0:x),{},{ref:t,className:s()(A,k,b&&"".concat(k,"-").concat(b),D&&"".concat(k,"-dismissible")),children:[D&&(0,v.jsx)(u.Z,{onClick:H,"aria-label":d,variant:f}),Q]}));return C?(0,v.jsx)(C,(0,r.Z)((0,r.Z)({unmountOnExit:!0},x),{},{ref:void 0,in:o,children:j})):o?j:null}));M.displayName="Alert",M.defaultProps=D,t.Z=Object.assign(M,{Link:Z,Heading:b})},9743:function(e,t,a){var r=a(1413),i=a(5987),n=a(1694),s=a.n(n),o=a(2791),l=a(162),c=a(184),d=["bsPrefix","className","as"],m=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,m=void 0===o?"div":o,h=(0,i.Z)(e,d),u=(0,l.vE)(a,"row"),f=(0,l.pi)(),A=(0,l.zG)(),v="".concat(u,"-cols"),p=[];return f.forEach((function(e){var t,a=h[e];delete h[e],t=null!=a&&"object"===typeof a?a.cols:a;var r=e!==A?"-".concat(e):"";null!=t&&p.push("".concat(v).concat(r,"-").concat(t))})),(0,c.jsx)(m,(0,r.Z)((0,r.Z)({ref:t},h),{},{className:s().apply(void 0,[n,u].concat(p))}))}));m.displayName="Row",t.Z=m},491:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=352.0e672c82.chunk.js.map