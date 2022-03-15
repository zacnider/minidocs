"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[1035],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(a),d=n,m=l["".concat(c,".").concat(d)]||l[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},8785:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:10},c="Storage-less MMR UTXO",p={unversionedId:"minimawhitepaper/storagelessmmrutxo",id:"minimawhitepaper/storagelessmmrutxo",title:"Storage-less MMR UTXO",description:"In the old world, every user kept track of every account in a big book (or database). Every user had a copy of this book. Whenever a user wanted to send a transaction, every user checked the transaction was valid, by checking the inputs were valid in the big book and updating the books\u2019 pages as necessary. The more transactions, the bigger the book.",source:"@site/docs/minimawhitepaper/storagelessmmrutxo.md",sourceDirName:"minimawhitepaper",slug:"/minimawhitepaper/storagelessmmrutxo",permalink:"/docs/minimawhitepaper/storagelessmmrutxo",editUrl:"https://github.com/arnimedia/arnimedia.github.io.git/docs/minimawhitepaper/storagelessmmrutxo.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"A Cascading Chain",permalink:"/docs/minimawhitepaper/ acascadingchain"},next:{title:"Smart Contracts, Tokens and Transactions",permalink:"/docs/minimawhitepaper/smartcontractstokensandtransactions"}},u={},h=[],l={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-less-mmr-utxo"},"Storage-less MMR UTXO"),(0,o.kt)("p",null,"In the old world, every user kept track of every account in a big book (or database). Every user had a copy of this book. Whenever a user wanted to send a transaction, every user checked the transaction was valid, by checking the inputs were valid in the big book and updating the books\u2019 pages as necessary. The more transactions, the bigger the book."),(0,o.kt)("p",null,"In the new world, each user has a specific page in the book, with all their account details. That page is ripped out of the book and given to that user. Each user rips out their own page. Every user only keeps their own page and the spine of the whole book. Whenever a user wants to send a transaction, they add a copy of their page, which verifiably fits the spine, so that users can check the transaction is valid, update the page, and update the spine ready for the next transaction. Now users only store their own transactions, and a cryptographic spine no thicker than a single page. Orders of magnitude less data."),(0,o.kt)("p",null,"Minima does not have a database (or big book) that stores all the Unspent Transaction Outputs, instead, utilising Peter Todds\u2019 MMR",(0,o.kt)("a",{parentName:"p",href:"/docs/minimawhitepaper/specialthanksto"},"[4]")," storage-less Proof DB. It allows for an almost limitless amount of provable data to be added and updated in a particular hash tree. It\u2019s a little bit like a SQL database with INSERT and UPDATE, but no SELECT or DELETE. The trick is that if you have data in the database, and are listening to all the additions and updates, you can always prove what data you know, your version of SELECT. Data proves it exists with a Merkle proof to the root of the MMR hash tree.  "),(0,o.kt)("p",null,"Each user keeps track of their own coins, rather than miners or even all users keeping track of all the coins. This is an infinitesimally small amount of data in comparison to an entire blockchain. But - each user must stay up to date with the blockchain. By doing so they can keep track of the Merkle proofs required to prove their coins not only exist but are unspent. This proof changes with every addition or update to the MMR. Should a user not keep track of his coins, they would not be lost, but he would need a third party to help recover them. He would need to find either an archive node that stores everything \u2013 for the purposes of selling the data in this exact scenario, or have previously set up a friend or chat group to keep track of extra coins (coin-proofs pose no security issues), and have them rediscover the individual MMR proofs for their coins."),(0,o.kt)("p",null,"Minima goes MMR real-time. Each block commits to the current MMR state for that block. Each user sends his transactions with a recent MMR proof, to prove the transaction is valid. Users can check these details with their latest MMR database, and update as necessary when a block is accepted. This process will need to be made very fast. The MMR database stores multiple overlapping MMR states, one for each block, and it needs to be able to prune and un-prune MMR data and derive proofs quickly for multiple changing states. Fun."))}d.isMDXComponent=!0}}]);