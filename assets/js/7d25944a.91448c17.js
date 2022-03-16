"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[9652],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l="Maxima",c={unversionedId:"minimawhitepaper/maxima",id:"minimawhitepaper/maxima",title:"Maxima",description:"- Layer 1 does not scale.",source:"@site/docs/minimawhitepaper/maxima.md",sourceDirName:"minimawhitepaper",slug:"/minimawhitepaper/maxima",permalink:"/minidocs/docs/minimawhitepaper/maxima",editUrl:"https://github.com/minima-global/minidocs/docs/minimawhitepaper/maxima.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tx-PoW",permalink:"/minidocs/docs/minimawhitepaper/txpow"},next:{title:"The Pulse Network",permalink:"/minidocs/docs/minimawhitepaper/thepulsenetwork"}},u={},m=[],p={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maxima"},"Maxima"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Layer 1 does not scale."),(0,r.kt)("li",{parentName:"ul"},"Layer 2 scales.")),(0,r.kt)("p",null,"\u2018...scales\u2019 \u2013  there is no upper bound on possible transactions per second."),(0,r.kt)("p",null,"The base layer of any cryptocurrency is known as layer 1 or on-chain. This is the layer every full member of the network needs to process. Solutions built on top of layer 1 occur away from the main chain, deliberately so, and are called layer 2 or off-chain. On layer 2, only those directly involved in the transaction need to process it, not the whole network. This is why layer 2 scales but layer 1 does not. The idea that everyone should process everything does not scale."),(0,r.kt)("p",null,"If most of the traffic is taken off-chain using the Lightning Network, Sidechains,  Multi-Signature Federations or another method, then by definition most of the traffic is not even viewable let alone auditable on-chain. There is currently no mechanism that secures layer 1 with layer 2 traffic. No way to incentivise or force fees down from layer 2 operators and users to the miners on layer 1. For all miner-centric coins, this is a problem. How can trillions be transacted off-chain when only millions are spent in fee-paying transactions securing layer 1? Clearly, these layered systems are only as secure as the security of their lower levels. Less money spent equals fewer fees paid. So either layer 2 works, it scales, and everyone jumps off-chain, reducing layer 1 security by starving miners on-chain... or layer 2 does not work, users stay on layer 1, all the on-chain miners get paid, but it can\u2019t scale... "),(0,r.kt)("p",null,"One solution is (very) high fees for layer 1 and thus very large transaction amounts, keeping all the smaller interactions off-chain. This does indeed secure layer 1 by paying the miners adequately, but makes it impossible for normal users to transact on-chain, since the fee alone would likely be larger than the desired transaction amount. Sometimes you have to use layer 1, it\u2019s not always a choice (if someone tries to force close your Lightning Channel and steal funds), and then what?"),(0,r.kt)("p",null,"Another solution is to inflate the coin supply. Just print 1% extra per year and use that to pay the miners. A clean solution... that does indeed secure layer 1, but of course, you lose the hard cap on your total supply which is a very desirable quality if you want to be considered a Store of Value. Supply inflation is just a hidden tax on every user."),(0,r.kt)("p",null,"Minima has an innovative and unique solution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace fee-based security. "),(0,r.kt)("li",{parentName:"ul"},"Make layer 2 secure layer 1.")),(0,r.kt)("p",null,"Minima runs over a Peer-to-Peer (P2P) network called Maxima. Every user on the Minima network is connected to every other user. Maxima opens up this P2P backbone, via a simple network API, so that users can transmit any data they like, not just Minima transactions, to other individual Maxima users, point-to-point and not flood-fill. This gives a method of communication that can be used by all the layer 2 protocols, such as the Lightning Network, Sidechains, Decentralized Exchanges etc."),(0,r.kt)("p",null,"Even better, users of Maxima who have no Minima, no tokens, send no transactions and have no interest in layer 2 magic, can still help to PoW secure the network, by sending messages over Maxima. For instance, MaxChat, a simple low-bandwidth chat application that runs on Maxima, a resilient decentralized censorship-resistant P2P network, could bring countless users and there are countless other compatible applications that require network communication."),(0,r.kt)("p",null,"All Maxima users run Minima. All messages pay PoW. All PoW secures Minima."),(0,r.kt)("p",null,"We define a :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minima transaction /  on-chain  / flood-fill / does not scale."),(0,r.kt)("li",{parentName:"ul"},"Maxima transaction / off-chain / point-to-point / scales.\n")),(0,r.kt)("p",null,"Maxima allows the transfer of small amounts of data for free, aside from the required PoW, but routing larger amounts of data is possible and can be paid for using Lightning. A simple technique encrypts the data with the same key as the Lightning invoice (the preimage of a hash). This way the recipient only gets access to the decrypted data once a payment is made. An atomic data exchange - where either both actions happen or neither happen. "),(0,r.kt)("p",null,"As more and more fee-paying traffic is generated, Maxima incentivises users to set up Minima routers, effectively a node with an external IP which other Minima users can easily access, which is invaluable to the integrity of any P2P network. Instead of incentivising miners to use more and more energy finding coins, Maxima incentivises users to set up increasingly better routers that improve the integrity and quality of the backbone P2P network that runs Minima. "),(0,r.kt)("p",null,"Minima provides value transfer. Maxima provides information transfer."))}h.isMDXComponent=!0}}]);