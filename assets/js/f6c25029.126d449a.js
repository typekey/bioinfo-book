"use strict";(self.webpackChunkbioinfo_book=self.webpackChunkbioinfo_book||[]).push([[8955],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>h});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),N=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=N(a.components);return s.createElement(l.Provider,{value:e},a.children)},k="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},o=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(t),o=n,h=k["".concat(l,".").concat(o)]||k[o]||c[o]||m;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=o;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[k]="string"==typeof a?a:n,p[1]=r;for(var N=2;N<m;N++)p[N]=t[N];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}o.displayName="MDXCreateElement"},5432:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>r,toc:()=>N});var s=t(7462),n=(t(7294),t(3905));const m={},p="\u903b\u8f91\u56de\u5f52",r={unversionedId:"statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u903b\u8f91\u56de\u5f52",id:"statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u903b\u8f91\u56de\u5f52",title:"\u903b\u8f91\u56de\u5f52",description:"\u903b\u8f91\u56de\u5f52 (Logistic Regression)\u662f\u4e00\u79cd\u7528\u4e8e\u5206\u7c7b\u95ee\u9898\u7684\u7edf\u8ba1\u5b66\u4e60\u65b9\u6cd5\u3002\u5b83\u7684\u57fa\u672c\u601d\u60f3\u662f\u5c06\u81ea\u53d8\u91cf\u548c\u56e0\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u5efa\u6a21\u6210\u4e00\u4e2a\u6982\u7387\u51fd\u6570\uff0c\u7136\u540e\u901a\u8fc7\u5bf9\u8be5\u51fd\u6570\u8fdb\u884c\u53d8\u6362\u6765\u5f97\u5230\u5206\u7c7b\u7ed3\u679c\u3002\u5728\u4e8c\u5206\u7c7b\u95ee\u9898\u4e2d\uff0c\u903b\u8f91\u56de\u5f52\u901a\u5e38\u88ab\u7528\u6765\u9884\u6d4b\u67d0\u4e2a\u6837\u672c\u5c5e\u4e8e\u54ea\u4e00\u7c7b\uff0c\u4f8b\u5982\u5728\u533b\u5b66\u8bca\u65ad\u4e2d\u9884\u6d4b\u60a3\u8005\u662f\u5426\u60a3\u6709\u67d0\u79cd\u75be\u75c5\u6216\u8005\u516c\u53f8\u62db\u8058\u4e2d\u9884\u6d4b\u5e94\u8058\u8005\u662f\u5426\u5408\u9002\u7b49\u7b49\u3002",source:"@site/docs/statistics/06. \u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u903b\u8f91\u56de\u5f52.md",sourceDirName:"statistics/06. \u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790",slug:"/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u903b\u8f91\u56de\u5f52",permalink:"/bioinfo-book/docs/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u903b\u8f91\u56de\u5f52",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"statisticsSidebar",previous:{title:"\u7b80\u5355\u7ebf\u6027\u56de\u5f52",permalink:"/bioinfo-book/docs/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u7b80\u5355\u7ebf\u6027\u56de\u5f52"},next:{title:"\u975e\u7ebf\u6027\u56de\u5f52",permalink:"/bioinfo-book/docs/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u975e\u7ebf\u6027\u56de\u5f52"}},l={},N=[{value:"\u903b\u8f91\u56de\u5f52\u7684\u539f\u7406",id:"\u903b\u8f91\u56de\u5f52\u7684\u539f\u7406",level:2},{value:"\u903b\u8f91\u56de\u5f52\u7684\u5e94\u7528",id:"\u903b\u8f91\u56de\u5f52\u7684\u5e94\u7528",level:2},{value:"\u903b\u8f91\u56de\u5f52\u7684\u5b9e\u73b0",id:"\u903b\u8f91\u56de\u5f52\u7684\u5b9e\u73b0",level:2}],i={toc:N},k="wrapper";function c(a){let{components:e,...t}=a;return(0,n.kt)(k,(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u903b\u8f91\u56de\u5f52"},"\u903b\u8f91\u56de\u5f52"),(0,n.kt)("p",null,"\u903b\u8f91\u56de\u5f52 (Logistic Regression)\u662f\u4e00\u79cd\u7528\u4e8e\u5206\u7c7b\u95ee\u9898\u7684\u7edf\u8ba1\u5b66\u4e60\u65b9\u6cd5\u3002\u5b83\u7684\u57fa\u672c\u601d\u60f3\u662f\u5c06\u81ea\u53d8\u91cf\u548c\u56e0\u53d8\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u5efa\u6a21\u6210\u4e00\u4e2a\u6982\u7387\u51fd\u6570\uff0c\u7136\u540e\u901a\u8fc7\u5bf9\u8be5\u51fd\u6570\u8fdb\u884c\u53d8\u6362\u6765\u5f97\u5230\u5206\u7c7b\u7ed3\u679c\u3002\u5728\u4e8c\u5206\u7c7b\u95ee\u9898\u4e2d\uff0c\u903b\u8f91\u56de\u5f52\u901a\u5e38\u88ab\u7528\u6765\u9884\u6d4b\u67d0\u4e2a\u6837\u672c\u5c5e\u4e8e\u54ea\u4e00\u7c7b\uff0c\u4f8b\u5982\u5728\u533b\u5b66\u8bca\u65ad\u4e2d\u9884\u6d4b\u60a3\u8005\u662f\u5426\u60a3\u6709\u67d0\u79cd\u75be\u75c5\u6216\u8005\u516c\u53f8\u62db\u8058\u4e2d\u9884\u6d4b\u5e94\u8058\u8005\u662f\u5426\u5408\u9002\u7b49\u7b49\u3002"),(0,n.kt)("h2",{id:"\u903b\u8f91\u56de\u5f52\u7684\u539f\u7406"},"\u903b\u8f91\u56de\u5f52\u7684\u539f\u7406"),(0,n.kt)("p",null,"\u903b\u8f91\u56de\u5f52\u662f\u4e00\u4e2a\u7ebf\u6027\u6a21\u578b\uff0c\u5b83\u7684\u5206\u7c7b\u7ed3\u679c\u662f\u57fa\u4e8e\u4e00\u4e2a\u80fd\u5c06\u81ea\u53d8\u91cf\u6620\u5c04\u5230\u6982\u7387\u503c\u7684\u51fd\u6570\u8fdb\u884c\u8f6c\u5316\u5f97\u5230\u7684\u3002\u8fd9\u4e2a\u51fd\u6570\u88ab\u79f0\u4e3a\u903b\u8f91\u51fd\u6570\u6216\u8005sigmoid\u51fd\u6570\uff0c\u5b83\u7684\u8868\u8fbe\u5f0f\u4e3a\uff1a\n",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"e"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"z")))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"g(z) = \\frac{1}{1 + e^{-z}}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2484em",verticalAlign:"-0.4033em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7027em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.786em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.04398em"}},"z")))))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4033em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"\n\u5176\u4e2d\uff0cz\u662f\u4e00\u4e2a\u7ebf\u6027\u51fd\u6570\uff0c\u5b83\u7684\u8868\u8fbe\u5f0f\u4e3a\uff1a\n",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"\u03b8"),(0,n.kt)("mi",{parentName:"msup"},"T")),(0,n.kt)("mi",{parentName:"mrow"},"X"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mn",{parentName:"msub"},"0")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mn",{parentName:"msub"},"2")),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mi",{parentName:"msub"},"n")),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z = \\theta^TX = \\theta_0 + \\theta_1x_1 + \\theta_2x_2 + ... +\\theta_nx_n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8413em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8413em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"T")))))))),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"..."),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\n\u5176\u4e2d\uff0cX\u662fm\u4e2a\u6837\u672c\u7684\u81ea\u53d8\u91cf\u77e9\u9635\uff0c",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"\u03b8")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\theta")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"))))),"\u662fn+1\u4e2a\u53c2\u6570\u503c\u7684\u5411\u91cf\uff0c\u5176\u4e2d",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mn",{parentName:"msub"},"0"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\theta_0")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\u662f\u622a\u8ddd\u53c2\u6570\uff0c",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mn",{parentName:"msub"},"2")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"\u03b8"),(0,n.kt)("mi",{parentName:"msub"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\theta_1, \\theta_2, ..., \\theta_n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"..."),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\u662f\u7279\u5f81\u7cfb\u6570\u3002"),(0,n.kt)("p",null,"\u4e0a\u8ff0\u516c\u5f0f\u5c06\u81ea\u53d8\u91cfX\u7684\u7ebf\u6027\u7ec4\u5408\u901a\u8fc7sigmoid\u51fd\u6570\u8fdb\u884c\u6620\u5c04\uff0c\u5f97\u5230\u8f93\u51fa\u7ed3\u679cg(z)\uff0c\u5176\u503c\u57df\u4e3a(0, 1)\u3002\u5728\u4e8c\u5206\u7c7b\u95ee\u9898\u4e2d\uff0c\u901a\u5e38\u5c06g(z)\u7684\u503c\u5927\u4e8e0.5\u7684\u6837\u672c\u5224\u4e3a\u6b63\u7c7b\uff0c\u53cd\u4e4b\u5224\u65ad\u4e3a\u8d1f\u7c7b\u3002\u8fd9\u4e2a\u9608\u503c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\u8fdb\u884c\u8c03\u6574\u3002"),(0,n.kt)("h2",{id:"\u903b\u8f91\u56de\u5f52\u7684\u5e94\u7528"},"\u903b\u8f91\u56de\u5f52\u7684\u5e94\u7528"),(0,n.kt)("p",null,"\u903b\u8f91\u56de\u5f52\u662f\u4e00\u79cd\u7b80\u5355\u800c\u6709\u6548\u7684\u5206\u7c7b\u7b97\u6cd5\uff0c\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5404\u79cd\u9886\u57df\u4e2d\u3002\u5176\u4e2d\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u533b\u5b66\u75be\u75c5\u8bca\u65ad\u3002\u4f8b\u5982\u6839\u636e\u67d0\u4eba\u7684\u5e74\u9f84\u3001\u6027\u522b\u3001\u8840\u538b\u3001\u4f53\u91cd\u7b49\u56e0\u7d20\uff0c\u9884\u6d4b\u4ed6\u662f\u5426\u60a3\u6709\u7cd6\u5c3f\u75c5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u91d1\u878d\u8bc8\u9a97\u68c0\u6d4b\u3002\u4f8b\u5982\u6839\u636e\u5ba2\u6237\u7684\u5386\u53f2\u4fe1\u7528\u8bb0\u5f55\uff0c\u9884\u6d4b\u5176\u662f\u5426\u5b58\u5728\u903e\u671f\u95ee\u9898\u6216\u8005\u6b3a\u8bc8\u884c\u4e3a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5546\u54c1\u63a8\u8350\u3002\u4f8b\u5982\u6839\u636e\u7528\u6237\u8fc7\u53bb\u7684\u8d2d\u4e70\u8bb0\u5f55\uff0c\u9884\u6d4b\u4ed6\u662f\u5426\u559c\u6b22\u67d0\u79cd\u4ea7\u54c1\u6216\u8005\u670d\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u80a1\u7968\u5e02\u573a\u9884\u6d4b\u3002\u4f8b\u5982\u6839\u636e\u516c\u53f8\u7684\u8425\u6536\u3001\u5229\u6da6\u3001\u6210\u672c\u7b49\u60c5\u51b5\uff0c\u9884\u6d4b\u5176\u672a\u6765\u7684\u80a1\u4ef7\u8d70\u52bf\u3002")),(0,n.kt)("h2",{id:"\u903b\u8f91\u56de\u5f52\u7684\u5b9e\u73b0"},"\u903b\u8f91\u56de\u5f52\u7684\u5b9e\u73b0"),(0,n.kt)("p",null,"\u5728python\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528sklearn\u5e93\u4e2d\u7684LogisticRegression\u7c7b\u6765\u5b9e\u73b0\u903b\u8f91\u56de\u5f52\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\n# \u52a0\u8f7diris\u6570\u636e\u96c6\niris = load_iris()\nX = iris.data[:, :2] # \u53d6\u524d\u4e24\u4e2a\u7279\u5f81\ny = iris.target\n\n# \u5212\u5206\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)\n\n# \u6784\u5efa\u903b\u8f91\u56de\u5f52\u6a21\u578b\nclf = LogisticRegression(random_state=0)\n\n# \u8bad\u7ec3\u6a21\u578b\nclf.fit(X_train, y_train)\n\n# \u9884\u6d4b\u6d4b\u8bd5\u96c6\ny_pred = clf.predict(X_test)\n\n# \u8f93\u51fa\u6a21\u578b\u51c6\u786e\u7387\nprint("Accuracy:", clf.score(X_test, y_test))\n')),(0,n.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528iris\u6570\u636e\u96c6\u6765\u6784\u5efa\u903b\u8f91\u56de\u5f52\u6a21\u578b\uff0c\u5e76\u4f7f\u7528train_test_split\u65b9\u6cd5\u5c06\u6570\u636e\u96c6\u5212\u5206\u4e3a\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u3002\u7136\u540e\u901a\u8fc7LogisticRegression\u7c7b\u6765\u8bad\u7ec3\u6a21\u578b\u5e76\u9884\u6d4b\u6d4b\u8bd5\u96c6\uff0c\u6700\u540e\u8f93\u51fa\u6a21\u578b\u7684\u51c6\u786e\u7387\u3002"))}c.isMDXComponent=!0}}]);