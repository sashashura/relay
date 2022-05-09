(self.webpackChunk=self.webpackChunk||[]).push([[80915],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=o,g=p["".concat(i,".").concat(c)]||p[c]||m[c]||a;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10266:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>c});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],l={id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},s=void 0,d={unversionedId:"relay-debugging",id:"version-v10.0.0/relay-debugging",isDocsHomePage:!1,title:"Debugging",description:"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records.",source:"@site/versioned_docs/version-v10.0.0/Modern-Debugging.md",sourceDirName:".",slug:"/relay-debugging",permalink:"/docs/v10.0.0/relay-debugging",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.0/Modern-Debugging.md",tags:[],version:"v10.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1652120950,formattedLastUpdatedAt:"5/9/2022",frontMatter:{id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},sidebar:"version-v10.0.0/docs",previous:{title:"Routing",permalink:"/docs/v10.0.0/routing"},next:{title:"GraphQL Server Specification",permalink:"/docs/v10.0.0/graphql-server-specification"}},p=[{value:"Strategies",id:"strategies",children:[],level:2},{value:"Tools",id:"tools",children:[],level:2}],u={toc:p};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records."),(0,a.mdx)("h2",{id:"strategies"},"Strategies"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Given:")," You've properly setup your schema on the backend and React on the frontend. You've read through the documents but can't seem to identify what's wrong with your code. You've even done a number of searches but can't find the answer you're looking for."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"A few questions to ask yourself:")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"Is my ",(0,a.mdx)("a",{parentName:"em",href:"/docs/v10.0.0/installation-and-setup#set-up-relay-compiler"},"compilation")," up-to-date?")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"Is my query valid?")," You can test this on your GraphiQL endpoint.")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"If so:")),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Put your entire query at the top-level (your ",(0,a.mdx)("inlineCode",{parentName:"li"},"QueryRenderer"),") and comment out all fragment containers. Pass the data through your component hierarchy down to the components that were using fragments."),(0,a.mdx)("li",{parentName:"ol"},"If your app isn't rendering properly, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"console.log(props);")," for every component to see the props you are actually passing."),(0,a.mdx)("li",{parentName:"ol"},"Once your app is rendering, uncomment the deepest fragment container and add that fragment back to your top-level query. Everything should still render. If not, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"console.log(props);")," again."),(0,a.mdx)("li",{parentName:"ol"},"Continue uncommenting fragments and confirming that your app renders until your top-level query is as desired."),(0,a.mdx)("li",{parentName:"ol"},"If this still fails, come back to your code later and try debugging with a fresh mind. Additionally, you can ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/relay/issues/new"},"post an issue")," and someone should get back to you hopefully within a few days.")),(0,a.mdx)("h2",{id:"tools"},"Tools"),(0,a.mdx)("p",null,"Relay DevTools is tool designed to help developers inspect their Relay state and understand how store changes overtime. Relay DevTools ships in two ways:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/relay-developer-tools/ncedobpgnmkhcmnnkcimnobpfepidadl"},"Chrome Extension")," creates a Relay tab in the developer tools interface for debugging apps in Chrome")),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Store Explorer",src:n(1652).Z}),"\n",(0,a.mdx)("img",{alt:"Mutations View",src:n(5962).Z})))}c.isMDXComponent=!0},5962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/mutations-view-updated-7276d604978d51cdc3235bd101de9d20.png"},1652:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/store-explorer-updated-430481ab45a7a12bdf16aab730f6c27f.png"}}]);