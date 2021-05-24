(self.webpackChunk=self.webpackChunk||[]).push([[62959],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||s[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78202:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>c,default:()=>d});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"api-cheatsheet",title:"API Cheatsheet",original_id:"api-cheatsheet"},l={unversionedId:"api-cheatsheet",id:"version-v4.0.0/api-cheatsheet",isDocsHomePage:!1,title:"API Cheatsheet",description:"A reference for translating between the Relay Classic and Relay Modern APIs.",source:"@site/versioned_docs/version-v4.0.0/Modern-APICheatsheet.md",sourceDirName:".",slug:"/api-cheatsheet",permalink:"/docs/v4.0.0/api-cheatsheet",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v4.0.0/Modern-APICheatsheet.md",version:"v4.0.0",lastUpdatedBy:"Dave McCabe",lastUpdatedAt:1621892821,formattedLastUpdatedAt:"5/24/2021",frontMatter:{id:"api-cheatsheet",title:"API Cheatsheet",original_id:"api-cheatsheet"}},c=[{value:"To add a new root for relay components",id:"to-add-a-new-root-for-relay-components",children:[]},{value:"To add a new relay container",id:"to-add-a-new-relay-container",children:[]},{value:"To add a new relay container that has changing data requirements",id:"to-add-a-new-relay-container-that-has-changing-data-requirements",children:[]},{value:"To add a new paginating relay container",id:"to-add-a-new-paginating-relay-container",children:[]},{value:"To update a variable for my component",id:"to-update-a-variable-for-my-component",children:[]},{value:"To paginate through a connection",id:"to-paginate-through-a-connection",children:[]},{value:"To force fetch a component",id:"to-force-fetch-a-component",children:[]},{value:"To commit a mutation",id:"to-commit-a-mutation",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A reference for translating between the Relay Classic and Relay Modern APIs."),(0,o.kt)("h3",{id:"to-add-a-new-root-for-relay-components"},"To add a new root for relay components"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"<RelayRootContainer>")),(0,o.kt)("p",null,"Modern: ",(0,o.kt)("inlineCode",{parentName:"p"},"<QueryRenderer>")),(0,o.kt)("h3",{id:"to-add-a-new-relay-container"},"To add a new relay container"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay.createContainer")),(0,o.kt)("p",null,"Modern: ",(0,o.kt)("inlineCode",{parentName:"p"},"createFragmentContainer")),(0,o.kt)("h3",{id:"to-add-a-new-relay-container-that-has-changing-data-requirements"},"To add a new relay container that has changing data requirements"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay.createContainer")),(0,o.kt)("p",null,"Modern ",(0,o.kt)("inlineCode",{parentName:"p"},"createRefetchContainer")),(0,o.kt)("h3",{id:"to-add-a-new-paginating-relay-container"},"To add a new paginating relay container"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay.createContainer")),(0,o.kt)("p",null,"Modern: ",(0,o.kt)("inlineCode",{parentName:"p"},"createPaginationContainer")),(0,o.kt)("h3",{id:"to-update-a-variable-for-my-component"},"To update a variable for my component"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({foo: bar}...)")),(0,o.kt)("p",null,"Modern: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.refetch({foo: bar}...")," in a Refetch Container"),(0,o.kt)("h3",{id:"to-paginate-through-a-connection"},"To paginate through a connection"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({count: prevCount + pageSize}...)")),(0,o.kt)("p",null,"Modern ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.loadMore(pageSize...)")," in a Pagination Container"),(0,o.kt)("h3",{id:"to-force-fetch-a-component"},"To force fetch a component"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.forceFetch()")),(0,o.kt)("p",null,"Modern: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.refetchConnection(...)")," in a Pagination Container"),(0,o.kt)("p",null,"or: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.refetch({}, {}, callback, {force: true})")," in a Refetch Container"),(0,o.kt)("h3",{id:"to-commit-a-mutation"},"To commit a mutation"),(0,o.kt)("p",null,"Classic: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.relay.commitUpdate(mutation...)")),(0,o.kt)("p",null,"Modern: ",(0,o.kt)("inlineCode",{parentName:"p"},"commitMutation(this.props.relay.environment, {mutation...})")))}d.isMDXComponent=!0}}]);