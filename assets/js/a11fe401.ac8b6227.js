"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4552],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6563:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Core Concepts",l={unversionedId:"learn/coreconcepts",id:"learn/coreconcepts",title:"Core Concepts",description:"UTxO Model",source:"@site/docs/learn/coreconcepts.md",sourceDirName:"learn",slug:"/learn/coreconcepts",permalink:"/minidocs/docs/learn/coreconcepts",editUrl:"https://github.com/minima-global/minidocs/docs/learn/coreconcepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Network Overview",permalink:"/minidocs/docs/learn/networkoverview"},next:{title:"Transactions",permalink:"/minidocs/docs/learn/transactions"}},u={},p=[{value:"UTxO Model",id:"utxo-model",level:2},{value:"MMR (Merkle Mountain Range) Database",id:"mmr-merkle-mountain-range-database",level:2},{value:"Transaction Proof-of-Work (TxPoW)",id:"transaction-proof-of-work-txpow",level:2},{value:"The Burn",id:"the-burn",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,a.kt)("h2",{id:"utxo-model"},"UTxO Model"),(0,a.kt)("p",null,"Minima uses the UTxO (Unspent Transaction Output) Model, like Bitcoin. A Transaction Output is a specific amount of Minima, identifiable through a unique ID called a coin ID. Each Transaction Output can be considered analogous to a physical coin in that they can represent different amounts of currency and must be spent in whole. "),(0,a.kt)("p",null,"The Minima blockchain keeps track of the UTxO set on the network and who can spend them. The UTxO set circulating in the network fluctuates as users spend coins and create new ones as outputs from transactions. The sum of the value of all the UTxOs in the network will equal at most 1 billion Minima."),(0,a.kt)("p",null,"One or more UTxOs are used as inputs into transactions and one or more new UTxOs will be created as outputs."),(0,a.kt)("p",null,"The example below shows a transaction of 30 Minima from Bob to Alice. A UTxO worth 50 Minima is used as an input and two new UTxOs are created as outputs - one worth 30 Minima which is sent to the recipient and one of 20 Minima which is returned to the sender as change. Just like change is received when physical coins are spent."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Core Concepts",src:n(6239).Z+"#gh-light-mode-only",width:"469",height:"271"}),(0,a.kt)("img",{loading:"lazy",alt:"Core Concepts",src:n(5668).Z+"#gh-dark-mode-only",width:"469",height:"271"})),(0,a.kt)("h2",{id:"mmr-merkle-mountain-range-database"},"MMR (Merkle Mountain Range) Database"),(0,a.kt)("p",null,"As the blockchain is constantly pruned, users must keep track of their spent and unspent TxOs (transaction outputs)independently of the chain. Each TxO has a proof that forms part of a hash sum tree and these are stored in the user\u2019s MMR database.\nWhen a user wishes to spend their coins, they must provide the up to date valid proofs that it is unspent."),(0,a.kt)("h2",{id:"transaction-proof-of-work-txpow"},"Transaction Proof-of-Work (TxPoW)"),(0,a.kt)("p",null,"Another core concept in Minima is ",(0,a.kt)("strong",{parentName:"p"},"TxPoW")," - Transaction Proof of Work. Minima requires users to provide work, in the form of computing power, to \u2018mine\u2019 their own transactions. Once a user has contributed a small amount of work (~10 seconds) their transaction will be propagated around the network. This is in contrast to Bitcoin where users rely on miners with specific hardware to provide PoW and propagate their transactions on their behalf."),(0,a.kt)("p",null,"Transactions are held in ",(0,a.kt)("strong",{parentName:"p"},"TxPoW units"),", which may or may not become blocks. TxPoW units contain a user\u2019s transaction and the hashes of other unconfirmed transactions known to the user\u2019s node. TxPoW units become blocks if they, by chance, meet the level of difficulty required to become a block. "),(0,a.kt)("h2",{id:"the-burn"},"The Burn"),(0,a.kt)("p",null,"The Burn is a small cost (fee) which is incurred when sending transactions on the Minima network during times of high demand. This cost, denominated in Minima, is \u2018burned\u2019 i.e. removed from Minima's hard-capped supply, making Minima a deflationary currency as the overall circulating supply slowly decreases over time. "),(0,a.kt)("p",null,"The burn serves multiple purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A strong incentive to propagate and process a transaction:")," All users in the network will benefit from the decrease in supply as coins that are left become  more scarce and therefore more valuable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A method for ordering transactions and regulating on-chain traffic:")," Similar to the fee model on other blockchains, the burn serves as a selection method for deciding which unconfirmed transactions will be added to a block. The higher the burn amount in a transaction, the more likely it is that a transaction will be added to a block. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A mechanism for spam prevention by making Denial-of-Service (DoS) attacks expensive:")," The burn may be high during periods of heavy traffic or spam and, as it rises, traffic will decrease, self-regulating the system. The burn can be nil or very low when traffic is at manageable levels as the total amount is not important, only the relative burn amount in comparison to other transactions.")))}h.isMDXComponent=!0},5668:function(e,t,n){t.Z=n.p+"assets/images/coreConceptsDm-7b57cfa58b24b47d518516dafd394b31.svg"},6239:function(e,t,n){t.Z=n.p+"assets/images/coreConceptsLm-396940658d7649d9bcc4919b8fcff9d9.svg"}}]);