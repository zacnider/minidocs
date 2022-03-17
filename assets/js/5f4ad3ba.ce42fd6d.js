"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[5697],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5434:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},s="TxPoW Units (Blocks)",u={unversionedId:"learn/txpowunits",id:"learn/txpowunits",title:"TxPoW Units (Blocks)",description:"Before a transaction can be posted to the network, it must be added to a TxPoW unit with other essential data and \u2018mined\u2019.",source:"@site/docs/learn/txpowunits.md",sourceDirName:"learn",slug:"/learn/txpowunits",permalink:"/docs/learn/txpowunits",editUrl:"https://github.com/minima-global/minidocs/docs/learn/txpowunits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MMR Database",permalink:"/docs/learn/mmrdatabase"},next:{title:"The Blockchain",permalink:"/docs/learn/theblockchain"}},d={},c=[{value:"Generate",id:"generate",level:3},{value:"Mine",id:"mine",level:3},{value:"Check",id:"check",level:3},{value:"Process",id:"process",level:3},{value:"Header",id:"header",level:2},{value:"Body",id:"body",level:2}],p={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"txpow-units-blocks"},"TxPoW Units (Blocks)"),(0,o.kt)("p",null,"Before a transaction can be posted to the network, it must be added to a ",(0,o.kt)("strong",{parentName:"p"},"TxPoW unit")," with other essential data and \u2018mined\u2019.\nDuring the TxPoW creation process, in addition to the main transaction, unconfirmed transactions in the mempool will also be added to the body of the TxPoW unit, serving to further propagate mempool transactions to known peers."),(0,o.kt)("p",null,"After being mined, a TxPoW unit will be propagated to the network either as a block if it meets the network block difficulty level, or as a basic TxPoW unit which serves only to propagate known unconfirmed transactions. This ensures block creation is a \u2018chance\u2019 encounter."),(0,o.kt)("p",null,"A node can carry out several activities with a TxPoW unit depending on the situation:"),(0,o.kt)("h3",{id:"generate"},"Generate"),(0,o.kt)("p",null,"When a user wishes to send a transaction, or is required to send a ",(0,o.kt)("strong",{parentName:"p"},"Pulse")," to the network, their node will generate (construct) a TxPoW unit containing their transaction and the hashes of other unconfirmed transactions it knows about in the ",(0,o.kt)("strong",{parentName:"p"},"mempool"),". TxPoW units are analogous to compact blocks in Bitcoin."),(0,o.kt)("h3",{id:"mine"},"Mine"),(0,o.kt)("p",null,"Before a node can propagate its TxPoW unit to the network, it must mine the TxPoW unit by cycling through different ",(0,o.kt)("strong",{parentName:"p"},"nonces")," (numbers), adding the nonce to the TxPoW header and hashing the result. Once the resulting hash meets the level of difficulty required by the network (~10 seconds work), they can propagate their TxPoW unit to other nodes in the network. "),(0,o.kt)("p",null,"blue box\n",(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("strong",{parentName:"p"},"transaction difficulty")," sets the minimum amount of work a node must provide before their TxPoW can be propagated across the network (~10 seconds work).This ensures the network has received the transactions in their TxPoW unit, ",(0,o.kt)("strong",{parentName:"p"},"however this does not automatically mean that their transactions are in a block."),"\nTxPoW units only become blocks if, by chance, the ",(0,o.kt)("strong",{parentName:"p"},"block difficulty")," is met in the process of meeting the transaction difficulty. "),(0,o.kt)("h3",{id:"check"},"Check"),(0,o.kt)("p",null,"When a node receives a TxPoW unit from another node on the network, it must check it to ensure its validity before processing and forwarding it on to its peers."),(0,o.kt)("h3",{id:"process"},"Process"),(0,o.kt)("p",null,"When the node has checked that a TxPoW unit is valid, it will process it, adding to the chain if it meets the required difficulty level to become a block."),(0,o.kt)("p",null,"Diagram: The structure of a TxPoW Unit"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"TxPoW ID"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Header"),(0,o.kt)("br",null),"Nonce (nonce)",(0,o.kt)("br",null),"TimeMilli (timemilli)",(0,o.kt)("br",null),"Block Number (block)",(0,o.kt)("br",null),"Block Difficulty (blkdiff)",(0,o.kt)("br",null),"Cascade Levels (cascadelevels)",(0,o.kt)("br",null),"Parent Blocks  (superparents)",(0,o.kt)("br",null),"MMR Root (mmr)",(0,o.kt)("br",null),"MMR Total (total)",(0,o.kt)("br",null),"Magic (magic)",(0,o.kt)("br",null),"Body Hash (txbodyhash)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Body"),(0,o.kt)("br",null),"Random Number (prng)",(0,o.kt)("br",null),"Txn Difficulty (txndiff)",(0,o.kt)("br",null),"A Transaction (txn)",(0,o.kt)("br",null),"A Witness (witness)",(0,o.kt)("br",null),"Burn Txn (burntxn)",(0,o.kt)("br",null),"Burn Witness (burnwitness)",(0,o.kt)("br",null),"Txn List (txnlist)")))),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Nonce"),(0,o.kt)("td",{parentName:"tr",align:null},"The final nonce (number) that was included in the TxPoW header so that, when hashed, the required difficulty was achieved.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TimeMilli"),(0,o.kt)("td",{parentName:"tr",align:null},"Time this TxPoW was created in milliseconds since the epoch of 1970-01-01T00:00:00Z")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Number"),(0,o.kt)("td",{parentName:"tr",align:null},"Block height to be used if this TxPoW unit becomes a block")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Difficulty"),(0,o.kt)("td",{parentName:"tr",align:null},"The Difficulty required for this unit to be considered a valid block")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cascade Levels"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of levels in the Cascade (32)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Super Parents"),(0,o.kt)("td",{parentName:"tr",align:null},"Pointer to its immediate previous block and to the most recent block at each Super level. Used for cascading.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MMR Root"),(0,o.kt)("td",{parentName:"tr",align:null},"The root hash of the MMR (to prove coins existed using a proof and header)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MMR Total"),(0,o.kt)("td",{parentName:"tr",align:null},"The sum of all coins in the system (using a hash sum tree, the total amount of Minima is known every block removing the possibility of inflation bugs)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Magic"),(0,o.kt)("td",{parentName:"tr",align:null},"Chain parameters - the magic numbers: desiredmaxtxpow, desiredmaxtxn, desiredmintxpowwork, maxtxpow,maxtxn,mintxpowwork")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TxBodyHash"),(0,o.kt)("td",{parentName:"tr",align:null},"The hash of the TxPoW body")))),(0,o.kt)("h2",{id:"body"},"Body"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Body Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Random Number"),(0,o.kt)("td",{parentName:"tr",align:null},"A Random number so that everyone is working on a different TxPoW in the pulse")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Txn Difficulty"),(0,o.kt)("td",{parentName:"tr",align:null},"The Difficulty required for this unit to be a valid TxPoW unit. The value that all users try to achieve when cycling through nonce values.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A Transaction"),(0,o.kt)("td",{parentName:"tr",align:null},"Transaction ID for the main transaction. UTxO (coin) inputs, outputs, state variables, linkhash and")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A Witness"),(0,o.kt)("td",{parentName:"tr",align:null},"Signature Proofs, MMR Proofs (pointing to a valid unspent MMR entry in the past 24 hours for each input coin used in the txn), Script Proofs (for the various P2SH addresses used)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Burn Txn"),(0,o.kt)("td",{parentName:"tr",align:null},"Inputs, outputs, state variables, linkhash and transaction ID for the Burn transaction paying for the transaction the user is trying to send. Can be empty.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Burn Witness"),(0,o.kt)("td",{parentName:"tr",align:null},"The Witness data for the Burn. Signatures, MMR Proofs and scripts. Can be empty.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Txn List"),(0,o.kt)("td",{parentName:"tr",align:null},"List of the hashes of mempool transactions to propagate. These will become confirmed if this TxPoW unit becomes a block. Only the hash of transactions are added since transactions have already been sent across the network.")))))}m.isMDXComponent=!0}}]);