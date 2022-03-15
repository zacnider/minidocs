"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4953],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2210:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:4},l="MMR Database",p={unversionedId:"learn/mmrdatabase",id:"learn/mmrdatabase",title:"MMR Database",description:"As the blockchain is heavily pruned, users must store proof that their coins (UTxOs) are unspent. This is the role of the MMR database. The MMR (Merkle Mountain Range) proof db is a hash sum tree containing the proofs for all coins, spent (STxOs) or unspent (UTxOs) in the system.",source:"@site/docs/learn/mmrdatabase.md",sourceDirName:"learn",slug:"/learn/mmrdatabase",permalink:"/docs/learn/mmrdatabase",editUrl:"https://github.com/arnimedia/arnimedia.github.io.git/docs/learn/mmrdatabase.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/docs/learn/transactions"},next:{title:"TxPoW Units (Blocks)",permalink:"/docs/learn/txpowunits"}},c={},u=[],m={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mmr-database"},"MMR Database"),(0,o.kt)("p",null,"As the blockchain is heavily pruned, users must store proof that their coins (UTxOs) are unspent. This is the role of the MMR database. The MMR (Merkle Mountain Range) proof db is a hash sum tree containing the proofs for all coins, spent (STxOs) or unspent (UTxOs) in the system."),(0,o.kt)("p",null,"Users do not store the whole MMR for all the coins in the system, as this would be too burdensome, rather they only store the paths to their own coins which must be provided when a user wishes to spend their coins."),(0,o.kt)("p",null,"The tree is ",(0,o.kt)("strong",{parentName:"p"},"append-only")," and is updated with each new block as coins are spent and created. When a coin is ",(0,o.kt)("strong",{parentName:"p"},"spent"),", the Spent state of the coin changes from false to true and the MMR Proof for the coin is ",(0,o.kt)("strong",{parentName:"p"},"updated"),"."),(0,o.kt)("p",null,"When a new coin is ",(0,o.kt)("strong",{parentName:"p"},"created")," (as an output to a transaction), a new leaf node is added to the tree for the new, unspent coin, creating new peaks and a new root hash."),(0,o.kt)("p",null,"Therefore, for a user to prove the validity of their coins (i.e. that they are unspent), a user must remain up to date with the chain to ensure they hold the most up to date coin proofs."),(0,o.kt)("p",null,"When a user wishes to spend their coins, they must prove their coins are unspent by providing:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The MMR Root hash from the most recent block"),(0,o.kt)("li",{parentName:"ol"},"The proof path to the entry of the coin ")),(0,o.kt)("p",null,"A node receiving the proofs will check the coins are valid by summing the hashes provided and ensuring it matches the Merkle root they possess themselves.\n",(0,o.kt)("em",{parentName:"p"},"Diagram: A complete Merkle Mountain Range (MMR) with three peaks and root")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Minima",src:n(5379).Z+"#gh-light-mode-only",width:"469",height:"315"}),(0,o.kt)("img",{loading:"lazy",alt:"Minima",src:n(1888).Z+"#gh-dark-mode-only",width:"469",height:"315"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A brief overview: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md"},"https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md")),(0,o.kt)("li",{parentName:"ul"},"Detailed overview: ",(0,o.kt)("a",{parentName:"li",href:"https://petertodd.org/2016/delayed-txo-commitments"},"https://petertodd.org/2016/delayed-txo-commitments"))))}h.isMDXComponent=!0},1888:function(e,t,n){t.Z=n.p+"assets/images/mMRDatabaseDm-70f297b34cf84108b8b14625f38ee337.svg"},5379:function(e,t,n){t.Z=n.p+"assets/images/mMRDatabaseLm-94ec4b31b2e7f7da17bf729c19081589.svg"}}]);