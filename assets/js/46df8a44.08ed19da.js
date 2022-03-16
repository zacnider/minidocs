"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8033],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9748:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Transactions",u={unversionedId:"learn/transactions",id:"learn/transactions",title:"Transactions",description:"Transaction Outputs & Inputs",source:"@site/docs/learn/transactions.md",sourceDirName:"learn",slug:"/learn/transactions",permalink:"/docs/learn/transactions",editUrl:"https://github.com/minima-global/minidocs/docs/learn/transactions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/learn/coreconcepts"},next:{title:"MMR Database",permalink:"/docs/learn/mmrdatabase"}},c={},p=[{value:"Transaction Outputs",id:"transaction-outputs",level:2},{value:"Transaction Inputs",id:"transaction-inputs",level:3},{value:"Transaction Structure",id:"transaction-structure",level:2},{value:"State Variables",id:"state-variables",level:3},{value:"Linkhash",id:"linkhash",level:3},{value:"Transaction Validity",id:"transaction-validity",level:2}],d={toc:p};function h(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transactions"},"Transactions"),(0,i.kt)("p",null,"Transaction Outputs & Inputs"),(0,i.kt)("h2",{id:"transaction-outputs"},"Transaction Outputs"),(0,i.kt)("p",null,"All transactions create new UTxOs (coins) as outputs, each coin is identifiable with a unique CoinID and consists of "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a specific amount of Minima and "),(0,i.kt)("li",{parentName:"ul"},"a script that determines the conditions required to spend the coin. This script is executed when a user attempts to spend the coin in a transaction and must return a value of TRUE to be spendable. ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn/smartcontracts"},"See scripting"))),(0,i.kt)("p",null,"Each coin has the following attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Coin Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CoinID"),(0,i.kt)("td",{parentName:"tr",align:null},"The globally unique identifier for a coin. The coin id of a new UTxO is hash(first input coin in txn ","|"," output_num_in_txn)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Amount"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of 'Minima'. Even custom token transactions are just amounts of coloured Minima (",(0,i.kt)("a",{parentName:"td",href:"/docs/learn/tokenscolouredcoins"},"see coloured coins"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Address"),(0,i.kt)("td",{parentName:"tr",align:null},"The hash of a script. If no custom script is provided,the script will simply be RETURN(SIGNEDBY(","[PublicKey of coin owner]",") i.e. the  transaction must be signed by the coin owner before it can be spent. All addresses are P2SH (Pay to Script Hash).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TokenID"),(0,i.kt)("td",{parentName:"tr",align:null},"The token id. Minima is 0x00. Everything else has a full 64 byte hash. Tokens are created by colouring Minima.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Token"),(0,i.kt)("td",{parentName:"tr",align:null},"Token Details (",(0,i.kt)("a",{parentName:"td",href:"/docs/learn/tokenscolouredcoins"},"see coloured coins"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Floating"),(0,i.kt)("td",{parentName:"tr",align:null},"True or False. Set when you create a transaction. If True, the coinid is ignored so that any valid coin that has the same amount, address and TokenID can be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Store State"),(0,i.kt)("td",{parentName:"tr",align:null},"True or False, depending on whether the state is stored for this coin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"State"),(0,i.kt)("td",{parentName:"tr",align:null},"The state variables(0-255) of the transaction this coin was created in. You can access this data from scripts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MMR Entry"),(0,i.kt)("td",{parentName:"tr",align:null},"The MMR database entry number for this coin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spent"),(0,i.kt)("td",{parentName:"tr",align:null},"True or False, depending on whether this coin has been spent or not.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Created"),(0,i.kt)("td",{parentName:"tr",align:null},"The block number this coin was created in.")))),(0,i.kt)("h3",{id:"transaction-inputs"},"Transaction Inputs"),(0,i.kt)("p",null,"Transaction inputs identify which coins will be spent in the transaction, by providing the coin ID. One or more coins may be required depending on the value of the coins owned by the user and the amount they wish to spend. "),(0,i.kt)("p",null,"For example if a user wishes to spend 100 Minima but they only have two coins worth 40 and 90 Minima, they must use both coins as inputs to the transaction and receive change of 30 as a new coin."),(0,i.kt)("p",null,"When using a wallet application, the wallet will automatically choose which coins to use as inputs, however when constructing transactions manually, relevant coins must be selected to ensure the sum of the inputs is greater than or equal to the sum of the outputs."),(0,i.kt)("h2",{id:"transaction-structure"},"Transaction Structure"),(0,i.kt)("p",null,"A transaction is the main building block of the TxPoW unit. Transactions can be constructed in isolation but must be added into a TxPoW unit before it can be mined and propagated across the network. has a list of inputs, outputs, state variables, linkhash and a transaction ID."),(0,i.kt)("p",null,"To send a transaction, a node must construct the transaction using one or more of their unspent coins as inputs. The outputs must also be specified, with the amount and the public address to send to. If the value of the input coins is greater than the value of the output, the ",(0,i.kt)("strong",{parentName:"p"},"change")," output must be defined as the difference to be returned to the sender, this is done automatically if the user uses a wallet application."),(0,i.kt)("p",null,"The burn must also be considered when constructing transactions, as this will affect the priority that a transaction has over others in the mempool. Any difference between inputs and outputs (including change) will be burned, removing that amount from circulation."),(0,i.kt)("h3",{id:"state-variables"},"State Variables"),(0,i.kt)("p",null,"Transactions also include State Variables for storing public data and previous transaction states to retrieve information for scripts. 0-255 variables are allowed."),(0,i.kt)("h3",{id:"linkhash"},"Linkhash"),(0,i.kt)("p",null,"Used for a burn transaction. The linkhash of a burn transaction is the transaction ID of the main transaction it relates to. This means that the burn transaction can only be spent with the transaction it is linked to.  For normal transactions, it is set to 0x00."),(0,i.kt)("p",null,"Diagram: Main transaction structure"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Transaction ID: Hash(Transaction object)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Inputs ",(0,i.kt)("br",null)," Outputs",(0,i.kt)("br",null),"State Variables (0-255)",(0,i.kt)("br",null),"Linkhash (0x00)")))),(0,i.kt)("p",null,"Diagram: Burn transaction structure"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Transaction ID: Hash(Transaction object)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Inputs (matching the main txn)",(0,i.kt)("br",null),"Output (amount to burn)",(0,i.kt)("br",null),"State Variables (matching the main txn)",(0,i.kt)("br",null),"Linkhash (main txn ID)")))),(0,i.kt)("h2",{id:"transaction-validity"},"Transaction Validity"),(0,i.kt)("p",null,"For a transaction to be valid, it must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It must have at least one, and up to 256 coin inputs"),(0,i.kt)("li",{parentName:"ol"},"It must have no more than 255 outputs "),(0,i.kt)("li",{parentName:"ol"},"All inputs and outputs must be valid Minima amounts "),(0,i.kt)("li",{parentName:"ol"},"The sum of inputs must be greater than or equal to the sum of the outputs for each Token ID."),(0,i.kt)("li",{parentName:"ol"},"Have unique coin IDs for each input coin")))}h.isMDXComponent=!0}}]);