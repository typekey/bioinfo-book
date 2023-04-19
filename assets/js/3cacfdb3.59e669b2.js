"use strict";(self.webpackChunkbioinfo_book=self.webpackChunkbioinfo_book||[]).push([[1164],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>h});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=l(t),k=s,h=c["".concat(i,".").concat(k)]||c[k]||N[k]||m;return t?n.createElement(h,r(r({ref:e},o),{},{components:t})):n.createElement(h,r({ref:e},o))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[c]="string"==typeof a?a:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9094:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const m={},r="\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b",p={unversionedId:"statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b",id:"statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b",title:"\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b",description:"\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b (Generalized Linear Models)\u662f\u4e00\u79cd\u7528\u4e8e\u5efa\u7acb\u4e00\u4e2a\u56e0\u53d8\u91cf\u4e0e\u4e00\u4e2a\u6216\u591a\u4e2a\u81ea\u53d8\u91cf\u4e4b\u95f4\u5173\u7cfb\u7684\u6570\u5b66\u6a21\u578b\u7684\u7edf\u8ba1\u5b66\u65b9\u6cd5\u3002\u5176\u53ef\u4ee5\u9002\u7528\u4e8e\u5355\u53d8\u91cf\u6216\u591a\u53d8\u91cf\u3001\u79bb\u6563\u578b\u6216\u8fde\u7eed\u578b\u7684\u6570\u636e\u5206\u6790\uff0c\u5e76\u4e14\u53ef\u4ee5\u5904\u7406\u6781\u4e0d\u5747\u8861\u7684\u6570\u636e\u96c6\uff0c\u5305\u62ec\u975e\u7ebf\u6027\u548c\u975e\u6b63\u6001\u5206\u5e03\u6570\u636e\u96c6\u3002\u8be5\u6a21\u578b\u7684\u57fa\u672c\u5f62\u5f0f\u4e3a$G(\\mu)=X\\beta$\uff0c\u5176\u4e2d$G$\u4e3a\u8fde\u63a5\u51fd\u6570\uff0c$\\mu$\u4e3a\u54cd\u5e94\u53d8\u91cf\uff08\u56e0\u53d8\u91cf\uff09\uff0c$X$\u4e3a\u81ea\u53d8\u91cf\u77e9\u9635\uff0c$\\beta$\u4e3a\u53c2\u6570\u5411\u91cf\u3002",source:"@site/docs/statistics/06. \u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b.md",sourceDirName:"statistics/06. \u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790",slug:"/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b",permalink:"/bioinfo-book/docs/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"statisticsSidebar",previous:{title:"\u591a\u5143\u7ebf\u6027\u56de\u5f52",permalink:"/bioinfo-book/docs/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u591a\u5143\u7ebf\u6027\u56de\u5f52"},next:{title:"\u65b9\u5dee\u5206\u6790",permalink:"/bioinfo-book/docs/statistics/\u56de\u5f52\u5206\u6790\u548c\u65b9\u5dee\u5206\u6790/\u65b9\u5dee\u5206\u6790"}},i={},l=[],o={toc:l},c="wrapper";function N(a){let{components:e,...t}=a;return(0,s.kt)(c,(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b"},"\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b"),(0,s.kt)("p",null,"\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b (Generalized Linear Models)\u662f\u4e00\u79cd\u7528\u4e8e\u5efa\u7acb\u4e00\u4e2a\u56e0\u53d8\u91cf\u4e0e\u4e00\u4e2a\u6216\u591a\u4e2a\u81ea\u53d8\u91cf\u4e4b\u95f4\u5173\u7cfb\u7684\u6570\u5b66\u6a21\u578b\u7684\u7edf\u8ba1\u5b66\u65b9\u6cd5\u3002\u5176\u53ef\u4ee5\u9002\u7528\u4e8e\u5355\u53d8\u91cf\u6216\u591a\u53d8\u91cf\u3001\u79bb\u6563\u578b\u6216\u8fde\u7eed\u578b\u7684\u6570\u636e\u5206\u6790\uff0c\u5e76\u4e14\u53ef\u4ee5\u5904\u7406\u6781\u4e0d\u5747\u8861\u7684\u6570\u636e\u96c6\uff0c\u5305\u62ec\u975e\u7ebf\u6027\u548c\u975e\u6b63\u6001\u5206\u5e03\u6570\u636e\u96c6\u3002\u8be5\u6a21\u578b\u7684\u57fa\u672c\u5f62\u5f0f\u4e3a",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"G"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"\u03bc"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"X"),(0,s.kt)("mi",{parentName:"mrow"},"\u03b2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G(\\mu)=X\\beta")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bc"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05278em"}},"X\u03b2"))))),"\uff0c\u5176\u4e2d",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"G")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"))))),"\u4e3a\u8fde\u63a5\u51fd\u6570\uff0c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03bc")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\mu")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bc"))))),"\u4e3a\u54cd\u5e94\u53d8\u91cf\uff08\u56e0\u53d8\u91cf\uff09\uff0c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"X")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"X")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"))))),"\u4e3a\u81ea\u53d8\u91cf\u77e9\u9635\uff0c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\beta")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05278em"}},"\u03b2"))))),"\u4e3a\u53c2\u6570\u5411\u91cf\u3002"),(0,s.kt)("p",null,"\u5728\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b\u4e2d\uff0c\u56e0\u53d8\u91cf\u53ef\u4ee5\u662f\u4e8c\u5143\u53d8\u91cf\u3001\u591a\u5143\u53d8\u91cf\u6216\u8fde\u7eed\u6027\u53d8\u91cf\u3002\u5b83\u4eec\u7684\u94fe\u63a5\u51fd\u6570\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\u4e4b\u4e00\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4e8c\u9879\u5f0f\u94fe\u63a5\uff1a\u7528\u4e8e\u4e8c\u5143\u54cd\u5e94\u53d8\u91cf\uff0c\u4f8b\u5982\u6210\u529f\u6b21\u6570\u548c\u5931\u8d25\u6b21\u6570\u7b49\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u6cca\u677e\u94fe\u63a5\uff1a\u7528\u4e8e\u8ba1\u6570\u6570\u636e\uff0c\u4f8b\u5982\u4e00\u4e2a\u6545\u969c\u8bbe\u5907\u7684\u6570\u91cf\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u6b63\u6001\u94fe\u63a5\uff1a\u7528\u4e8e\u8fde\u7eed\u6027\u6570\u636e\uff0c\u4f8b\u5982\u6c14\u6e29\u3001\u8eab\u9ad8\u7b49\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u94fe\u63a5\uff1a\u5305\u62ec\u4f3d\u739b\u51fd\u6570\u94fe\u63a5\u3001\u6807\u51c6\u94fe\u63a5\u7b49\u7b49\u3002")),(0,s.kt)("p",null,"\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b\u7684\u4e00\u4e2a\u91cd\u8981\u4f18\u70b9\u662f\u53ef\u4ee5\u8fdb\u884c\u7684\u9884\u6d4b\u548c\u63a8\u65ad\u8fc7\u7a0b\u3002\u901a\u8fc7\u4f7f\u7528\u8be5\u6a21\u578b\uff0c\u53ef\u4ee5\u8ba1\u7b97\u51fa\u7279\u5b9a\u53d8\u91cf\u7684\u6548\u5e94\uff0c\u5e76\u4f7f\u7528\u8be5\u4fe1\u606f\u9884\u6d4b\u5728\u672a\u6765\u6216\u5728\u4e0d\u540c\u6761\u4ef6\u4e0b\u7684\u54cd\u5e94\u53d8\u91cf\u503c\u3002\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u6700\u4f18\u7684\u53c2\u6570\u548c\u94fe\u63a5\u51fd\u6570\uff0c\u6765\u66f4\u597d\u5730\u62df\u5408\u6570\u636e\u548c\u9a8c\u8bc1\u63a8\u65ad\u3002"),(0,s.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u6f14\u793a\u4e00\u4e2a\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b\u7684\u4f8b\u5b50\u3002"),(0,s.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5bfc\u5165\u5fc5\u8981\u7684liberary\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd  \nimport numpy as np  \nimport matplotlib.pyplot as plt  \nimport seaborn as sns \nfrom scipy import stats \nfrom statsmodels.formula.api import glm \n")),(0,s.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u8bfb\u53d6\u6570\u636e\u96c6\u5e76\u8fdb\u884c\u6570\u636e\u5904\u7406\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"#\u8bfb\u53d6\u6570\u636e\u96c6\ndata = pd.read_csv('breast_cancer.csv')\n#\u5c06 M,B \u8f6c\u5316\u4e3a 1\uff0c0\ndata['diagnosis'] = data['diagnosis'].map({'M':1, 'B':0})\n#\u5220\u9664\u65e0\u6548\u7279\u5f81\ndata.drop(['id'],axis=1,inplace=True)\n#\u67e5\u770b\u524d 5 \u884c\u6570\u636e\ndata.head()\n")),(0,s.kt)("p",null,"\u63a5\u7740\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528seaborn\u5e93\u6765\u53ef\u89c6\u5316\u6570\u636e\u7684\u7279\u5f81\uff0c\u5e76\u6311\u9009\u51fa\u4e0e\u54cd\u5e94\u53d8\u91cf\u6700\u4e3a\u76f8\u5173\u7684\u51e0\u4e2a\u7279\u5f81\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"#\u53ef\u89c6\u5316\u7279\u5f81\uff0c\u67e5\u770b\u4e0e\u54cd\u5e94\u53d8\u91cf\u4e4b\u95f4\u7684\u76f8\u5173\u6027\nsns.pairplot(data, vars=['radius_mean', 'texture_mean', 'area_mean', 'fractal_dimension_mean'], hue='diagnosis', palette=\"husl\")\nplt.show()\n")),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u5fc5\u8981\u7684\u6570\u636e\u5206\u5272\u548c\u5206\u6790\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"#\u5c06\u6570\u636e\u96c6\u5206\u4e3a\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\ntrain, test = np.split(data.sample(frac=1), [int(.8*len(data))])\n#\u5efa\u7acb\u4e00\u4e2a\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b\uff0c\u5e76\u62df\u5408\u6570\u636e\nformula = 'diagnosis ~ radius_mean + texture_mean + area_mean + fractal_dimension_mean'\nmodel = glm(formula=formula, data=train, family=statsmodels.genmod.families.Binomial()).fit()\n#\u67e5\u770b\u6a21\u578b\u7684\u6458\u8981\nprint(model.summary())\n")),(0,s.kt)("p",null,"\u5728\u5206\u6790\u7ed3\u679c\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5173\u4e8e",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"D"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"v"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"e")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Deviance")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"De"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ian"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"))))),"\uff0c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mi",{parentName:"mrow"},"C")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"AIC")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"))))),"\u548c",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mi",{parentName:"mrow"},"C")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"BIC")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"))))),"\u7b49\u6307\u6807\u3002\u8fd9\u4e9b\u6307\u6807\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u8bc4\u4f30\u6a21\u578b\u62df\u5408\u548c\u6a21\u578b\u590d\u6742\u5ea6\u3002\u6a21\u578b\u7684\u53c2\u6570\u4f30\u8ba1\u4e5f\u5f88\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u4e86\u89e3\u54ea\u4e9b\u53d8\u91cf\u5bf9\u4e8e\u9884\u6d4b\u54cd\u5e94\u53d8\u91cf\u662f\u6700\u6709\u7528\u7684\u3002"),(0,s.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6d4b\u8bd5\u96c6\u6765\u8bc4\u4f30\u6a21\u578b\u7684\u6027\u80fd\uff0c\u5e76\u8f93\u51fa\u9884\u6d4b\u7ed3\u679c\u548c\u6df7\u6dc6\u77e9\u9635\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"#\u7528\u6d4b\u8bd5\u96c6\u8bc4\u4f30\u6a21\u578b\u5e76\u8f93\u51fa\u9884\u6d4b\u7ed3\u679c\npredictions = model.predict(test)\n#\u8ba1\u7b97\u9884\u6d4b\u7684\u9608\u503c\uff0c\u5e76\u5c06\u9884\u6d4b\u7684\u4e8c\u5143\u54cd\u5e94\u8fdb\u884c\u56db\u820d\u4e94\u5165\u53d6\u6574\nthreshold = predictions.mean()\npredicted_classes = (predictions >= threshold).astype(int)\n#\u6253\u5370\u5e76\u7ed8\u5236\u6df7\u6dc6\u77e9\u9635\nfrom sklearn.metrics import confusion_matrix\ncm = confusion_matrix(test['diagnosis'], predicted_classes)\nprint(cm)\nsns.heatmap(cm, annot=True, fmt='0.2f', cmap='Blues')\nplt.show()\n")),(0,s.kt)("p",null,"\u603b\u4e4b\uff0c\u5e7f\u4e49\u7ebf\u6027\u6a21\u578b\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u7edf\u8ba1\u5b66\u65b9\u6cd5\uff0c\u53ef\u4ee5\u9002\u7528\u4e8e\u5404\u79cd\u6570\u636e\u7c7b\u578b\u548c\u573a\u666f\uff0c\u7528\u4e8e\u9884\u6d4b\u548c\u63a8\u7406\u3002\u901a\u8fc7Python\u548c\u76f8\u5e94\u7684liberary\u53ef\u4ee5\u8f7b\u677e\u5efa\u7acb\u548c\u8bc4\u4f30\u8be5\u6a21\u578b\u3002"))}N.isMDXComponent=!0}}]);