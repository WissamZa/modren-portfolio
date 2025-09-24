import{j as g,m as we,L as ch,C as uh,A as Mi,S as dh,M as hh,U as fh,a as ph,X as ol,b as mh,G as Ti,c as Ou,d as ll,H as gh,e as vh,D as ku,f as _h,g as Fu,h as xh,i as yh,F as bh,E as Ns,k as Sh,l as Ul,P as wh,n as Eh,o as Mh,p as Th,q as Rr,r as Ah,s as Rh,t as Ch,u as Bu,v as Ph,T as Nh,w as Lh,x as Ol,y as kl,z as Fl,B as Bl,I as Ih,J as Dh}from"./ui-DixPEcnG.js";import{r as Z,L as Kn,u as Fs,a as Xr,b as Uh,c as zu,O as Oh,R as kh,H as Fh,d as Bh,e as nn,N as Or}from"./router-Cd3x9cgL.js";import{a as zh,b as Hh,g as jh}from"./vendor-B1sUnLqs.js";import{o as Vh,s as Gh,a as Wh,c as cl,b as Ht,u as ul,d as $h}from"./forms-z20U20Xx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Js={},zl;function Xh(){if(zl)return Js;zl=1;var i=zh();return Js.createRoot=i.createRoot,Js.hydrateRoot=i.hydrateRoot,Js}var qh=Xh();const ke=i=>typeof i=="string",xs=()=>{let i,e;const t=new Promise((n,s)=>{i=n,e=s});return t.resolve=i,t.reject=e,t},Hl=i=>i==null?"":""+i,Kh=(i,e,t)=>{i.forEach(n=>{e[n]&&(t[n]=e[n])})},Yh=/###/g,jl=i=>i&&i.indexOf("###")>-1?i.replace(Yh,"."):i,Vl=i=>!i||ke(i),As=(i,e,t)=>{const n=ke(e)?e.split("."):e;let s=0;for(;s<n.length-1;){if(Vl(i))return{};const r=jl(n[s]);!i[r]&&t&&(i[r]=new t),Object.prototype.hasOwnProperty.call(i,r)?i=i[r]:i={},++s}return Vl(i)?{}:{obj:i,k:jl(n[s])}},Gl=(i,e,t)=>{const{obj:n,k:s}=As(i,e,Object);if(n!==void 0||e.length===1){n[s]=t;return}let r=e[e.length-1],a=e.slice(0,e.length-1),o=As(i,a,Object);for(;o.obj===void 0&&a.length;)r=`${a[a.length-1]}.${r}`,a=a.slice(0,a.length-1),o=As(i,a,Object),o?.obj&&typeof o.obj[`${o.k}.${r}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${r}`]=t},Jh=(i,e,t,n)=>{const{obj:s,k:r}=As(i,e,Object);s[r]=s[r]||[],s[r].push(t)},kr=(i,e)=>{const{obj:t,k:n}=As(i,e);if(t&&Object.prototype.hasOwnProperty.call(t,n))return t[n]},Zh=(i,e,t)=>{const n=kr(i,t);return n!==void 0?n:kr(e,t)},Hu=(i,e,t)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in i?ke(i[n])||i[n]instanceof String||ke(e[n])||e[n]instanceof String?t&&(i[n]=e[n]):Hu(i[n],e[n],t):i[n]=e[n]);return i},Pi=i=>i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Qh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ef=i=>ke(i)?i.replace(/[&<>"'\/]/g,e=>Qh[e]):i;class tf{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const nf=[" ",",","?","!",";"],sf=new tf(20),rf=(i,e,t)=>{e=e||"",t=t||"";const n=nf.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(n.length===0)return!0;const s=sf.getRegExp(`(${n.map(a=>a==="?"?"\\?":a).join("|")})`);let r=!s.test(i);if(!r){const a=i.indexOf(t);a>0&&!s.test(i.substring(0,a))&&(r=!0)}return r},Ka=(i,e,t=".")=>{if(!i)return;if(i[e])return Object.prototype.hasOwnProperty.call(i,e)?i[e]:void 0;const n=e.split(t);let s=i;for(let r=0;r<n.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=r;l<n.length;++l)if(l!==r&&(o+=t),o+=n[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<n.length-1)continue;r+=l-r+1;break}s=a}return s},Ls=i=>i?.replace("_","-"),af={type:"logger",log(i){this.output("log",i)},warn(i){this.output("warn",i)},error(i){this.output("error",i)},output(i,e){console?.[i]?.apply?.(console,e)}};class Fr{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||af,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,s){return s&&!this.debug?null:(ke(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Fr(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Fr(this.logger,e)}}var yn=new Fr;class qr{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const s=this.observers[n].get(t)||0;this.observers[n].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([s,r])=>{for(let a=0;a<r;a++)s(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,r])=>{for(let a=0;a<r;a++)s.apply(s,[e,...t])})}}class Wl extends qr{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,s={}){const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):ke(n)&&r?o.push(...n.split(r)):o.push(n)));const l=kr(this.data,o);return!l&&!t&&!n&&e.indexOf(".")>-1&&(e=o[0],t=o[1],n=o.slice(2).join(".")),l||!a||!ke(n)?l:Ka(this.data?.[e]?.[t],n,r)}addResource(e,t,n,s,r={silent:!1}){const a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),Gl(this.data,o,s),r.silent||this.emit("added",e,t,n,s)}addResources(e,t,n,s={silent:!1}){for(const r in n)(ke(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});s.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,s,r,a={silent:!1,skipCopy:!1}){let o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=n,n=t,t=o[1]),this.addNamespaces(t);let l=kr(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),s?Hu(l,n,r):l={...l,...n},Gl(this.data,o,l),a.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var ju={processors:{},addPostProcessor(i){this.processors[i.name]=i},handle(i,e,t,n,s){return i.forEach(r=>{e=this.processors[r]?.process(e,t,n,s)??e}),e}};const Vu=Symbol("i18next/PATH_KEY");function of(){const i=[],e=Object.create(null);let t;return e.get=(n,s)=>(t?.revoke?.(),s===Vu?i:(i.push(s),t=Proxy.revocable(n,e),t.proxy)),Proxy.revocable(Object.create(null),e).proxy}function Ya(i,e){const{[Vu]:t}=i(of());return t.join(e?.keySeparator??".")}const $l={},Xl=i=>!ke(i)&&typeof i!="boolean"&&typeof i!="number";class Br extends qr{constructor(e,t={}){super(),Kh(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=yn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const n={...t};return e==null?!1:this.resolve(e,n)?.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const a=n&&e.indexOf(n)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!rf(e,n,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:ke(r)?[r]:r};const c=e.split(n);(n!==s||n===s&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(s)}return{key:e,namespaces:ke(r)?[r]:r}}translate(e,t,n){let s=typeof t=="object"?{...t}:t;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";typeof e=="function"&&(e=Ya(e,{...this.options,...s})),Array.isArray(e)||(e=[String(e)]);const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:l}=this.extractFromKey(e[e.length-1],s),c=l[l.length-1];let u=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;u===void 0&&(u=":");const d=s.lng||this.language,h=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()==="cimode")return h?r?{res:`${c}${u}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:`${c}${u}${o}`:r?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:o;const f=this.resolve(e,s);let v=f?.res;const _=f?.usedKey||o,m=f?.exactUsedKey||o,p=["[object Number]","[object Function]","[object RegExp]"],w=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,y=s.count!==void 0&&!ke(s.count),R=Br.hasDefaultValue(s),A=y?this.pluralResolver.getSuffix(d,s.count,s):"",C=s.ordinal&&y?this.pluralResolver.getSuffix(d,s.count,{ordinal:!1}):"",D=y&&!s.ordinal&&s.count===0,E=D&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${A}`]||s[`defaultValue${C}`]||s.defaultValue;let M=v;b&&!v&&R&&(M=E);const L=Xl(M),j=Object.prototype.toString.apply(M);if(b&&M&&L&&p.indexOf(j)<0&&!(ke(w)&&Array.isArray(M))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const k=this.options.returnedObjectHandler?this.options.returnedObjectHandler(_,M,{...s,ns:l}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(f.res=k,f.usedParams=this.getUsedParamsDetails(s),f):k}if(a){const k=Array.isArray(M),W=k?[]:{},q=k?m:_;for(const V in M)if(Object.prototype.hasOwnProperty.call(M,V)){const G=`${q}${a}${V}`;R&&!v?W[V]=this.translate(G,{...s,defaultValue:Xl(E)?E[V]:void 0,joinArrays:!1,ns:l}):W[V]=this.translate(G,{...s,joinArrays:!1,ns:l}),W[V]===G&&(W[V]=M[V])}v=W}}else if(b&&ke(w)&&Array.isArray(v))v=v.join(w),v&&(v=this.extendTranslation(v,e,s,n));else{let k=!1,W=!1;!this.isValidLookup(v)&&R&&(k=!0,v=E),this.isValidLookup(v)||(W=!0,v=o);const V=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&W?void 0:v,G=R&&E!==v&&this.options.updateMissing;if(W||k||G){if(this.logger.log(G?"updateKey":"missingKey",d,c,o,G?E:v),a){const oe=this.resolve(o,{...s,keySeparator:!1});oe&&oe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let F=[];const J=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&J&&J[0])for(let oe=0;oe<J.length;oe++)F.push(J[oe]);else this.options.saveMissingTo==="all"?F=this.languageUtils.toResolveHierarchy(s.lng||this.language):F.push(s.lng||this.language);const de=(oe,Re,Ve)=>{const tt=R&&Ve!==v?Ve:V;this.options.missingKeyHandler?this.options.missingKeyHandler(oe,c,Re,tt,G,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(oe,c,Re,tt,G,s),this.emit("missingKey",oe,c,Re,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&y?F.forEach(oe=>{const Re=this.pluralResolver.getSuffixes(oe,s);D&&s[`defaultValue${this.options.pluralSeparator}zero`]&&Re.indexOf(`${this.options.pluralSeparator}zero`)<0&&Re.push(`${this.options.pluralSeparator}zero`),Re.forEach(Ve=>{de([oe],o+Ve,s[`defaultValue${Ve}`]||E)})}):de(F,o,E))}v=this.extendTranslation(v,e,s,f,n),W&&v===o&&this.options.appendNamespaceToMissingKey&&(v=`${c}${u}${o}`),(W||k)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${u}${o}`:o,k?v:void 0,s))}return r?(f.res=v,f.usedParams=this.getUsedParamsDetails(s),f):v}extendTranslation(e,t,n,s,r){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const l=ke(e)&&(n?.interpolation?.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const d=e.match(this.interpolator.nestingRegexp);c=d&&d.length}let u=n.replace&&!ke(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,n.lng||this.language||s.usedLng,n),l){const d=e.match(this.interpolator.nestingRegexp),h=d&&d.length;c<h&&(n.nest=!1)}!n.lng&&s&&s.res&&(n.lng=this.language||s.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...d)=>r?.[0]===d[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${t[0]}`),null):this.translate(...d,t),n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,o=ke(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=ju.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,s,r,a,o;return ke(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,t),u=c.key;s=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=t.count!==void 0&&!ke(t.count),f=h&&!t.ordinal&&t.count===0,v=t.context!==void 0&&(ke(t.context)||typeof t.context=="number")&&t.context!=="",_=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(m=>{this.isValidLookup(n)||(o=m,!$l[`${_[0]}-${m}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&($l[`${_[0]}-${m}`]=!0,this.logger.warn(`key "${s}" for languages "${_.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),_.forEach(p=>{if(this.isValidLookup(n))return;a=p;const w=[u];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(w,u,p,m,t);else{let y;h&&(y=this.pluralResolver.getSuffix(p,t.count,t));const R=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(t.ordinal&&y.indexOf(A)===0&&w.push(u+y.replace(A,this.options.pluralSeparator)),w.push(u+y),f&&w.push(u+R)),v){const C=`${u}${this.options.contextSeparator||"_"}${t.context}`;w.push(C),h&&(t.ordinal&&y.indexOf(A)===0&&w.push(C+y.replace(A,this.options.pluralSeparator)),w.push(C+y),f&&w.push(C+R))}}let b;for(;b=w.pop();)this.isValidLookup(n)||(r=b,n=this.getResource(p,m,b,t))}))})}),{res:n,usedKey:s,exactUsedKey:r,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,s):this.resourceStore.getResource(e,t,n,s)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!ke(e.replace);let s=n?e.replace:e;if(n&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!n){s={...s};for(const r of t)delete s[r]}return s}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&e[n]!==void 0)return!0;return!1}}class ql{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=yn.create("languageUtils")}getScriptPartFromCode(e){if(e=Ls(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ls(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(ke(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const s=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const s=this.getScriptPartFromCode(n);if(this.isSupportedCode(s))return t=s;const r=this.getLanguagePartFromCode(n);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(a=>{if(a===r)return a;if(!(a.indexOf("-")<0&&r.indexOf("-")<0)&&(a.indexOf("-")>0&&r.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===r||a.indexOf(r)===0&&r.length>1))return a})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),ke(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),s=[],r=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return ke(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):ke(e)&&r(this.formatLanguageCode(e)),n.forEach(a=>{s.indexOf(a)<0&&r(this.formatLanguageCode(a))}),s}}const Kl={zero:0,one:1,two:2,few:3,many:4,other:5},Yl={select:i=>i===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class lf{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=yn.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const n=Ls(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let a;try{a=new Intl.PluralRules(n,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Yl;if(!e.match(/-|_/))return Yl;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[r]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(s=>`${t}${s}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?n.resolvedOptions().pluralCategories.sort((s,r)=>Kl[s]-Kl[r]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t,n={}){const s=this.getRule(e,n);return s?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,n))}}const Jl=(i,e,t,n=".",s=!0)=>{let r=Zh(i,e,t);return!r&&s&&ke(t)&&(r=Ka(i,t,n),r===void 0&&(r=Ka(e,t,n))),r},sa=i=>i.replace(/\$/g,"$$$$");class cf{constructor(e={}){this.logger=yn.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(t=>t),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:s,prefix:r,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:v,nestingSuffixEscaped:_,nestingOptionsSeparator:m,maxReplaces:p,alwaysFormat:w}=e.interpolation;this.escape=t!==void 0?t:ef,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=r?Pi(r):a||"{{",this.suffix=o?Pi(o):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?Pi(h):f||Pi("$t("),this.nestingSuffix=v?Pi(v):_||Pi(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=p||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>t?.source===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,s){let r,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const p=Jl(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,n,{...s,...t,interpolationkey:f}):p}const v=f.split(this.formatSeparator),_=v.shift().trim(),m=v.join(this.formatSeparator).trim();return this.format(Jl(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...s,...t,interpolationkey:_})};this.resetRegExp();const u=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,d=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>sa(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?sa(this.escape(f)):sa(f)}].forEach(f=>{for(o=0;r=f.regex.exec(e);){const v=r[1].trim();if(a=c(v),a===void 0)if(typeof u=="function"){const m=u(e,r,s);a=ke(m)?m:""}else if(s&&Object.prototype.hasOwnProperty.call(s,v))a="";else if(d){a=r[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`),a="";else!ke(a)&&!this.useRawValueToEscape&&(a=Hl(a));const _=f.safeValue(a);if(e=e.replace(r[0],_),d?(f.regex.lastIndex+=a.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let s,r,a;const o=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,a);const f=h.match(/'/g),v=h.match(/"/g);((f?.length??0)%2===0&&!v||v.length%2!==0)&&(h=h.replace(/'/g,'"'));try{a=JSON.parse(h),c&&(a={...c,...a})}catch(_){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,_),`${l}${u}${h}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...n},a=a.replace&&!ke(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;const c=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(c!==-1&&(l=s[1].slice(c).split(this.formatSeparator).map(u=>u.trim()).filter(Boolean),s[1]=s[1].slice(0,c)),r=t(o.call(this,s[1].trim(),a),a),r&&s[0]===e&&!ke(r))return r;ke(r)||(r=Hl(r)),r||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:s[1].trim()}),r.trim())),e=e.replace(s[0],r),this.regexp.lastIndex=0}return e}}const uf=i=>{let e=i.toLowerCase().trim();const t={};if(i.indexOf("(")>-1){const n=i.split("(");e=n[0].toLowerCase().trim();const s=n[1].substring(0,n[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Zl=i=>{const e={};return(t,n,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r={...r,[s.interpolationkey]:void 0});const a=n+JSON.stringify(r);let o=e[a];return o||(o=i(Ls(n),s),e[a]=o),o(t)}},df=i=>(e,t,n)=>i(Ls(t),n)(e);class hf{constructor(e={}){this.logger=yn.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const n=t.cacheInBuiltFormats?Zl:df;this.formats={number:n((s,r)=>{const a=new Intl.NumberFormat(s,{...r});return o=>a.format(o)}),currency:n((s,r)=>{const a=new Intl.NumberFormat(s,{...r,style:"currency"});return o=>a.format(o)}),datetime:n((s,r)=>{const a=new Intl.DateTimeFormat(s,{...r});return o=>a.format(o)}),relativetime:n((s,r)=>{const a=new Intl.RelativeTimeFormat(s,{...r});return o=>a.format(o,r.range||"day")}),list:n((s,r)=>{const a=new Intl.ListFormat(s,{...r});return o=>a.format(o)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Zl(t)}format(e,t,n,s={}){const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(o=>o.indexOf(")")>-1)){const o=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,o)].join(this.formatSeparator)}return r.reduce((o,l)=>{const{formatName:c,formatOptions:u}=uf(l);if(this.formats[c]){let d=o;try{const h=s?.formatParams?.[s.interpolationkey]||{},f=h.locale||h.lng||s.locale||s.lng||n;d=this.formats[c](o,f,{...u,...s,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return o},e)}}const ff=(i,e)=>{i.pending[e]!==void 0&&(delete i.pending[e],i.pendingCount--)};class pf extends qr{constructor(e,t,n,s={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=s,this.logger=yn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,s.backend,s)}queueLoad(e,t,n,s){const r={},a={},o={},l={};return e.forEach(c=>{let u=!0;t.forEach(d=>{const h=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?a[h]===void 0&&(a[h]=!0):(this.state[h]=1,u=!1,a[h]===void 0&&(a[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(o[c]=!0)}),(Object.keys(r).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const s=e.split("|"),r=s[0],a=s[1];t&&this.emit("failedLoading",r,a,t),!t&&n&&this.store.addResourceBundle(r,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Jh(l.loaded,[r],a),ff(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{o[c]||(o[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{o[c][d]===void 0&&(o[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,n,s=0,r=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:s,wait:r,callback:a});return}this.readingCalls++;const o=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,s+1,r*2,a)},r);return}a(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>o(null,u)).catch(o):o(null,c)}catch(c){o(c)}return}return l(e,t,o)}prepareLoading(e,t,n={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ke(e)&&(e=this.languageUtils.toResolveHierarchy(e)),ke(t)&&(t=[t]);const r=this.queueLoad(e,t,n,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=""){const n=e.split("|"),s=n[0],r=n[1];this.read(s,r,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${r} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${r} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,n,s,r,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend?.create){const l={...a,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,t,n,s,l):u=c(e,t,n,s),u&&typeof u.then=="function"?u.then(d=>o(null,d)).catch(o):o(null,u)}catch(u){o(u)}else c(e,t,n,s,o,l)}!e||!e[0]||this.store.addResource(e[0],t,n,s)}}}const Ql=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:i=>{let e={};if(typeof i[1]=="object"&&(e=i[1]),ke(i[1])&&(e.defaultValue=i[1]),ke(i[2])&&(e.tDescription=i[2]),typeof i[2]=="object"||typeof i[3]=="object"){const t=i[3]||i[2];Object.keys(t).forEach(n=>{e[n]=t[n]})}return e},interpolation:{escapeValue:!0,format:i=>i,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),ec=i=>(ke(i.ns)&&(i.ns=[i.ns]),ke(i.fallbackLng)&&(i.fallbackLng=[i.fallbackLng]),ke(i.fallbackNS)&&(i.fallbackNS=[i.fallbackNS]),i.supportedLngs?.indexOf?.("cimode")<0&&(i.supportedLngs=i.supportedLngs.concat(["cimode"])),typeof i.initImmediate=="boolean"&&(i.initAsync=i.initImmediate),i),Zs=()=>{},mf=i=>{Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(t=>{typeof i[t]=="function"&&(i[t]=i[t].bind(i))})};class Is extends qr{constructor(e={},t){if(super(),this.options=ec(e),this.services={},this.logger=yn,this.modules={external:[]},mf(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(ke(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const n=Ql();this.options={...n,...this.options,...ec(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator);const s=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?yn.init(s(this.modules.logger),this.options):yn.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=hf;const u=new ql(this.options);this.store=new Wl(this.options.resources,this.options);const d=this.services;d.logger=yn,d.resourceStore=this.store,d.languageUtils=u,d.pluralResolver=new lf(u,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),c&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(d.formatter=s(c),d.formatter.init&&d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new cf(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new pf(s(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",(f,...v)=>{this.emit(f,...v)}),this.modules.languageDetector&&(d.languageDetector=s(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=s(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Br(this.services,this.options),this.translator.on("*",(f,...v)=>{this.emit(f,...v)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,t||(t=Zs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...u)=>this.store[c](...u)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...u)=>(this.store[c](...u),this)});const o=xs(),l=()=>{const c=(u,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(d),t(u,d)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),o}loadResources(e,t=Zs){let n=t;const s=ke(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],a=o=>{if(!o||o==="cimode")return;this.services.languageUtils.toResolveHierarchy(o).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};s?a(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload?.forEach?.(o=>a(o)),this.services.backendConnector.load(r,this.options.ns,o=>{!o&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(o)})}else n(null)}reloadResources(e,t,n){const s=xs();return typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=Zs),this.services.backendConnector.reload(e,t,r=>{s.resolve(),n(r)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&ju.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const n=xs();this.emit("languageChanging",e);const s=o=>{this.language=o,this.languages=this.services.languageUtils.toResolveHierarchy(o),this.resolvedLanguage=void 0,this.setResolvedLanguage(o)},r=(o,l)=>{l?this.isLanguageChangingTo===e&&(s(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,n.resolve((...c)=>this.t(...c)),t&&t(o,(...c)=>this.t(...c))},a=o=>{!e&&!o&&this.services.languageDetector&&(o=[]);const l=ke(o)?o:o&&o[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(ke(o)?[o]:o);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector?.cacheUserLanguage?.(c)),this.loadResources(c,u=>{r(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n){const s=(r,a,...o)=>{let l;typeof a!="object"?l=this.options.overloadTranslationOptionHandler([r,a].concat(o)):l={...a},l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||s.keyPrefix);const c=this.options.keySeparator||".";let u;return l.keyPrefix&&Array.isArray(r)?u=r.map(d=>(typeof d=="function"&&(d=Ya(d,{...this.options,...a})),`${l.keyPrefix}${c}${d}`)):(typeof r=="function"&&(r=Ya(r,{...this.options,...a})),u=l.keyPrefix?`${l.keyPrefix}${c}${r}`:r),this.t(u,l)};return ke(e)?s.lng=e:s.lngs=e,s.ns=t,s.keyPrefix=n,s}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const c=this.services.backendConnector.state[`${o}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!s||a(r,e)))}loadNamespaces(e,t){const n=xs();return this.options.ns?(ke(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{n.resolve(),t&&t(s)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=xs();ke(e)&&(e=[e]);const s=this.options.preload||[],r=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return r.length?(this.options.preload=s.concat(r),this.loadResources(a=>{n.resolve(),t&&t(a)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const s=new Intl.Locale(e);if(s&&s.getTextInfo){const r=s.getTextInfo();if(r&&r.direction)return r.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services?.languageUtils||new ql(Ql());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){return new Is(e,t)}cloneInstance(e={},t=Zs){const n=e.forkResourceStore;n&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},r=new Is(s);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(o=>{r[o]=this[o]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n){const o=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((u,d)=>(u[d]={...l[c][d]},u),l[c]),l),{});r.store=new Wl(o,s),r.services.resourceStore=r.store}return r.translator=new Br(r.services,s),r.translator.on("*",(o,...l)=>{r.emit(o,...l)}),r.init(s,t),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const pt=Is.createInstance();pt.createInstance=Is.createInstance;pt.createInstance;pt.dir;pt.init;pt.loadResources;pt.reloadResources;pt.use;pt.changeLanguage;pt.getFixedT;pt.t;pt.exists;pt.setDefaultNamespace;pt.hasLoadedNamespace;pt.loadNamespaces;pt.loadLanguages;const gf=(i,e,t,n)=>{const s=[t,{code:e,...n||{}}];if(i?.services?.logger?.forward)return i.services.logger.forward(s,"warn","react-i18next::",!0);Si(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),i?.services?.logger?.warn?i.services.logger.warn(...s):console?.warn&&console.warn(...s)},tc={},Ja=(i,e,t,n)=>{Si(t)&&tc[t]||(Si(t)&&(tc[t]=new Date),gf(i,e,t,n))},Gu=(i,e)=>()=>{if(i.isInitialized)e();else{const t=()=>{setTimeout(()=>{i.off("initialized",t)},0),e()};i.on("initialized",t)}},Za=(i,e,t)=>{i.loadNamespaces(e,Gu(i,t))},nc=(i,e,t,n)=>{if(Si(t)&&(t=[t]),i.options.preload&&i.options.preload.indexOf(e)>-1)return Za(i,t,n);t.forEach(s=>{i.options.ns.indexOf(s)<0&&i.options.ns.push(s)}),i.loadLanguages(e,Gu(i,n))},vf=(i,e,t={})=>!e.languages||!e.languages.length?(Ja(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(i,{lng:t.lng,precheck:(n,s)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,i))return!1}}),Si=i=>typeof i=="string",_f=i=>typeof i=="object"&&i!==null,xf=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,yf={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},bf=i=>yf[i],Sf=i=>i.replace(xf,bf);let Qa={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Sf};const wf=(i={})=>{Qa={...Qa,...i}},Ef=()=>Qa;let Wu;const Mf=i=>{Wu=i},Tf=()=>Wu,Af={type:"3rdParty",init(i){wf(i.options.react),Mf(i)}},Rf=Z.createContext();class Cf{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Pf=(i,e)=>{const t=Z.useRef();return Z.useEffect(()=>{t.current=i},[i,e]),t.current},$u=(i,e,t,n)=>i.getFixedT(e,t,n),Nf=(i,e,t,n)=>Z.useCallback($u(i,e,t,n),[i,e,t,n]),Ai=(i,e={})=>{const{i18n:t}=e,{i18n:n,defaultNS:s}=Z.useContext(Rf)||{},r=t||n||Tf();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new Cf),!r){Ja(r,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const y=(A,C)=>Si(C)?C:_f(C)&&Si(C.defaultValue)?C.defaultValue:Array.isArray(A)?A[A.length-1]:A,R=[y,{},!1];return R.t=y,R.i18n={},R.ready=!1,R}r.options.react?.wait&&Ja(r,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...Ef(),...r.options.react,...e},{useSuspense:o,keyPrefix:l}=a;let c=s||r.options?.defaultNS;c=Si(c)?[c]:c||["translation"],r.reportNamespaces.addUsedNamespaces?.(c);const u=(r.isInitialized||r.initializedStoreOnce)&&c.every(y=>vf(y,r,a)),d=Nf(r,e.lng||null,a.nsMode==="fallback"?c:c[0],l),h=()=>d,f=()=>$u(r,e.lng||null,a.nsMode==="fallback"?c:c[0],l),[v,_]=Z.useState(h);let m=c.join();e.lng&&(m=`${e.lng}${m}`);const p=Pf(m),w=Z.useRef(!0);Z.useEffect(()=>{const{bindI18n:y,bindI18nStore:R}=a;w.current=!0,!u&&!o&&(e.lng?nc(r,e.lng,c,()=>{w.current&&_(f)}):Za(r,c,()=>{w.current&&_(f)})),u&&p&&p!==m&&w.current&&_(f);const A=()=>{w.current&&_(f)};return y&&r?.on(y,A),R&&r?.store.on(R,A),()=>{w.current=!1,r&&y&&y?.split(" ").forEach(C=>r.off(C,A)),R&&r&&R.split(" ").forEach(C=>r.store.off(C,A))}},[r,m]),Z.useEffect(()=>{w.current&&u&&_(h)},[r,l,u]);const b=[v,r,u];if(b.t=v,b.i18n=r,b.ready=u,u||!u&&!o)return b;throw new Promise(y=>{e.lng?nc(r,e.lng,c,()=>y()):Za(r,c,()=>y())})},Lf="Portfolio",If={language:{title:"Language"},nav:{home:"Home",about:"About",projects:"Projects",contact:"Contact"},auth:{signIn:"Sign In",signOut:"Sign Out"}},Df={hero:{title:"Creative Developer",subtitle:"Building innovative digital solutions with passion and precision."},features:{title:"Features",description:"Explore the cutting-edge technologies and tools I specialize in to bring your ideas to life."},skills:{title:"Skills",description:"A diverse set of skills that empower me to create exceptional digital experiences."}},Uf={description:"Crafting digital experiences with modern technologies and creative solutions.",socialLinks:{github:"GitHub",linkedin:"LinkedIn",email:"Email"},quick_links:"Quick Links",Connect:"Connect",navigation:{home:"Home",about:"About",projects:"Projects",contact:"Contact"}},Of={title:Lf,header:If,home:Df,footer:Uf},kf="الملف الشخصي",Ff={language:{title:"اللغة"},nav:{home:"الرئيسية",about:"من نحن",projects:"المشاريع",contact:"اتصل بنا"},auth:{signIn:"تسجيل الدخول",signOut:"تسجيل الخروج"}},Bf={hero:{title:"مطور مبدع",subtitle:"بناء حلول رقمية مبتكرة بشغف ودقة."},features:{title:"الميزات",description:"استكشف التقنيات والأدوات المتطورة التي أتخصص فيها لتحقيق أفكارك."},skills:{title:"المهارات",description:"مجموعة متنوعة من المهارات التي تمكنني من إنشاء تجارب رقمية استثنائية."}},zf={description:"انشاء تجارب رقمية باستخدام تقنيات حديثة وحلول إبداعية.",socialLinks:{github:"GitHub",linkedin:"LinkedIn",email:"البريد الإلكتروني"},quick_links:"روابط سريعة",Connect:"تواصل",navigation:{home:"الرئيسية",about:"من نحن",projects:"المشاريع",contact:"اتصل بنا"}},Hf={title:kf,header:Ff,home:Bf,footer:zf},{slice:jf,forEach:Vf}=[];function Gf(i){return Vf.call(jf.call(arguments,1),e=>{if(e)for(const t in e)i[t]===void 0&&(i[t]=e[t])}),i}function Wf(i){return typeof i!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(i))}const ic=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,$f=function(i,e){const n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let r=`${i}=${s}`;if(n.maxAge>0){const a=n.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(a)}`}if(n.domain){if(!ic.test(n.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${n.domain}`}if(n.path){if(!ic.test(n.path))throw new TypeError("option path is invalid");r+=`; Path=${n.path}`}if(n.expires){if(typeof n.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(r+="; Partitioned"),r},sc={create(i,e,t,n){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),n&&(s.domain=n),document.cookie=$f(i,e,s)},read(i){const e=`${i}=`,t=document.cookie.split(";");for(let n=0;n<t.length;n++){let s=t[n];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(i,e){this.create(i,"",-1,e)}};var Xf={name:"cookie",lookup(i){let{lookupCookie:e}=i;if(e&&typeof document<"u")return sc.read(e)||void 0},cacheUserLanguage(i,e){let{lookupCookie:t,cookieMinutes:n,cookieDomain:s,cookieOptions:r}=e;t&&typeof document<"u"&&sc.create(t,i,n,s,r)}},qf={name:"querystring",lookup(i){let{lookupQuerystring:e}=i,t;if(typeof window<"u"){let{search:n}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(n=window.location.hash.substring(window.location.hash.indexOf("?")));const r=n.substring(1).split("&");for(let a=0;a<r.length;a++){const o=r[a].indexOf("=");o>0&&r[a].substring(0,o)===e&&(t=r[a].substring(o+1))}}return t}},Kf={name:"hash",lookup(i){let{lookupHash:e,lookupFromHashIndex:t}=i,n;if(typeof window<"u"){const{hash:s}=window.location;if(s&&s.length>2){const r=s.substring(1);if(e){const a=r.split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(n=a[o].substring(l+1))}}if(n)return n;if(!n&&t>-1){const a=s.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?a[typeof t=="number"?t:0]?.replace("/",""):void 0}}}return n}};let Ni=null;const rc=()=>{if(Ni!==null)return Ni;try{if(Ni=typeof window<"u"&&window.localStorage!==null,!Ni)return!1;const i="i18next.translate.boo";window.localStorage.setItem(i,"foo"),window.localStorage.removeItem(i)}catch{Ni=!1}return Ni};var Yf={name:"localStorage",lookup(i){let{lookupLocalStorage:e}=i;if(e&&rc())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(i,e){let{lookupLocalStorage:t}=e;t&&rc()&&window.localStorage.setItem(t,i)}};let Li=null;const ac=()=>{if(Li!==null)return Li;try{if(Li=typeof window<"u"&&window.sessionStorage!==null,!Li)return!1;const i="i18next.translate.boo";window.sessionStorage.setItem(i,"foo"),window.sessionStorage.removeItem(i)}catch{Li=!1}return Li};var Jf={name:"sessionStorage",lookup(i){let{lookupSessionStorage:e}=i;if(e&&ac())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(i,e){let{lookupSessionStorage:t}=e;t&&ac()&&window.sessionStorage.setItem(t,i)}},Zf={name:"navigator",lookup(i){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:n,language:s}=navigator;if(t)for(let r=0;r<t.length;r++)e.push(t[r]);n&&e.push(n),s&&e.push(s)}return e.length>0?e:void 0}},Qf={name:"htmlTag",lookup(i){let{htmlTag:e}=i,t;const n=e||(typeof document<"u"?document.documentElement:null);return n&&typeof n.getAttribute=="function"&&(t=n.getAttribute("lang")),t}},ep={name:"path",lookup(i){let{lookupFromPathIndex:e}=i;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?t[typeof e=="number"?e:0]?.replace("/",""):void 0}},tp={name:"subdomain",lookup(i){let{lookupFromSubdomainIndex:e}=i;const t=typeof e=="number"?e+1:1,n=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(n)return n[t]}};let Xu=!1;try{document.cookie,Xu=!0}catch{}const qu=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Xu||qu.splice(1,1);const np=()=>({order:qu,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:i=>i});class Ku{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Gf(t,this.options||{},np()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Xf),this.addDetector(qf),this.addDetector(Yf),this.addDetector(Jf),this.addDetector(Zf),this.addDetector(Qf),this.addDetector(ep),this.addDetector(tp),this.addDetector(Kf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(n=>{if(this.detectors[n]){let s=this.detectors[n].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.filter(n=>n!=null&&!Wf(n)).map(n=>this.options.convertDetectedLanguage(n)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(n=>{this.detectors[n]&&this.detectors[n].cacheUserLanguage(e,this.options)}))}}Ku.type="languageDetector";pt.use(Ku).use(Af).init({resources:{en:{translation:Of},ar:{translation:Hf}},supportedLngs:["en","ar"],fallbackLng:"en",detection:{order:["localStorage","navigator"],caches:["localStorage"]},react:{useSuspense:!1},interpolation:{escapeValue:!1},debug:!1});let ip={data:""},sp=i=>typeof window=="object"?((i?i.querySelector("#_goober"):window._goober)||Object.assign((i||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:i||ip,rp=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ap=/\/\*[^]*?\*\/|  +/g,oc=/\n+/g,Xn=(i,e)=>{let t="",n="",s="";for(let r in i){let a=i[r];r[0]=="@"?r[1]=="i"?t=r+" "+a+";":n+=r[1]=="f"?Xn(a,r):r+"{"+Xn(a,r[1]=="k"?"":e)+"}":typeof a=="object"?n+=Xn(a,e?e.replace(/([^,])+/g,o=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):r):a!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Xn.p?Xn.p(r,a):r+":"+a+";")}return t+(e&&s?e+"{"+s+"}":s)+n},Mn={},Yu=i=>{if(typeof i=="object"){let e="";for(let t in i)e+=t+Yu(i[t]);return e}return i},op=(i,e,t,n,s)=>{let r=Yu(i),a=Mn[r]||(Mn[r]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(r));if(!Mn[a]){let l=r!==i?i:(c=>{let u,d,h=[{}];for(;u=rp.exec(c.replace(ap,""));)u[4]?h.shift():u[3]?(d=u[3].replace(oc," ").trim(),h.unshift(h[0][d]=h[0][d]||{})):h[0][u[1]]=u[2].replace(oc," ").trim();return h[0]})(i);Mn[a]=Xn(s?{["@keyframes "+a]:l}:l,t?"":"."+a)}let o=t&&Mn.g?Mn.g:null;return t&&(Mn.g=Mn[a]),((l,c,u,d)=>{d?c.data=c.data.replace(d,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(Mn[a],e,n,o),a},lp=(i,e,t)=>i.reduce((n,s,r)=>{let a=e[r];if(a&&a.call){let o=a(t),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;a=l?"."+l:o&&typeof o=="object"?o.props?"":Xn(o,""):o===!1?"":o}return n+s+(a??"")},"");function Kr(i){let e=this||{},t=i.call?i(e.p):i;return op(t.unshift?t.raw?lp(t,[].slice.call(arguments,1),e.p):t.reduce((n,s)=>Object.assign(n,s&&s.call?s(e.p):s),{}):t,sp(e.target),e.g,e.o,e.k)}let Ju,eo,to;Kr.bind({g:1});let On=Kr.bind({k:1});function cp(i,e,t,n){Xn.p=e,Ju=i,eo=t,to=n}function Qn(i,e){let t=this||{};return function(){let n=arguments;function s(r,a){let o=Object.assign({},r),l=o.className||s.className;t.p=Object.assign({theme:eo&&eo()},o),t.o=/ *go\d+/.test(l),o.className=Kr.apply(t,n)+(l?" "+l:"");let c=i;return i[0]&&(c=o.as||i,delete o.as),to&&c[0]&&to(o),Ju(c,o)}return s}}var up=i=>typeof i=="function",zr=(i,e)=>up(i)?i(e):i,dp=(()=>{let i=0;return()=>(++i).toString()})(),Zu=(()=>{let i;return()=>{if(i===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i}})(),hp=20,dl="default",Qu=(i,e)=>{let{toastLimit:t}=i.settings;switch(e.type){case 0:return{...i,toasts:[e.toast,...i.toasts].slice(0,t)};case 1:return{...i,toasts:i.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:n}=e;return Qu(i,{type:i.toasts.find(a=>a.id===n.id)?1:0,toast:n});case 3:let{toastId:s}=e;return{...i,toasts:i.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...i,pausedAt:e.time};case 6:let r=e.time-(i.pausedAt||0);return{...i,pausedAt:void 0,toasts:i.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+r}))}}},Cr=[],ed={toasts:[],pausedAt:void 0,settings:{toastLimit:hp}},bn={},td=(i,e=dl)=>{bn[e]=Qu(bn[e]||ed,i),Cr.forEach(([t,n])=>{t===e&&n(bn[e])})},nd=i=>Object.keys(bn).forEach(e=>td(i,e)),fp=i=>Object.keys(bn).find(e=>bn[e].toasts.some(t=>t.id===i)),Yr=(i=dl)=>e=>{td(e,i)},pp={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mp=(i={},e=dl)=>{let[t,n]=Z.useState(bn[e]||ed),s=Z.useRef(bn[e]);Z.useEffect(()=>(s.current!==bn[e]&&n(bn[e]),Cr.push([e,n]),()=>{let a=Cr.findIndex(([o])=>o===e);a>-1&&Cr.splice(a,1)}),[e]);let r=t.toasts.map(a=>{var o,l,c;return{...i,...i[a.type],...a,removeDelay:a.removeDelay||((o=i[a.type])==null?void 0:o.removeDelay)||i?.removeDelay,duration:a.duration||((l=i[a.type])==null?void 0:l.duration)||i?.duration||pp[a.type],style:{...i.style,...(c=i[a.type])==null?void 0:c.style,...a.style}}});return{...t,toasts:r}},gp=(i,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:i,pauseDuration:0,...t,id:t?.id||dp()}),Bs=i=>(e,t)=>{let n=gp(e,i,t);return Yr(n.toasterId||fp(n.id))({type:2,toast:n}),n.id},Et=(i,e)=>Bs("blank")(i,e);Et.error=Bs("error");Et.success=Bs("success");Et.loading=Bs("loading");Et.custom=Bs("custom");Et.dismiss=(i,e)=>{let t={type:3,toastId:i};e?Yr(e)(t):nd(t)};Et.dismissAll=i=>Et.dismiss(void 0,i);Et.remove=(i,e)=>{let t={type:4,toastId:i};e?Yr(e)(t):nd(t)};Et.removeAll=i=>Et.remove(void 0,i);Et.promise=(i,e,t)=>{let n=Et.loading(e.loading,{...t,...t?.loading});return typeof i=="function"&&(i=i()),i.then(s=>{let r=e.success?zr(e.success,s):void 0;return r?Et.success(r,{id:n,...t,...t?.success}):Et.dismiss(n),s}).catch(s=>{let r=e.error?zr(e.error,s):void 0;r?Et.error(r,{id:n,...t,...t?.error}):Et.dismiss(n)}),i};var vp=1e3,_p=(i,e="default")=>{let{toasts:t,pausedAt:n}=mp(i,e),s=Z.useRef(new Map).current,r=Z.useCallback((d,h=vp)=>{if(s.has(d))return;let f=setTimeout(()=>{s.delete(d),a({type:4,toastId:d})},h);s.set(d,f)},[]);Z.useEffect(()=>{if(n)return;let d=Date.now(),h=t.map(f=>{if(f.duration===1/0)return;let v=(f.duration||0)+f.pauseDuration-(d-f.createdAt);if(v<0){f.visible&&Et.dismiss(f.id);return}return setTimeout(()=>Et.dismiss(f.id,e),v)});return()=>{h.forEach(f=>f&&clearTimeout(f))}},[t,n,e]);let a=Z.useCallback(Yr(e),[e]),o=Z.useCallback(()=>{a({type:5,time:Date.now()})},[a]),l=Z.useCallback((d,h)=>{a({type:1,toast:{id:d,height:h}})},[a]),c=Z.useCallback(()=>{n&&a({type:6,time:Date.now()})},[n,a]),u=Z.useCallback((d,h)=>{let{reverseOrder:f=!1,gutter:v=8,defaultPosition:_}=h||{},m=t.filter(b=>(b.position||_)===(d.position||_)&&b.height),p=m.findIndex(b=>b.id===d.id),w=m.filter((b,y)=>y<p&&b.visible).length;return m.filter(b=>b.visible).slice(...f?[w+1]:[0,w]).reduce((b,y)=>b+(y.height||0)+v,0)},[t]);return Z.useEffect(()=>{t.forEach(d=>{if(d.dismissed)r(d.id,d.removeDelay);else{let h=s.get(d.id);h&&(clearTimeout(h),s.delete(d.id))}})},[t,r]),{toasts:t,handlers:{updateHeight:l,startPause:o,endPause:c,calculateOffset:u}}},xp=On`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,yp=On`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bp=On`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Sp=Qn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xp} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${yp} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${i=>i.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bp} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,wp=On`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ep=Qn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${i=>i.secondary||"#e0e0e0"};
  border-right-color: ${i=>i.primary||"#616161"};
  animation: ${wp} 1s linear infinite;
`,Mp=On`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Tp=On`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ap=Qn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Mp} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Tp} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${i=>i.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Rp=Qn("div")`
  position: absolute;
`,Cp=Qn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Pp=On`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Np=Qn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Pp} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Lp=({toast:i})=>{let{icon:e,type:t,iconTheme:n}=i;return e!==void 0?typeof e=="string"?Z.createElement(Np,null,e):e:t==="blank"?null:Z.createElement(Cp,null,Z.createElement(Ep,{...n}),t!=="loading"&&Z.createElement(Rp,null,t==="error"?Z.createElement(Sp,{...n}):Z.createElement(Ap,{...n})))},Ip=i=>`
0% {transform: translate3d(0,${i*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Dp=i=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i*-150}%,-1px) scale(.6); opacity:0;}
`,Up="0%{opacity:0;} 100%{opacity:1;}",Op="0%{opacity:1;} 100%{opacity:0;}",kp=Qn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Fp=Qn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Bp=(i,e)=>{let t=i.includes("top")?1:-1,[n,s]=Zu()?[Up,Op]:[Ip(t),Dp(t)];return{animation:e?`${On(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${On(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},zp=Z.memo(({toast:i,position:e,style:t,children:n})=>{let s=i.height?Bp(i.position||e||"top-center",i.visible):{opacity:0},r=Z.createElement(Lp,{toast:i}),a=Z.createElement(Fp,{...i.ariaProps},zr(i.message,i));return Z.createElement(kp,{className:i.className,style:{...s,...t,...i.style}},typeof n=="function"?n({icon:r,message:a}):Z.createElement(Z.Fragment,null,r,a))});cp(Z.createElement);var Hp=({id:i,className:e,style:t,onHeightUpdate:n,children:s})=>{let r=Z.useCallback(a=>{if(a){let o=()=>{let l=a.getBoundingClientRect().height;n(i,l)};o(),new MutationObserver(o).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[i,n]);return Z.createElement("div",{ref:r,className:e,style:t},s)},jp=(i,e)=>{let t=i.includes("top"),n=t?{top:0}:{bottom:0},s=i.includes("center")?{justifyContent:"center"}:i.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Zu()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...n,...s}},Vp=Kr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Qs=16,Gp=({reverseOrder:i,position:e="top-center",toastOptions:t,gutter:n,children:s,toasterId:r,containerStyle:a,containerClassName:o})=>{let{toasts:l,handlers:c}=_p(t,r);return Z.createElement("div",{"data-rht-toaster":r||"",style:{position:"fixed",zIndex:9999,top:Qs,left:Qs,right:Qs,bottom:Qs,pointerEvents:"none",...a},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let d=u.position||e,h=c.calculateOffset(u,{reverseOrder:i,gutter:n,defaultPosition:e}),f=jp(d,h);return Z.createElement(Hp,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Vp:"",style:f},u.type==="custom"?zr(u.message,u):s?s(u):Z.createElement(zp,{toast:u,position:d}))}))},ln=Et;const id=Z.createContext(void 0),Wp=()=>{const i=Z.useContext(id);if(i===void 0)throw new Error("useTheme must be used within a ThemeProvider");return i},$p=({children:i})=>{const[e,t]=Z.useState(()=>{const s=localStorage.getItem("theme"),r=window.matchMedia("(prefers-color-scheme: dark)").matches;return s==="dark"||!s&&r});Z.useEffect(()=>{document.documentElement.classList.toggle("dark",e),localStorage.setItem("theme",e?"dark":"light")},[e]);const n=()=>t(s=>!s);return g.jsx(id.Provider,{value:{isDarkMode:e,toggleTheme:n},children:i})},Xp="modulepreload",qp=function(i){return"/modren-portfolio/"+i},lc={},zs=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");s=l(t.map(c=>{if(c=qp(c),c in lc)return;lc[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Xp,u||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((f,v)=>{h.addEventListener("load",f),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Kp=i=>{let e;return i?e=i:typeof fetch>"u"?e=(...t)=>zs(async()=>{const{default:n}=await Promise.resolve().then(()=>ms);return{default:n}},void 0).then(({default:n})=>n(...t)):e=fetch,(...t)=>e(...t)};class hl extends Error{constructor(e,t="FunctionsError",n){super(e),this.name=t,this.context=n}}class Yp extends hl{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class cc extends hl{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class uc extends hl{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var no;(function(i){i.Any="any",i.ApNortheast1="ap-northeast-1",i.ApNortheast2="ap-northeast-2",i.ApSouth1="ap-south-1",i.ApSoutheast1="ap-southeast-1",i.ApSoutheast2="ap-southeast-2",i.CaCentral1="ca-central-1",i.EuCentral1="eu-central-1",i.EuWest1="eu-west-1",i.EuWest2="eu-west-2",i.EuWest3="eu-west-3",i.SaEast1="sa-east-1",i.UsEast1="us-east-1",i.UsWest1="us-west-1",i.UsWest2="us-west-2"})(no||(no={}));var Jp=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};class Zp{constructor(e,{headers:t={},customFetch:n,region:s=no.Any}={}){this.url=e,this.headers=t,this.region=s,this.fetch=Kp(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,t={}){var n;return Jp(this,void 0,void 0,function*(){try{const{headers:s,method:r,body:a}=t;let o={},{region:l}=t;l||(l=this.region);const c=new URL(`${this.url}/${e}`);l&&l!=="any"&&(o["x-region"]=l,c.searchParams.set("forceFunctionRegion",l));let u;a&&(s&&!Object.prototype.hasOwnProperty.call(s,"Content-Type")||!s)&&(typeof Blob<"u"&&a instanceof Blob||a instanceof ArrayBuffer?(o["Content-Type"]="application/octet-stream",u=a):typeof a=="string"?(o["Content-Type"]="text/plain",u=a):typeof FormData<"u"&&a instanceof FormData?u=a:(o["Content-Type"]="application/json",u=JSON.stringify(a)));const d=yield this.fetch(c.toString(),{method:r||"POST",headers:Object.assign(Object.assign(Object.assign({},o),this.headers),s),body:u}).catch(_=>{throw new Yp(_)}),h=d.headers.get("x-relay-error");if(h&&h==="true")throw new cc(d);if(!d.ok)throw new uc(d);let f=((n=d.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),v;return f==="application/json"?v=yield d.json():f==="application/octet-stream"?v=yield d.blob():f==="text/event-stream"?v=d:f==="multipart/form-data"?v=yield d.formData():v=yield d.text(),{data:v,error:null,response:d}}catch(s){return{data:null,error:s,response:s instanceof uc||s instanceof cc?s.context:void 0}}})}}var Rt={},Ii={},Di={},Ui={},Oi={},ki={},Qp=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},ls=Qp();const em=ls.fetch,sd=ls.fetch.bind(ls),rd=ls.Headers,tm=ls.Request,nm=ls.Response,ms=Object.freeze(Object.defineProperty({__proto__:null,Headers:rd,Request:tm,Response:nm,default:sd,fetch:em},Symbol.toStringTag,{value:"Module"})),im=Hh(ms);var er={},dc;function ad(){if(dc)return er;dc=1,Object.defineProperty(er,"__esModule",{value:!0});class i extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}}return er.default=i,er}var hc;function od(){if(hc)return ki;hc=1;var i=ki&&ki.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ki,"__esModule",{value:!0});const e=i(im),t=i(ad());class n{constructor(r){var a,o;this.shouldThrowOnError=!1,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(a=r.shouldThrowOnError)!==null&&a!==void 0?a:!1,this.signal=r.signal,this.isMaybeSingle=(o=r.isMaybeSingle)!==null&&o!==void 0?o:!1,r.fetch?this.fetch=r.fetch:typeof fetch>"u"?this.fetch=e.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,a){return this.headers=new Headers(this.headers),this.headers.set(r,a),this}then(r,a){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const o=this.fetch;let l=o(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async c=>{var u,d,h,f;let v=null,_=null,m=null,p=c.status,w=c.statusText;if(c.ok){if(this.method!=="HEAD"){const A=await c.text();A===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((u=this.headers.get("Accept"))===null||u===void 0)&&u.includes("application/vnd.pgrst.plan+text"))?_=A:_=JSON.parse(A))}const y=(d=this.headers.get("Prefer"))===null||d===void 0?void 0:d.match(/count=(exact|planned|estimated)/),R=(h=c.headers.get("content-range"))===null||h===void 0?void 0:h.split("/");y&&R&&R.length>1&&(m=parseInt(R[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(_)&&(_.length>1?(v={code:"PGRST116",details:`Results contain ${_.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},_=null,m=null,p=406,w="Not Acceptable"):_.length===1?_=_[0]:_=null)}else{const y=await c.text();try{v=JSON.parse(y),Array.isArray(v)&&c.status===404&&(_=[],v=null,p=200,w="OK")}catch{c.status===404&&y===""?(p=204,w="No Content"):v={message:y}}if(v&&this.isMaybeSingle&&(!((f=v?.details)===null||f===void 0)&&f.includes("0 rows"))&&(v=null,p=200,w="OK"),v&&this.shouldThrowOnError)throw new t.default(v)}return{error:v,data:_,count:m,status:p,statusText:w}});return this.shouldThrowOnError||(l=l.catch(c=>{var u,d,h;return{error:{message:`${(u=c?.name)!==null&&u!==void 0?u:"FetchError"}: ${c?.message}`,details:`${(d=c?.stack)!==null&&d!==void 0?d:""}`,hint:"",code:`${(h=c?.code)!==null&&h!==void 0?h:""}`},data:null,count:null,status:0,statusText:""}})),l.then(r,a)}returns(){return this}overrideTypes(){return this}}return ki.default=n,ki}var fc;function ld(){if(fc)return Oi;fc=1;var i=Oi&&Oi.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Oi,"__esModule",{value:!0});const e=i(od());class t extends e.default{select(s){let r=!1;const a=(s??"*").split("").map(o=>/\s/.test(o)&&!r?"":(o==='"'&&(r=!r),o)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(s,{ascending:r=!0,nullsFirst:a,foreignTable:o,referencedTable:l=o}={}){const c=l?`${l}.order`:"order",u=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${u?`${u},`:""}${s}.${r?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(s,{foreignTable:r,referencedTable:a=r}={}){const o=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(o,`${s}`),this}range(s,r,{foreignTable:a,referencedTable:o=a}={}){const l=typeof o>"u"?"offset":`${o}.offset`,c=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(l,`${s}`),this.url.searchParams.set(c,`${r-s+1}`),this}abortSignal(s){return this.signal=s,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:s=!1,verbose:r=!1,settings:a=!1,buffers:o=!1,wal:l=!1,format:c="text"}={}){var u;const d=[s?"analyze":null,r?"verbose":null,a?"settings":null,o?"buffers":null,l?"wal":null].filter(Boolean).join("|"),h=(u=this.headers.get("Accept"))!==null&&u!==void 0?u:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${h}"; options=${d};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(s){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${s}`),this}}return Oi.default=t,Oi}var pc;function fl(){if(pc)return Ui;pc=1;var i=Ui&&Ui.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ui,"__esModule",{value:!0});const e=i(ld());class t extends e.default{eq(s,r){return this.url.searchParams.append(s,`eq.${r}`),this}neq(s,r){return this.url.searchParams.append(s,`neq.${r}`),this}gt(s,r){return this.url.searchParams.append(s,`gt.${r}`),this}gte(s,r){return this.url.searchParams.append(s,`gte.${r}`),this}lt(s,r){return this.url.searchParams.append(s,`lt.${r}`),this}lte(s,r){return this.url.searchParams.append(s,`lte.${r}`),this}like(s,r){return this.url.searchParams.append(s,`like.${r}`),this}likeAllOf(s,r){return this.url.searchParams.append(s,`like(all).{${r.join(",")}}`),this}likeAnyOf(s,r){return this.url.searchParams.append(s,`like(any).{${r.join(",")}}`),this}ilike(s,r){return this.url.searchParams.append(s,`ilike.${r}`),this}ilikeAllOf(s,r){return this.url.searchParams.append(s,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(s,r){return this.url.searchParams.append(s,`ilike(any).{${r.join(",")}}`),this}is(s,r){return this.url.searchParams.append(s,`is.${r}`),this}in(s,r){const a=Array.from(new Set(r)).map(o=>typeof o=="string"&&new RegExp("[,()]").test(o)?`"${o}"`:`${o}`).join(",");return this.url.searchParams.append(s,`in.(${a})`),this}contains(s,r){return typeof r=="string"?this.url.searchParams.append(s,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(s,`cs.{${r.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(r)}`),this}containedBy(s,r){return typeof r=="string"?this.url.searchParams.append(s,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(s,`cd.{${r.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(r)}`),this}rangeGt(s,r){return this.url.searchParams.append(s,`sr.${r}`),this}rangeGte(s,r){return this.url.searchParams.append(s,`nxl.${r}`),this}rangeLt(s,r){return this.url.searchParams.append(s,`sl.${r}`),this}rangeLte(s,r){return this.url.searchParams.append(s,`nxr.${r}`),this}rangeAdjacent(s,r){return this.url.searchParams.append(s,`adj.${r}`),this}overlaps(s,r){return typeof r=="string"?this.url.searchParams.append(s,`ov.${r}`):this.url.searchParams.append(s,`ov.{${r.join(",")}}`),this}textSearch(s,r,{config:a,type:o}={}){let l="";o==="plain"?l="pl":o==="phrase"?l="ph":o==="websearch"&&(l="w");const c=a===void 0?"":`(${a})`;return this.url.searchParams.append(s,`${l}fts${c}.${r}`),this}match(s){return Object.entries(s).forEach(([r,a])=>{this.url.searchParams.append(r,`eq.${a}`)}),this}not(s,r,a){return this.url.searchParams.append(s,`not.${r}.${a}`),this}or(s,{foreignTable:r,referencedTable:a=r}={}){const o=a?`${a}.or`:"or";return this.url.searchParams.append(o,`(${s})`),this}filter(s,r,a){return this.url.searchParams.append(s,`${r}.${a}`),this}}return Ui.default=t,Ui}var mc;function cd(){if(mc)return Di;mc=1;var i=Di&&Di.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Di,"__esModule",{value:!0});const e=i(fl());class t{constructor(s,{headers:r={},schema:a,fetch:o}){this.url=s,this.headers=new Headers(r),this.schema=a,this.fetch=o}select(s,{head:r=!1,count:a}={}){const o=r?"HEAD":"GET";let l=!1;const c=(s??"*").split("").map(u=>/\s/.test(u)&&!l?"":(u==='"'&&(l=!l),u)).join("");return this.url.searchParams.set("select",c),a&&this.headers.append("Prefer",`count=${a}`),new e.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(s,{count:r,defaultToNull:a=!0}={}){var o;const l="POST";if(r&&this.headers.append("Prefer",`count=${r}`),a||this.headers.append("Prefer","missing=default"),Array.isArray(s)){const c=s.reduce((u,d)=>u.concat(Object.keys(d)),[]);if(c.length>0){const u=[...new Set(c)].map(d=>`"${d}"`);this.url.searchParams.set("columns",u.join(","))}}return new e.default({method:l,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}upsert(s,{onConflict:r,ignoreDuplicates:a=!1,count:o,defaultToNull:l=!0}={}){var c;const u="POST";if(this.headers.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),r!==void 0&&this.url.searchParams.set("on_conflict",r),o&&this.headers.append("Prefer",`count=${o}`),l||this.headers.append("Prefer","missing=default"),Array.isArray(s)){const d=s.reduce((h,f)=>h.concat(Object.keys(f)),[]);if(d.length>0){const h=[...new Set(d)].map(f=>`"${f}"`);this.url.searchParams.set("columns",h.join(","))}}return new e.default({method:u,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch})}update(s,{count:r}={}){var a;const o="PATCH";return r&&this.headers.append("Prefer",`count=${r}`),new e.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}delete({count:s}={}){var r;const a="DELETE";return s&&this.headers.append("Prefer",`count=${s}`),new e.default({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch})}}return Di.default=t,Di}var gc;function sm(){if(gc)return Ii;gc=1;var i=Ii&&Ii.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ii,"__esModule",{value:!0});const e=i(cd()),t=i(fl());class n{constructor(r,{headers:a={},schema:o,fetch:l}={}){this.url=r,this.headers=new Headers(a),this.schemaName=o,this.fetch=l}from(r){const a=new URL(`${this.url}/${r}`);return new e.default(a,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(r){return new n(this.url,{headers:this.headers,schema:r,fetch:this.fetch})}rpc(r,a={},{head:o=!1,get:l=!1,count:c}={}){var u;let d;const h=new URL(`${this.url}/rpc/${r}`);let f;o||l?(d=o?"HEAD":"GET",Object.entries(a).filter(([_,m])=>m!==void 0).map(([_,m])=>[_,Array.isArray(m)?`{${m.join(",")}}`:`${m}`]).forEach(([_,m])=>{h.searchParams.append(_,m)})):(d="POST",f=a);const v=new Headers(this.headers);return c&&v.set("Prefer",`count=${c}`),new t.default({method:d,url:h,headers:v,schema:this.schemaName,body:f,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch})}}return Ii.default=n,Ii}var vc;function rm(){if(vc)return Rt;vc=1;var i=Rt&&Rt.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Rt,"__esModule",{value:!0}),Rt.PostgrestError=Rt.PostgrestBuilder=Rt.PostgrestTransformBuilder=Rt.PostgrestFilterBuilder=Rt.PostgrestQueryBuilder=Rt.PostgrestClient=void 0;const e=i(sm());Rt.PostgrestClient=e.default;const t=i(cd());Rt.PostgrestQueryBuilder=t.default;const n=i(fl());Rt.PostgrestFilterBuilder=n.default;const s=i(ld());Rt.PostgrestTransformBuilder=s.default;const r=i(od());Rt.PostgrestBuilder=r.default;const a=i(ad());return Rt.PostgrestError=a.default,Rt.default={PostgrestClient:e.default,PostgrestQueryBuilder:t.default,PostgrestFilterBuilder:n.default,PostgrestTransformBuilder:s.default,PostgrestBuilder:r.default,PostgrestError:a.default},Rt}var am=rm();const om=jh(am),{PostgrestClient:lm,PostgrestQueryBuilder:Gw,PostgrestFilterBuilder:Ww,PostgrestTransformBuilder:$w,PostgrestBuilder:Xw,PostgrestError:qw}=om;class cm{static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const t=process.versions;if(t&&t.node){const n=t.node,s=parseInt(n.replace(/^v/,"").split(".")[0]);return s>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${s} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${s} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static createWebSocket(e,t){const n=this.getWebSocketConstructor();return new n(e,t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const um="2.15.5",dm=`realtime-js/${um}`,hm="1.0.0",io=1e4,fm=1e3,pm=100;var Rs;(function(i){i[i.connecting=0]="connecting",i[i.open=1]="open",i[i.closing=2]="closing",i[i.closed=3]="closed"})(Rs||(Rs={}));var bt;(function(i){i.closed="closed",i.errored="errored",i.joined="joined",i.joining="joining",i.leaving="leaving"})(bt||(bt={}));var cn;(function(i){i.close="phx_close",i.error="phx_error",i.join="phx_join",i.reply="phx_reply",i.leave="phx_leave",i.access_token="access_token"})(cn||(cn={}));var so;(function(i){i.websocket="websocket"})(so||(so={}));var vi;(function(i){i.Connecting="connecting",i.Open="open",i.Closing="closing",i.Closed="closed"})(vi||(vi={}));class mm{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),n=new TextDecoder;return this._decodeBroadcast(e,t,n)}_decodeBroadcast(e,t,n){const s=t.getUint8(1),r=t.getUint8(2);let a=this.HEADER_LENGTH+2;const o=n.decode(e.slice(a,a+s));a=a+s;const l=n.decode(e.slice(a,a+r));a=a+r;const c=JSON.parse(n.decode(e.slice(a,e.byteLength)));return{ref:null,topic:o,event:l,payload:c}}}let ud=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}};var dt;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})(dt||(dt={}));const _c=(i,e,t={})=>{var n;const s=(n=t.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(e).reduce((r,a)=>(r[a]=gm(a,i,e,s),r),{})},gm=(i,e,t,n)=>{const s=e.find(o=>o.name===i),r=s?.type,a=t[i];return r&&!n.includes(r)?dd(r,a):ro(a)},dd=(i,e)=>{if(i.charAt(0)==="_"){const t=i.slice(1,i.length);return ym(e,t)}switch(i){case dt.bool:return vm(e);case dt.float4:case dt.float8:case dt.int2:case dt.int4:case dt.int8:case dt.numeric:case dt.oid:return _m(e);case dt.json:case dt.jsonb:return xm(e);case dt.timestamp:return bm(e);case dt.abstime:case dt.date:case dt.daterange:case dt.int4range:case dt.int8range:case dt.money:case dt.reltime:case dt.text:case dt.time:case dt.timestamptz:case dt.timetz:case dt.tsrange:case dt.tstzrange:return ro(e);default:return ro(e)}},ro=i=>i,vm=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},_m=i=>{if(typeof i=="string"){const e=parseFloat(i);if(!Number.isNaN(e))return e}return i},xm=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch(e){return console.log(`JSON parse error: ${e}`),i}return i},ym=(i,e)=>{if(typeof i!="string")return i;const t=i.length-1,n=i[t];if(i[0]==="{"&&n==="}"){let r;const a=i.slice(1,t);try{r=JSON.parse("["+a+"]")}catch{r=a?a.split(","):[]}return r.map(o=>dd(e,o))}return i},bm=i=>typeof i=="string"?i.replace(" ","T"):i,hd=i=>{let e=i;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")+"/api/broadcast"};class ra{constructor(e,t,n={},s=io){this.channel=e,this.event=t,this.payload=n,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var n;return this._hasReceived(e)&&t((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var xc;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(xc||(xc={}));class Cs{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=t?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},s=>{const{onJoin:r,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Cs.syncState(this.state,s,r,a),this.pendingDiffs.forEach(l=>{this.state=Cs.syncDiff(this.state,l,r,a)}),this.pendingDiffs=[],o()}),this.channel._on(n.diff,{},s=>{const{onJoin:r,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=Cs.syncDiff(this.state,s,r,a),o())}),this.onJoin((s,r,a)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:r,newPresences:a})}),this.onLeave((s,r,a)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:r,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,n,s){const r=this.cloneDeep(e),a=this.transformState(t),o={},l={};return this.map(r,(c,u)=>{a[c]||(l[c]=u)}),this.map(a,(c,u)=>{const d=r[c];if(d){const h=u.map(m=>m.presence_ref),f=d.map(m=>m.presence_ref),v=u.filter(m=>f.indexOf(m.presence_ref)<0),_=d.filter(m=>h.indexOf(m.presence_ref)<0);v.length>0&&(o[c]=v),_.length>0&&(l[c]=_)}else o[c]=u}),this.syncDiff(r,{joins:o,leaves:l},n,s)}static syncDiff(e,t,n,s){const{joins:r,leaves:a}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return n||(n=()=>{}),s||(s=()=>{}),this.map(r,(o,l)=>{var c;const u=(c=e[o])!==null&&c!==void 0?c:[];if(e[o]=this.cloneDeep(l),u.length>0){const d=e[o].map(f=>f.presence_ref),h=u.filter(f=>d.indexOf(f.presence_ref)<0);e[o].unshift(...h)}n(o,u,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;const u=l.map(d=>d.presence_ref);c=c.filter(d=>u.indexOf(d.presence_ref)<0),e[o]=c,s(o,c,l),c.length===0&&delete e[o]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{const s=e[n];return"metas"in s?t[n]=s.metas.map(r=>(r.presence_ref=r.phx_ref,delete r.phx_ref,delete r.phx_ref_prev,r)):t[n]=s,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var yc;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(yc||(yc={}));var Ps;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes",i.SYSTEM="system"})(Ps||(Ps={}));var In;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(In||(In={}));class pl{constructor(e,t={config:{}},n){this.topic=e,this.params=t,this.socket=n,this.bindings={},this.state=bt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new ra(this,cn.join,this.params,this.timeout),this.rejoinTimer=new ud(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=bt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(s=>s.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=bt.closed,this.socket._remove(this)}),this._onError(s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=bt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=bt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=bt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(cn.reply,{},(s,r)=>{this._trigger(this._replyEventName(r),s)}),this.presence=new Cs(this),this.broadcastEndpointURL=hd(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(e,t=this.timeout){var n,s,r;if(this.socket.isConnected()||this.socket.connect(),this.state==bt.closed){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(s=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(f=>f.filter))!==null&&s!==void 0?s:[],u=!!this.bindings[Ps.PRESENCE]&&this.bindings[Ps.PRESENCE].length>0||((r=this.params.config.presence)===null||r===void 0?void 0:r.enabled)===!0,d={},h={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:u}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(d.access_token=this.socket.accessTokenValue),this._onError(f=>e?.(In.CHANNEL_ERROR,f)),this._onClose(()=>e?.(In.CLOSED)),this.updateJoinPayload(Object.assign({config:h},d)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:f})=>{var v;if(this.socket.setAuth(),f===void 0){e?.(In.SUBSCRIBED);return}else{const _=this.bindings.postgres_changes,m=(v=_?.length)!==null&&v!==void 0?v:0,p=[];for(let w=0;w<m;w++){const b=_[w],{filter:{event:y,schema:R,table:A,filter:C}}=b,D=f&&f[w];if(D&&D.event===y&&D.schema===R&&D.table===A&&D.filter===C)p.push(Object.assign(Object.assign({},b),{id:D.id}));else{this.unsubscribe(),this.state=bt.errored,e?.(In.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=p,e&&e(In.SUBSCRIBED);return}}).receive("error",f=>{this.state=bt.errored,e?.(In.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(f).join(", ")||"error")))}).receive("timeout",()=>{e?.(In.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,n){return this.state===bt.joined&&e===Ps.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,t,n)}async send(e,t={}){var n,s;if(!this._canPush()&&e.type==="broadcast"){const{event:r,payload:a}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=t.timeout)!==null&&n!==void 0?n:this.timeout);return await((s=c.body)===null||s===void 0?void 0:s.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(r=>{var a,o,l;const c=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&r("ok"),c.receive("ok",()=>r("ok")),c.receive("error",()=>r("error")),c.receive("timeout",()=>r("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=bt.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(cn.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(s=>{n=new ra(this,cn.leave,{},e),n.receive("ok",()=>{t(),s("ok")}).receive("timeout",()=>{t(),s("timed out")}).receive("error",()=>{s("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n?.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=bt.closed,this.bindings={}}async _fetchWithTimeout(e,t,n){const s=new AbortController,r=setTimeout(()=>s.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:s.signal}));return clearTimeout(r),a}_push(e,t,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new ra(this,e,t,n);return this._canPush()?s.send():this._addToPushBuffer(s),s}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>pm){const t=this.pushBuffer.shift();t&&(t.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${t.event}`,t.payload))}}_onMessage(e,t,n){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,n){var s,r;const a=e.toLocaleLowerCase(),{close:o,error:l,leave:c,join:u}=cn;if(n&&[o,l,c,u].indexOf(a)>=0&&n!==this._joinRef())return;let h=this._onMessage(a,t,n);if(t&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(f=>{var v,_,m;return((v=f.filter)===null||v===void 0?void 0:v.event)==="*"||((m=(_=f.filter)===null||_===void 0?void 0:_.event)===null||m===void 0?void 0:m.toLocaleLowerCase())===a}).map(f=>f.callback(h,n)):(r=this.bindings[a])===null||r===void 0||r.filter(f=>{var v,_,m,p,w,b;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in f){const y=f.id,R=(v=f.filter)===null||v===void 0?void 0:v.event;return y&&((_=t.ids)===null||_===void 0?void 0:_.includes(y))&&(R==="*"||R?.toLocaleLowerCase()===((m=t.data)===null||m===void 0?void 0:m.type.toLocaleLowerCase()))}else{const y=(w=(p=f?.filter)===null||p===void 0?void 0:p.event)===null||w===void 0?void 0:w.toLocaleLowerCase();return y==="*"||y===((b=t?.event)===null||b===void 0?void 0:b.toLocaleLowerCase())}else return f.type.toLocaleLowerCase()===a}).map(f=>{if(typeof h=="object"&&"ids"in h){const v=h.data,{schema:_,table:m,commit_timestamp:p,type:w,errors:b}=v;h=Object.assign(Object.assign({},{schema:_,table:m,commit_timestamp:p,eventType:w,new:{},old:{},errors:b}),this._getPayloadRecords(v))}f.callback(h,n)})}_isClosed(){return this.state===bt.closed}_isJoined(){return this.state===bt.joined}_isJoining(){return this.state===bt.joining}_isLeaving(){return this.state===bt.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,n){const s=e.toLocaleLowerCase(),r={type:s,filter:t,callback:n};return this.bindings[s]?this.bindings[s].push(r):this.bindings[s]=[r],this}_off(e,t){const n=e.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(s=>{var r;return!(((r=s.type)===null||r===void 0?void 0:r.toLocaleLowerCase())===n&&pl.isEqual(s.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(cn.close,{},e)}_onError(e){this._on(cn.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=bt.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=_c(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=_c(e.columns,e.old_record)),t}}const aa=()=>{},tr={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Sm=[1e3,2e3,5e3,1e4],wm=1e4,Em=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Mm{constructor(e,t){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=io,this.transport=null,this.heartbeatIntervalMs=tr.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=aa,this.ref=0,this.reconnectTimer=null,this.logger=aa,this.conn=null,this.sendBuffer=[],this.serializer=new mm,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=s=>{let r;return s?r=s:typeof fetch>"u"?r=(...a)=>zs(async()=>{const{default:o}=await Promise.resolve().then(()=>ms);return{default:o}},void 0).then(({default:o})=>o(...a)).catch(o=>{throw new Error(`Failed to load @supabase/node-fetch: ${o.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):r=fetch,(...a)=>r(...a)},!(!((n=t?.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey,this.endPoint=`${e}/${so.websocket}`,this.httpEndpoint=hd(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=cm.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:hm}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},e?this.conn.close(e,t??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,t,n){this.logger(e,t,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Rs.connecting:return vi.Connecting;case Rs.open:return vi.Open;case Rs.closing:return vi.Closing;default:return vi.Closed}}isConnected(){return this.connectionState()===vi.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,t={config:{}}){const n=`realtime:${e}`,s=this.getChannels().find(r=>r.topic===n);if(s)return s;{const r=new pl(`realtime:${e}`,t,this);return this.channels.push(r),r}}push(e){const{topic:t,event:n,payload:s,ref:r}=e,a=()=>{this.encode(e,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${t} ${n} (${r})`,s),this.isConnected()?a():this.sendBuffer.push(a)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(fm,"heartbeat timeout"),setTimeout(()=>{var t;this.isConnected()||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout()},tr.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(n=>n.topic===e&&(n._isJoined()||n._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,t=>{if(t.topic==="phoenix"&&t.event==="phx_reply")try{this.heartbeatCallback(t.payload.status==="ok"?"ok":"error")}catch(c){this.log("error","error in heartbeat callback",c)}t.ref&&t.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:s,payload:r,ref:a}=t,o=a?`(${a})`:"",l=r.status||"";this.log("receive",`${l} ${n} ${s} ${o}`.trim(),r),this.channels.filter(c=>c._isMember(n)).forEach(c=>c._trigger(s,r,a)),this._triggerStateCallbacks("message",t)})}_clearTimer(e){var t;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((t=this.reconnectTimer)===null||t===void 0||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this.workerRef.terminate()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var t;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(cn.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const n=e.match(/\?/)?"&":"?",s=new URLSearchParams(t);return`${e}${n}${s}`}_workerObjectUrl(e){let t;if(e)t=e;else{const n=new Blob([Em],{type:"application/javascript"});t=URL.createObjectURL(n)}return t}_setConnectionState(e,t=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=t)}async _performAuth(e=null){let t;e?t=e:this.accessToken?t=await this.accessToken():t=this.accessTokenValue,this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(n=>{const s={access_token:t,version:dm};t&&n.updateJoinPayload(s),n.joinedOnce&&n._isJoined()&&n._push(cn.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(t=>{this.log("error",`error setting auth in ${e}`,t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(n=>{try{n(t)}catch(s){this.log("error",`error in ${e} callback`,s)}})}catch(n){this.log("error",`error triggering ${e} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new ud(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},tr.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var t,n,s,r,a,o,l,c,u;if(this.transport=(t=e?.transport)!==null&&t!==void 0?t:null,this.timeout=(n=e?.timeout)!==null&&n!==void 0?n:io,this.heartbeatIntervalMs=(s=e?.heartbeatIntervalMs)!==null&&s!==void 0?s:tr.HEARTBEAT_INTERVAL,this.worker=(r=e?.worker)!==null&&r!==void 0?r:!1,this.accessToken=(a=e?.accessToken)!==null&&a!==void 0?a:null,this.heartbeatCallback=(o=e?.heartbeatCallback)!==null&&o!==void 0?o:aa,e?.params&&(this.params=e.params),e?.logger&&(this.logger=e.logger),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(l=e?.reconnectAfterMs)!==null&&l!==void 0?l:(d=>Sm[d-1]||wm),this.encode=(c=e?.encode)!==null&&c!==void 0?c:((d,h)=>h(JSON.stringify(d))),this.decode=(u=e?.decode)!==null&&u!==void 0?u:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e?.workerUrl}}}class ml extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function St(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}class Tm extends ml{constructor(e,t,n){super(e),this.name="StorageApiError",this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class ao extends ml{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}var Am=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};const fd=i=>{let e;return i?e=i:typeof fetch>"u"?e=(...t)=>zs(async()=>{const{default:n}=await Promise.resolve().then(()=>ms);return{default:n}},void 0).then(({default:n})=>n(...t)):e=fetch,(...t)=>e(...t)},Rm=()=>Am(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield zs(()=>Promise.resolve().then(()=>ms),void 0)).Response:Response}),oo=i=>{if(Array.isArray(i))return i.map(t=>oo(t));if(typeof i=="function"||i!==Object(i))return i;const e={};return Object.entries(i).forEach(([t,n])=>{const s=t.replace(/([-_][a-z])/gi,r=>r.toUpperCase().replace(/[-_]/g,""));e[s]=oo(n)}),e},Cm=i=>{if(typeof i!="object"||i===null)return!1;const e=Object.getPrototypeOf(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)};var Ri=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};const oa=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),Pm=(i,e,t)=>Ri(void 0,void 0,void 0,function*(){const n=yield Rm();i instanceof n&&!t?.noResolveJson?i.json().then(s=>{const r=i.status||500,a=s?.statusCode||r+"";e(new Tm(oa(s),r,a))}).catch(s=>{e(new ao(oa(s),s))}):e(new ao(oa(i),i))}),Nm=(i,e,t,n)=>{const s={method:i,headers:e?.headers||{}};return i==="GET"||!n?s:(Cm(n)?(s.headers=Object.assign({"Content-Type":"application/json"},e?.headers),s.body=JSON.stringify(n)):s.body=n,e?.duplex&&(s.duplex=e.duplex),Object.assign(Object.assign({},s),t))};function Hs(i,e,t,n,s,r){return Ri(this,void 0,void 0,function*(){return new Promise((a,o)=>{i(t,Nm(e,n,s,r)).then(l=>{if(!l.ok)throw l;return n?.noResolveJson?l:l.json()}).then(l=>a(l)).catch(l=>Pm(l,o,n))})})}function Hr(i,e,t,n){return Ri(this,void 0,void 0,function*(){return Hs(i,"GET",e,t,n)})}function gn(i,e,t,n,s){return Ri(this,void 0,void 0,function*(){return Hs(i,"POST",e,n,s,t)})}function lo(i,e,t,n,s){return Ri(this,void 0,void 0,function*(){return Hs(i,"PUT",e,n,s,t)})}function Lm(i,e,t,n){return Ri(this,void 0,void 0,function*(){return Hs(i,"HEAD",e,Object.assign(Object.assign({},t),{noResolveJson:!0}),n)})}function pd(i,e,t,n,s){return Ri(this,void 0,void 0,function*(){return Hs(i,"DELETE",e,n,s,t)})}var kt=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};const Im={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},bc={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class Dm{constructor(e,t={},n,s){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=n,this.fetch=fd(s)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,t,n,s){return kt(this,void 0,void 0,function*(){try{let r;const a=Object.assign(Object.assign({},bc),s);let o=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&n instanceof Blob?(r=new FormData,r.append("cacheControl",a.cacheControl),l&&r.append("metadata",this.encodeMetadata(l)),r.append("",n)):typeof FormData<"u"&&n instanceof FormData?(r=n,r.append("cacheControl",a.cacheControl),l&&r.append("metadata",this.encodeMetadata(l))):(r=n,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),s?.headers&&(o=Object.assign(Object.assign({},o),s.headers));const c=this._removeEmptyFolders(t),u=this._getFinalPath(c),d=yield(e=="PUT"?lo:gn)(this.fetch,`${this.url}/object/${u}`,r,Object.assign({headers:o},a?.duplex?{duplex:a.duplex}:{}));return{data:{path:c,id:d.Id,fullPath:d.Key},error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(St(r))return{data:null,error:r};throw r}})}upload(e,t,n){return kt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,n)})}uploadToSignedUrl(e,t,n,s){return kt(this,void 0,void 0,function*(){const r=this._removeEmptyFolders(e),a=this._getFinalPath(r),o=new URL(this.url+`/object/upload/sign/${a}`);o.searchParams.set("token",t);try{let l;const c=Object.assign({upsert:bc.upsert},s),u=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",c.cacheControl)):(l=n,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType);const d=yield lo(this.fetch,o.toString(),l,{headers:u});return{data:{path:r,fullPath:d.Key},error:null}}catch(l){if(this.shouldThrowOnError)throw l;if(St(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,t){return kt(this,void 0,void 0,function*(){try{let n=this._getFinalPath(e);const s=Object.assign({},this.headers);t?.upsert&&(s["x-upsert"]="true");const r=yield gn(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:s}),a=new URL(this.url+r.url),o=a.searchParams.get("token");if(!o)throw new ml("No token returned by API");return{data:{signedUrl:a.toString(),path:e,token:o},error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(St(n))return{data:null,error:n};throw n}})}update(e,t,n){return kt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,n)})}move(e,t,n){return kt(this,void 0,void 0,function*(){try{return{data:yield gn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:this.headers}),error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(St(s))return{data:null,error:s};throw s}})}copy(e,t,n){return kt(this,void 0,void 0,function*(){try{return{data:{path:(yield gn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:this.headers})).Key},error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(St(s))return{data:null,error:s};throw s}})}createSignedUrl(e,t,n){return kt(this,void 0,void 0,function*(){try{let s=this._getFinalPath(e),r=yield gn(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:t},n?.transform?{transform:n.transform}:{}),{headers:this.headers});const a=n?.download?`&download=${n.download===!0?"":n.download}`:"";return r={signedUrl:encodeURI(`${this.url}${r.signedURL}${a}`)},{data:r,error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(St(s))return{data:null,error:s};throw s}})}createSignedUrls(e,t,n){return kt(this,void 0,void 0,function*(){try{const s=yield gn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),r=n?.download?`&download=${n.download===!0?"":n.download}`:"";return{data:s.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${r}`):null})),error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(St(s))return{data:null,error:s};throw s}})}download(e,t){return kt(this,void 0,void 0,function*(){const s=typeof t?.transform<"u"?"render/image/authenticated":"object",r=this.transformOptsToQueryString(t?.transform||{}),a=r?`?${r}`:"";try{const o=this._getFinalPath(e);return{data:yield(yield Hr(this.fetch,`${this.url}/${s}/${o}${a}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(St(o))return{data:null,error:o};throw o}})}info(e){return kt(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{const n=yield Hr(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers});return{data:oo(n),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(St(n))return{data:null,error:n};throw n}})}exists(e){return kt(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{return yield Lm(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(St(n)&&n instanceof ao){const s=n.originalError;if([400,404].includes(s?.status))return{data:!1,error:n}}throw n}})}getPublicUrl(e,t){const n=this._getFinalPath(e),s=[],r=t?.download?`download=${t.download===!0?"":t.download}`:"";r!==""&&s.push(r);const o=typeof t?.transform<"u"?"render/image":"object",l=this.transformOptsToQueryString(t?.transform||{});l!==""&&s.push(l);let c=s.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${n}${c}`)}}}remove(e){return kt(this,void 0,void 0,function*(){try{return{data:yield pd(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(St(t))return{data:null,error:t};throw t}})}list(e,t,n){return kt(this,void 0,void 0,function*(){try{const s=Object.assign(Object.assign(Object.assign({},Im),t),{prefix:e||""});return{data:yield gn(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},n),error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(St(s))return{data:null,error:s};throw s}})}listV2(e,t){return kt(this,void 0,void 0,function*(){try{const n=Object.assign({},e);return{data:yield gn(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},t),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(St(n))return{data:null,error:n};throw n}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const Um="2.12.1",Om={"X-Client-Info":`storage-js/${Um}`};var Fi=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};class km{constructor(e,t={},n,s){this.shouldThrowOnError=!1;const r=new URL(e);s?.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase.")),this.url=r.href,this.headers=Object.assign(Object.assign({},Om),t),this.fetch=fd(n)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(){return Fi(this,void 0,void 0,function*(){try{return{data:yield Hr(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(St(e))return{data:null,error:e};throw e}})}getBucket(e){return Fi(this,void 0,void 0,function*(){try{return{data:yield Hr(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(St(t))return{data:null,error:t};throw t}})}createBucket(e,t={public:!1}){return Fi(this,void 0,void 0,function*(){try{return{data:yield gn(this.fetch,`${this.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(St(n))return{data:null,error:n};throw n}})}updateBucket(e,t){return Fi(this,void 0,void 0,function*(){try{return{data:yield lo(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(St(n))return{data:null,error:n};throw n}})}emptyBucket(e){return Fi(this,void 0,void 0,function*(){try{return{data:yield gn(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(St(t))return{data:null,error:t};throw t}})}deleteBucket(e){return Fi(this,void 0,void 0,function*(){try{return{data:yield pd(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(St(t))return{data:null,error:t};throw t}})}}class Fm extends km{constructor(e,t={},n,s){super(e,t,n,s)}from(e){return new Dm(this.url,this.headers,e,this.fetch)}}const Bm="2.57.4";let Ms="";typeof Deno<"u"?Ms="deno":typeof document<"u"?Ms="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Ms="react-native":Ms="node";const zm={"X-Client-Info":`supabase-js-${Ms}/${Bm}`},Hm={headers:zm},jm={schema:"public"},Vm={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Gm={};var Wm=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};const $m=i=>{let e;return i?e=i:typeof fetch>"u"?e=sd:e=fetch,(...t)=>e(...t)},Xm=()=>typeof Headers>"u"?rd:Headers,qm=(i,e,t)=>{const n=$m(t),s=Xm();return(r,a)=>Wm(void 0,void 0,void 0,function*(){var o;const l=(o=yield e())!==null&&o!==void 0?o:i;let c=new s(a?.headers);return c.has("apikey")||c.set("apikey",i),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(r,Object.assign(Object.assign({},a),{headers:c}))})};var Km=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};function Ym(i){return i.endsWith("/")?i:i+"/"}function Jm(i,e){var t,n;const{db:s,auth:r,realtime:a,global:o}=i,{db:l,auth:c,realtime:u,global:d}=e,h={db:Object.assign(Object.assign({},l),s),auth:Object.assign(Object.assign({},c),r),realtime:Object.assign(Object.assign({},u),a),storage:{},global:Object.assign(Object.assign(Object.assign({},d),o),{headers:Object.assign(Object.assign({},(t=d?.headers)!==null&&t!==void 0?t:{}),(n=o?.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>Km(this,void 0,void 0,function*(){return""})};return i.accessToken?h.accessToken=i.accessToken:delete h.accessToken,h}function Zm(i){const e=i?.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Ym(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}const md="2.71.1",is=30*1e3,co=3,la=co*is,Qm="http://localhost:9999",eg="supabase.auth.token",tg={"X-Client-Info":`gotrue-js/${md}`},uo="X-Supabase-Api-Version",gd={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},ng=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,ig=600*1e3;class gl extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=n}}function Be(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class sg extends gl{constructor(e,t,n){super(e,t,n),this.name="AuthApiError",this.status=t,this.code=n}}function rg(i){return Be(i)&&i.name==="AuthApiError"}class vd extends gl{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class ei extends gl{constructor(e,t,n,s){super(e,n,s),this.name=t,this.status=n}}class $n extends ei{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function ag(i){return Be(i)&&i.name==="AuthSessionMissingError"}class nr extends ei{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ir extends ei{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class sr extends ei{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function og(i){return Be(i)&&i.name==="AuthImplicitGrantRedirectError"}class Sc extends ei{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class ho extends ei{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function ca(i){return Be(i)&&i.name==="AuthRetryableFetchError"}class wc extends ei{constructor(e,t,n){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=n}}class fo extends ei{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const jr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Ec=` 	
\r=`.split(""),lg=(()=>{const i=new Array(128);for(let e=0;e<i.length;e+=1)i[e]=-1;for(let e=0;e<Ec.length;e+=1)i[Ec[e].charCodeAt(0)]=-2;for(let e=0;e<jr.length;e+=1)i[jr[e].charCodeAt(0)]=e;return i})();function Mc(i,e,t){if(i!==null)for(e.queue=e.queue<<8|i,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(jr[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(jr[n]),e.queuedBits-=6}}function _d(i,e,t){const n=lg[i];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`)}}function Tc(i){const e=[],t=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},r=a=>{dg(a,n,t)};for(let a=0;a<i.length;a+=1)_d(i.charCodeAt(a),s,r);return e.join("")}function cg(i,e){if(i<=127){e(i);return}else if(i<=2047){e(192|i>>6),e(128|i&63);return}else if(i<=65535){e(224|i>>12),e(128|i>>6&63),e(128|i&63);return}else if(i<=1114111){e(240|i>>18),e(128|i>>12&63),e(128|i>>6&63),e(128|i&63);return}throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`)}function ug(i,e){for(let t=0;t<i.length;t+=1){let n=i.charCodeAt(t);if(n>55295&&n<=56319){const s=(n-55296)*1024&65535;n=(i.charCodeAt(t+1)-56320&65535|s)+65536,t+=1}cg(n,e)}}function dg(i,e,t){if(e.utf8seq===0){if(i<=127){t(i);return}for(let n=1;n<6;n+=1)if((i>>7-n&1)===0){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=i&31;else if(e.utf8seq===3)e.codepoint=i&15;else if(e.utf8seq===4)e.codepoint=i&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(i<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|i&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function hg(i){const e=[],t={queue:0,queuedBits:0},n=s=>{e.push(s)};for(let s=0;s<i.length;s+=1)_d(i.charCodeAt(s),t,n);return new Uint8Array(e)}function fg(i){const e=[];return ug(i,t=>e.push(t)),new Uint8Array(e)}function pg(i){const e=[],t={queue:0,queuedBits:0},n=s=>{e.push(s)};return i.forEach(s=>Mc(s,t,n)),Mc(null,t,n),e.join("")}function mg(i){return Math.round(Date.now()/1e3)+i}function gg(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){const e=Math.random()*16|0;return(i=="x"?e:e&3|8).toString(16)})}const on=()=>typeof window<"u"&&typeof document<"u",ai={tested:!1,writable:!1},xd=()=>{if(!on())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ai.tested)return ai.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),ai.tested=!0,ai.writable=!0}catch{ai.tested=!0,ai.writable=!1}return ai.writable};function vg(i){const e={},t=new URL(i);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((s,r)=>{e[r]=s})}catch{}return t.searchParams.forEach((n,s)=>{e[s]=n}),e}const yd=i=>{let e;return i?e=i:typeof fetch>"u"?e=(...t)=>zs(async()=>{const{default:n}=await Promise.resolve().then(()=>ms);return{default:n}},void 0).then(({default:n})=>n(...t)):e=fetch,(...t)=>e(...t)},_g=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",ss=async(i,e,t)=>{await i.setItem(e,JSON.stringify(t))},oi=async(i,e)=>{const t=await i.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},Bn=async(i,e)=>{await i.removeItem(e)};class Jr{constructor(){this.promise=new Jr.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Jr.promiseConstructor=Promise;function ua(i){const e=i.split(".");if(e.length!==3)throw new fo("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!ng.test(e[n]))throw new fo("JWT not in base64url format");return{header:JSON.parse(Tc(e[0])),payload:JSON.parse(Tc(e[1])),signature:hg(e[2]),raw:{header:e[0],payload:e[1]}}}async function xg(i){return await new Promise(e=>{setTimeout(()=>e(null),i)})}function yg(i,e){return new Promise((n,s)=>{(async()=>{for(let r=0;r<1/0;r++)try{const a=await i(r);if(!e(r,null,a)){n(a);return}}catch(a){if(!e(r,a)){s(a);return}}})()})}function bg(i){return("0"+i.toString(16)).substr(-2)}function Sg(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=t.length;let s="";for(let r=0;r<56;r++)s+=t.charAt(Math.floor(Math.random()*n));return s}return crypto.getRandomValues(e),Array.from(e,bg).join("")}async function wg(i){const t=new TextEncoder().encode(i),n=await crypto.subtle.digest("SHA-256",t),s=new Uint8Array(n);return Array.from(s).map(r=>String.fromCharCode(r)).join("")}async function Eg(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const t=await wg(i);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Bi(i,e,t=!1){const n=Sg();let s=n;t&&(s+="/PASSWORD_RECOVERY"),await ss(i,`${e}-code-verifier`,s);const r=await Eg(n);return[r,n===r?"plain":"s256"]}const Mg=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Tg(i){const e=i.headers.get(uo);if(!e||!e.match(Mg))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Ag(i){if(!i)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(i<=e)throw new Error("JWT has expired")}function Rg(i){switch(i){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Cg=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function zi(i){if(!Cg.test(i))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function da(){const i={};return new Proxy(i,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const n=t.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Ac(i){return JSON.parse(JSON.stringify(i))}var Pg=function(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t};const pi=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),Ng=[502,503,504];async function Rc(i){var e;if(!_g(i))throw new ho(pi(i),0);if(Ng.includes(i.status))throw new ho(pi(i),i.status);let t;try{t=await i.json()}catch(r){throw new vd(pi(r),r)}let n;const s=Tg(i);if(s&&s.getTime()>=gd["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?n=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(n=t.error_code),n){if(n==="weak_password")throw new wc(pi(t),i.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new $n}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((r,a)=>r&&typeof a=="string",!0))throw new wc(pi(t),i.status,t.weak_password.reasons);throw new sg(pi(t),i.status||500,n)}const Lg=(i,e,t,n)=>{const s={method:i,headers:e?.headers||{}};return i==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),s.body=JSON.stringify(n),Object.assign(Object.assign({},s),t))};async function We(i,e,t,n){var s;const r=Object.assign({},n?.headers);r[uo]||(r[uo]=gd["2024-01-01"].name),n?.jwt&&(r.Authorization=`Bearer ${n.jwt}`);const a=(s=n?.query)!==null&&s!==void 0?s:{};n?.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await Ig(i,e,t+o,{headers:r,noResolveJson:n?.noResolveJson},{},n?.body);return n?.xform?n?.xform(l):{data:Object.assign({},l),error:null}}async function Ig(i,e,t,n,s,r){const a=Lg(e,n,s,r);let o;try{o=await i(t,Object.assign({},a))}catch(l){throw console.error(l),new ho(pi(l),0)}if(o.ok||await Rc(o),n?.noResolveJson)return o;try{return await o.json()}catch(l){await Rc(l)}}function Nn(i){var e;let t=null;kg(i)&&(t=Object.assign({},i),i.expires_at||(t.expires_at=mg(i.expires_in)));const n=(e=i.user)!==null&&e!==void 0?e:i;return{data:{session:t,user:n},error:null}}function Cc(i){const e=Nn(i);return!e.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((t,n)=>t&&typeof n=="string",!0)&&(e.data.weak_password=i.weak_password),e}function qn(i){var e;return{data:{user:(e=i.user)!==null&&e!==void 0?e:i},error:null}}function Dg(i){return{data:i,error:null}}function Ug(i){const{action_link:e,email_otp:t,hashed_token:n,redirect_to:s,verification_type:r}=i,a=Pg(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:n,redirect_to:s,verification_type:r},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function Og(i){return i}function kg(i){return i.access_token&&i.refresh_token&&i.expires_in}const ha=["global","local","others"];var Fg=function(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(i);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(i,n[s])&&(t[n[s]]=i[n[s]]);return t};class Bg{constructor({url:e="",headers:t={},fetch:n}){this.url=e,this.headers=t,this.fetch=yd(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,t=ha[0]){if(ha.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ha.join(", ")}`);try{return await We(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(Be(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,t={}){try{return await We(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:qn})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:t}=e,n=Fg(e,["options"]),s=Object.assign(Object.assign({},n),t);return"newEmail"in n&&(s.new_email=n?.newEmail,delete s.newEmail),await We(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:Ug,redirectTo:t?.redirectTo})}catch(t){if(Be(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await We(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:qn})}catch(t){if(Be(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,n,s,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await We(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(r=(s=e?.perPage)===null||s===void 0?void 0:s.toString())!==null&&r!==void 0?r:""},xform:Og});if(u.error)throw u.error;const d=await u.json(),h=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(v=>{const _=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(v.split(";")[1].split("=")[1]);c[`${m}Page`]=_}),c.total=parseInt(h)),{data:Object.assign(Object.assign({},d),c),error:null}}catch(c){if(Be(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){zi(e);try{return await We(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:qn})}catch(t){if(Be(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){zi(e);try{return await We(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:qn})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,t=!1){zi(e);try{return await We(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:qn})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){zi(e.userId);try{const{data:t,error:n}=await We(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:t,error:n}}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _deleteFactor(e){zi(e.userId),zi(e.id);try{return{data:await We(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(Be(t))return{data:null,error:t};throw t}}}function Pc(i={}){return{getItem:e=>i[e]||null,setItem:(e,t)=>{i[e]=t},removeItem:e=>{delete i[e]}}}function zg(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Hi={debug:!!(globalThis&&xd()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class bd extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class Hg extends bd{}async function jg(i,e,t){Hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",i,e);const n=new globalThis.AbortController;return e>0&&setTimeout(()=>{n.abort(),Hi.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",i)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(i,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async s=>{if(s){Hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",i,s.name);try{return await t()}finally{Hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",i,s.name)}}else{if(e===0)throw Hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",i),new Hg(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);if(Hi.debug)try{const r=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(r,null,"  "))}catch(r){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",r)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}zg();const Vg={url:Qm,storageKey:eg,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:tg,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Nc(i,e,t){return await t()}const ji={};class Ds{constructor(e){var t,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ds.nextInstanceID,Ds.nextInstanceID+=1,this.instanceID>0&&on()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const s=Object.assign(Object.assign({},Vg),e);if(this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.persistSession=s.persistSession,this.storageKey=s.storageKey,this.autoRefreshToken=s.autoRefreshToken,this.admin=new Bg({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=yd(s.fetch),this.lock=s.lock||Nc,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,s.lock?this.lock=s.lock:on()&&(!((t=globalThis?.navigator)===null||t===void 0)&&t.locks)?this.lock=jg:this.lock=Nc,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:xd()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Pc(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=Pc(this.memoryStorage)),on()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(r){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",r)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async r=>{this._debug("received broadcast notification from other tab or client",r),await this._notifyAllSubscribers(r.data.event,r.data.session,!1)})}this.initialize()}get jwks(){var e,t;return(t=(e=ji[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){ji[this.storageKey]=Object.assign(Object.assign({},ji[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=ji[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){ji[this.storageKey]=Object.assign(Object.assign({},ji[this.storageKey]),{cachedAt:e})}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${md}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const t=vg(window.location.href);let n="none";if(this._isImplicitGrantCallback(t)?n="implicit":await this._isPKCECallback(t)&&(n="pkce"),on()&&this.detectSessionInUrl&&n!=="none"){const{data:s,error:r}=await this._getSessionFromURL(t,n);if(r){if(this._debug("#_initialize()","error detecting session from URL",r),og(r)){const l=(e=r.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:r}}return await this._removeSession(),{error:r}}const{session:a,redirectType:o}=s;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return Be(t)?{error:t}:{error:new vd("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,n,s;try{const r=await We(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(t=e?.options)===null||t===void 0?void 0:t.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(s=e?.options)===null||s===void 0?void 0:s.captchaToken}},xform:Nn}),{data:a,error:o}=r;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(r){if(Be(r))return{data:{user:null,session:null},error:r};throw r}}async signUp(e){var t,n,s;try{let r;if("email"in e){const{email:u,password:d,options:h}=e;let f=null,v=null;this.flowType==="pkce"&&([f,v]=await Bi(this.storage,this.storageKey)),r=await We(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h?.emailRedirectTo,body:{email:u,password:d,data:(t=h?.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:h?.captchaToken},code_challenge:f,code_challenge_method:v},xform:Nn})}else if("phone"in e){const{phone:u,password:d,options:h}=e;r=await We(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:d,data:(n=h?.data)!==null&&n!==void 0?n:{},channel:(s=h?.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:h?.captchaToken}},xform:Nn})}else throw new ir("You must provide either an email or phone number and a password");const{data:a,error:o}=r;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(r){if(Be(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithPassword(e){try{let t;if("email"in e){const{email:r,password:a,options:o}=e;t=await We(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:r,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:Cc})}else if("phone"in e){const{phone:r,password:a,options:o}=e;t=await We(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:r,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:Cc})}else throw new ir("You must provide either an email or phone number and a password");const{data:n,error:s}=t;return s?{data:{user:null,session:null},error:s}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new nr}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:s})}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOAuth(e){var t,n,s,r;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(s=e.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(r=e.options)===null||r===void 0?void 0:r.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e;if(t==="solana")return await this.signInWithSolana(e);throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}async signInWithSolana(e){var t,n,s,r,a,o,l,c,u,d,h,f;let v,_;if("message"in e)v=e.message,_=e.signature;else{const{chain:m,wallet:p,statement:w,options:b}=e;let y;if(on())if(typeof p=="object")y=p;else{const A=window;if("solana"in A&&typeof A.solana=="object"&&("signIn"in A.solana&&typeof A.solana.signIn=="function"||"signMessage"in A.solana&&typeof A.solana.signMessage=="function"))y=A.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!b?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");y=p}const R=new URL((t=b?.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in y&&y.signIn){const A=await y.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},b?.signInWithSolana),{version:"1",domain:R.host,uri:R.href}),w?{statement:w}:null));let C;if(Array.isArray(A)&&A[0]&&typeof A[0]=="object")C=A[0];else if(A&&typeof A=="object"&&"signedMessage"in A&&"signature"in A)C=A;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in C&&"signature"in C&&(typeof C.signedMessage=="string"||C.signedMessage instanceof Uint8Array)&&C.signature instanceof Uint8Array)v=typeof C.signedMessage=="string"?C.signedMessage:new TextDecoder().decode(C.signedMessage),_=C.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in y)||typeof y.signMessage!="function"||!("publicKey"in y)||typeof y!="object"||!y.publicKey||!("toBase58"in y.publicKey)||typeof y.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");v=[`${R.host} wants you to sign in with your Solana account:`,y.publicKey.toBase58(),...w?["",w,""]:[""],"Version: 1",`URI: ${R.href}`,`Issued At: ${(s=(n=b?.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((r=b?.signInWithSolana)===null||r===void 0)&&r.notBefore?[`Not Before: ${b.signInWithSolana.notBefore}`]:[],...!((a=b?.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${b.signInWithSolana.expirationTime}`]:[],...!((o=b?.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${b.signInWithSolana.chainId}`]:[],...!((l=b?.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${b.signInWithSolana.nonce}`]:[],...!((c=b?.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${b.signInWithSolana.requestId}`]:[],...!((d=(u=b?.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||d===void 0)&&d.length?["Resources",...b.signInWithSolana.resources.map(C=>`- ${C}`)]:[]].join(`
`);const A=await y.signMessage(new TextEncoder().encode(v),"utf8");if(!A||!(A instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=A}}try{const{data:m,error:p}=await We(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:v,signature:pg(_)},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:Nn});if(p)throw p;return!m||!m.session||!m.user?{data:{user:null,session:null},error:new nr}:(m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),{data:Object.assign({},m),error:p})}catch(m){if(Be(m))return{data:{user:null,session:null},error:m};throw m}}async _exchangeCodeForSession(e){const t=await oi(this.storage,`${this.storageKey}-code-verifier`),[n,s]=(t??"").split("/");try{const{data:r,error:a}=await We(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:Nn});if(await Bn(this.storage,`${this.storageKey}-code-verifier`),a)throw a;return!r||!r.session||!r.user?{data:{user:null,session:null,redirectType:null},error:new nr}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign(Object.assign({},r),{redirectType:s??null}),error:a})}catch(r){if(Be(r))return{data:{user:null,session:null,redirectType:null},error:r};throw r}}async signInWithIdToken(e){try{const{options:t,provider:n,token:s,access_token:r,nonce:a}=e,o=await We(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:s,access_token:r,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:Nn}),{data:l,error:c}=o;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new nr}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOtp(e){var t,n,s,r,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await Bi(this.storage,this.storageKey));const{error:d}=await We(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=l?.data)!==null&&t!==void 0?t:{},create_user:(n=l?.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l?.emailRedirectTo});return{data:{user:null,session:null},error:d}}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:u}=await We(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(s=l?.data)!==null&&s!==void 0?s:{},create_user:(r=l?.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},channel:(a=l?.channel)!==null&&a!==void 0?a:"sms"}});return{data:{user:null,session:null,messageId:c?.message_id},error:u}}throw new ir("You must provide either an email or phone number.")}catch(o){if(Be(o))return{data:{user:null,session:null},error:o};throw o}}async verifyOtp(e){var t,n;try{let s,r;"options"in e&&(s=(t=e.options)===null||t===void 0?void 0:t.redirectTo,r=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await We(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:r}}),redirectTo:s,xform:Nn});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l?.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(s){if(Be(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithSSO(e){var t,n,s;try{let r=null,a=null;return this.flowType==="pkce"&&([r,a]=await Bi(this.storage,this.storageKey)),await We(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&n!==void 0?n:void 0}),!((s=e?.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:r,code_challenge_method:a}),headers:this.headers,xform:Dg})}catch(r){if(Be(r))return{data:null,error:r};throw r}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new $n;const{error:s}=await We(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return{data:{user:null,session:null},error:s}})}catch(e){if(Be(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:n,type:s,options:r}=e,{error:a}=await We(this.fetch,"POST",t,{headers:this.headers,body:{email:n,type:s,gotrue_meta_security:{captcha_token:r?.captchaToken}},redirectTo:r?.emailRedirectTo});return{data:{user:null,session:null},error:a}}else if("phone"in e){const{phone:n,type:s,options:r}=e,{data:a,error:o}=await We(this.fetch,"POST",t,{headers:this.headers,body:{phone:n,type:s,gotrue_meta_security:{captcha_token:r?.captchaToken}}});return{data:{user:null,session:null,messageId:a?.message_id},error:o}}throw new ir("You must provide either an email or phone number and a type")}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await n,await t()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=t();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await oi(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<la:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await oi(this.userStorage,this.storageKey+"-user");a?.user?e.user=a.user:e.user=da()}if(this.storage.isServer&&e.user){let a=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,c,u)=>(!a&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,u))})}return{data:{session:e},error:null}}const{session:s,error:r}=await this._callRefreshToken(e.refresh_token);return r?{data:{session:null},error:r}:{data:{session:s},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await We(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:qn}):await this._useSession(async t=>{var n,s,r;const{data:a,error:o}=t;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new $n}:await We(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(r=(s=a.session)===null||s===void 0?void 0:s.access_token)!==null&&r!==void 0?r:void 0,xform:qn})})}catch(t){if(Be(t))return ag(t)&&(await this._removeSession(),await Bn(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:t};throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{const{data:s,error:r}=n;if(r)throw r;if(!s.session)throw new $n;const a=s.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await Bi(this.storage,this.storageKey));const{data:c,error:u}=await We(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:qn});if(u)throw u;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),{data:{user:a.user},error:null}})}catch(n){if(Be(n))return{data:{user:null},error:n};throw n}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new $n;const t=Date.now()/1e3;let n=t,s=!0,r=null;const{payload:a}=ua(e.access_token);if(a.exp&&(n=a.exp,s=n<=t),s){const{session:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!o)return{data:{user:null,session:null},error:null};r=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)throw l;r={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-t,expires_at:n},await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)}return{data:{user:r.user,session:r},error:null}}catch(t){if(Be(t))return{data:{session:null,user:null},error:t};throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var n;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!e?.refresh_token)throw new $n;const{session:s,error:r}=await this._callRefreshToken(e.refresh_token);return r?{data:{user:null,session:null},error:r}:s?{data:{user:s.user,session:s},error:null}:{data:{user:null,session:null},error:null}})}catch(t){if(Be(t))return{data:{user:null,session:null},error:t};throw t}}async _getSessionFromURL(e,t){try{if(!on())throw new sr("No browser detected.");if(e.error||e.error_description||e.error_code)throw new sr(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new Sc("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new sr("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Sc("No code detected.");const{data:w,error:b}=await this._exchangeCodeForSession(e.code);if(b)throw b;const y=new URL(window.location.href);return y.searchParams.delete("code"),window.history.replaceState(window.history.state,"",y.toString()),{data:{session:w.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:s,access_token:r,refresh_token:a,expires_in:o,expires_at:l,token_type:c}=e;if(!r||!o||!a||!c)throw new sr("No session defined in URL");const u=Math.round(Date.now()/1e3),d=parseInt(o);let h=u+d;l&&(h=parseInt(l));const f=h-u;f*1e3<=is&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${d}s`);const v=h-d;u-v>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",v,h,u):u-v<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",v,h,u);const{data:_,error:m}=await this._getUser(r);if(m)throw m;const p={provider_token:n,provider_refresh_token:s,access_token:r,expires_in:d,expires_at:h,refresh_token:a,token_type:c,user:_.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:e.type},error:null}}catch(n){if(Be(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await oi(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var n;const{data:s,error:r}=t;if(r)return{error:r};const a=(n=s.session)===null||n===void 0?void 0:n.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(rg(o)&&(o.status===404||o.status===401||o.status===403)))return{error:o}}return e!=="others"&&(await this._removeSession(),await Bn(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const t=gg(),n={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{var n,s;try{const{data:{session:r},error:a}=t;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",r)),this._debug("INITIAL_SESSION","callback id",e,"session",r)}catch(r){await((s=this.stateChangeEmitters.get(e))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",r),console.error(r)}})}async resetPasswordForEmail(e,t={}){let n=null,s=null;this.flowType==="pkce"&&([n,s]=await Bi(this.storage,this.storageKey,!0));try{return await We(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:s,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(r){if(Be(r))return{data:null,error:r};throw r}}async getUserIdentities(){var e;try{const{data:t,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(t){if(Be(t))return{data:null,error:t};throw t}}async linkIdentity(e){var t;try{const{data:n,error:s}=await this._useSession(async r=>{var a,o,l,c,u;const{data:d,error:h}=r;if(h)throw h;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await We(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(c=d.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(s)throw s;return on()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(n?.url),{data:{provider:e.provider,url:n?.url},error:null}}catch(n){if(Be(n))return{data:{provider:e.provider,url:null},error:n};throw n}}async unlinkIdentity(e){try{return await this._useSession(async t=>{var n,s;const{data:r,error:a}=t;if(a)throw a;return await We(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(s=(n=r.session)===null||n===void 0?void 0:n.access_token)!==null&&s!==void 0?s:void 0})})}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const n=Date.now();return await yg(async s=>(s>0&&await xg(200*Math.pow(2,s-1)),this._debug(t,"refreshing attempt",s),await We(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Nn})),(s,r)=>{const a=200*Math.pow(2,s);return r&&ca(r)&&Date.now()+a-n<is})}catch(n){if(this._debug(t,"error",n),Be(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",n),on()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const s=await oi(this.storage,this.storageKey);if(s&&this.userStorage){let a=await oi(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:s.user},await ss(this.userStorage,this.storageKey+"-user",a)),s.user=(e=a?.user)!==null&&e!==void 0?e:da()}else if(s&&!s.user&&!s.user){const a=await oi(this.storage,this.storageKey+"-user");a&&a?.user?(s.user=a.user,await Bn(this.storage,this.storageKey+"-user"),await ss(this.storage,this.storageKey,s)):s.user=da()}if(this._debug(n,"session from storage",s),!this._isValidSession(s)){this._debug(n,"session is not valid"),s!==null&&await this._removeSession();return}const r=((t=s.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<la;if(this._debug(n,`session has${r?"":" not"} expired with margin of ${la}s`),r){if(this.autoRefreshToken&&s.refresh_token){const{error:a}=await this._callRefreshToken(s.refresh_token);a&&(console.error(a),ca(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else if(s.user&&s.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(s.access_token);!o&&a?.user?(s.user=a.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(n,"error",s),console.error(s);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var t,n;if(!e)throw new $n;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new Jr;const{data:r,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!r.session)throw new $n;await this._saveSession(r.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",r.session);const o={session:r.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(r){if(this._debug(s,"error",r),Be(r)){const a={session:null,error:r};return ca(r)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(r),r}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(e,t,n=!0){const s=`#_notifyAllSubscribers(${e})`;this._debug(s,"begin",t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});const r=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){r.push(l)}});if(await Promise.all(a),r.length>0){for(let o=0;o<r.length;o+=1)console.error(r[o]);throw r[0]}}finally{this._debug(s,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await ss(this.userStorage,this.storageKey+"-user",{user:t.user});const s=Object.assign({},t);delete s.user;const r=Ac(s);await ss(this.storage,this.storageKey,r)}else{const s=Ac(t);await ss(this.storage,this.storageKey,s)}}async _removeSession(){this._debug("#_removeSession()"),await Bn(this.storage,this.storageKey),await Bn(this.storage,this.storageKey+"-code-verifier"),await Bn(this.storage,this.storageKey+"-user"),this.userStorage&&await Bn(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&on()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),is);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-e)/is);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${is}ms, refresh threshold is ${co} ticks`),s<=co&&await this._callRefreshToken(n.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof bd)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!on()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){const s=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[r,a]=await Bi(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(r)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(o.toString())}if(n?.queryParams){const r=new URLSearchParams(n.queryParams);s.push(r.toString())}return n?.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${s.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var n;const{data:s,error:r}=t;return r?{data:null,error:r}:await We(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _enroll(e){try{return await this._useSession(async t=>{var n,s;const{data:r,error:a}=t;if(a)return{data:null,error:a};const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:l,error:c}=await We(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=r?.session)===null||n===void 0?void 0:n.access_token});return c?{data:null,error:c}:(e.factorType==="totp"&&(!((s=l?.totp)===null||s===void 0)&&s.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(t){if(Be(t))return{data:null,error:t};throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:s,error:r}=t;if(r)return{data:null,error:r};const{data:a,error:o}=await We(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token});return o?{data:null,error:o}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),{data:a,error:o})})}catch(t){if(Be(t))return{data:null,error:t};throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:s,error:r}=t;return r?{data:null,error:r}:await We(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(Be(t))return{data:null,error:t};throw t}})}async _challengeAndVerify(e){const{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?{data:null,error:n}:await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){const{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};const n=e?.factors||[],s=n.filter(a=>a.factor_type==="totp"&&a.status==="verified"),r=n.filter(a=>a.factor_type==="phone"&&a.status==="verified");return{data:{all:n,totp:s,phone:r},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var t,n;const{data:{session:s},error:r}=e;if(r)return{data:null,error:r};if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:a}=ua(s.access_token);let o=null;a.aal&&(o=a.aal);let l=o;((n=(t=s.user.factors)===null||t===void 0?void 0:t.filter(d=>d.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(l="aal2");const u=a.amr||[];return{data:{currentLevel:o,nextLevel:l,currentAuthenticationMethods:u},error:null}}))}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(o=>o.kid===e);if(n)return n;const s=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+ig>s)return n;const{data:r,error:a}=await We(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!r.keys||r.keys.length===0||(this.jwks=r,this.jwks_cached_at=s,n=r.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){const{data:f,error:v}=await this.getSession();if(v||!f.session)return{data:null,error:v};n=f.session.access_token}const{header:s,payload:r,signature:a,raw:{header:o,payload:l}}=ua(n);t?.allowExpired||Ag(r.exp);const c=!s.alg||s.alg.startsWith("HS")||!s.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(s.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){const{error:f}=await this.getUser(n);if(f)throw f;return{data:{claims:r,header:s,signature:a},error:null}}const u=Rg(s.alg),d=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,d,a,fg(`${o}.${l}`)))throw new fo("Invalid JWT signature");return{data:{claims:r,header:s,signature:a},error:null}}catch(n){if(Be(n))return{data:null,error:n};throw n}}}Ds.nextInstanceID=0;const Gg=Ds;class Wg extends Gg{constructor(e){super(e)}}var $g=function(i,e,t,n){function s(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(u){try{c(n.next(u))}catch(d){a(d)}}function l(u){try{c(n.throw(u))}catch(d){a(d)}}function c(u){u.done?r(u.value):s(u.value).then(o,l)}c((n=n.apply(i,e||[])).next())})};class Xg{constructor(e,t,n){var s,r,a;this.supabaseUrl=e,this.supabaseKey=t;const o=Zm(e);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",o),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",o),this.storageUrl=new URL("storage/v1",o),this.functionsUrl=new URL("functions/v1",o);const l=`sb-${o.hostname.split(".")[0]}-auth-token`,c={db:jm,realtime:Gm,auth:Object.assign(Object.assign({},Vm),{storageKey:l}),global:Hm},u=Jm(n??{},c);this.storageKey=(s=u.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(r=u.global.headers)!==null&&r!==void 0?r:{},u.accessToken?(this.accessToken=u.accessToken,this.auth=new Proxy({},{get:(d,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((a=u.auth)!==null&&a!==void 0?a:{},this.headers,u.global.fetch),this.fetch=qm(t,this._getAccessToken.bind(this),u.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},u.realtime)),this.rest=new lm(new URL("rest/v1",o).href,{headers:this.headers,schema:u.db.schema,fetch:this.fetch}),this.storage=new Fm(this.storageUrl.href,this.headers,this.fetch,n?.storage),u.accessToken||this._listenForAuthEvents()}get functions(){return new Zp(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,t;return $g(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(t=(e=n.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:s,userStorage:r,storageKey:a,flowType:o,lock:l,debug:c},u,d){const h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Wg({url:this.authUrl.href,headers:Object.assign(Object.assign({},h),u),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:s,userStorage:r,flowType:o,lock:l,debug:c,fetch:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(f=>f.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new Mm(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,n)=>{this._handleTokenChanged(t,"CLIENT",n?.access_token)})}_handleTokenChanged(e,t,n){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const qg=(i,e,t)=>new Xg(i,e,t);function Kg(){if(typeof window<"u"||typeof process>"u")return!1;const i=process.version;if(i==null)return!1;const e=i.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}Kg()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Yg="https://xexirelbnwvbkogvaktk.supabase.co",Jg="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleGlyZWxibnd2YmtvZ3Zha3RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDI2NDksImV4cCI6MjA3MzE3ODY0OX0.BiFY-ez1TD3pNceCRsSXXXc5PmisVpmaWW-y6P-WS6I",Zt=qg(Yg,Jg),Sd=Z.createContext(void 0),Zr=()=>{const i=Z.useContext(Sd);if(i===void 0)throw new Error("useAuth must be used within an AuthProvider");return i},Zg=({children:i})=>{const[e,t]=Z.useState(null),[n,s]=Z.useState(!1),[r,a]=Z.useState(!0),o=d=>{s(!!d)},l=async d=>{let h="en";try{if(d){const{data:f,error:v}=await Zt.from("profiles").select("locale").eq("id",d.id).single();v?console.warn("Could not fetch profile locale:",v.message):f?.locale&&(h=f.locale)}if(!d){const f=localStorage.getItem("i18nextLng");if(f&&["en","ar"].includes(f))h=f;else{const v=navigator.language.split("-")[0];["en","ar"].includes(v)&&(h=v)}}pt.language!==h&&await pt.changeLanguage(h)}catch(f){console.error("Failed to initialize language:",f)}};Z.useEffect(()=>{(async()=>{const{data:{session:f}}=await Zt.auth.getSession(),v=f?.user??null;t(v),o(v),await l(v),a(!1)})();const{data:{subscription:h}}=Zt.auth.onAuthStateChange(async(f,v)=>{const _=v?.user??null;t(_),o(_),await l(_)});return()=>h.unsubscribe()},[]);const c=async(d,h)=>{const{error:f}=await Zt.auth.signInWithPassword({email:d,password:h});if(f)throw f;const v=15;let _=0;for(;_<v;){const{data:{session:m}}=await Zt.auth.getSession();if(m?.user){t(m.user),o(m.user),await l(m.user);return}await new Promise(p=>setTimeout(p,200)),_++}throw new Error("Failed to establish session after sign-in")},u=async()=>{const{error:d}=await Zt.auth.signOut();if(d)throw d;t(null),s(!1);const h=navigator.language.split("-")[0]==="ar"?"ar":"en";pt.language!==h&&await pt.changeLanguage(h)};return g.jsx(Sd.Provider,{value:{user:e,isAdmin:n,loading:r,signIn:c,signOut:u},children:i})},at=({variant:i="primary",size:e="md",loading:t=!1,disabled:n,children:s,className:r="",...a})=>{const o="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",l={primary:"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl",secondary:"bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100",ghost:"hover:bg-gray-100 text-gray-700 focus:ring-gray-500 dark:hover:bg-gray-800 dark:text-gray-300",danger:"bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-lg hover:shadow-xl"},c={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return g.jsxs(we.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:`${o} ${l[i]} ${c[e]} ${r}`,disabled:t||n,...a,children:[t&&g.jsx(ch,{className:"w-4 h-4 mr-2 animate-spin"}),s]})},wd=()=>{const{t:i}=Ai();return[{name:i("header.nav.home"),href:""},{name:i("header.nav.about"),href:"about"},{name:i("header.nav.projects"),href:"projects"},{name:i("header.nav.contact"),href:"contact"}]},Qg=()=>{const{i18n:i}=Ai(),e=Fs(),[t,n]=Z.useState({left:0,width:0,opacity:0}),s=Z.useRef([]),r=wd(),a=Z.useMemo(()=>{const u=e.pathname.split("/").filter(Boolean),d=u[0],v=(d==="en"||d==="ar"?u.slice(1):u).join("/");return v===""?"/":`/${v}`},[e.pathname]),o=Z.useMemo(()=>r.map(u=>{const d=u.href===""?"/":`/${u.href.replace(/^\/+/,"")}`,h=`/${i.language}${d==="/"?"":d}`;return{...u,fullPath:h,isActive:a===d,itemPath:d}}),[r,i.language,a]),l=o.findIndex(u=>u.isActive);Z.useEffect(()=>{if(l>=0&&s.current[l]){const u=s.current[l],{width:d}=u.getBoundingClientRect();n({left:u.offsetLeft,width:d,opacity:1})}},[l,i.language]);const c=u=>{if(s.current[u]){const d=s.current[u],{width:h}=d.getBoundingClientRect();n({left:d.offsetLeft,width:h,opacity:1})}};return Z.useEffect(()=>{l===-1&&n({left:0,width:0,opacity:0})},[l]),g.jsxs("ul",{className:"relative mx-auto flex w-fit rounded-full bg-white dark:border-white dark:bg-gray-900",children:[o.map((u,d)=>g.jsx(Ed,{to:u.fullPath,isActive:u.isActive,index:d,ref:h=>s.current[d]=h,setPosition:n,onActivate:c,children:u.name},`${u.name}-${i.language}`)),g.jsx(e0,{position:t})]})},Ed=Z.forwardRef(({children:i,to:e,isActive:t,index:n,setPosition:s,onActivate:r},a)=>{const o=()=>r(n),l=()=>{if(a&&typeof a!="function"&&a.current){const{width:c}=a.current.getBoundingClientRect();s({left:a.current.offsetLeft,width:c,opacity:1})}};return g.jsx(Kn,{to:e,className:"w-fit block",children:g.jsx("li",{ref:a,onClick:o,onMouseEnter:l,className:`
            relative z-10 block cursor-pointer px-3 text-xs uppercase md:px-5 md:pt-2 font-bold md:text-xs
            ${t?"text-white mix-blend-difference":"text-black dark:text-white mix-blend-difference"}
          `,children:i})})});Ed.displayName="Tab";const e0=({position:i})=>g.jsx(we.li,{animate:{left:i.left,width:i.width,opacity:i.opacity},transition:{type:"spring",stiffness:300,damping:30},className:"absolute z-0 h-5 rounded-full bg-black dark:bg-white md:h-8"});function Vr(){return Vr=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Vr.apply(this,arguments)}function t0(i,e){if(i==null)return{};var t={},n=Object.keys(i),s,r;for(r=0;r<n.length;r++)s=n[r],!(e.indexOf(s)>=0)&&(t[s]=i[s]);return t}var n0=["cdnSuffix","cdnUrl","countryCode","style","svg"],i0="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",s0="svg",r0=127397,Lc=function(e){var t=e.cdnSuffix,n=t===void 0?s0:t,s=e.cdnUrl,r=s===void 0?i0:s,a=e.countryCode,o=e.style,l=e.svg,c=l===void 0?!1:l,u=t0(e,n0);if(typeof a!="string")return null;if(c){var d=""+r+a.toLowerCase()+"."+n;return Z.createElement("img",Object.assign({},u,{src:d,style:Vr({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},o)}))}var h=a.toUpperCase().replace(/./g,function(f){return String.fromCodePoint(f.charCodeAt(0)+r0)});return Z.createElement("span",Object.assign({role:"img"},u,{style:Vr({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},o)}),h)};const fa=[{code:"en",name:"English",country_code:"US"},{code:"ar",name:"العربية",country_code:"SA"}],Ic=()=>{const{i18n:i}=Ai(),{user:e}=Zr(),t=Xr(),n=Fs(),[s,r]=Z.useState(!1),a=Z.useMemo(()=>fa.find(c=>c.code===i.language)||fa[0],[i.language]),o=i.language==="ar",l=c=>{if(i.language===c){r(!1);return}localStorage.setItem("i18nextLng",c),e&&Zt.from("profiles").update({locale:c}).eq("id",e.id).then(({error:h})=>{h&&console.error("Failed to save language:",h)});const u=n.pathname.split("/").filter(Boolean);u[0]=c;const d=`/${u.join("/")}${n.search}${n.hash}`;r(!1),t(d,{replace:!0})};return Z.useEffect(()=>{const c=()=>{document.documentElement.lang=i.language,document.documentElement.dir=i.dir()};return c(),i.on("languageChanged",c),()=>void i.off("languageChanged",c)},[i]),g.jsxs("div",{className:"relative",dir:o?"rtl":"ltr",children:[g.jsxs(at,{variant:"ghost",size:"sm",onClick:()=>r(!s),className:"flex items-center space-x-2 p-2 rtl:space-x-reverse","aria-label":"Change language",children:[g.jsx(Lc,{countryCode:a.country_code,svg:!0,style:{width:"1.2em",height:"1.2em",borderRadius:"3px"},title:a.name}),g.jsx("span",{className:"pr-2",children:a.name}),g.jsx(uh,{className:`w-3 h-3 transition-transform ${s?"rotate-180":""}`})]}),g.jsx(Mi,{children:s&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)}),g.jsx(we.div,{initial:{opacity:0,scale:.95,y:-10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-10},className:`
                absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg
                border border-gray-200 dark:border-gray-700 py-1 z-50
                ${o?"left-0":"right-0"}
              `,dir:"ltr",children:fa.map(c=>g.jsxs("button",{onClick:()=>l(c.code),className:`
                    w-full text-left px-4 py-2 text-sm transition-colors duration-200
                    flex items-center space-x-3
                    ${i.language===c.code?"bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}
                  `,children:[g.jsx(Lc,{countryCode:c.country_code,svg:!0,style:{width:"1.5em",height:"1.2em",borderRadius:"3px"},title:c.name}),g.jsx("span",{children:c.name}),i.language===c.code&&g.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-600 rounded-full"})]},c.code))})]})})]})},a0=()=>{const[i,e]=Z.useState(!1),[t,n]=Z.useState(!1),{isDarkMode:s,toggleTheme:r}=Wp(),{user:a,isAdmin:o,signOut:l}=Zr(),{t:c}=Ai(),u=Fs(),d=wd(),h=v=>u.pathname===`/${v}`||v===""&&u.pathname==="/",f=async()=>{try{await l(),n(!1),Uh("/")}catch(v){console.error("Error signing out:",v)}};return g.jsx(we.header,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"fixed top-0 w-full z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"flex justify-between items-center h-16",children:[g.jsxs(Kn,{to:"/",className:"flex items-center gap-2",children:[g.jsx(we.div,{whileHover:{rotate:360},transition:{duration:.5},className:"w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center",children:g.jsx("span",{className:"text-white font-bold text-lg",children:"P"})}),g.jsx("span",{className:"text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Portfolio"})]}),g.jsx(Qg,{}),g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"hidden md:block",children:g.jsx(Ic,{})}),g.jsx(at,{variant:"ghost",size:"sm",onClick:r,className:"p-2","aria-label":"Toggle theme",children:s?g.jsx(dh,{className:"w-5 h-5"}):g.jsx(hh,{className:"w-5 h-5"})}),a?g.jsxs("div",{className:"relative",children:[g.jsx(at,{variant:"ghost",size:"sm",onClick:()=>n(!t),className:"p-2",children:g.jsx(fh,{className:"w-5 h-5"})}),g.jsx(Mi,{children:t&&g.jsxs(we.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1",children:[o&&g.jsx(Kn,{to:"admin",className:"block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",onClick:()=>n(!1),children:"Admin Panel"}),g.jsxs("button",{onClick:f,className:"w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2",children:[g.jsx(ph,{className:"w-4 h-4"}),g.jsx("span",{children:c("header.auth.signOut")})]})]})})]}):g.jsx(Kn,{to:"login",children:g.jsx(at,{size:"sm",className:"text-base md:text-sm",children:c("header.auth.signIn")})}),g.jsx(at,{variant:"ghost",size:"sm",onClick:()=>e(!i),className:"md:hidden p-2",children:i?g.jsx(ol,{className:"w-5 h-5"}):g.jsx(mh,{className:"w-5 h-5"})})]})]}),g.jsx(Mi,{children:i&&g.jsxs(we.nav,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden py-4 border-t border-gray-200 dark:border-gray-700",children:[d.map(v=>g.jsx(Kn,{to:v.href,className:`block px-3 py-2 text-base font-medium transition-colors duration-200 ${h(v.href)?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":"text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`,onClick:()=>e(!1),children:v.name},v.name)),g.jsxs("div",{className:"border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 px-3",children:[g.jsx("div",{className:"text-xs text-gray-500 uppercase tracking-wider mb-2",children:c("header.language.title")}),g.jsx(Ic,{})]})]})})]})})},o0=()=>{const i=[{icon:Ti,href:"https://github.com/WissamZa",label:"GitHub"},{icon:Ou,href:"https://www.linkedin.com/in/wissam-zaidi",label:"LinkedIn"},{icon:ll,href:"mailto:wissam_zaidi@proton.me",label:"Email"}],{t:e}=Ai(),t=Object.entries(e("footer.navigation",{returnObjects:!0}));return g.jsx("footer",{className:"bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[g.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("div",{className:"w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center",children:g.jsx("span",{className:"text-white font-bold text-lg",children:"P"})}),g.jsx("span",{className:"text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:e("title")})]}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-md",children:e("footer.description")})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:e("footer.quick_links")}),g.jsx("ul",{className:"space-y-2",children:t.map(n=>{const[s,r]=n;return g.jsx("li",{children:g.jsx(Kn,{to:s,className:"text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:r})},s)})})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:e("footer.Connect")}),g.jsx("div",{className:"flex gap-4",children:i.map(({icon:n,href:s,label:r})=>g.jsx(we.a,{href:s,whileHover:{scale:1.1},whileTap:{scale:.9},className:"w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200","aria-label":r,children:g.jsx(n,{className:"w-5 h-5"})},r))})]})]}),g.jsx("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-800",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[g.jsxs("p",{className:"text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-1",children:[g.jsx("span",{children:"© 2025 Portfolio. Made with"}),g.jsx(gh,{className:"w-4 h-4 text-red-500"}),g.jsx("span",{children:"and React"})]}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"All rights reserved."})]})})]})})},l0=()=>{const{lang:i}=zu(),{i18n:e}=Ai(),t=Fs(),n=Xr();return Z.useEffect(()=>{i&&["en","ar"].includes(i)&&e.language!==i&&e.changeLanguage(i).catch(console.error)},[i,e]),Z.useEffect(()=>{if(i&&e.language!==i){const s=t.pathname,r=`/${e.language}${s?`/${s}`:""}`;n(r+t.search+t.hash,{replace:!0})}},[e.language,i,n,t]),g.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[g.jsx(a0,{}),g.jsxs("main",{className:"pt-16",children:[g.jsx(Oh,{})," "]}),g.jsx(o0,{})]})};var po=new Map,rr=new WeakMap,Dc=0,c0=void 0;function u0(i){return i?(rr.has(i)||(Dc+=1,rr.set(i,Dc.toString())),rr.get(i)):"0"}function d0(i){return Object.keys(i).sort().filter(e=>i[e]!==void 0).map(e=>`${e}_${e==="root"?u0(i.root):i[e]}`).toString()}function h0(i){const e=d0(i);let t=po.get(e);if(!t){const n=new Map;let s;const r=new IntersectionObserver(a=>{a.forEach(o=>{var l;const c=o.isIntersecting&&s.some(u=>o.intersectionRatio>=u);i.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=n.get(o.target))==null||l.forEach(u=>{u(c,o)})})},i);s=r.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),t={id:e,observer:r,elements:n},po.set(e,t)}return t}function f0(i,e,t={},n=c0){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const l=i.getBoundingClientRect();return e(n,{isIntersecting:n,target:i,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:s,observer:r,elements:a}=h0(t),o=a.get(i)||[];return a.has(i)||a.set(i,o),o.push(e),r.observe(i),function(){o.splice(o.indexOf(e),1),o.length===0&&(a.delete(i),r.unobserve(i)),a.size===0&&(r.disconnect(),po.delete(s))}}function Pr({threshold:i,delay:e,trackVisibility:t,rootMargin:n,root:s,triggerOnce:r,skip:a,initialInView:o,fallbackInView:l,onChange:c}={}){var u;const[d,h]=Z.useState(null),f=Z.useRef(c),[v,_]=Z.useState({inView:!!o,entry:void 0});f.current=c,Z.useEffect(()=>{if(a||!d)return;let b;return b=f0(d,(y,R)=>{_({inView:y,entry:R}),f.current&&f.current(y,R),R.isIntersecting&&r&&b&&(b(),b=void 0)},{root:s,rootMargin:n,threshold:i,trackVisibility:t,delay:e},l),()=>{b&&b()}},[Array.isArray(i)?i.toString():i,d,s,n,r,a,t,l,e]);const m=(u=v.entry)==null?void 0:u.target,p=Z.useRef(void 0);!d&&m&&!r&&!a&&p.current!==m&&(p.current=m,_({inView:!!o,entry:void 0}));const w=[h,v.inView,v.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}const Nt=({children:i,className:e="",hoverable:t=!1,glass:n=!1})=>{const s=n?"backdrop-blur-sm bg-white/10 border border-white/20 dark:bg-gray-900/10 dark:border-gray-700/20":"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700";return g.jsx(we.div,{whileHover:t?{y:-4,scale:1.02}:{},className:`rounded-xl shadow-lg transition-all duration-300 ${s} ${t?"hover:shadow-2xl cursor-pointer":""}
        ${e}
      `,children:i})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="180",p0=0,Uc=1,m0=2,Md=1,g0=2,Ln=3,kn=0,Pt=1,$t=2,wn=0,as=1,Oc=2,kc=3,Fc=4,v0=5,_i=100,_0=101,x0=102,y0=103,b0=104,S0=200,w0=201,E0=202,M0=203,mo=204,go=205,T0=206,A0=207,R0=208,C0=209,P0=210,N0=211,L0=212,I0=213,D0=214,vo=0,_o=1,xo=2,cs=3,yo=4,bo=5,So=6,wo=7,Td=0,U0=1,O0=2,Yn=0,k0=1,F0=2,B0=3,z0=4,H0=5,j0=6,V0=7,Ad=300,us=301,ds=302,Eo=303,Mo=304,ea=306,To=1e3,yi=1001,Ao=1002,fn=1003,G0=1004,ar=1005,Ut=1006,pa=1007,bi=1008,qt=1009,Rd=1010,Cd=1011,Us=1012,vl=1013,Jn=1014,Dn=1015,js=1016,_l=1017,xl=1018,hs=1020,Pd=35902,Nd=35899,Ld=1021,Id=1022,dn=1023,Os=1026,fs=1027,Dd=1028,yl=1029,Ud=1030,bl=1031,Sl=1033,Nr=33776,Lr=33777,Ir=33778,Dr=33779,Ro=35840,Co=35841,Po=35842,No=35843,Lo=36196,Io=37492,Do=37496,Uo=37808,Oo=37809,ko=37810,Fo=37811,Bo=37812,zo=37813,Ho=37814,jo=37815,Vo=37816,Go=37817,Wo=37818,$o=37819,Xo=37820,qo=37821,Ko=36492,Yo=36494,Jo=36495,Zo=36283,Qo=36284,el=36285,tl=36286,Vs=3200,W0=3201,$0=0,X0=1,_n="",_t="srgb",Zn="srgb-linear",Gr="linear",lt="srgb",Vi=7680,Bc=519,q0=512,K0=513,Y0=514,Od=515,J0=516,Z0=517,Q0=518,ev=519,zc=35044,nl="300 es",Sn=2e3,Wr=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,il=180/Math.PI;function Gs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function tv(i,e){return(i%e+e)%e}function ga(i,e,t){return(1-t)*i+t*e}function ys(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[a+0],f=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==v){let m=1-o;const p=l*h+c*f+u*v+d*_,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const y=o*w;if(l=l*m+h*y,c=c*m+f*y,u=u*m+v*y,d=d*m+_*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*f-c*h,e[t+1]=l*v+u*h+c*d-o*f,e[t+2]=c*v+u*f+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"YXZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"ZXY":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"ZYX":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"YZX":this._x=h*u*d+c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d-h*f*v;break;case"XZY":this._x=h*u*d-c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d+h*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new z,Hc=new Ws;class He{constructor(e,t,n,s,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],v=n[8],_=s[0],m=s[3],p=s[6],w=s[1],b=s[4],y=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*_+o*w+l*R,r[3]=a*m+o*b+l*A,r[6]=a*p+o*y+l*C,r[1]=c*_+u*w+d*R,r[4]=c*m+u*b+d*A,r[7]=c*p+u*y+d*C,r[2]=h*_+f*w+v*R,r[5]=h*m+f*b+v*A,r[8]=h*p+f*y+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,v=t*d+n*h+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new He;function kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nv(){const i=$r("canvas");return i.style.display="block",i}const jc={};function ks(i){i in jc||(jc[i]=!0,console.warn(i))}function iv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Vc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sv(){const i={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_n?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zn]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}const Ze=sv();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class rv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=$r("canvas")),Gi.width=e.width,Gi.height=e.height;const s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let av=0;class wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xa(s[a].image)):r.push(xa(s[a]))}else r=xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ov=0;const ya=new z;class Lt extends ti{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=yi,s=yi,r=Ut,a=bi,o=dn,l=qt,c=Lt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Gs(),this.name="",this.source=new wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case To:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case To:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ad;Lt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(f+1)/2,R=(p+1)/2,A=(u+h)/4,C=(d+_)/4,D=(v+m)/4;return b>y&&b>R?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=D/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(d-_)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lv extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends lv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fd extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cv extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),lr.subVectors(this.max,bs),Wi.subVectors(e.a,bs),$i.subVectors(e.b,bs),Xi.subVectors(e.c,bs),zn.subVectors($i,Wi),Hn.subVectors(Xi,$i),li.subVectors(Wi,Xi);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-li.z,li.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,li.z,0,-li.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-li.y,li.x,0];return!ba(t,Wi,$i,Xi,lr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Wi,$i,Xi,lr))?!1:(cr.crossVectors(zn,Hn),t=[cr.x,cr.y,cr.z],ba(t,Wi,$i,Xi,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new z,new z,new z,new z,new z,new z,new z,new z],sn=new z,or=new $s,Wi=new z,$i=new z,Xi=new z,zn=new z,Hn=new z,li=new z,bs=new z,lr=new z,cr=new z,ci=new z;function ba(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);const o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const uv=new $s,Ss=new z,Sa=new z;class El{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Sa)),this.expandByPoint(Ss.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new z,wa=new z,ur=new z,jn=new z,Ea=new z,dr=new z,Ma=new z;class dv{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wa.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(wa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ur),o=jn.dot(this.direction),l=-jn.dot(ur),c=jn.lengthSq(),u=Math.abs(1-a*a);let d,h,f,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wa).addScaledVector(ur,h),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),dr.subVectors(n,e),Ma.crossVectors(Ea,dr);let a=this.direction.dot(Ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const l=o*this.direction.dot(dr.crossVectors(jn,dr));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(jn));if(c<0||l+c>a)return null;const u=-o*jn.dot(Ma);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,v,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,v,_,m)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,v,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+v*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,v=c*u,_=c*d;t[0]=h+_*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,v=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=v*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=v*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+v,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-v,t[2]=v*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,fv)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Vn.crossVectors(n,Gt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Vn.crossVectors(n,Gt)),Vn.normalize(),hr.crossVectors(Gt,Vn),s[0]=Vn.x,s[4]=hr.x,s[8]=Gt.x,s[1]=Vn.y,s[5]=hr.y,s[9]=Gt.y,s[2]=Vn.z,s[6]=hr.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],v=n[2],_=n[6],m=n[10],p=n[14],w=n[3],b=n[7],y=n[11],R=n[15],A=s[0],C=s[4],D=s[8],E=s[12],M=s[1],L=s[5],j=s[9],k=s[13],W=s[2],q=s[6],V=s[10],G=s[14],F=s[3],J=s[7],de=s[11],oe=s[15];return r[0]=a*A+o*M+l*W+c*F,r[4]=a*C+o*L+l*q+c*J,r[8]=a*D+o*j+l*V+c*de,r[12]=a*E+o*k+l*G+c*oe,r[1]=u*A+d*M+h*W+f*F,r[5]=u*C+d*L+h*q+f*J,r[9]=u*D+d*j+h*V+f*de,r[13]=u*E+d*k+h*G+f*oe,r[2]=v*A+_*M+m*W+p*F,r[6]=v*C+_*L+m*q+p*J,r[10]=v*D+_*j+m*V+p*de,r[14]=v*E+_*k+m*G+p*oe,r[3]=w*A+b*M+y*W+R*F,r[7]=w*C+b*L+y*q+R*J,r[11]=w*D+b*j+y*V+R*de,r[15]=w*E+b*k+y*G+R*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*o*h+n*c*h+s*o*f-n*l*f)+_*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*d+t*o*h+s*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],v=e[12],_=e[13],m=e[14],p=e[15],w=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,b=v*h*c-u*m*c-v*l*f+a*m*f+u*l*p-a*h*p,y=u*_*c-v*d*c+v*o*f-a*_*f-u*o*p+a*d*p,R=v*d*l-u*_*l-v*o*h+a*_*h+u*o*m-a*d*m,A=t*w+n*b+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(_*h*r-d*m*r-_*s*f+n*m*f+d*s*p-n*h*p)*C,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*C,e[3]=(d*l*r-o*h*r-d*s*c+n*h*c+o*s*f-n*l*f)*C,e[4]=b*C,e[5]=(u*m*r-v*h*r+v*s*f-t*m*f-u*s*p+t*h*p)*C,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*C,e[8]=y*C,e[9]=(v*d*r-u*_*r-v*n*f+t*_*f+u*n*p-t*d*p)*C,e[10]=(a*_*r-v*o*r+v*n*c-t*_*c-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*C,e[12]=R*C,e[13]=(u*_*s-v*d*s+v*n*h-t*_*h-u*n*m+t*d*m)*C,e[14]=(v*o*s-a*_*s-v*n*l+t*_*l+a*n*m-t*o*m)*C,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*h+t*o*h)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,v=r*d,_=a*u,m=a*d,p=o*d,w=l*c,b=l*u,y=l*d,R=n.x,A=n.y,C=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+y)*R,s[2]=(v-b)*R,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(h+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(v+b)*C,s[9]=(m-w)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const a=qi.set(s[4],s[5],s[6]).length(),o=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);const c=1/r,u=1/a,d=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let v,_;if(l)v=r/(a-r),_=a*r/(a-r);else if(o===Sn)v=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Wr)v=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let v,_;if(l)v=1/(a-r),_=a/(a-r);else if(o===Sn)v=-2/(a-r),_=-(a+r)/(a-r);else if(o===Wr)v=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new z,rn=new Mt,hv=new z(0,0,0),fv=new z(1,1,1),Vn=new z,hr=new z,Gt=new z,Wc=new Mt,$c=new Ws;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pv=0;const Xc=new z,Ki=new Ws,Rn=new Mt,fr=new z,ws=new z,mv=new z,gv=new Ws,qc=new z(1,0,0),Kc=new z(0,1,0),Yc=new z(0,0,1),Jc={type:"added"},vv={type:"removed"},Yi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Xt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new z,t=new Fn,n=new Ws,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new He}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Kc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Kc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ws,fr,this.up):Rn.lookAt(fr,ws,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vv),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new z(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new z,Cn=new z,Aa=new z,Pn=new z,Ji=new z,Zi=new z,Zc=new z,Ra=new z,Ca=new z,Pa=new z,Na=new xt,La=new xt,Ia=new xt;class un{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),Cn.subVectors(n,t),Aa.subVectors(e,t);const a=an.dot(an),o=an.dot(Cn),l=an.dot(Aa),c=Cn.dot(Cn),u=Cn.dot(Aa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Na.setScalar(0),La.setScalar(0),Ia.setScalar(0),Na.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Na,r.x),a.addScaledVector(La,r.y),a.addScaledVector(Ia,r.z),a}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),Cn.subVectors(e,t),an.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ji.subVectors(s,n),Zi.subVectors(r,n),Ra.subVectors(e,n);const l=Ji.dot(Ra),c=Zi.dot(Ra);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,s);const u=Ji.dot(Ca),d=Zi.dot(Ca);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ji,a);Pa.subVectors(e,r);const f=Ji.dot(Pa),v=Zi.dot(Pa);if(v>=0&&f<=v)return t.copy(r);const _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Zi,o);const m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return Zc.subVectors(r,s),o=(d-u)/(d-u+(f-v)),t.copy(s).addScaledVector(Zc,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(Ji,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=tv(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Da(a,r,e+1/3),this.g=Da(a,r,e),this.b=Da(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ze.workingToColorSpace(Dt.copy(this),e),Math.round(Ke(Dt.r*255,0,255))*65536+Math.round(Ke(Dt.g*255,0,255))*256+Math.round(Ke(Dt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=_t){Ze.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(pr);const n=ga(Gn.h,pr.h,t),s=ga(Gn.s,pr.s,t),r=ga(Gn.l,pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new it;it.NAMES=zd;let _v=0;class gs extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=as,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hd extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,mr=new Ge;let xv=0;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class jd extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vd extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wi extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yv=0;const Jt=new Mt,Ua=new Xt,Qi=new z,Wt=new $s,Es=new $s,Ct=new z;class ni extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?Vd:jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wi(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Wt.min,Es.min),Wt.expandByPoint(Ct),Ct.addVectors(Wt.max,Es.max),Wt.expandByPoint(Ct)):(Wt.expandByPoint(Es.min),Wt.expandByPoint(Es.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),Ct.add(Qi)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new z,l[D]=new z;const c=new z,u=new z,d=new z,h=new Ge,f=new Ge,v=new Ge,_=new z,m=new z;function p(D,E,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),v.fromBufferAttribute(r,M),u.sub(c),d.sub(c),f.sub(h),v.sub(h);const L=1/(f.x*v.y-v.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),o[D].add(_),o[E].add(_),o[M].add(_),l[D].add(m),l[E].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,E=w.length;D<E;++D){const M=w[D],L=M.start,j=M.count;for(let k=L,W=L+j;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new z,y=new z,R=new z,A=new z;function C(D){R.fromBufferAttribute(s,D),A.copy(R);const E=o[D];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(A,E);const L=y.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,E=w.length;D<E;++D){const M=w[D],L=M.start,j=M.count;for(let k=L,W=L+j;k<W;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[v++]=c[f++]}return new en(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new Mt,ui=new dv,gr=new El,eu=new z,vr=new z,_r=new z,xr=new z,Oa=new z,yr=new z,tu=new z,br=new z;class hn extends Xt{constructor(e=new ni,t=new Hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Oa.fromBufferAttribute(d,e),a?yr.addScaledVector(Oa,u):yr.addScaledVector(Oa.sub(t),u))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(gr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(gr,eu)===null||ui.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qc.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=b;y<R;y+=3){const A=o.getX(y),C=o.getX(y+1),D=o.getX(y+2);s=Sr(this,p,e,n,c,u,d,A,C,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=Sr(this,a,e,n,c,u,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=b;y<R;y+=3){const A=y,C=y+1,D=y+2;s=Sr(this,p,e,n,c,u,d,A,C,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const w=m,b=m+1,y=m+2;s=Sr(this,a,e,n,c,u,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bv(i,e,t,n,s,r,a,o){let l;if(e.side===Pt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;br.copy(o),br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:i}}function Sr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,_r),i.getVertexPosition(c,xr);const u=bv(i,e,t,n,vr,_r,xr,tu);if(u){const d=new z;un.getBarycoord(tu,vr,_r,xr,d),s&&(u.uv=un.getInterpolatedAttribute(s,o,l,c,d,new Ge)),r&&(u.uv1=un.getInterpolatedAttribute(r,o,l,c,d,new Ge)),a&&(u.normal=un.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};un.getNormal(vr,_r,xr,h.normal),u.face=h,u.barycoord=d}return u}class Xs extends ni{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wi(c,3)),this.setAttribute("normal",new wi(u,3)),this.setAttribute("uv",new wi(d,2));function v(_,m,p,w,b,y,R,A,C,D,E){const M=y/C,L=R/D,j=y/2,k=R/2,W=A/2,q=C+1,V=D+1;let G=0,F=0;const J=new z;for(let de=0;de<V;de++){const oe=de*L-k;for(let Re=0;Re<q;Re++){const Ve=Re*M-j;J[_]=Ve*w,J[m]=oe*b,J[p]=W,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=A>0?1:-1,u.push(J.x,J.y,J.z),d.push(Re/C),d.push(1-de/D),G+=1}}for(let de=0;de<D;de++)for(let oe=0;oe<C;oe++){const Re=h+oe+q*de,Ve=h+oe+q*(de+1),tt=h+(oe+1)+q*(de+1),Ye=h+(oe+1)+q*de;l.push(Re,Ve,Ye),l.push(Ve,tt,Ye),F+=6}o.addGroup(f,F,E),f+=F,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=ps(i[t]);for(const s in n)e[s]=n[s]}return e}function Sv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const wv={clone:ps,merge:Ft};var Ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ev,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ml extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new z,nu=new Ge,iu=new Ge;class Qt extends Ml{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return il*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class Tv extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(es,ts,e,t);s.layers=this.layers,this.add(s);const r=new Qt(es,ts,e,t);r.layers=this.layers,this.add(r);const a=new Qt(es,ts,e,t);a.layers=this.layers,this.add(a);const o=new Qt(es,ts,e,t);o.layers=this.layers,this.add(o);const l=new Qt(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new Qt(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Wd extends Lt{constructor(e=[],t=us,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Av extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xs(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:wn});r.uniforms.tEquirect.value=t;const a=new hn(s,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=Ut),new Tv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class wr extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rv={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&h>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sl extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fa=new z,Cv=new z,Pv=new He;class mi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fa.subVectors(n,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pv.getNormalMatrix(e),s=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new El,Nv=new Ge(.5,.5),Er=new z;class $d{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],_=r[9],m=r[10],p=r[11],w=r[12],b=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,f-u,p-v,R-w).normalize(),s[1].setComponents(c+a,f+u,p+v,R+w).normalize(),s[2].setComponents(c+o,f+d,p+_,R+b).normalize(),s[3].setComponents(c-o,f-d,p-_,R-b).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,R-y).normalize(),t===Sn)s[5].setComponents(c+l,f+h,p+m,R+y).normalize();else if(t===Wr)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=Nv.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tl extends Lt{constructor(e,t,n=Jn,s,r,a,o=fn,l=fn,c,u=Os,d=1){if(u!==Os&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xd extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends ni{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*h-a;for(let b=0;b<c;b++){const y=b*d-r;v.push(y,-w,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const b=w+c*p,y=w+c*(p+1),R=w+1+c*(p+1),A=w+1+c*p;f.push(b,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new wi(v,3)),this.setAttribute("normal",new wi(_,3)),this.setAttribute("uv",new wi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lv extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qd extends Ml{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dv extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Uv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class wt{constructor(e){this.value=e}clone(){return new wt(this.value.clone===void 0?this.value:this.value.clone())}}function su(i,e,t,n){const s=Ov(n);switch(t){case Ld:return i*e;case Dd:return i*e/s.components*s.byteLength;case yl:return i*e/s.components*s.byteLength;case Ud:return i*e*2/s.components*s.byteLength;case bl:return i*e*2/s.components*s.byteLength;case Id:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case Sl:return i*e*4/s.components*s.byteLength;case Nr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:case No:return Math.max(i,16)*Math.max(e,8)/4;case Ro:case Po:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Yo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ov(i){switch(i){case qt:case Rd:return{byteLength:1,components:1};case Us:case Cd:case js:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Jn:case vl:case Dn:return{byteLength:4,components:1};case Pd:case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kv(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){const v=d[h],_=d[f];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,v=d.length;f<v;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,__=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Fv,alphahash_pars_fragment:Bv,alphamap_fragment:zv,alphamap_pars_fragment:Hv,alphatest_fragment:jv,alphatest_pars_fragment:Vv,aomap_fragment:Gv,aomap_pars_fragment:Wv,batching_pars_vertex:$v,batching_vertex:Xv,begin_vertex:qv,beginnormal_vertex:Kv,bsdfs:Yv,iridescence_fragment:Jv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:s_,color_pars_vertex:r_,color_vertex:a_,common:o_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:c_,displacementmap_pars_vertex:u_,displacementmap_vertex:d_,emissivemap_fragment:h_,emissivemap_pars_fragment:f_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:v_,envmap_pars_fragment:__,envmap_pars_vertex:x_,envmap_physical_pars_fragment:P_,envmap_vertex:y_,fog_vertex:b_,fog_pars_vertex:S_,fog_fragment:w_,fog_pars_fragment:E_,gradientmap_pars_fragment:M_,lightmap_pars_fragment:T_,lights_lambert_fragment:A_,lights_lambert_pars_fragment:R_,lights_pars_begin:C_,lights_toon_fragment:N_,lights_toon_pars_fragment:L_,lights_phong_fragment:I_,lights_phong_pars_fragment:D_,lights_physical_fragment:U_,lights_physical_pars_fragment:O_,lights_fragment_begin:k_,lights_fragment_maps:F_,lights_fragment_end:B_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:V_,map_fragment:G_,map_pars_fragment:W_,map_particle_fragment:$_,map_particle_pars_fragment:X_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:K_,morphinstance_vertex:Y_,morphcolor_vertex:J_,morphnormal_vertex:Z_,morphtarget_pars_vertex:Q_,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:ux,opaque_fragment:dx,packing:hx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:vx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:yx,shadowmap_vertex:bx,shadowmask_pars_fragment:Sx,skinbase_vertex:wx,skinning_pars_vertex:Ex,skinning_vertex:Mx,skinnormal_vertex:Tx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Nx,transmission_pars_fragment:Lx,uv_pars_fragment:Ix,uv_pars_vertex:Dx,uv_vertex:Ux,worldpos_vertex:Ox,background_vert:kx,background_frag:Fx,backgroundCube_vert:Bx,backgroundCube_frag:zx,cube_vert:Hx,cube_frag:jx,depth_vert:Vx,depth_frag:Gx,distanceRGBA_vert:Wx,distanceRGBA_frag:$x,equirect_vert:Xx,equirect_frag:qx,linedashed_vert:Kx,linedashed_frag:Yx,meshbasic_vert:Jx,meshbasic_frag:Zx,meshlambert_vert:Qx,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:ry,meshphong_frag:ay,meshphysical_vert:oy,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:dy,points_frag:hy,shadow_vert:fy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},le={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},vn={basic:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new it(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ft([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ft([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new it(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ft([le.points,le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ft([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ft([le.common,le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ft([le.sprite,le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Ft([le.common,le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Ft([le.lights,le.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};vn.physical={uniforms:Ft([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Mr={r:0,b:0,g:0},hi=new Fn,vy=new Mt;function _y(i,e,t,n,s,r,a){const o=new it(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const R=v(b);R===null?p(o,l):R&&R.isColor&&(p(R,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const R=v(y);R&&(R.isCubeTexture||R.mapping===ea)?(u===void 0&&(u=new hn(new Xs(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ps(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(hi)),u.material.toneMapped=Ze.getTransfer(R.colorSpace)!==lt,(d!==R||h!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new hn(new qs(2,2),new tn({name:"BackgroundMaterial",uniforms:ps(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(R.colorSpace)!==lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,h=R.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(Mr,Gd(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,y,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:w}}function xy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(M,L,j,k,W){let q=!1;const V=d(k,j,L);r!==V&&(r=V,c(r.object)),q=f(M,k,j,W),q&&v(M,k,j,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(M,L,j,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,L,j){const k=j.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let V=q[k];return V===void 0&&(V=h(l()),q[k]=V),V}function h(M){const L=[],j=[],k=[];for(let W=0;W<t;W++)L[W]=0,j[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:j,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,L,j,k){const W=r.attributes,q=L.attributes;let V=0;const G=j.getAttributes();for(const F in G)if(G[F].location>=0){const de=W[F];let oe=q[F];if(oe===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),de===void 0||de.attribute!==oe||oe&&de.data!==oe.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function v(M,L,j,k){const W={},q=L.attributes;let V=0;const G=j.getAttributes();for(const F in G)if(G[F].location>=0){let de=q[F];de===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const oe={};oe.attribute=de,de&&de.data&&(oe.data=de.data),W[F]=oe,V++}r.attributes=W,r.attributesNum=V,r.index=k}function _(){const M=r.newAttributes;for(let L=0,j=M.length;L<j;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const j=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;j[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),W[M]!==L&&(i.vertexAttribDivisor(M,L),W[M]=L)}function w(){const M=r.newAttributes,L=r.enabledAttributes;for(let j=0,k=L.length;j<k;j++)L[j]!==M[j]&&(i.disableVertexAttribArray(j),L[j]=0)}function b(M,L,j,k,W,q,V){V===!0?i.vertexAttribIPointer(M,L,j,W,q):i.vertexAttribPointer(M,L,j,k,W,q)}function y(M,L,j,k){_();const W=k.attributes,q=j.getAttributes(),V=L.defaultAttributeValues;for(const G in q){const F=q[G];if(F.location>=0){let J=W[G];if(J===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const de=J.normalized,oe=J.itemSize,Re=e.get(J);if(Re===void 0)continue;const Ve=Re.buffer,tt=Re.type,Ye=Re.bytesPerElement,K=tt===i.INT||tt===i.UNSIGNED_INT||J.gpuType===vl;if(J.isInterleavedBufferAttribute){const Q=J.data,pe=Q.stride,Ie=J.offset;if(Q.isInstancedInterleavedBuffer){for(let be=0;be<F.locationSize;be++)p(F.location+be,Q.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<F.locationSize;be++)m(F.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let be=0;be<F.locationSize;be++)b(F.location+be,oe/F.locationSize,tt,de,pe*Ye,(Ie+oe/F.locationSize*be)*Ye,K)}else{if(J.isInstancedBufferAttribute){for(let Q=0;Q<F.locationSize;Q++)p(F.location+Q,J.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<F.locationSize;Q++)m(F.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Q=0;Q<F.locationSize;Q++)b(F.location+Q,oe/F.locationSize,tt,de,oe*Ye,oe/F.locationSize*Q*Ye,K)}}else if(V!==void 0){const de=V[G];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(F.location,de);break;case 3:i.vertexAttrib3fv(F.location,de);break;case 4:i.vertexAttrib4fv(F.location,de);break;default:i.vertexAttrib1fv(F.location,de)}}}}w()}function R(){D();for(const M in n){const L=n[M];for(const j in L){const k=L[j];for(const W in k)u(k[W].object),delete k[W];delete L[j]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const j in L){const k=L[j];for(const W in k)u(k[W].object),delete k[W];delete L[j]}delete n[M.id]}function C(M){for(const L in n){const j=n[L];if(j[M.id]===void 0)continue;const k=j[M.id];for(const W in k)u(k[W].object),delete k[W];delete j[M.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function yy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*h[_];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function by(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Dn&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Sy(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new mi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,b=w*4;let y=p.clippingState||null;l.value=y,y=u(v,h,b,f);for(let R=0;R!==b;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=f+_*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wy(i){let e=new WeakMap;function t(a,o){return o===Eo?a.mapping=us:o===Mo&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eo||o===Mo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Av(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const rs=4,ru=[.125,.215,.35,.446,.526,.582],xi=20,Ba=new qd,au=new it;let za=null,Ha=0,ja=0,Va=!1;const gi=(1+Math.sqrt(5))/2,ns=1/gi,ou=[new z(-gi,ns,0),new z(gi,ns,0),new z(-ns,0,gi),new z(ns,0,gi),new z(0,gi,-ns),new z(0,gi,ns),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Ey=new z;class lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ey}=r;za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ha,ja),this._renderer.xr.enabled=Va,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:js,format:dn,colorSpace:Zn,depthBuffer:!1},s=cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=My(r)),this._blurMaterial=Ty(r,e,t)}return s}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,s,r){const l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(au),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Hd({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new hn(new Xs,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(au),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const R=this._cubeSize;Tr(s,y*R,b>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===us||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ou[(s-r-1)%ou.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new hn(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let w=0;for(let C=0;C<xi;++C){const D=C/_,E=Math.exp(-D*D/2);p.push(E),C===0?w+=E:C<m&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=v,h.mipInt.value=b-n;const y=this._sizeLods[s],R=3*y*(s>b-rs?s-b+rs:0),A=4*(this._cubeSize-y);Tr(t,R,A,3*y,2*y),l.setRenderTarget(t),l.render(d,Ba)}}function My(i){const e=[],t=[],n=[];let s=i;const r=i-rs+1+ru.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-rs?l=ru[a-i+rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,_=3,m=2,p=1,w=new Float32Array(_*v*f),b=new Float32Array(m*v*f),y=new Float32Array(p*v*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,D=A>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];w.set(E,_*v*A),b.set(h,m*v*A);const M=[A,A,A,A,A,A];y.set(M,p*v*A)}const R=new ni;R.setAttribute("position",new en(w,_)),R.setAttribute("uv",new en(b,m)),R.setAttribute("faceIndex",new en(y,p)),e.push(R),s>rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cu(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ty(i,e,t){const n=new Float32Array(xi),s=new z(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function uu(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function du(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ay(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===Mo,u=l===us||l===ds;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new lu(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new lu(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ry(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cy(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,v=d.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let b=0,y=w.length;b<y;b+=3){const R=w[b+0],A=w[b+1],C=w[b+2];h.push(R,A,A,C,C,R)}}else if(v!==void 0){const w=v.array;_=v.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const R=b+0,A=b+1,C=b+2;h.push(R,A,A,C,C,R)}}else return;const m=new(kd(h)?Vd:jd)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Py(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,h*a,v),t.update(f,n,v))}function u(h,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function d(h,f,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,v);let p=0;for(let w=0;w<v;w++)p+=f[w]*_[w];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Ny(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ly(i,e,t){const n=new WeakMap,s=new xt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),v===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*R*4*d),C=new Fd(A,y,R,d);C.type=Dn,C.needsUpdate=!0;const D=b*4;for(let M=0;M<d;M++){const L=m[M],j=p[M],k=w[M],W=y*R*4*M;for(let q=0;q<L.count;q++){const V=q*D;f===!0&&(s.fromBufferAttribute(L,q),A[W+V+0]=s.x,A[W+V+1]=s.y,A[W+V+2]=s.z,A[W+V+3]=0),v===!0&&(s.fromBufferAttribute(j,q),A[W+V+4]=s.x,A[W+V+5]=s.y,A[W+V+6]=s.z,A[W+V+7]=0),_===!0&&(s.fromBufferAttribute(k,q),A[W+V+8]=s.x,A[W+V+9]=s.y,A[W+V+10]=s.z,A[W+V+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Ge(y,R)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Iy(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Yd=new Lt,hu=new Tl(1,1),Jd=new Fd,Zd=new cv,Qd=new Wd,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),vu=new Float32Array(4);function vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function ky(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Fy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),At(t,n)}}function By(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),At(t,n)}}function zy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),At(t,n)}}function Hy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Wy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Ky(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hu.compareFunction=Od,r=hu):r=Yd,t.setTexture2D(e||r,s)}function Yy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zd,s)}function Jy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qd,s)}function Zy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jd,s)}function Qy(i){switch(i){case 5126:return Dy;case 35664:return Uy;case 35665:return Oy;case 35666:return ky;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return jy;case 35668:case 35672:return Vy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return $y;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Zy}}function eb(i,e){i.uniform1fv(this.addr,e)}function tb(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function nb(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function ib(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function sb(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rb(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ab(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ob(i,e){i.uniform1iv(this.addr,e)}function lb(i,e){i.uniform2iv(this.addr,e)}function cb(i,e){i.uniform3iv(this.addr,e)}function ub(i,e){i.uniform4iv(this.addr,e)}function db(i,e){i.uniform1uiv(this.addr,e)}function hb(i,e){i.uniform2uiv(this.addr,e)}function fb(i,e){i.uniform3uiv(this.addr,e)}function pb(i,e){i.uniform4uiv(this.addr,e)}function mb(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Yd,r[a])}function gb(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zd,r[a])}function vb(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qd,r[a])}function _b(i,e,t){const n=this.cache,s=e.length,r=ta(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jd,r[a])}function xb(i){switch(i){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return hb;case 36295:return fb;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return _b}}class yb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qy(t.type)}}class bb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xb(t.type)}}class Sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function _u(i,e){i.seq.push(e),i.map[e.id]=e}function wb(i,e,t){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),a=Ga.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_u(t,c===void 0?new yb(o,i,e):new bb(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Sb(o),_u(t,d)),t=d}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);wb(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function xu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Eb=37297;let Mb=0;function Tb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yu=new He;function Ab(i){Ze._getMatrix(yu,Ze.workingColorSpace,i);const e=`mat3( ${yu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Gr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Tb(i.getShaderSource(e),o)}else return r}function Rb(i,e){const t=Ab(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cb(i,e){let t;switch(e){case k0:t="Linear";break;case F0:t="Reinhard";break;case B0:t="Cineon";break;case z0:t="ACESFilmic";break;case j0:t="AgX";break;case V0:t="Neutral";break;case H0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new z;function Pb(){Ze.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Lb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ib(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ts(i){return i!==""}function Su(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Db,Ob)}const Ub=new Map;function Ob(i,e){let t=je[e];if(t===void 0){const n=Ub.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(kb,Fb)}function Fb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function jb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case U0:e="ENVMAP_BLENDING_MIX";break;case O0:e="ENVMAP_BLENDING_ADD";break}return e}function Vb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Gb(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Bb(t),c=zb(t),u=Hb(t),d=jb(t),h=Vb(t),f=Nb(t),v=Lb(r),_=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?je.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Cb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Rb("linearToOutputTexel",t.outputColorSpace),Pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=rl(a),a=Su(a,t),a=wu(a,t),o=rl(o),o=Su(o,t),o=wu(o,t),a=Eu(a),o=Eu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,y=w+p+o,R=xu(s,s.VERTEX_SHADER,b),A=xu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(A)||"",q=j.trim(),V=k.trim(),G=W.trim();let F=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{const de=bu(s,R,"vertex"),oe=bu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+de+`
`+oe)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||G==="")&&(J=!1);J&&(L.diagnostics={runnable:F,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(R),s.deleteShader(A),D=new Ur(s,_),E=Ib(s,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Eb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let Wb=0;class $b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xb(e),t.set(e,n)),n}}class Xb{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}}function qb(i,e,t,n,s,r,a){const o=new Bd,l=new $b,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,j,k){const W=j.fog,q=k.geometry,V=E.isMeshStandardMaterial?j.environment:null,G=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),F=G&&G.mapping===ea?G.image.height:null,J=v[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=de!==void 0?de.length:0;let Re=0;q.morphAttributes.position!==void 0&&(Re=1),q.morphAttributes.normal!==void 0&&(Re=2),q.morphAttributes.color!==void 0&&(Re=3);let Ve,tt,Ye,K;if(J){const nt=vn[J];Ve=nt.vertexShader,tt=nt.fragmentShader}else Ve=E.vertexShader,tt=E.fragmentShader,l.update(E),Ye=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);const Q=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,Pe=!!E.map,ht=!!E.matcap,P=!!G,st=!!E.aoMap,Oe=!!E.lightMap,Ne=!!E.bumpMap,_e=!!E.normalMap,rt=!!E.displacementMap,ge=!!E.emissiveMap,me=!!E.metalnessMap,Xe=!!E.roughnessMap,et=E.anisotropy>0,T=E.clearcoat>0,x=E.dispersion>0,O=E.iridescence>0,X=E.sheen>0,ee=E.transmission>0,$=et&&!!E.anisotropyMap,Te=T&&!!E.clearcoatMap,re=T&&!!E.clearcoatNormalMap,Se=T&&!!E.clearcoatRoughnessMap,Ee=O&&!!E.iridescenceMap,ie=O&&!!E.iridescenceThicknessMap,he=X&&!!E.sheenColorMap,De=X&&!!E.sheenRoughnessMap,Me=!!E.specularMap,ce=!!E.specularColorMap,ze=!!E.specularIntensityMap,N=ee&&!!E.transmissionMap,se=ee&&!!E.thicknessMap,ae=!!E.gradientMap,ve=!!E.alphaMap,te=E.alphaTest>0,Y=!!E.alphaHash,ye=!!E.extensions;let Fe=Yn;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const ut={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:tt,defines:E.defines,customVertexShaderID:Ye,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zn,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:ht,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:F,aoMap:st,lightMap:Oe,bumpMap:Ne,normalMap:_e,displacementMap:h&&rt,emissiveMap:ge,normalMapObjectSpace:_e&&E.normalMapType===X0,normalMapTangentSpace:_e&&E.normalMapType===$0,metalnessMap:me,roughnessMap:Xe,anisotropy:et,anisotropyMap:$,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:x,iridescence:O,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:X,sheenColorMap:he,sheenRoughnessMap:De,specularMap:Me,specularColorMap:ce,specularIntensityMap:ze,transmission:ee,transmissionMap:N,thicknessMap:se,gradientMap:ae,opaque:E.transparent===!1&&E.blending===as&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:Y,combine:E.combine,mapUv:Pe&&_(E.map.channel),aoMapUv:st&&_(E.aoMap.channel),lightMapUv:Oe&&_(E.lightMap.channel),bumpMapUv:Ne&&_(E.bumpMap.channel),normalMapUv:_e&&_(E.normalMap.channel),displacementMapUv:rt&&_(E.displacementMap.channel),emissiveMapUv:ge&&_(E.emissiveMap.channel),metalnessMapUv:me&&_(E.metalnessMap.channel),roughnessMapUv:Xe&&_(E.roughnessMap.channel),anisotropyMapUv:$&&_(E.anisotropyMap.channel),clearcoatMapUv:Te&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(E.sheenRoughnessMap.channel),specularMapUv:Me&&_(E.specularMap.channel),specularColorMapUv:ce&&_(E.specularColorMap.channel),specularIntensityMapUv:ze&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:se&&_(E.thicknessMap.channel),alphaMapUv:ve&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(_e||et),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Pe||ve),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===Pt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ye&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&E.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(w(M,E),b(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const M=v[E.type];let L;if(M){const j=vn[M];L=wv.clone(j.uniforms)}else L=E.uniforms;return L}function R(E,M){let L;for(let j=0,k=u.length;j<k;j++){const W=u[j];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Gb(i,M,E,r),u.push(L)),L}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:D}}function Kb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Yb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Au(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,h,f,v,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,v,_,m){const p=a(d,h,f,v,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,v,_,m){const p=a(d,h,f,v,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||Yb),n.length>1&&n.sort(h||Tu),s.length>1&&s.sort(h||Tu)}function u(){for(let d=e,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Jb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new it};break;case"SpotLight":t={position:new z,direction:new z,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Qb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let eS=0;function tS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nS(i){const e=new Zb,t=Qb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new Mt,a=new Mt;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,v=0,_=0,m=0,p=0,w=0,b=0,y=0,R=0,A=0,C=0;c.sort(tS);for(let E=0,M=c.length;E<M;E++){const L=c[E],j=L.color,k=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=j.r*k,d+=j.g*k,h+=j.b*k;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],k);C++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,F=t.get(L);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,w++}n.directional[f]=V,f++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(j).multiplyScalar(k),V.distance=W,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[_]=V;const G=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,G.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=G.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=q,y++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(j).multiplyScalar(k),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const G=L.shadow,F=t.get(L);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,F.shadowCameraNear=G.camera.near,F.shadowCameraFar=G.camera.far,n.pointShadow[v]=F,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=L.shadow.matrix,b++}n.point[v]=V,v++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(k),V.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==f||D.pointLength!==v||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==y||D.numSpotMaps!==R||D.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=f,D.pointLength=v,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=y,D.numSpotMaps=R,D.numLightProbes=C,n.version=eS++)}function l(c,u){let d=0,h=0,f=0,v=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ru(i){const e=new nS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function iS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ru(i),e.set(s,[o])):r>=a.length?(o=new Ru(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const sS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aS(i,e,t){let n=new $d;const s=new Ge,r=new Ge,a=new xt,o=new Lv({depthPacking:W0}),l=new Iv,c={},u=t.maxTextureSize,d={[kn]:Pt,[Pt]:kn,[$t]:$t},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:sS,fragmentShader:rS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new ni;v.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new hn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let p=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),j=i.state;j.setBlending(wn),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const k=p!==Ln&&this.type===Ln,W=p===Ln&&this.type!==Ln;for(let q=0,V=A.length;q<V;q++){const G=A[q],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const J=F.getFrameExtents();if(s.multiply(J),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,F.mapSize.y=r.y)),F.map===null||k===!0||W===!0){const oe=this.type!==Ln?{minFilter:fn,magFilter:fn}:{};F.map!==null&&F.map.dispose(),F.map=new pn(s.x,s.y,oe),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const de=F.getViewportCount();for(let oe=0;oe<de;oe++){const Re=F.getViewport(oe);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),j.viewport(a),F.updateMatrices(G,oe),n=F.getFrustum(),y(C,D,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===Ln&&w(F,D),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,L)};function w(A,C){const D=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pn(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,D,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,D,f,_,null)}function b(A,C,D,E){let M=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const j=M.uuid,k=C.uuid;let W=c[j];W===void 0&&(W={},c[j]=W);let q=W[k];q===void 0&&(q=M.clone(),W[k]=q,C.addEventListener("dispose",R)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Ln?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=i.properties.get(M);j.light=D}return M}function y(A,C,D,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ln)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const q=k.groups;for(let V=0,G=q.length;V<G;V++){const F=q[V],J=W[F.materialIndex];if(J&&J.visible){const de=b(A,J,E,M);A.onBeforeShadow(i,A,C,D,k,de,F),i.renderBufferDirect(D,null,k,de,A,F),A.onAfterShadow(i,A,C,D,k,de,F)}}}else if(W.visible){const q=b(A,W,E,M);A.onBeforeShadow(i,A,C,D,k,q,null),i.renderBufferDirect(D,null,k,q,A,null),A.onAfterShadow(i,A,C,D,k,q,null)}}const j=A.children;for(let k=0,W=j.length;k<W;k++)y(j[k],C,D,E,M)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const E=c[D],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const oS={[vo]:_o,[xo]:So,[yo]:wo,[cs]:bo,[_o]:vo,[So]:xo,[wo]:yo,[bo]:cs};function lS(i,e){function t(){let N=!1;const se=new xt;let ae=null;const ve=new xt(0,0,0,0);return{setMask:function(te){ae!==te&&!N&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){N=te},setClear:function(te,Y,ye,Fe,ut){ut===!0&&(te*=Fe,Y*=Fe,ye*=Fe),se.set(te,Y,ye,Fe),ve.equals(se)===!1&&(i.clearColor(te,Y,ye,Fe),ve.copy(se))},reset:function(){N=!1,ae=null,ve.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,ae=null,ve=null,te=null;return{setReversed:function(Y){if(se!==Y){const ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),se=Y;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return se},setTest:function(Y){Y?Q(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Y){ae!==Y&&!N&&(i.depthMask(Y),ae=Y)},setFunc:function(Y){if(se&&(Y=oS[Y]),ve!==Y){switch(Y){case vo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case xo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case So:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Y}},setLocked:function(Y){N=Y},setClear:function(Y){te!==Y&&(se&&(Y=1-Y),i.clearDepth(Y),te=Y)},reset:function(){N=!1,ae=null,ve=null,te=null,se=!1}}}function s(){let N=!1,se=null,ae=null,ve=null,te=null,Y=null,ye=null,Fe=null,ut=null;return{setTest:function(nt){N||(nt?Q(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(nt){se!==nt&&!N&&(i.stencilMask(nt),se=nt)},setFunc:function(nt,En,mn){(ae!==nt||ve!==En||te!==mn)&&(i.stencilFunc(nt,En,mn),ae=nt,ve=En,te=mn)},setOp:function(nt,En,mn){(Y!==nt||ye!==En||Fe!==mn)&&(i.stencilOp(nt,En,mn),Y=nt,ye=En,Fe=mn)},setLocked:function(nt){N=nt},setClear:function(nt){ut!==nt&&(i.clearStencil(nt),ut=nt)},reset:function(){N=!1,se=null,ae=null,ve=null,te=null,Y=null,ye=null,Fe=null,ut=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],v=null,_=!1,m=null,p=null,w=null,b=null,y=null,R=null,A=null,C=new it(0,0,0),D=0,E=!1,M=null,L=null,j=null,k=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=G>=2);let J=null,de={};const oe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Ve=new xt().fromArray(oe),tt=new xt().fromArray(Re);function Ye(N,se,ae,ve){const te=new Uint8Array(4),Y=i.createTexture();i.bindTexture(N,Y),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<ae;ye++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(se+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Y}const K={};K[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(cs),Ne(!1),_e(Uc),Q(i.CULL_FACE),st(wn);function Q(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function pe(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ie(N,se){return d[N]!==se?(i.bindFramebuffer(N,se),d[N]=se,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function be(N,se){let ae=f,ve=!1;if(N){ae=h.get(se),ae===void 0&&(ae=[],h.set(se,ae));const te=N.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ye=te.length;Y<ye;Y++)ae[Y]=i.COLOR_ATTACHMENT0+Y;ae.length=te.length,ve=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ae)}function Pe(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const ht={[_i]:i.FUNC_ADD,[_0]:i.FUNC_SUBTRACT,[x0]:i.FUNC_REVERSE_SUBTRACT};ht[y0]=i.MIN,ht[b0]=i.MAX;const P={[S0]:i.ZERO,[w0]:i.ONE,[E0]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[P0]:i.SRC_ALPHA_SATURATE,[R0]:i.DST_COLOR,[T0]:i.DST_ALPHA,[M0]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[C0]:i.ONE_MINUS_DST_COLOR,[A0]:i.ONE_MINUS_DST_ALPHA,[N0]:i.CONSTANT_COLOR,[L0]:i.ONE_MINUS_CONSTANT_COLOR,[I0]:i.CONSTANT_ALPHA,[D0]:i.ONE_MINUS_CONSTANT_ALPHA};function st(N,se,ae,ve,te,Y,ye,Fe,ut,nt){if(N===wn){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),N!==v0){if(N!==m||nt!==E){if((p!==_i||y!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,y=_i),nt)switch(N){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,b=null,R=null,A=null,C.set(0,0,0),D=0,m=N,E=nt}return}te=te||se,Y=Y||ae,ye=ye||ve,(se!==p||te!==y)&&(i.blendEquationSeparate(ht[se],ht[te]),p=se,y=te),(ae!==w||ve!==b||Y!==R||ye!==A)&&(i.blendFuncSeparate(P[ae],P[ve],P[Y],P[ye]),w=ae,b=ve,R=Y,A=ye),(Fe.equals(C)===!1||ut!==D)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ut),C.copy(Fe),D=ut),m=N,E=!1}function Oe(N,se){N.side===$t?pe(i.CULL_FACE):Q(i.CULL_FACE);let ae=N.side===Pt;se&&(ae=!ae),Ne(ae),N.blending===as&&N.transparent===!1?st(wn):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ve=N.stencilWrite;o.setTest(ve),ve&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function _e(N){N!==p0?(Q(i.CULL_FACE),N!==L&&(N===Uc?i.cullFace(i.BACK):N===m0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),L=N}function rt(N){N!==j&&(V&&i.lineWidth(N),j=N)}function ge(N,se,ae){N?(Q(i.POLYGON_OFFSET_FILL),(k!==se||W!==ae)&&(i.polygonOffset(se,ae),k=se,W=ae)):pe(i.POLYGON_OFFSET_FILL)}function me(N){N?Q(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Xe(N){N===void 0&&(N=i.TEXTURE0+q-1),J!==N&&(i.activeTexture(N),J=N)}function et(N,se,ae){ae===void 0&&(J===null?ae=i.TEXTURE0+q-1:ae=J);let ve=de[ae];ve===void 0&&(ve={type:void 0,texture:void 0},de[ae]=ve),(ve.type!==N||ve.texture!==se)&&(J!==ae&&(i.activeTexture(ae),J=ae),i.bindTexture(N,se||K[N]),ve.type=N,ve.texture=se)}function T(){const N=de[J];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(N){Ve.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function De(N){tt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),tt.copy(N))}function Me(N,se){let ae=c.get(se);ae===void 0&&(ae=new WeakMap,c.set(se,ae));let ve=ae.get(N);ve===void 0&&(ve=i.getUniformBlockIndex(se,N.name),ae.set(N,ve))}function ce(N,se){const ve=c.get(se).get(N);l.get(se)!==ve&&(i.uniformBlockBinding(se,ve,N.__bindingPointIndex),l.set(se,ve))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},J=null,de={},d={},h=new WeakMap,f=[],v=null,_=!1,m=null,p=null,w=null,b=null,y=null,R=null,A=null,C=new it(0,0,0),D=0,E=!1,M=null,L=null,j=null,k=null,W=null,Ve.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:pe,bindFramebuffer:Ie,drawBuffers:be,useProgram:Pe,setBlending:st,setMaterial:Oe,setFlipSided:Ne,setCullFace:_e,setLineWidth:rt,setPolygonOffset:ge,setScissorTest:me,activeTexture:Xe,bindTexture:et,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Ee,texImage3D:ie,updateUBOMapping:Me,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:Se,texSubImage2D:X,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:he,viewport:De,reset:ze}}function cS(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return f?new OffscreenCanvas(T,x):$r("canvas")}function _(T,x,O){let X=1;const ee=et(T);if((ee.width>O||ee.height>O)&&(X=O/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(X*ee.width),Te=Math.floor(X*ee.height);d===void 0&&(d=v($,Te));const re=x?v($,Te):d;return re.width=$,re.height=Te,re.getContext("2d").drawImage(T,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Te+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,O,X,ee=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),x===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){const Te=ee?Gr:Ze.getTransfer(X);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Te===lt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(T,x){let O;return T?x===null||x===Jn||x===hs?O=i.DEPTH24_STENCIL8:x===Dn?O=i.DEPTH32F_STENCIL8:x===Us&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===hs?O=i.DEPTH_COMPONENT24:x===Dn?O=i.DEPTH_COMPONENT32F:x===Us&&(O=i.DEPTH_COMPONENT16),O}function R(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==fn&&T.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),D(x),x.isVideoTexture&&u.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),M(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const O=T.source,X=h.get(O);if(X){const ee=X[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(T),Object.keys(X).length===0&&h.delete(O)}n.remove(T)}function E(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const O=T.source,X=h.get(O);delete X[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let ee=0;ee<x.__webglFramebuffer[X].length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[X][ee]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=T.textures;for(let X=0,ee=O.length;X<ee;X++){const $=n.get(O[X]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[X])}n.remove(T)}let L=0;function j(){L=0}function k(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function q(T,x){const O=n.get(T);if(T.isVideoTexture&&me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function V(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){K(O,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function G(T,x){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){K(O,T,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function F(T,x){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Q(O,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const J={[To]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},de={[fn]:i.NEAREST,[G0]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},oe={[q0]:i.NEVER,[ev]:i.ALWAYS,[K0]:i.LESS,[Od]:i.LEQUAL,[Y0]:i.EQUAL,[Q0]:i.GEQUAL,[J0]:i.GREATER,[Z0]:i.NOTEQUAL};function Re(T,x){if(x.type===Dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===pa||x.magFilter===ar||x.magFilter===bi||x.minFilter===Ut||x.minFilter===pa||x.minFilter===ar||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,J[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,de[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==ar&&x.minFilter!==bi||x.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ve(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const X=x.source;let ee=h.get(X);ee===void 0&&(ee={},h.set(X,ee));const $=W(x);if($!==T.__cacheKey){ee[$]===void 0&&(ee[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[$].usedTimes++;const Te=ee[T.__cacheKey];Te!==void 0&&(ee[T.__cacheKey].usedTimes--,Te.usedTimes===0&&E(x)),T.__cacheKey=$,T.__webglTexture=ee[$].texture}return O}function tt(T,x,O){return Math.floor(Math.floor(T/O)/x)}function Ye(T,x,O,X){const $=T.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{$.sort((ie,he)=>ie.start-he.start);let Te=0;for(let ie=1;ie<$.length;ie++){const he=$[Te],De=$[ie],Me=he.start+he.count,ce=tt(De.start,x.width,4),ze=tt(he.start,x.width,4);De.start<=Me+1&&ce===ze&&tt(De.start+De.count-1,x.width,4)===ce?he.count=Math.max(he.count,De.start+De.count-he.start):(++Te,$[Te]=De)}$.length=Te+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ie=0,he=$.length;ie<he;ie++){const De=$[ie],Me=Math.floor(De.start/4),ce=Math.ceil(De.count/4),ze=Me%x.width,N=Math.floor(Me/x.width),se=ce,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ze,N,se,ae,O,X,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function K(T,x,O){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const ee=Ve(T,x),$=x.source;t.bindTexture(X,T.__webglTexture,i.TEXTURE0+O);const Te=n.get($);if($.version!==Te.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const re=Ze.getPrimaries(Ze.workingColorSpace),Se=x.colorSpace===_n?null:Ze.getPrimaries(x.colorSpace),Ee=x.colorSpace===_n||re===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=_(x.image,!1,s.maxTextureSize);ie=Xe(x,ie);const he=r.convert(x.format,x.colorSpace),De=r.convert(x.type);let Me=b(x.internalFormat,he,De,x.colorSpace,x.isVideoTexture);Re(X,x);let ce;const ze=x.mipmaps,N=x.isVideoTexture!==!0,se=Te.__version===void 0||ee===!0,ae=$.dataReady,ve=R(x,ie);if(x.isDepthTexture)Me=y(x.format===fs,x.type),se&&(N?t.texStorage2D(i.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,he,De,null));else if(x.isDataTexture)if(ze.length>0){N&&se&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ze[0].width,ze[0].height);for(let te=0,Y=ze.length;te<Y;te++)ce=ze[te],N?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ce.width,ce.height,he,De,ce.data):t.texImage2D(i.TEXTURE_2D,te,Me,ce.width,ce.height,0,he,De,ce.data);x.generateMipmaps=!1}else N?(se&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ie.width,ie.height),ae&&Ye(x,ie,he,De)):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,he,De,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ze[0].width,ze[0].height,ie.depth);for(let te=0,Y=ze.length;te<Y;te++)if(ce=ze[te],x.format!==dn)if(he!==null)if(N){if(ae)if(x.layerUpdates.size>0){const ye=su(ce.width,ce.height,x.format,x.type);for(const Fe of x.layerUpdates){const ut=ce.data.subarray(Fe*ye/ce.data.BYTES_PER_ELEMENT,(Fe+1)*ye/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Fe,ce.width,ce.height,1,he,ut)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,he,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Me,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,he,De,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Me,ce.width,ce.height,ie.depth,0,he,De,ce.data)}else{N&&se&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ze[0].width,ze[0].height);for(let te=0,Y=ze.length;te<Y;te++)ce=ze[te],x.format!==dn?he!==null?N?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ce.width,ce.height,he,De,ce.data):t.texImage2D(i.TEXTURE_2D,te,Me,ce.width,ce.height,0,he,De,ce.data)}else if(x.isDataArrayTexture)if(N){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ie.width,ie.height,ie.depth),ae)if(x.layerUpdates.size>0){const te=su(ie.width,ie.height,x.format,x.type);for(const Y of x.layerUpdates){const ye=ie.data.subarray(Y*te/ie.data.BYTES_PER_ELEMENT,(Y+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ie.width,ie.height,1,he,De,ye)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,De,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,he,De,ie.data);else if(x.isData3DTexture)N?(se&&t.texStorage3D(i.TEXTURE_3D,ve,Me,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,De,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,he,De,ie.data);else if(x.isFramebufferTexture){if(se)if(N)t.texStorage2D(i.TEXTURE_2D,ve,Me,ie.width,ie.height);else{let te=ie.width,Y=ie.height;for(let ye=0;ye<ve;ye++)t.texImage2D(i.TEXTURE_2D,ye,Me,te,Y,0,he,De,null),te>>=1,Y>>=1}}else if(ze.length>0){if(N&&se){const te=et(ze[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,te.width,te.height)}for(let te=0,Y=ze.length;te<Y;te++)ce=ze[te],N?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he,De,ce):t.texImage2D(i.TEXTURE_2D,te,Me,he,De,ce);x.generateMipmaps=!1}else if(N){if(se){const te=et(ie);t.texStorage2D(i.TEXTURE_2D,ve,Me,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,De,ie)}else t.texImage2D(i.TEXTURE_2D,0,Me,he,De,ie);m(x)&&p(X),Te.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,O){if(x.image.length!==6)return;const X=Ve(T,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const $=n.get(ee);if(ee.version!==$.__version||X===!0){t.activeTexture(i.TEXTURE0+O);const Te=Ze.getPrimaries(Ze.workingColorSpace),re=x.colorSpace===_n?null:Ze.getPrimaries(x.colorSpace),Se=x.colorSpace===_n||Te===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!Ee&&!ie?he[Y]=_(x.image[Y],!0,s.maxCubemapSize):he[Y]=ie?x.image[Y].image:x.image[Y],he[Y]=Xe(x,he[Y]);const De=he[0],Me=r.convert(x.format,x.colorSpace),ce=r.convert(x.type),ze=b(x.internalFormat,Me,ce,x.colorSpace),N=x.isVideoTexture!==!0,se=$.__version===void 0||X===!0,ae=ee.dataReady;let ve=R(x,De);Re(i.TEXTURE_CUBE_MAP,x);let te;if(Ee){N&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ze,De.width,De.height);for(let Y=0;Y<6;Y++){te=he[Y].mipmaps;for(let ye=0;ye<te.length;ye++){const Fe=te[ye];x.format!==dn?Me!==null?N?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Fe.width,Fe.height,Me,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,ze,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Fe.width,Fe.height,Me,ce,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,ze,Fe.width,Fe.height,0,Me,ce,Fe.data)}}}else{if(te=x.mipmaps,N&&se){te.length>0&&ve++;const Y=et(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ie){N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Me,ce,he[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,he[Y].width,he[Y].height,0,Me,ce,he[Y].data);for(let ye=0;ye<te.length;ye++){const ut=te[ye].image[Y].image;N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,ut.width,ut.height,Me,ce,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,ze,ut.width,ut.height,0,Me,ce,ut.data)}}else{N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me,ce,he[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,Me,ce,he[Y]);for(let ye=0;ye<te.length;ye++){const Fe=te[ye];N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,Me,ce,Fe.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,ze,Me,ce,Fe.image[Y])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),$.__version=ee.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function pe(T,x,O,X,ee,$){const Te=r.convert(O.format,O.colorSpace),re=r.convert(O.type),Se=b(O.internalFormat,Te,re,O.colorSpace),Ee=n.get(x),ie=n.get(O);if(ie.__renderTarget=x,!Ee.__hasExternalTextures){const he=Math.max(1,x.width>>$),De=Math.max(1,x.height>>$);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,Se,he,De,x.depth,0,Te,re,null):t.texImage2D(ee,$,Se,he,De,0,Te,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ge(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ee,ie.__webglTexture,0,rt(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ee,ie.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(T,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const X=x.depthTexture,ee=X&&X.isDepthTexture?X.type:null,$=y(x.stencilBuffer,ee),Te=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=rt(x);ge(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,T)}else{const X=x.textures;for(let ee=0;ee<X.length;ee++){const $=X[ee],Te=r.convert($.format,$.colorSpace),re=r.convert($.type),Se=b($.internalFormat,Te,re,$.colorSpace),Ee=rt(x);O&&ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Se,x.width,x.height):ge(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const ee=X.__webglTexture,$=rt(x);if(x.depthTexture.format===Os)ge(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===fs)ge(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=X}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?be(x.__webglFramebuffer[0],T):be(x.__webglFramebuffer,T)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[X],T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(T,x,O){const X=n.get(T);x!==void 0&&pe(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Pe(T)}function P(T){const x=T.texture,O=n.get(T),X=n.get(x);T.addEventListener("dispose",C);const ee=T.textures,$=T.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let Se=0;Se<x.mipmaps.length;Se++)O.__webglFramebuffer[re][Se]=i.createFramebuffer()}else O.__webglFramebuffer[re]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)O.__webglFramebuffer[re]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Te)for(let re=0,Se=ee.length;re<Se;re++){const Ee=n.get(ee[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ge(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<ee.length;re++){const Se=ee[re];O.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Ee=r.convert(Se.format,Se.colorSpace),ie=r.convert(Se.type),he=b(Se.internalFormat,Ee,ie,Se.colorSpace,T.isXRRenderTarget===!0),De=rt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,O.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Re(i.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)pe(O.__webglFramebuffer[re][Se],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else pe(O.__webglFramebuffer[re],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,Se=ee.length;re<Se;re++){const Ee=ee[re],ie=n.get(Ee);let he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),Re(he,Ee),pe(O.__webglFramebuffer,T,Ee,i.COLOR_ATTACHMENT0+re,he,0),m(Ee)&&p(he)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,X.__webglTexture),Re(re,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)pe(O.__webglFramebuffer[Se],T,x,i.COLOR_ATTACHMENT0,re,Se);else pe(O.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,re,0);m(x)&&p(re),t.unbindTexture()}T.depthBuffer&&Pe(T)}function st(T){const x=T.textures;for(let O=0,X=x.length;O<X;O++){const ee=x[O];if(m(ee)){const $=w(T),Te=n.get(ee).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const Oe=[],Ne=[];function _e(T){if(T.samples>0){if(ge(T)===!1){const x=T.textures,O=T.width,X=T.height;let ee=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(T),re=x.length>1;if(re)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=T.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ie=n.get(x[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,ee,i.NEAREST),l===!0&&(Oe.length=0,Ne.length=0,Oe.push(i.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Oe.push($),Ne.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ie=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function rt(T){return Math.min(s.maxSamples,T.samples)}function ge(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Xe(T,x){const O=T.colorSpace,X=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Zn&&O!==_n&&(Ze.getTransfer(O)===lt?(X!==dn||ee!==qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function et(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=G,this.setTextureCube=F,this.rebindTextures=ht,this.setupRenderTarget=P,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ge}function uS(i,e){function t(n,s=_n){let r;const a=Ze.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rd)return i.BYTE;if(n===Cd)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===Ld)return i.ALPHA;if(n===Id)return i.RGB;if(n===dn)return i.RGBA;if(n===Os)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Dd)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===Ud)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Nr||n===Lr||n===Ir||n===Dr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===No)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Io||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Io)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===Oo||n===ko||n===Fo||n===Bo||n===zo||n===Ho||n===jo||n===Vo||n===Go||n===Wo||n===$o||n===Xo||n===qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===Yo||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Qo||n===el||n===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tn({vertexShader:dS,fragmentShader:hS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pS extends ti{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,v=null;const _=typeof XRWebGLBinding<"u",m=new fS,p={},w=t.getContextAttributes();let b=null,y=null;const R=[],A=[],C=new Ge;let D=null;const E=new Qt;E.viewport=new xt;const M=new Qt;M.viewport=new xt;const L=[E,M],j=new Dv;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=R[K];return Q===void 0&&(Q=new ka,R[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=R[K];return Q===void 0&&(Q=new ka,R[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=R[K];return Q===void 0&&(Q=new ka,R[K]=Q),Q.getHandSpace()};function q(K){const Q=A.indexOf(K.inputSource);if(Q===-1)return;const pe=R[Q];pe!==void 0&&(pe.update(K.inputSource,K.frame,c||a),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let K=0;K<R.length;K++){const Q=A[K];Q!==null&&(A[K]=null,R[K].disconnect(Q))}k=null,W=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,be=null;w.depth&&(be=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?fs:Os,Ie=w.stencil?hs:Jn);const Pe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new pn(h.textureWidth,h.textureHeight,{format:dn,type:qt,depthTexture:new Tl(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let Q=0;Q<K.removed.length;Q++){const pe=K.removed[Q],Ie=A.indexOf(pe);Ie>=0&&(A[Ie]=null,R[Ie].disconnect(pe))}for(let Q=0;Q<K.added.length;Q++){const pe=K.added[Q];let Ie=A.indexOf(pe);if(Ie===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=A.length){A.push(pe),Ie=Pe;break}else if(A[Pe]===null){A[Pe]=pe,Ie=Pe;break}if(Ie===-1)break}const be=R[Ie];be&&be.connect(pe)}}const F=new z,J=new z;function de(K,Q,pe){F.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const Ie=F.distanceTo(J),be=Q.projectionMatrix.elements,Pe=pe.projectionMatrix.elements,ht=be[14]/(be[10]-1),P=be[14]/(be[10]+1),st=(be[9]+1)/be[5],Oe=(be[9]-1)/be[5],Ne=(be[8]-1)/be[0],_e=(Pe[8]+1)/Pe[0],rt=ht*Ne,ge=ht*_e,me=Ie/(-Ne+_e),Xe=me*-Ne;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Xe),K.translateZ(me),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const et=ht+me,T=P+me,x=rt-Xe,O=ge+(Ie-Xe),X=st*P/T*et,ee=Oe*P/T*et;K.projectionMatrix.makePerspective(x,O,X,ee,et,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,pe=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),j.near=M.near=E.near=Q,j.far=M.far=E.far=pe,(k!==j.near||W!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),k=j.near,W=j.far),j.layers.mask=K.layers.mask|6,E.layers.mask=j.layers.mask&3,M.layers.mask=j.layers.mask&5;const Ie=K.parent,be=j.cameras;oe(j,Ie);for(let Pe=0;Pe<be.length;Pe++)oe(be[Pe],Ie);be.length===2?de(j,E,M):j.projectionMatrix.copy(E.projectionMatrix),Re(K,j,Ie)};function Re(K,Q,pe){pe===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=il*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(K){return p[K]};let Ve=null;function tt(K,Q){if(u=Q.getViewerPose(c||a),v=Q,u!==null){const pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ie=!1;pe.length!==j.cameras.length&&(j.cameras.length=0,Ie=!0);for(let P=0;P<pe.length;P++){const st=pe[P];let Oe=null;if(f!==null)Oe=f.getViewport(st);else{const _e=d.getViewSubImage(h,st);Oe=_e.viewport,P===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let Ne=L[P];Ne===void 0&&(Ne=new Qt,Ne.layers.enable(P),Ne.viewport=new xt,L[P]=Ne),Ne.matrix.fromArray(st.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(st.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),P===0&&(j.matrix.copy(Ne.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ie===!0&&j.cameras.push(Ne)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const P=d.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let P=0;P<pe.length;P++){const st=pe[P].camera;if(st){let Oe=p[st];Oe||(Oe=new Xd,p[st]=Oe);const Ne=d.getCameraImage(st);Oe.sourceTexture=Ne}}}}for(let pe=0;pe<R.length;pe++){const Ie=A[pe],be=R[pe];Ie!==null&&be!==void 0&&be.update(Ie,Q,c||a)}Ve&&Ve(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Ye=new Kd;Ye.setAnimationLoop(tt),this.setAnimationLoop=function(K){Ve=K},this.dispose=function(){}}}const fi=new Fn,mS=new Mt;function gS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,fi.copy(y),fi.x*=-1,fi.y*=-1,fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(mS.makeRotationFromEuler(fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vS(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const y=b.program;n.uniformBlockBinding(w,y)}function c(w,b){let y=s[w.id];y===void 0&&(v(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(w,R);const A=e.render.frame;r[w.id]!==A&&(h(w),r[w.id]=A)}function u(w){const b=d();w.__bindingPointIndex=b;const y=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=s[w.id],y=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=y.length;A<C;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,M=D.length;E<M;E++){const L=D[E];if(f(L,A,E,R)===!0){const j=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<k.length;q++){const V=k[q],G=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,j+W,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,W),W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,b,y,R){const A=w.value,C=b+"_"+y;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const D=R[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function v(w){const b=w.uniforms;let y=0;const R=16;for(let C=0,D=b.length;C<D;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,L=E.length;M<L;M++){const j=E[M],k=Array.isArray(j.value)?j.value:[j.value];for(let W=0,q=k.length;W<q;W++){const V=k[W],G=_(V),F=y%R,J=F%G.boundary,de=F+J;y+=J,de!==0&&R-de<G.storage&&(y+=R-de),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=G.storage}}}const A=y%R;return A>0&&(y+=R-A),w.__size=y,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class _S{constructor(e={}){const{canvas:t=nv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=_t;let A=0,C=0,D=null,E=-1,M=null;const L=new xt,j=new xt;let k=null;const W=new it(0);let q=0,V=t.width,G=t.height,F=1,J=null,de=null;const oe=new xt(0,0,V,G),Re=new xt(0,0,V,G);let Ve=!1;const tt=new $d;let Ye=!1,K=!1;const Q=new Mt,pe=new z,Ie=new xt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function ht(){return D===null?F:1}let P=n;function st(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){const I="webgl2";if(P=st(I,S),P===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Oe,Ne,_e,rt,ge,me,Xe,et,T,x,O,X,ee,$,Te,re,Se,Ee,ie,he,De,Me,ce,ze;function N(){Oe=new Ry(P),Oe.init(),Me=new uS(P,Oe),Ne=new by(P,Oe,e,Me),_e=new lS(P,Oe),Ne.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),rt=new Ny(P),ge=new Kb,me=new cS(P,Oe,_e,ge,Ne,Me,rt),Xe=new wy(y),et=new Ay(y),T=new kv(P),ce=new xy(P,T),x=new Cy(P,T,rt,ce),O=new Iy(P,x,T,rt),ie=new Ly(P,Ne,me),re=new Sy(ge),X=new qb(y,Xe,et,Oe,Ne,ce,re),ee=new gS(y,ge),$=new Jb,Te=new iS(Oe),Ee=new _y(y,Xe,et,_e,O,f,l),Se=new aS(y,O,Ne),ze=new vS(P,rt,Ne,_e),he=new yy(P,Oe,rt),De=new Py(P,Oe,rt),rt.programs=X.programs,y.capabilities=Ne,y.extensions=Oe,y.properties=ge,y.renderLists=$,y.shadowMap=Se,y.state=_e,y.info=rt}N();const se=new pS(y,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(V,G,!1))},this.getSize=function(S){return S.set(V,G)},this.setSize=function(S,I,B=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,G=I,t.width=Math.floor(S*F),t.height=Math.floor(I*F),B===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(V*F,G*F).floor()},this.setDrawingBufferSize=function(S,I,B){V=S,G=I,F=B,t.width=Math.floor(S*B),t.height=Math.floor(I*B),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(oe)},this.setViewport=function(S,I,B,H){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,I,B,H),_e.viewport(L.copy(oe).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,I,B,H){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,I,B,H),_e.scissor(j.copy(Re).multiplyScalar(F).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(S){_e.setScissorTest(Ve=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,B=!0){let H=0;if(S){let U=!1;if(D!==null){const ne=D.texture.format;U=ne===Sl||ne===bl||ne===yl}if(U){const ne=D.texture.type,ue=ne===qt||ne===Jn||ne===Us||ne===hs||ne===_l||ne===xl,xe=Ee.getClearColor(),fe=Ee.getClearAlpha(),Le=xe.r,Ue=xe.g,Ae=xe.b;ue?(v[0]=Le,v[1]=Ue,v[2]=Ae,v[3]=fe,P.clearBufferuiv(P.COLOR,0,v)):(_[0]=Le,_[1]=Ue,_[2]=Ae,_[3]=fe,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}I&&(H|=P.DEPTH_BUFFER_BIT),B&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ee.dispose(),$.dispose(),Te.dispose(),ge.dispose(),Xe.dispose(),et.dispose(),O.dispose(),ce.dispose(),ze.dispose(),X.dispose(),se.dispose(),se.removeEventListener("sessionstart",mn),se.removeEventListener("sessionend",Cl),si.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=rt.autoReset,I=Se.enabled,B=Se.autoUpdate,H=Se.needsUpdate,U=Se.type;N(),rt.autoReset=S,Se.enabled=I,Se.autoUpdate=B,Se.needsUpdate=H,Se.type=U}function te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Y(S){const I=S.target;I.removeEventListener("dispose",Y),ye(I)}function ye(S){Fe(S),ge.remove(S)}function Fe(S){const I=ge.get(S).programs;I!==void 0&&(I.forEach(function(B){X.releaseProgram(B)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,B,H,U,ne){I===null&&(I=be);const ue=U.isMesh&&U.matrixWorld.determinant()<0,xe=ih(S,I,B,H,U);_e.setMaterial(H,ue);let fe=B.index,Le=1;if(H.wireframe===!0){if(fe=x.getWireframeAttribute(B),fe===void 0)return;Le=2}const Ue=B.drawRange,Ae=B.attributes.position;let $e=Ue.start*Le,ot=(Ue.start+Ue.count)*Le;ne!==null&&($e=Math.max($e,ne.start*Le),ot=Math.min(ot,(ne.start+ne.count)*Le)),fe!==null?($e=Math.max($e,0),ot=Math.min(ot,fe.count)):Ae!=null&&($e=Math.max($e,0),ot=Math.min(ot,Ae.count));const vt=ot-$e;if(vt<0||vt===1/0)return;ce.setup(U,H,xe,B,fe);let ft,ct=he;if(fe!==null&&(ft=T.get(fe),ct=De,ct.setIndex(ft)),U.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*ht()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(U.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),_e.setLineWidth(Ce*ht()),U.isLineSegments?ct.setMode(P.LINES):U.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else U.isPoints?ct.setMode(P.POINTS):U.isSprite&&ct.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))ct.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,mt=U._multiDrawCounts,Je=U._multiDrawCount,jt=fe?T.get(fe).bytesPerElement:1,Ci=ge.get(H).currentProgram.getUniforms();for(let Vt=0;Vt<Je;Vt++)Ci.setValue(P,"_gl_DrawID",Vt),ct.render(Ce[Vt]/jt,mt[Vt])}else if(U.isInstancedMesh)ct.renderInstances($e,vt,U.count);else if(B.isInstancedBufferGeometry){const Ce=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,mt=Math.min(B.instanceCount,Ce);ct.renderInstances($e,vt,mt)}else ct.render($e,vt)};function ut(S,I,B){S.transparent===!0&&S.side===$t&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,Ys(S,I,B),S.side=kn,S.needsUpdate=!0,Ys(S,I,B),S.side=$t):Ys(S,I,B)}this.compile=function(S,I,B=null){B===null&&(B=S),p=Te.get(B),p.init(I),b.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const xe=ne[ue];ut(xe,B,U),H.add(xe)}else ut(ne,B,U),H.add(ne)}),p=b.pop(),H},this.compileAsync=function(S,I,B=null){const H=this.compile(S,I,B);return new Promise(U=>{function ne(){if(H.forEach(function(ue){ge.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){U(S);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let nt=null;function En(S){nt&&nt(S)}function mn(){si.stop()}function Cl(){si.start()}const si=new Kd;si.setAnimationLoop(En),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(S){nt=S,se.setAnimationLoop(S),S===null?si.stop():si.start()},se.addEventListener("sessionstart",mn),se.addEventListener("sessionend",Cl),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,I,D),p=Te.get(S,b.length),p.init(I),b.push(p),Q.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),tt.setFromProjectionMatrix(Q,Sn,I.reversedDepth),K=this.localClippingEnabled,Ye=re.init(this.clippingPlanes,K),m=$.get(S,w.length),m.init(),w.push(m),se.enabled===!0&&se.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&na(ne,I,-1/0,y.sortObjects)}na(S,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,de),Pe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Pe&&Ee.addToRenderList(m,S),this.info.render.frame++,Ye===!0&&re.beginShadows();const B=p.state.shadowsArray;Se.render(B,S,I),Ye===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),I.isArrayCamera){const ne=I.cameras;if(U.length>0)for(let ue=0,xe=ne.length;ue<xe;ue++){const fe=ne[ue];Nl(H,U,S,fe)}Pe&&Ee.render(S);for(let ue=0,xe=ne.length;ue<xe;ue++){const fe=ne[ue];Pl(m,S,fe,fe.viewport)}}else U.length>0&&Nl(H,U,S,I),Pe&&Ee.render(S),Pl(m,S,I);D!==null&&C===0&&(me.updateMultisampleRenderTarget(D),me.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(y,S,I),ce.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],Ye===!0&&re.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function na(S,I,B,H){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||tt.intersectsSprite(S)){H&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);const ue=O.update(S),xe=S.material;xe.visible&&m.push(S,ue,xe,B,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||tt.intersectsObject(S))){const ue=O.update(S),xe=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ie.copy(ue.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(Q)),Array.isArray(xe)){const fe=ue.groups;for(let Le=0,Ue=fe.length;Le<Ue;Le++){const Ae=fe[Le],$e=xe[Ae.materialIndex];$e&&$e.visible&&m.push(S,ue,$e,B,Ie.z,Ae)}}else xe.visible&&m.push(S,ue,xe,B,Ie.z,null)}}const ne=S.children;for(let ue=0,xe=ne.length;ue<xe;ue++)na(ne[ue],I,B,H)}function Pl(S,I,B,H){const U=S.opaque,ne=S.transmissive,ue=S.transparent;p.setupLightsView(B),Ye===!0&&re.setGlobalState(y.clippingPlanes,B),H&&_e.viewport(L.copy(H)),U.length>0&&Ks(U,I,B),ne.length>0&&Ks(ne,I,B),ue.length>0&&Ks(ue,I,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Nl(S,I,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new pn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?js:qt,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ne=p.state.transmissionRenderTarget[H.id],ue=H.viewport||L;ne.setSize(ue.z*y.transmissionResolutionScale,ue.w*y.transmissionResolutionScale);const xe=y.getRenderTarget(),fe=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor(W),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Pe&&Ee.render(B);const Ue=y.toneMapping;y.toneMapping=Yn;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Ye===!0&&re.setGlobalState(y.clippingPlanes,H),Ks(S,B,H),me.updateMultisampleRenderTarget(ne),me.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ot=0,vt=I.length;ot<vt;ot++){const ft=I[ot],ct=ft.object,Ce=ft.geometry,mt=ft.material,Je=ft.group;if(mt.side===$t&&ct.layers.test(H.layers)){const jt=mt.side;mt.side=Pt,mt.needsUpdate=!0,Ll(ct,B,H,Ce,mt,Je),mt.side=jt,mt.needsUpdate=!0,$e=!0}}$e===!0&&(me.updateMultisampleRenderTarget(ne),me.updateRenderTargetMipmap(ne))}y.setRenderTarget(xe,fe,Le),y.setClearColor(W,q),Ae!==void 0&&(H.viewport=Ae),y.toneMapping=Ue}function Ks(S,I,B){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ne=S.length;U<ne;U++){const ue=S[U],xe=ue.object,fe=ue.geometry,Le=ue.group;let Ue=ue.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),xe.layers.test(B.layers)&&Ll(xe,I,B,fe,Ue,Le)}}function Ll(S,I,B,H,U,ne){S.onBeforeRender(y,I,B,H,U,ne),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(y,I,B,H,S,ne),U.transparent===!0&&U.side===$t&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,y.renderBufferDirect(B,I,H,U,S,ne),U.side=kn,U.needsUpdate=!0,y.renderBufferDirect(B,I,H,U,S,ne),U.side=$t):y.renderBufferDirect(B,I,H,U,S,ne),S.onAfterRender(y,I,B,H,U,ne)}function Ys(S,I,B){I.isScene!==!0&&(I=be);const H=ge.get(S),U=p.state.lights,ne=p.state.shadowsArray,ue=U.state.version,xe=X.getParameters(S,U.state,ne,I,B),fe=X.getProgramCacheKey(xe);let Le=H.programs;H.environment=S.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(S.isMeshStandardMaterial?et:Xe).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Y),Le=new Map,H.programs=Le);let Ue=Le.get(fe);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===ue)return Dl(S,xe),Ue}else xe.uniforms=X.getUniforms(S),S.onBeforeCompile(xe,y),Ue=X.acquireProgram(xe,fe),Le.set(fe,Ue),H.uniforms=xe.uniforms;const Ae=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=re.uniform),Dl(S,xe),H.needsLights=rh(S),H.lightsStateVersion=ue,H.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Il(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Ur.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Dl(S,I){const B=ge.get(S);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function ih(S,I,B,H,U){I.isScene!==!0&&(I=be),me.resetTextureUnits();const ne=I.fog,ue=H.isMeshStandardMaterial?I.environment:null,xe=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Zn,fe=(H.isMeshStandardMaterial?et:Xe).get(H.envMap||ue),Le=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!B.morphAttributes.position,$e=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let vt=Yn;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(vt=y.toneMapping);const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=ft!==void 0?ft.length:0,Ce=ge.get(H),mt=p.state.lights;if(Ye===!0&&(K===!0||S!==M)){const Ot=S===M&&H.id===E;re.setState(H,S,Ot)}let Je=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==mt.state.version||Ce.outputColorSpace!==xe||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==fe||H.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Ue||Ce.morphTargets!==Ae||Ce.morphNormals!==$e||Ce.morphColors!==ot||Ce.toneMapping!==vt||Ce.morphTargetsCount!==ct)&&(Je=!0):(Je=!0,Ce.__version=H.version);let jt=Ce.currentProgram;Je===!0&&(jt=Ys(H,I,U));let Ci=!1,Vt=!1,_s=!1;const gt=jt.getUniforms(),Kt=Ce.uniforms;if(_e.useProgram(jt.program)&&(Ci=!0,Vt=!0,_s=!0),H.id!==E&&(E=H.id,Vt=!0),Ci||M!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),gt.setValue(P,"projectionMatrix",S.projectionMatrix),gt.setValue(P,"viewMatrix",S.matrixWorldInverse);const Bt=gt.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,pe.setFromMatrixPosition(S.matrixWorld)),Ne.logarithmicDepthBuffer&&gt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Vt=!0,_s=!0)}if(U.isSkinnedMesh){gt.setOptional(P,U,"bindMatrix"),gt.setOptional(P,U,"bindMatrixInverse");const Ot=U.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),gt.setValue(P,"boneTexture",Ot.boneTexture,me))}U.isBatchedMesh&&(gt.setOptional(P,U,"batchingTexture"),gt.setValue(P,"batchingTexture",U._matricesTexture,me),gt.setOptional(P,U,"batchingIdTexture"),gt.setValue(P,"batchingIdTexture",U._indirectTexture,me),gt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&gt.setValue(P,"batchingColorTexture",U._colorsTexture,me));const Yt=B.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&ie.update(U,B,jt),(Vt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,gt.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kt.envMap.value=fe,Kt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Kt.envMapIntensity.value=I.environmentIntensity),Vt&&(gt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&sh(Kt,_s),ne&&H.fog===!0&&ee.refreshFogUniforms(Kt,ne),ee.refreshMaterialUniforms(Kt,H,F,G,p.state.transmissionRenderTarget[S.id]),Ur.upload(P,Il(Ce),Kt,me)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ur.upload(P,Il(Ce),Kt,me),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(P,"center",U.center),gt.setValue(P,"modelViewMatrix",U.modelViewMatrix),gt.setValue(P,"normalMatrix",U.normalMatrix),gt.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ot=H.uniformsGroups;for(let Bt=0,ia=Ot.length;Bt<ia;Bt++){const ri=Ot[Bt];ze.update(ri,jt),ze.bind(ri,jt)}}return jt}function sh(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function rh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,I,B){const H=ge.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ge.get(S.texture).__webglTexture=I,ge.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const B=ge.get(S);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0};const ah=P.createFramebuffer();this.setRenderTarget=function(S,I=0,B=0){D=S,A=I,C=B;let H=!0,U=null,ne=!1,ue=!1;if(S){const fe=ge.get(S);if(fe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(fe.__webglFramebuffer===void 0)me.setupRenderTarget(S);else if(fe.__hasExternalTextures)me.rebindTextures(S,ge.get(S.texture).__webglTexture,ge.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ae=S.depthTexture;if(fe.__boundDepthTexture!==Ae){if(Ae!==null&&ge.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const Ue=ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?U=Ue[I][B]:U=Ue[I],ne=!0):S.samples>0&&me.useMultisampledRTT(S)===!1?U=ge.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[B]:U=Ue,L.copy(S.viewport),j.copy(S.scissor),k=S.scissorTest}else L.copy(oe).multiplyScalar(F).floor(),j.copy(Re).multiplyScalar(F).floor(),k=Ve;if(B!==0&&(U=ah),_e.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&_e.drawBuffers(S,U),_e.viewport(L),_e.scissor(j),_e.setScissorTest(k),ne){const fe=ge.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,B)}else if(ue){const fe=I;for(let Le=0;Le<S.textures.length;Le++){const Ue=ge.get(S.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,B,fe)}}else if(S!==null&&B!==0){const fe=ge.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(S,I,B,H,U,ne,ue,xe=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){_e.bindFramebuffer(P.FRAMEBUFFER,fe);try{const Le=S.textures[xe],Ue=Le.format,Ae=Le.type;if(!Ne.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-H&&B>=0&&B<=S.height-U&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(I,B,H,U,Me.convert(Ue),Me.convert(Ae),ne))}finally{const Le=D!==null?ge.get(D).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,I,B,H,U,ne,ue,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe)if(I>=0&&I<=S.width-H&&B>=0&&B<=S.height-U){_e.bindFramebuffer(P.FRAMEBUFFER,fe);const Le=S.textures[xe],Ue=Le.format,Ae=Le.type;if(!Ne.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(I,B,H,U,Me.convert(Ue),Me.convert(Ae),0);const ot=D!==null?ge.get(D).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,ot);const vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await iv(P,vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer($e),P.deleteSync(vt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,B=0){const H=Math.pow(2,-B),U=Math.floor(S.image.width*H),ne=Math.floor(S.image.height*H),ue=I!==null?I.x:0,xe=I!==null?I.y:0;me.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ue,xe,U,ne),_e.unbindTexture()};const oh=P.createFramebuffer(),lh=P.createFramebuffer();this.copyTextureToTexture=function(S,I,B=null,H=null,U=0,ne=null){ne===null&&(U!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let ue,xe,fe,Le,Ue,Ae,$e,ot,vt;const ft=S.isCompressedTexture?S.mipmaps[ne]:S.image;if(B!==null)ue=B.max.x-B.min.x,xe=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Le=B.min.x,Ue=B.min.y,Ae=B.isBox3?B.min.z:0;else{const Yt=Math.pow(2,-U);ue=Math.floor(ft.width*Yt),xe=Math.floor(ft.height*Yt),S.isDataArrayTexture?fe=ft.depth:S.isData3DTexture?fe=Math.floor(ft.depth*Yt):fe=1,Le=0,Ue=0,Ae=0}H!==null?($e=H.x,ot=H.y,vt=H.z):($e=0,ot=0,vt=0);const ct=Me.convert(I.format),Ce=Me.convert(I.type);let mt;I.isData3DTexture?(me.setTexture3D(I,0),mt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(me.setTexture2DArray(I,0),mt=P.TEXTURE_2D_ARRAY):(me.setTexture2D(I,0),mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Je=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ci=P.getParameter(P.UNPACK_SKIP_PIXELS),Vt=P.getParameter(P.UNPACK_SKIP_ROWS),_s=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae);const gt=S.isDataArrayTexture||S.isData3DTexture,Kt=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const Yt=ge.get(S),Ot=ge.get(I),Bt=ge.get(Yt.__renderTarget),ia=ge.get(Ot.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Bt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let ri=0;ri<fe;ri++)gt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(S).__webglTexture,U,Ae+ri),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(I).__webglTexture,ne,vt+ri)),P.blitFramebuffer(Le,Ue,ue,xe,$e,ot,ue,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||ge.has(S)){const Yt=ge.get(S),Ot=ge.get(I);_e.bindFramebuffer(P.READ_FRAMEBUFFER,oh),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,lh);for(let Bt=0;Bt<fe;Bt++)gt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.__webglTexture,U,Ae+Bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yt.__webglTexture,U),Kt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ot.__webglTexture,ne,vt+Bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,ne),U!==0?P.blitFramebuffer(Le,Ue,ue,xe,$e,ot,ue,xe,P.COLOR_BUFFER_BIT,P.NEAREST):Kt?P.copyTexSubImage3D(mt,ne,$e,ot,vt+Bt,Le,Ue,ue,xe):P.copyTexSubImage2D(mt,ne,$e,ot,Le,Ue,ue,xe);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(mt,ne,$e,ot,vt,ue,xe,fe,ct,Ce,ft.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(mt,ne,$e,ot,vt,ue,xe,fe,ct,ft.data):P.texSubImage3D(mt,ne,$e,ot,vt,ue,xe,fe,ct,Ce,ft):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,$e,ot,ue,xe,ct,Ce,ft.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,$e,ot,ft.width,ft.height,ct,ft.data):P.texSubImage2D(P.TEXTURE_2D,ne,$e,ot,ue,xe,ct,Ce,ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,Je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ci),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_s),ne===0&&I.generateMipmaps&&P.generateMipmap(mt),_e.unbindTexture()},this.initRenderTarget=function(S){ge.get(S).__webglFramebuffer===void 0&&me.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?me.setTextureCube(S,0):S.isData3DTexture?me.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?me.setTexture2DArray(S,0):me.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,_e.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}/**
 * postprocessing v6.37.8 build Fri Sep 12 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Wa=1/1e3,xS=1e3,yS=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*Wa}get fixedDelta(){return this._fixedDelta*Wa}set fixedDelta(i){this._fixedDelta=i*xS}get elapsed(){return this._elapsed*Wa}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},bS=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new ni;return t.setAttribute("position",new en(i,3)),t.setAttribute("uv",new en(e,2)),t})(),ii=class al{static get fullscreenGeometry(){return bS}constructor(e="Pass",t=new sl,n=new Ml){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new hn(al.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new sl),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Vs){}render(e,t,n,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof pn||t instanceof gs||t instanceof Lt||t instanceof al)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},SS=class extends ii{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,s){const r=i.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},wS=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,ES="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",MS=class extends tn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new wt(null),opacity:new wt(1)},blending:wn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:wS,vertexShader:ES})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},TS=class extends ii{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new MS,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new pn(1,1,{minFilter:Ut,magFilter:Ut,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,s){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==qt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===_t&&(this.renderTarget.texture.colorSpace=_t))}},Cu=new it,eh=class extends ii{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=i.getClearAlpha(),l=r!==null,c=a>=0;l?(i.getClearColor(Cu),i.setClearColor(r,c?a:o)):c&&i.setClearAlpha(a),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(Cu,o):c&&i.setClearAlpha(o)}},AS=class extends ii{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new eh(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,s){const r=i.getContext(),a=i.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,d=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(d),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,e),c.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(o,l)):(i.setRenderTarget(e),i.render(o,l),i.setRenderTarget(t),i.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},Pu=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new TS,this.depthTexture=null,this.passes=[],this.timer=new yS,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new Ge),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===qt&&i.outputColorSpace===_t&&(this.inputBuffer.texture.colorSpace=_t,this.outputBuffer.texture.colorSpace=_t,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new Tl;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=fs,i.type=hs):i.type=Jn,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const s=this.renderer,r=s===null?new Ge:s.getDrawingBufferSize(new Ge),a={minFilter:Ut,magFilter:Ut,stencilBuffer:e,depthBuffer:i,type:t},o=new pn(r.width,r.height,a);return n>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=n),t===qt&&s!==null&&s.outputColorSpace===_t&&(o.texture.colorSpace=_t),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,s=n.getDrawingBufferSize(new Ge),r=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(s.width,s.height),i.initialize(n,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(i of t)i.setDepthTexture(o)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;e.reduce(r,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,s=this.outputBuffer,r=!1,a,o,l;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,n,s,i,r),c.needsSwap&&(r&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,s,i,r),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=s,s=l),c instanceof AS?r=!0:c instanceof SS&&(r=!1))}setSize(i,e,t){const n=this.renderer,s=n.getSize(new Ge);(i===void 0||e===void 0)&&(i=s.width,e=s.height),(s.width!==i||s.height!==e)&&n.setSize(i,e,t);const r=n.getDrawingBufferSize(new Ge);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),ii.fullscreenGeometry.dispose()}},Ei={NONE:0,DEPTH:1,CONVOLUTION:2},Qe={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},RS=class{constructor(){this.shaderParts=new Map([[Qe.FRAGMENT_HEAD,null],[Qe.FRAGMENT_MAIN_UV,null],[Qe.FRAGMENT_MAIN_IMAGE,null],[Qe.VERTEX_HEAD,null],[Qe.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ei.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Zn}},$a=!1,Nu=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case $t:t=this.materialsFlatShadedDoubleSide;break;case Pt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case $t:t=this.materialsDoubleSide;break;case Pt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof tn))return i.clone();const e=i.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const n=i.clone();for(const s of t)e[s[0]].value=s[1],n.uniforms[s[0]].value=s[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=kn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=Pt,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=$t,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=Pt,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=$t,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,$a){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=s}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return $a}static set workaroundEnabled(i){$a=i}},qe={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},CS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",PS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",NS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",LS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",IS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",DS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",US="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",OS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",kS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",FS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",BS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",zS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",HS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",jS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",VS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",GS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",WS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",$S="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",XS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",qS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",KS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",YS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",JS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",ZS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",QS="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",ew="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",tw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",nw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",iw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",sw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",rw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",aw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",ow=new Map([[qe.ADD,CS],[qe.ALPHA,PS],[qe.AVERAGE,NS],[qe.COLOR,LS],[qe.COLOR_BURN,IS],[qe.COLOR_DODGE,DS],[qe.DARKEN,US],[qe.DIFFERENCE,OS],[qe.DIVIDE,kS],[qe.DST,null],[qe.EXCLUSION,FS],[qe.HARD_LIGHT,BS],[qe.HARD_MIX,zS],[qe.HUE,HS],[qe.INVERT,jS],[qe.INVERT_RGB,VS],[qe.LIGHTEN,GS],[qe.LINEAR_BURN,WS],[qe.LINEAR_DODGE,$S],[qe.LINEAR_LIGHT,XS],[qe.LUMINOSITY,qS],[qe.MULTIPLY,KS],[qe.NEGATION,YS],[qe.NORMAL,JS],[qe.OVERLAY,ZS],[qe.PIN_LIGHT,QS],[qe.REFLECT,ew],[qe.SATURATION,tw],[qe.SCREEN,nw],[qe.SOFT_LIGHT,iw],[qe.SRC,sw],[qe.SUBTRACT,rw],[qe.VIVID_LIGHT,aw]]),lw=class extends ti{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new wt(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return ow.get(this.blendFunction)}},th=class extends ti{constructor(i,e,{attributes:t=Ei.NONE,blendFunction:n=qe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new lw(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Zn,this._outputColorSpace=_n}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=Vs){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof pn||e instanceof gs||e instanceof Lt||e instanceof ii)&&this[i].dispose()}}},Lu=class extends ii{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new eh,this.overrideMaterialManager=t===null?null:new Nu(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new Nu(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=i.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,r,a):i.render(r,a),a.layers.mask=l,r.background=c,i.shadowMap.autoUpdate=u}},cw=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,uw="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",dw=class extends tn{constructor(i,e,t,n,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Qr.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new wt(null),depthBuffer:new wt(null),resolution:new wt(new Ge),texelSize:new wt(new Ge),cameraNear:new wt(.3),cameraFar:new wt(1e3),aspect:new wt(1),time:new wt(0)},blending:wn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=Vs){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=cw.replace(Qe.FRAGMENT_HEAD,i.get(Qe.FRAGMENT_HEAD)||"").replace(Qe.FRAGMENT_MAIN_UV,i.get(Qe.FRAGMENT_MAIN_UV)||"").replace(Qe.FRAGMENT_MAIN_IMAGE,i.get(Qe.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=uw.replace(Qe.VERTEX_HEAD,i.get(Qe.VERTEX_HEAD)||"").replace(Qe.VERTEX_MAIN_SUPPORT,i.get(Qe.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof Qt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return Qe}};function Iu(i,e,t){for(const n of e){const s="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function hw(i,e,t){let n=e.getFragmentShader(),s=e.getVertexShader();const r=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Ei.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(Qe.FRAGMENT_HEAD)||"",u=l.get(Qe.FRAGMENT_MAIN_UV)||"",d=l.get(Qe.FRAGMENT_MAIN_IMAGE)||"",h=l.get(Qe.VERTEX_HEAD)||"",f=l.get(Qe.VERTEX_MAIN_SUPPORT)||"";const v=new Set,_=new Set;if(a&&(u+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);f+=`	${i}MainSupport(`,f+=w?`vUv);
`:`);
`;for(const b of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of b[1].split(/\s*,\s*/))t.varyings.add(y),v.add(y),_.add(y);for(const b of s.matchAll(o))_.add(b[1])}for(const w of n.matchAll(o))_.add(w[1]);for(const w of e.defines.keys())_.add(w.replace(/\([\w\s,]*\)/g,""));for(const w of e.uniforms.keys())_.add(w);_.delete("while"),_.delete("for"),_.delete("if"),e.uniforms.forEach((w,b)=>t.uniforms.set(i+b.charAt(0).toUpperCase()+b.slice(1),w)),e.defines.forEach((w,b)=>t.defines.set(i+b.charAt(0).toUpperCase()+b.slice(1),w));const m=new Map([["fragment",n],["vertex",s]]);Iu(i,_,t.defines),Iu(i,_,m),n=m.get("fragment"),s=m.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(d+=e.inputColorSpace===_t?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==_n?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${i}MainImage(color0, UV, `,(t.attributes&Ei.DEPTH)!==0&&w.test(n)&&(d+="depth, ",t.readDepth=!0),d+=`color1);
	`;const b=i+"BlendOpacity";t.uniforms.set(b,p.opacity),d+=`color0 = blend${p.blendFunction}(color0, color1, ${b});

	`,c+=`uniform float ${b};

`}if(c+=n+`
`,s!==null&&(h+=s+`
`),l.set(Qe.FRAGMENT_HEAD,c),l.set(Qe.FRAGMENT_MAIN_UV,u),l.set(Qe.FRAGMENT_MAIN_IMAGE,d),l.set(Qe.VERTEX_HEAD,h),l.set(Qe.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(const w of e.extensions)t.extensions.add(w)}}var Xa=class extends ii{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new dw(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new RS;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===qe.DST)i.attributes|=a.getAttributes()&Ei.DEPTH;else{if((i.attributes&a.getAttributes()&Ei.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);hw("e"+e++,a,i)}let t=i.shaderParts.get(Qe.FRAGMENT_HEAD),n=i.shaderParts.get(Qe.FRAGMENT_MAIN_IMAGE),s=i.shaderParts.get(Qe.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of i.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(i.attributes&Ei.DEPTH)!==0?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===_t&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Qe.FRAGMENT_HEAD,t),i.shaderParts.set(Qe.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(Qe.FRAGMENT_MAIN_UV,s);for(const[a,o]of i.shaderParts)o!==null&&i.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=Vs){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,s){for(const r of this.effects)r.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==qt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}};const Du={square:0,circle:1,triangle:2,diamond:3},qa=10,fw=3,pw="#B19EEF",mw=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const n=new Lt(e);n.minFilter=Ut,n.magFilter=Ut,n.generateMipmaps=!1;const s=[];let r=null;const a=64;let o=.1*64;const l=1/a,c=m=>Math.sin(m*Math.PI/2),u=m=>-m*(m-2),d=320,h=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height)},f=m=>{const p={x:m.x*64,y:(1-m.y)*64};let w=1;m.age<a*.3?w=c(m.age/(a*.3)):w=u(1-(m.age-a*.3)/(a*.7))||0,w*=m.force;const b=(m.vx+1)/2*255,y=(m.vy+1)/2*255,R=w*255;t.shadowOffsetX=d,t.shadowOffsetY=d,t.shadowBlur=o,t.shadowColor=`rgba(${b}, ${y}, ${R}, ${.22*w})`,t.beginPath(),t.fillStyle="rgba(255,0,0,1)",t.arc(p.x-d,p.y-d,o,0,Math.PI*2),t.fill()};return{canvas:e,texture:n,addTouch:m=>{if(r){const p=m.x-r.x,w=m.y-r.y;if(p===0&&w===0)return;const b=p*p+w*w,y=Math.sqrt(b),R=p/(y||1),A=w/(y||1),C=Math.min(b*1e4,1);s.push({x:m.x,y:m.y,age:0,force:C,vx:R,vy:A})}else s.push({x:m.x,y:m.y,age:0,force:0,vx:0,vy:0});r={x:m.x,y:m.y}},update:()=>{h();for(let m=s.length-1;m>=0;m--){const p=s[m],w=p.force*l*(1-p.age/a);p.x+=p.vx*w,p.y+=p.vy*w,p.age++,p.age>a&&s.splice(m,1)}for(let m=0;m<s.length;m++)f(s[m]);n.needsUpdate=!0},set radiusScale(m){o=.1*64*m},get radiusScale(){return o/(.1*64)},size:64}},gw=(i,e)=>{const t=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new th("LiquidEffect",t,{uniforms:new Map([["uTexture",new wt(i)],["uStrength",new wt(e?.strength??.025)],["uTime",new wt(0)],["uFreq",new wt(e?.freq??4.5)]])})},vw=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,_w=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,xw=({variant:i="square",pixelSize:e=fw,color:t=pw,className:n,style:s,antialias:r=!0,patternScale:a=2,patternDensity:o=1,liquid:l=!1,liquidStrength:c=.1,liquidRadius:u=1,pixelSizeJitter:d=0,enableRipples:h=!0,rippleIntensityScale:f=1,rippleThickness:v=.1,rippleSpeed:_=.3,liquidWobbleSpeed:m=4.5,autoPauseOffscreen:p=!0,speed:w=.5,transparent:b=!0,edgeFade:y=.5,noiseAmount:R=0})=>{const A=Z.useRef(null),C=Z.useRef({visible:!0}),D=Z.useRef(w),E=Z.useRef(null),M=Z.useRef(null),L=Z.useCallback((k,W)=>{const q=W.domElement.getBoundingClientRect(),V=W.domElement.width/q.width,G=W.domElement.height/q.height,F=(k.clientX-q.left)*V,J=(q.height-(k.clientY-q.top))*G;return{fx:F,fy:J,w:W.domElement.width,h:W.domElement.height}},[]),j=Z.useCallback(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const k=new Uint32Array(1);return window.crypto.getRandomValues(k),k[0]/4294967295}return Math.random()},[]);return Z.useEffect(()=>{const k=A.current;if(!k)return;D.current=w;const W=["antialias","liquid","noiseAmount"],q={antialias:r,liquid:l,noiseAmount:R};let V=!1;if(!E.current)V=!0;else if(M.current){for(const G of W)if(M.current[G]!==q[G]){V=!0;break}}if(V){if(E.current){const me=E.current;me.resizeObserver?.disconnect(),me.raf&&cancelAnimationFrame(me.raf),me.quad?.geometry.dispose(),me.material.dispose(),me.composer?.dispose(),me.renderer.dispose(),me.renderer.domElement.parentElement===k&&k.removeChild(me.renderer.domElement),E.current=null}const G=document.createElement("canvas"),F=G.getContext("webgl2",{antialias:r,alpha:!0});if(!F)return;const J=new _S({canvas:G,context:F,antialias:r,alpha:!0});J.domElement.style.width="100%",J.domElement.style.height="100%",J.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),k.appendChild(J.domElement);const de=J.getPixelRatio(),oe={uResolution:{value:new Ge(0,0)},uTime:{value:0},uColor:{value:new it(t)},uClickPos:{value:Array.from({length:qa},()=>new Ge(-1,-1))},uClickTimes:{value:new Float32Array(qa)},uShapeType:{value:Du[i]??0},uPixelSize:{value:e*de},uScale:{value:a},uDensity:{value:o},uPixelJitter:{value:d},uEnableRipples:{value:h?1:0},uRippleSpeed:{value:_},uRippleThickness:{value:v},uRippleIntensity:{value:f},uEdgeFade:{value:y}},Re=new sl,Ve=new qd(-1,1,1,-1,0,1),tt=new tn({vertexShader:vw,fragmentShader:_w,uniforms:oe,transparent:!0,glslVersion:nl,depthTest:!1,depthWrite:!1}),Ye=new qs(2,2),K=new hn(Ye,tt);Re.add(K);const Q=new Uv,pe=()=>{const me=k.clientWidth||1,Xe=k.clientHeight||1;J.setSize(me,Xe,!1),oe.uResolution.value.set(J.domElement.width,J.domElement.height),E.current?.composer&&E.current.composer.setSize(J.domElement.width,J.domElement.height),oe.uPixelSize.value=e*J.getPixelRatio()};pe();const Ie=new ResizeObserver(pe);Ie.observe(k);const be=j()*1e3;let Pe,ht,P;const st=[],Oe=[];if(l){ht=mw(),ht.radiusScale=u,Pe=new Pu(J);const me=new Lu(Re,Ve);P=gw(ht.texture,{strength:c,freq:m});const Xe=new Xa(Ve,P);Xe.renderToScreen=!0,Pe.addPass(me),Pe.addPass(Xe),st.push(P),Oe.push(Xe)}if(R>0){Pe||(Pe=new Pu(J),Pe.addPass(new Lu(Re,Ve)));const me=new th("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new wt(0)],["uAmount",new wt(R)]])}),Xe=new Xa(Ve,me);Xe.renderToScreen=!0,Pe&&Pe.passes.length>0&&Pe.passes.forEach(et=>{et instanceof Xa&&(et.renderToScreen=!1)}),Pe.addPass(Xe),st.push(me),Oe.push(Xe)}Pe&&Pe.setSize(J.domElement.width,J.domElement.height);const Ne=me=>{if(!E.current)return;const{fx:Xe,fy:et}=L(me,E.current.renderer),T=E.current.clickIx??0;oe.uClickPos.value[T].set(Xe,et),oe.uClickTimes.value[T]=oe.uTime.value,E.current.clickIx=(T+1)%qa},_e=me=>{if(!ht||!E.current)return;const{fx:Xe,fy:et,w:T,h:x}=L(me,E.current.renderer);ht.addTouch({x:Xe/T,y:et/x})};J.domElement.addEventListener("pointerdown",Ne,{passive:!0}),J.domElement.addEventListener("pointermove",_e,{passive:!0});let rt=0;const ge=()=>{if(p&&!C.current.visible){rt=requestAnimationFrame(ge);return}const me=be+Q.getElapsedTime()*D.current;oe.uTime.value=me,st.forEach(Xe=>{if(Xe.uniforms){const et=Xe.uniforms.get("uTime");et&&(et.value=me)}}),Pe?(ht&&ht.update(),Pe.render()):J.render(Re,Ve),rt=requestAnimationFrame(ge)};rt=requestAnimationFrame(ge),E.current={renderer:J,scene:Re,camera:Ve,material:tt,clock:Q,clickIx:0,uniforms:oe,resizeObserver:Ie,raf:rt,quad:K,timeOffset:be,composer:Pe,touch:ht,liquidEffect:P,trackedEffects:st,trackedEffectPasses:Oe}}else{const G=E.current;if(G.uniforms.uShapeType.value=Du[i]??0,G.uniforms.uPixelSize.value=e*G.renderer.getPixelRatio(),G.uniforms.uColor.value.set(t),G.uniforms.uScale.value=a,G.uniforms.uDensity.value=o,G.uniforms.uPixelJitter.value=d,G.uniforms.uEnableRipples.value=h?1:0,G.uniforms.uRippleIntensity.value=f,G.uniforms.uRippleThickness.value=v,G.uniforms.uRippleSpeed.value=_,G.uniforms.uEdgeFade.value=y,b?G.renderer.setClearAlpha(0):G.renderer.setClearColor(0,1),G.liquidEffect){const F=G.liquidEffect.uniforms.get("uStrength");F&&(F.value=c);const J=G.liquidEffect.uniforms.get("uFreq");J&&(J.value=m)}G.touch&&(G.touch.radiusScale=u)}return M.current=q,()=>{if(E.current&&V||!E.current)return;const G=E.current;G.resizeObserver?.disconnect(),G.raf&&cancelAnimationFrame(G.raf),G.quad?.geometry.dispose(),G.material.dispose(),G.composer?.dispose(),G.renderer.dispose(),G.renderer.domElement.parentElement===k&&k.removeChild(G.renderer.domElement),E.current=null}},[r,l,R,e,a,o,h,f,v,_,d,y,b,c,u,m,p,i,t,w,L,j]),g.jsx("div",{ref:A,className:`w-full h-full relative overflow-hidden ${n??""}`,style:s,"aria-label":"PixelBlast interactive background"})},yw=({variant:i="circle",pixelSize:e=6,color:t="#B19EEF",patternScale:n=3,patternDensity:s=1.2,pixelSizeJitter:r=.5,enableRipples:a,rippleSpeed:o=.4,rippleThickness:l=.12,rippleIntensityScale:c=1.5,liquid:u,liquidStrength:d=.12,liquidRadius:h=1.2,liquidWobbleSpeed:f=5,speed:v=.6,edgeFade:_=.25,transparent:m=!0})=>g.jsx("div",{style:{width:"100%",position:"relative",overflow:"hidden"},children:g.jsx(xw,{variant:i,pixelSize:e,color:t,patternScale:n,patternDensity:s,pixelSizeJitter:r,enableRipples:a,rippleSpeed:o,rippleThickness:l,rippleIntensityScale:c,liquid:u,liquidStrength:d,liquidRadius:h,liquidWobbleSpeed:f,speed:v,edgeFade:_,transparent:m})}),bw=({height:i=600,children:e})=>g.jsx("div",{style:{position:"relative",height:i},children:e}),Sw=()=>{const[i,e]=Z.useState(pt.language);return Z.useEffect(()=>{const t=()=>e(pt.language);return pt.on("languageChanged",t),()=>{pt.off("languageChanged",t)}},[]),i},ww=()=>{const[i,e]=Pr({triggerOnce:!0,threshold:.1}),t={hidden:{opacity:0,y:60},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},s=["React","TypeScript","Node.js","Python","AWS","GraphQL"],r=Sw(),{t:a}=Ai();return g.jsxs("div",{className:"min-h-screen",children:[g.jsxs(bw,{height:800,children:[g.jsx(yw,{}),g.jsxs("div",{style:{position:"absolute",inset:0,zIndex:10,display:"flex",gap:"2.5rem",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[g.jsxs(we.div,{variants:t,className:"space-y-4",children:[g.jsx(we.h1,{className:"text-5xl md:text-7xl text-center font-bold bg-linear-to-r py-1.5 from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent",animate:{backgroundPosition:["0%","100%","0%"]},transition:{duration:5,repeat:1/0,ease:"linear"},style:{backgroundSize:"200%",marginBottom:"2.5rem"},children:a("home.hero.title")}),g.jsx("p",{className:"text-xl md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:a("home.hero.subtitle")})]}),g.jsxs(we.div,{variants:t,className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[g.jsx(Kn,{to:"/projects",children:g.jsxs(at,{id:"workButton",size:"lg",className:`group flex ${r==="ar"?"flex-row-reverse":""}`,children:["View My Work",g.jsx(vh,{className:"w-5 h-5 mx-2 group-hover:translate-x-1 transition-transform"})]})}),g.jsx("a",{href:"/media/WissamZaidi-Rusame.pdf",target:"_self",rel:"noopener noreferrer",children:g.jsxs(at,{variant:"secondary",size:"lg",className:"group",children:[g.jsx(ku,{className:"w-5 h-5 mx-2"}),"Download Resume"]})})]}),g.jsx(we.div,{variants:t,className:"flex justify-center gap-6",children:[{icon:Ti,href:"https://github.com/wissamza",label:"GitHub"},{icon:Ou,href:"https://linkedin.com/in/wissam-zaidi",label:"LinkedIn"}].map(({icon:o,href:l,label:c})=>g.jsx(we.a,{href:l,whileHover:{scale:1.1,y:-2},className:"w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors","aria-label":c,children:g.jsx(o,{className:"w-6 h-6"})},c))})]})]}),g.jsx("section",{ref:i,className:"py-20 bg-white dark:bg-gray-900",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs(we.div,{initial:"hidden",animate:e?"visible":"hidden",variants:n,className:"text-center space-y-16",children:[g.jsxs(we.div,{variants:t,className:"space-y-4",children:[g.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white",children:"Technologies I Work With"}),g.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Leveraging cutting-edge technologies to build scalable, performant, and user-friendly applications."})]}),g.jsx(we.div,{variants:n,className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:s.map(o=>g.jsx(we.div,{variants:t,whileHover:{scale:1.05,y:-5},className:"group",children:g.jsxs(Nt,{glass:!0,hoverable:!0,className:"p-6 text-center",children:[g.jsx("div",{className:"w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center",children:g.jsx("span",{className:"text-white font-bold text-lg",children:o.charAt(0)})}),g.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",children:o})]})},o))})]})})})]})},Ew=()=>{const[i,e]=Pr({triggerOnce:!0,threshold:.1}),[t,n]=Pr({triggerOnce:!0,threshold:.1}),[s,r]=Pr({triggerOnce:!0,threshold:.1}),a={hidden:{opacity:0,y:60},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},l=[{category:"Frontend",items:["React","TypeScript","Next.js","Tailwind CSS","Framer Motion"]},{category:"Backend",items:["Node.js","Python","PostgreSQL","Supabase","GraphQL"]},{category:"Tools",items:["Git","Docker","AWS","Figma","VS Code"]},{category:"Soft Skills",items:["Problem Solving","Team Leadership","Communication","Agile","Mentoring"]}],c=[{icon:_h,label:"Projects Completed",value:"50+"},{icon:Fu,label:"Happy Clients",value:"25+"},{icon:xh,label:"Years Experience",value:"5+"},{icon:yh,label:"Cups of Coffee",value:"1000+"}];return g.jsxs("div",{className:"min-h-screen",children:[g.jsx("section",{className:"py-10 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center space-y-8 mb-16",children:[g.jsx("h1",{className:"text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"About Me"}),g.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Passionate full-stack developer with a love for creating exceptional digital experiences that make a difference in people's lives."})]}),g.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[g.jsx(we.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},className:"relative",children:g.jsxs("div",{className:"relative w-full max-w-md mx-auto",children:[g.jsx("div",{className:"aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-blue-400 to-purple-600 p-1",children:g.jsx("div",{className:"w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center",children:g.jsx("img",{src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500",alt:"Profile",className:"w-full h-full object-cover rounded-2xl"})})}),g.jsx(we.div,{animate:{y:[0,-10,0]},transition:{duration:3,repeat:1/0},className:"absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm"}),g.jsx(we.div,{animate:{y:[0,10,0]},transition:{duration:4,repeat:1/0},className:"absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm"})]})}),g.jsxs(we.div,{ref:i,initial:"hidden",animate:e?"visible":"hidden",variants:o,className:"space-y-6",children:[g.jsxs(we.div,{variants:a,className:"space-y-4",children:[g.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Hi, I'm a Creative Developer"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-lg leading-relaxed",children:"With over 5 years of experience in web development, I specialize in creating modern, responsive, and user-friendly applications. I'm passionate about clean code, innovative solutions, and continuous learning."})]}),g.jsxs(we.div,{variants:a,className:"space-y-4",children:[g.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:"My journey started with a curiosity about how websites work, and it has evolved into a career focused on building digital experiences that solve real-world problems. I believe in the power of technology to make life better and more efficient."}),g.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:"When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."})]}),g.jsx(we.div,{variants:a,className:"pt-4",children:g.jsxs(at,{size:"lg",className:"group",children:[g.jsx(ku,{className:"w-5 h-5 mr-2 group-hover:animate-bounce"}),"Download Resume"]})})]})]})]})}),g.jsx("section",{ref:s,className:"py-20 bg-white dark:bg-gray-900",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsx(we.div,{initial:"hidden",animate:r?"visible":"hidden",variants:o,className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:c.map(({icon:u,label:d,value:h})=>g.jsx(we.div,{variants:a,whileHover:{scale:1.05},className:"text-center",children:g.jsxs(Nt,{className:"p-6 hover:shadow-xl transition-shadow duration-300",children:[g.jsx("div",{className:"w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center",children:g.jsx(u,{className:"w-6 h-6 text-white"})}),g.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-1",children:h}),g.jsx("div",{className:"text-gray-600 dark:text-gray-400 text-sm",children:d})]})},d))})})}),g.jsx("section",{ref:t,className:"py-20 bg-gray-50 dark:bg-gray-800",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs(we.div,{initial:"hidden",animate:n?"visible":"hidden",variants:o,className:"space-y-16",children:[g.jsxs(we.div,{variants:a,className:"text-center space-y-4",children:[g.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white",children:"Skills & Expertise"}),g.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"A comprehensive toolkit for building modern web applications and solving complex problems."})]}),g.jsx(we.div,{variants:o,className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:l.map(({category:u,items:d})=>g.jsx(we.div,{variants:a,whileHover:{y:-5},children:g.jsxs(Nt,{className:"p-6 h-full",children:[g.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:u}),g.jsx("div",{className:"space-y-2",children:d.map(h=>g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("div",{className:"w-2 h-2 bg-blue-600 rounded-full"}),g.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:h})]},h))})]})},u))})]})})})]})},nh=()=>{const[i,e]=Z.useState([]),[t,n]=Z.useState(!0),[s,r]=Z.useState(null),a=async()=>{try{n(!0);const{data:u,error:d}=await Zt.from("projects").select("*").order("created_at",{ascending:!1});if(d)throw d;e(u||[])}catch(u){console.error("❌ Error fetching projects:",u),r(u instanceof Error?u.message:"An error occurred"),ln.error("Failed to fetch projects")}finally{n(!1)}},o=async u=>{try{const{data:d,error:h}=await Zt.from("projects").insert([u]).select().single();if(h)throw h;return e(f=>[d,...f]),ln.success("Project created successfully"),d}catch(d){throw ln.error("Failed to create project"),d}},l=async(u,d)=>{try{const{data:h,error:f}=await Zt.from("projects").update({...d,updated_at:new Date().toISOString()}).eq("id",u).select().single();if(f)throw f;return e(v=>v.map(_=>_.id===u?h:_)),ln.success("Project updated successfully"),h}catch(h){throw ln.error("Failed to update project"),h}},c=async u=>{try{const{error:d}=await Zt.from("projects").delete().eq("id",u);if(d)throw d;e(h=>h.filter(f=>f.id!==u)),ln.success("Project deleted successfully")}catch(d){throw ln.error("Failed to delete project"),d}};return Z.useEffect(()=>{a()},[]),{projects:i,loading:t,error:s,fetchProjects:a,createProject:o,updateProject:l,deleteProject:c}},Mw=()=>{const{projects:i,loading:e}=nh(),[t,n]=Z.useState("all"),[s,r]=Z.useState(!1),a=["all",...Array.from(new Set(i.map(u=>u.category)))],o=t==="all"?i:i.filter(u=>u.category===t),l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},c={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return e?g.jsx("div",{className:"min-h-screen ",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[...Array(6)].map((u,d)=>g.jsx("div",{className:"animate-pulse",children:g.jsx("div",{className:"bg-gray-200 dark:bg-gray-700 rounded-xl h-64"})},d))})})}):g.jsx("div",{className:"min-h-screen pt-4",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",children:[g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center space-y-8 mb-16",children:[g.jsx("h1",{className:"text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"My Projects"}),g.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"A collection of projects showcasing my expertise in modern web development, from interactive applications to complex systems."})]}),g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0",children:[g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsxs(at,{variant:"ghost",size:"sm",onClick:()=>r(!s),className:"md:hidden",children:[g.jsx(bh,{className:"w-4 h-4 mr-2"}),"Filters"]}),g.jsx("div",{className:`flex flex-wrap gap-2 ${s?"block":"hidden md:flex"}`,children:a.map(u=>g.jsx(at,{variant:t===u?"primary":"ghost",size:"sm",onClick:()=>n(u),className:"capitalize",children:u},u))})]}),g.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:[o.length," project",o.length!==1?"s":""]})]}),g.jsx(we.div,{variants:l,initial:"hidden",animate:"visible",className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:g.jsx(Mi,{children:o.map(u=>g.jsx(we.div,{variants:c,exit:{opacity:0,scale:.8},layout:!0,children:g.jsxs(Nt,{hoverable:!0,className:"overflow-hidden h-full",children:[u.image_url&&g.jsxs("div",{className:"relative h-48 overflow-hidden",children:[g.jsx("img",{src:u.image_url,alt:u.title,className:"w-full h-full object-cover transition-transform duration-300 hover:scale-110"}),g.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4",children:g.jsxs("div",{className:"flex space-x-2",children:[u.demo_url&&g.jsx(at,{size:"sm",variant:"ghost",className:"text-white hover:text-blue-400",children:g.jsx(Ns,{className:"w-4 h-4"})}),u.github_url&&g.jsx(at,{size:"sm",variant:"ghost",className:"text-white hover:text-blue-400",children:g.jsx(Ti,{className:"w-4 h-4"})})]})})]}),g.jsxs("div",{className:"p-6 space-y-4",children:[g.jsxs("div",{className:"space-y-2",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:u.title}),u.featured&&g.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300",children:"Featured"})]}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm line-clamp-3",children:u.description})]}),g.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.technologies.slice(0,3).map(d=>g.jsx("span",{className:"bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300",children:d},d)),u.technologies.length>3&&g.jsxs("span",{className:"text-gray-500 text-xs",children:["+",u.technologies.length-3," more"]})]}),g.jsxs("div",{className:"flex space-x-2 pt-4",children:[u.demo_url&&g.jsxs(at,{size:"sm",className:"flex-1",onClick:()=>window.open(u.demo_url,"_blank"),children:[g.jsx(Ns,{className:"w-4 h-4 mr-2"}),"Demo"]}),u.github_url&&g.jsxs(at,{size:"sm",variant:"secondary",className:"flex-1",onClick:()=>window.open(u.github_url,"_blank"),children:[g.jsx(Ti,{className:"w-4 h-4 mr-2"}),"Code"]})]})]})]})},u.id))})}),o.length===0&&g.jsx(we.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center py-20",children:g.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400",children:"No projects found in this category."})})]})})};function Rl(i,e,t){return t===void 0&&(t={}),function(n,s,r){try{return Promise.resolve((function(a,o){try{var l=(e?.context,Promise.resolve(i[t.mode==="sync"?"validateSync":"validate"](n,Object.assign({abortEarly:!1},e,{context:s}))).then(function(c){return r.shouldUseNativeValidation&&Vh({},r),{values:t.raw?Object.assign({},n):c,errors:{}}}))}catch(c){return o(c)}return l&&l.then?l.then(void 0,o):l})(0,function(a){if(!a.inner)throw a;return{values:{},errors:Gh((o=a,l=!r.shouldUseNativeValidation&&r.criteriaMode==="all",(o.inner||[]).reduce(function(c,u){if(c[u.path]||(c[u.path]={message:u.message,type:u.type}),l){var d=c[u.path].types,h=d&&d[u.type];c[u.path]=Wh(u.path,l,c,u.type,h?[].concat(h,u.message):u.message)}return c},{})),r)};var o,l}))}catch(a){return Promise.reject(a)}}}const xn=kh.forwardRef(({label:i,error:e,leftIcon:t,rightIcon:n,className:s="",...r},a)=>{const{onDrag:o,onDragStart:l,onDragEnd:c,onAnimationStart:u,...d}=r;return g.jsxs("div",{className:"space-y-1",children:[i&&g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:i}),g.jsxs("div",{className:"relative",children:[t&&g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:t}),g.jsx(we.input,{ref:a,whileFocus:{scale:1.01},className:`
              block w-full rounded-lg border-gray-300 shadow-xs
              focus:border-blue-500 focus:ring-blue-500
              dark:bg-gray-800 dark:border-gray-600 dark:text-white
              dark:focus:border-blue-400 dark:focus:ring-blue-400
              ${t?"pl-10":"pl-3"}
              ${n?"pr-10":"pr-3"}
              ${e?"border-red-500 focus:border-red-500 focus:ring-red-500":""}
              ${s}
            `,...d}),n&&g.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:n})]}),e&&g.jsx(we.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-sm text-red-600 dark:text-red-400",children:e})]})}),Tw=cl().shape({name:Ht().required("Name is required").min(2,"Name must be at least 2 characters"),email:Ht().required("Email is required").email("Invalid email address"),subject:Ht().required("Subject is required"),message:Ht().required("Message is required").min(10,"Message must be at least 10 characters")}),Aw=()=>{const{register:i,handleSubmit:e,formState:{errors:t,isSubmitting:n},reset:s}=ul({resolver:Rl(Tw)}),r=async o=>{try{const{error:l}=await Zt.from("contact_messages").insert([{...o,read:!1}]);if(l)throw l;ln.success("Message sent successfully! I'll get back to you soon."),s()}catch(l){console.error("Error sending message:",l),ln.error("Failed to send message. Please try again.")}},a=[{icon:Ul,title:"Location",value:"Riyadh, SA",description:"Available for remote work worldwide"},{icon:wh,title:"Phone",value:"+9665xxxxxxx",description:"Sun-Thu from 8am to 5pm UTC+03:00"},{icon:ll,title:"Email",value:"wissam.zaidi15@gmail.com",description:"Send me an email anytime!"},{icon:Eh,title:"Response Time",value:"24 hours",description:"Average response time"}];return g.jsx("div",{className:"min-h-screen pt-4",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:[g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center space-y-8 mb-16",children:[g.jsx("h1",{className:"text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Get In Touch"}),g.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Have a project in mind or just want to chat? I'd love to hear from you. Send me a message and I'll respond as soon as possible."})]}),g.jsxs("div",{className:"grid lg:grid-cols-2 gap-16",children:[g.jsx(we.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},children:g.jsxs(Nt,{className:"p-8",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Send Message"}),g.jsxs("form",{onSubmit:e(r),className:"space-y-6",children:[g.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[g.jsx(xn,{label:"Full Name",placeholder:"John Doe",error:t.name?.message,...i("name")}),g.jsx(xn,{label:"Email Address",type:"email",placeholder:"info@example.com",error:t.email?.message,...i("email")})]}),g.jsx(xn,{label:"Subject",placeholder:"Project Inquiry",error:t.subject?.message,...i("subject")}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Message"}),g.jsx("textarea",{rows:6,placeholder:"Tell me about your project...",className:`
                      block w-full rounded-lg border-gray-300 shadow-xs
                      focus:border-blue-500 focus:ring-blue-500
                      dark:bg-gray-800 dark:border-gray-600 dark:text-white
                      dark:focus:border-blue-400 dark:focus:ring-blue-400
                      ${t.message?"border-red-500 focus:border-red-500 focus:ring-red-500":""}
                    `,...i("message")}),t.message&&g.jsx(we.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-sm text-red-600 dark:text-red-400",children:t.message.message})]}),g.jsxs(at,{type:"submit",size:"lg",loading:n,className:"w-full",children:[g.jsx(Sh,{className:"w-5 h-5 mr-2"}),"Send Message"]})]})]})}),g.jsxs(we.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.4},className:"space-y-8",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Contact Information"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-8",children:"Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and interesting projects."})]}),g.jsx("div",{className:"space-y-6",children:a.map(({icon:o,title:l,value:c,description:u})=>g.jsxs(we.div,{whileHover:{x:4},className:"flex items-start space-x-4",children:[g.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0",children:g.jsx(o,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:l}),g.jsx("p",{className:"text-blue-600 dark:text-blue-400 font-medium",children:c}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:u})]})]},l))}),g.jsx(Nt,{className:"p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20",children:g.jsxs("div",{className:"text-center py-12",children:[g.jsx(Ul,{className:"w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4"}),g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Riyadh in saudi Arabia"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Available for remote work and local meetups"})]})})]})]})]})})},Rw=cl().shape({email:Ht().required("Email is required").email("Invalid email address"),password:Ht().required("Password is required").min(6,"Password must be at least 6 characters")}),Cw=()=>{const[i,e]=Z.useState(!1),{signIn:t}=Zr(),n=Xr(),{register:s,handleSubmit:r,formState:{errors:a,isSubmitting:o}}=ul({resolver:Rl(Rw)}),l=async c=>{try{await t(c.email,c.password),ln.success("Welcome back!"),n("/")}catch(u){const d=u instanceof Error?u.message:typeof u=="string"?u:"Failed to sign in";ln.error(d)}};return g.jsx("div",{className:"min-h-screen pb-5 pt-8 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900",children:g.jsxs("div",{className:"max-w-md mx-auto px-4",children:[g.jsx("span",{}),g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-8",children:[g.jsxs("div",{className:"text-center space-y-4",children:[g.jsx(we.div,{whileHover:{rotate:360},transition:{duration:.5},className:"w-16 h-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto",children:g.jsx(Mh,{className:"w-8 h-8 text-white"})}),g.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Welcome Back"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Sign in to access your admin panel"})]}),g.jsx(Nt,{className:"p-8",children:g.jsxs("form",{onSubmit:r(l),className:"space-y-6",children:[g.jsx(xn,{label:"Email Address",type:"email",placeholder:"admin@example.com",leftIcon:g.jsx(ll,{className:"w-5 h-5 text-gray-400"}),error:a.email?.message,...s("email")}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Password"}),g.jsx("div",{className:"relative",children:g.jsx(xn,{type:i?"text":"password",placeholder:"Enter your password",leftIcon:g.jsx(Ah,{className:"w-5 h-5 text-gray-400"}),rightIcon:g.jsx("button",{type:"button",onClick:()=>e(!i),className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",children:i?g.jsx(Th,{className:"w-5 h-5"}):g.jsx(Rr,{className:"w-5 h-5"})}),error:a.password?.message,...s("password")})})]}),g.jsx(at,{type:"submit",size:"lg",loading:o,className:"w-full",children:"Sign In"})]})}),g.jsx(Nt,{className:"p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",children:g.jsxs("div",{className:"text-center space-y-2",children:[g.jsx("h3",{className:"font-semibold text-blue-900 dark:text-blue-100",children:"Demo Credentials"}),g.jsxs("p",{className:"text-sm text-blue-700 dark:text-blue-300",children:["Email: admin@example.com",g.jsx("br",{}),"Password: admin123"]}),g.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400",children:"Use these credentials to test the admin panel"})]})})]})]})})},Pw=()=>(Z.useEffect(()=>{sessionStorage.setItem("redirect",window.location.href);const i=sessionStorage.getItem("redirect");i&&i!==window.location.href&&(sessionStorage.removeItem("redirect"),window.history.replaceState(null,"",i))},[]),g.jsx("div",{className:"min-h-screen bg-linear-to-br from-indigo-500 via-purple-600 to-pink-600 flex items-center justify-center text-white p-4",children:g.jsxs("div",{className:"text-center space-y-6",children:[g.jsx("h1",{className:"text-6xl md:text-7xl font-extrabold tracking-tight",children:"404"}),g.jsx("p",{className:"text-xl md:text-2xl opacity-90",children:"Page not found"}),g.jsx(Kn,{to:"/",className:"inline-block px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/30 hover:-translate-y-1 rounded-full font-medium transition-all duration-300 backdrop-blur-sm","aria-label":"Go to homepage",children:"Go Home"})]})})),Nw=cl().shape({title:Ht().required("Title is required").min(3,"Title must be at least 3 characters"),description:Ht().required("Description is required").min(10,"Description must be at least 10 characters"),content:Ht().optional(),image_url:Ht().optional().test("is-url","Must be a valid URL",i=>{if(!i)return!0;try{return new URL(i),!0}catch{return!1}}),demo_url:Ht().optional().test("is-url","Must be a valid URL",i=>{if(!i)return!0;try{return new URL(i),!0}catch{return!1}}),github_url:Ht().optional().test("is-url","Must be a valid URL",i=>{if(!i)return!0;try{return new URL(i),!0}catch{return!1}}),category:Ht().required("Category is required"),technologies:Ht().required("At least one technology is required").test("non-empty-technologies","At least one technology is required",i=>i?i.split(",").map(e=>e.trim()).filter(Boolean).length>0:!1),featured:$h().optional()}),Lw=({project:i,onSubmit:e,onCancel:t,isSubmitting:n})=>{const[s,r]=Z.useState(""),[a,o]=Z.useState(""),l=()=>({title:i?.title||"",description:i?.description||"",content:i?.content??"",image_url:i?.image_url||"",demo_url:i?.demo_url||"",github_url:i?.github_url||"",category:i?.category||"web",technologies:i?.technologies?.join(", ")||"",featured:i?.featured||!1}),{register:c,handleSubmit:u,formState:{errors:d},watch:h,setValue:f}=ul({resolver:Rl(Nw),defaultValues:l()}),v=h("image_url");Z.useEffect(()=>{if(v)try{new URL(v),r(v)}catch(w){r(""),console.error("Error :",w)}else r("")},[v]);const _=async w=>{o("");try{const b=w.technologies.split(",").map(R=>R.trim()).filter(Boolean);if(b.length===0){o("At least one technology is required");return}const y={title:w.title,description:w.description,content:w.content,image_url:w.image_url,demo_url:w.demo_url,github_url:w.github_url,category:w.category,technologies:b,featured:w.featured||!1};await e(y)}catch(b){console.error("Error submitting form:",b),o("Failed to submit form. Please try again.")}},m=[{value:"web",label:"Web Development"},{value:"mobile",label:"Mobile App"},{value:"desktop",label:"Desktop App"},{value:"api",label:"API/Backend"},{value:"design",label:"Design"},{value:"other",label:"Other"}],p=["https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"];return g.jsx(we.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed h-full inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto",children:g.jsx(we.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"w-full max-w-4xl mt-auto",children:g.jsxs(Nt,{className:"p-6 mb-8",children:[g.jsxs("div",{className:"flex items-center justify-between mb-6",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:i?"Edit Project":"Add New Project"}),g.jsx(at,{variant:"ghost",size:"sm",onClick:t,type:"button",children:g.jsx(ol,{className:"w-5 h-5"})})]}),a&&g.jsx("div",{className:"mb-4 p-3 bg-red-100 text-red-700 rounded-lg",children:a}),g.jsxs("form",{onSubmit:u(_),className:"space-y-6",children:[g.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx(xn,{label:"Project Title",placeholder:"My Awesome Project",error:d.title?.message,...c("title")}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Category"}),g.jsx("select",{className:"block w-full rounded-lg border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white p-2",...c("category"),children:m.map(({value:w,label:b})=>g.jsx("option",{value:w,children:b},w))}),d.category&&g.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:d.category.message})]}),g.jsx(xn,{label:"Technologies (comma-separated)",placeholder:"React, TypeScript, Tailwind CSS",error:d.technologies?.message,...c("technologies")}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("input",{type:"checkbox",id:"featured",className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500",...c("featured")}),g.jsx("label",{htmlFor:"featured",className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Featured Project"})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsx(xn,{label:"Demo URL (optional)",placeholder:"https://myproject.com",leftIcon:g.jsx(Ns,{className:"w-5 h-5 text-gray-400"}),error:d.demo_url?.message,...c("demo_url")}),g.jsx(xn,{label:"GitHub URL (optional)",placeholder:"https://github.com/username/repo",leftIcon:g.jsx(Ti,{className:"w-5 h-5 text-gray-400"}),error:d.github_url?.message,...c("github_url")}),g.jsx(xn,{label:"Image URL (optional)",placeholder:"https://example.com/image.jpg",leftIcon:g.jsx(Rh,{className:"w-5 h-5 text-gray-400"}),error:d.image_url?.message,...c("image_url")}),s&&g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Image Preview"}),g.jsx("div",{className:"relative",children:g.jsx("img",{src:s,alt:"Project preview",className:"w-full h-32 object-cover rounded-lg",onError:()=>r("")})})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Suggested Images"}),g.jsx("div",{className:"grid grid-cols-2 gap-2",children:p.map((w,b)=>g.jsxs("button",{type:"button",onClick:()=>f("image_url",w),className:"relative group","aria-label":`Use suggested image ${b+1}`,children:[g.jsx("img",{src:w,alt:`Suggestion ${b+1}`,className:"w-full h-20 object-cover rounded-lg group-hover:opacity-75 transition-opacity"}),g.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50",children:g.jsx(Ch,{className:"w-6 h-6 text-white"})})]},b))})]})]})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Short Description"}),g.jsx("textarea",{rows:3,placeholder:"Brief description of your project...",className:`
                  block w-full rounded-lg border-gray-300 shadow-xs
                  focus:border-blue-500 focus:ring-blue-500
                  dark:bg-gray-800 dark:border-gray-600 dark:text-white p-2
                  ${d.description?"border-red-500":""}
                `,...c("description")}),d.description&&g.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:d.description.message})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Detailed Content (optional)"}),g.jsx("textarea",{rows:6,placeholder:"Detailed description, features, technical details...",className:"block w-full rounded-lg border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white p-2",...c("content")})]}),g.jsxs("div",{className:"flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700",children:[g.jsx(at,{variant:"ghost",onClick:t,disabled:n,type:"button",children:"Cancel"}),g.jsx(at,{type:"submit",loading:n,children:i?"Update Project":"Create Project"})]})]})]})})})},Uu=({projects:i,loading:e,onEdit:t,onDelete:n,onView:s})=>{const[r,a]=Z.useState(null),o=l=>{r===l?(n(l),a(null)):(a(l),setTimeout(()=>a(null),3e3))};return e?g.jsx("div",{className:"space-y-4",children:[...Array(3)].map((l,c)=>g.jsx(Nt,{className:"p-6 animate-pulse",children:g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg"}),g.jsxs("div",{className:"flex-1 space-y-2",children:[g.jsx("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/3"}),g.jsx("div",{className:"h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-2/3"}),g.jsx("div",{className:"h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"})]})]})},c))}):i.length===0?g.jsx(Nt,{className:"p-12 text-center",children:g.jsxs("div",{className:"space-y-4",children:[g.jsx("div",{className:"w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto",children:g.jsx(Rr,{className:"w-8 h-8 text-gray-400"})}),g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"No projects yet"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Create your first project to get started."})]})}):g.jsx("div",{className:"space-y-4",children:g.jsx(Mi,{children:i.map(l=>g.jsx(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},layout:!0,children:g.jsx(Nt,{className:"p-6 hover:shadow-lg transition-shadow",children:g.jsxs("div",{className:"flex items-start space-x-4",children:[g.jsx("div",{className:"shrink-0",children:l.image_url?g.jsx("img",{src:l.image_url,alt:l.title,className:"w-20 h-20 object-cover rounded-lg"}):g.jsx("div",{className:"w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center",children:g.jsx(Rr,{className:"w-8 h-8 text-gray-400"})})}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white truncate",children:l.title}),l.featured&&g.jsx(Bu,{className:"w-4 h-4 text-yellow-500 fill-current"})]}),g.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 capitalize",children:l.category}),g.jsx("p",{className:"text-gray-600 dark:text-gray-300 line-clamp-2",children:l.description})]}),g.jsxs("div",{className:"flex items-center space-x-2 ml-4",children:[l.demo_url&&g.jsx(at,{size:"sm",variant:"ghost",onClick:()=>window.open(l.demo_url,"_blank"),title:"View Demo",children:g.jsx(Ns,{className:"w-4 h-4"})}),l.github_url&&g.jsx(at,{size:"sm",variant:"ghost",onClick:()=>window.open(l.github_url,"_blank"),title:"View Code",children:g.jsx(Ti,{className:"w-4 h-4"})}),g.jsx(at,{size:"sm",variant:"ghost",onClick:()=>s(l),title:"View Details",children:g.jsx(Rr,{className:"w-4 h-4"})}),g.jsx(at,{size:"sm",variant:"ghost",onClick:()=>t(l),title:"Edit Project",children:g.jsx(Ph,{className:"w-4 h-4"})}),g.jsx(at,{size:"sm",variant:r===l.id?"danger":"ghost",onClick:()=>o(l.id),title:r===l.id?"Click again to confirm":"Delete Project",children:g.jsx(Nh,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[l.technologies.slice(0,4).map(c=>g.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",children:c},c)),l.technologies.length>4&&g.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",children:["+",l.technologies.length-4," more"]})]}),g.jsxs("div",{className:"mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400",children:[g.jsxs("span",{children:["Created: ",new Date(l.created_at).toLocaleDateString()]}),g.jsxs("span",{children:["Updated: ",new Date(l.updated_at).toLocaleDateString()]})]})]})]})})},l.id))})})},Iw=({project:i,onClose:e,onEdit:t})=>g.jsx(we.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:g.jsx(we.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",children:g.jsxs(Nt,{className:"p-6",children:[g.jsxs("div",{className:"flex items-start justify-between mb-6",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:i.title}),i.featured&&g.jsx(Bu,{className:"w-6 h-6 text-yellow-500 fill-current"})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(at,{variant:"ghost",size:"sm",onClick:t,children:"Edit"}),g.jsx(at,{variant:"ghost",size:"sm",onClick:e,children:g.jsx(ol,{className:"w-5 h-5"})})]})]}),i.image_url&&g.jsx("div",{className:"mb-6",children:g.jsx("img",{src:i.image_url,alt:i.title,className:"w-full h-64 object-cover rounded-lg"})}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-6",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Lh,{className:"w-5 h-5 text-gray-400"}),g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Category"}),g.jsx("p",{className:"font-medium text-gray-900 dark:text-white capitalize",children:i.category})]})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Ol,{className:"w-5 h-5 text-gray-400"}),g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Created"}),g.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:new Date(i.created_at).toLocaleDateString()})]})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Ol,{className:"w-5 h-5 text-gray-400"}),g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Updated"}),g.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:new Date(i.updated_at).toLocaleDateString()})]})]})]}),g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Description"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:i.description})]}),i.content&&g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Detailed Content"}),g.jsx("div",{className:"prose dark:prose-invert max-w-none",children:g.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap",children:i.content})})]}),g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"Technologies Used"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:i.technologies.map(n=>g.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",children:n},n))})]}),(i.demo_url||i.github_url)&&g.jsxs("div",{className:"mb-6",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"Project Links"}),g.jsxs("div",{className:"flex flex-wrap gap-3",children:[i.demo_url&&g.jsxs(at,{onClick:()=>window.open(i.demo_url,"_blank"),className:"flex items-center space-x-2",children:[g.jsx(Ns,{className:"w-4 h-4"}),g.jsx("span",{children:"View Demo"})]}),i.github_url&&g.jsxs(at,{variant:"secondary",onClick:()=>window.open(i.github_url,"_blank"),className:"flex items-center space-x-2",children:[g.jsx(Ti,{className:"w-4 h-4"}),g.jsx("span",{children:"View Code"})]})]})]}),g.jsx("div",{className:"pt-6 border-t border-gray-200 dark:border-gray-700",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("div",{className:"flex items-center space-x-4",children:g.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${i.featured?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300":"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"}`,children:i.featured?"Featured":"Regular"})}),g.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["ID: ",i.id]})]})})]})})}),Dw=()=>{const{projects:i,loading:e,createProject:t,updateProject:n,deleteProject:s}=nh(),[r,a]=Z.useState("overview"),[o,l]=Z.useState(!1),[c,u]=Z.useState(null),[d,h]=Z.useState(null),[f,v]=Z.useState(!1),_=[{icon:kl,label:"Total Projects",value:i.length,color:"blue"},{icon:Fl,label:"Messages",value:"12",color:"green"},{icon:Fu,label:"Visitors",value:"1.2k",color:"purple"},{icon:Bl,label:"Page Views",value:"5.4k",color:"orange"}],m=[{id:"overview",label:"Overview",icon:Bl},{id:"projects",label:"Projects",icon:kl},{id:"messages",label:"Messages",icon:Fl},{id:"settings",label:"Settings",icon:Ih}],p=()=>{u(null),l(!0)},w=C=>{u(C),l(!0),h(null)},b=C=>{h(C)},y=async C=>{try{await s(C)}catch(D){console.error("Error deleting project:",D)}},R=async C=>{v(!0);try{c?await n(c.id,C):await t(C),l(!1),u(null)}catch(D){console.error("Error saving project:",D)}finally{v(!1)}},A=()=>{l(!1),u(null)};return g.jsxs("div",{className:"min-h-screen pt-6 bg-gray-50 dark:bg-gray-900",children:[g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"mb-8",children:[g.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Admin Dashboard"}),g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Manage your portfolio content and monitor site performance"})]}),g.jsx(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"mb-8",children:g.jsx("div",{className:"border-b border-gray-200 dark:border-gray-700",children:g.jsx("nav",{className:"-mb-px flex space-x-8",children:m.map(({id:C,label:D,icon:E})=>g.jsxs("button",{onClick:()=>a(C),className:`
                    flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm
                    ${r===C?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"}
                  `,children:[g.jsx(E,{className:"w-5 h-5"}),g.jsx("span",{children:D})]},C))})})}),r==="overview"&&g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-8",children:[g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:_.map(({icon:C,label:D,value:E,color:M})=>g.jsx(we.div,{whileHover:{scale:1.02},className:"group",children:g.jsx(Nt,{className:"p-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-gray-600 dark:text-gray-400",children:D}),g.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:E})]}),g.jsx("div",{className:`w-12 h-12 bg-${M}-100 dark:bg-${M}-900/30 rounded-lg flex items-center justify-center`,children:g.jsx(C,{className:`w-6 h-6 text-${M}-600 dark:text-${M}-400`})})]})})},D))}),g.jsxs(Nt,{className:"p-6",children:[g.jsx("div",{className:"flex items-center justify-between mb-6",children:g.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Recent Projects"})}),g.jsx(Uu,{projects:i.slice(-3),loading:e,onEdit:w,onDelete:y,onView:b})]})]}),r==="projects"&&g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-6",children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Manage Projects"}),g.jsxs(at,{onClick:p,children:[g.jsx(Dh,{className:"w-4 h-4 mr-2"}),"Add New Project"]})]}),g.jsx(Uu,{projects:i,loading:e,onEdit:w,onDelete:y,onView:b})]}),r==="messages"&&g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-6",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Contact Messages"}),g.jsx(Nt,{className:"p-6",children:g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Message management interface will be implemented here."})})]}),r==="settings"&&g.jsxs(we.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-6",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Site Settings"}),g.jsx(Nt,{className:"p-6",children:g.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Site settings interface will be implemented here."})})]})]}),g.jsx(Mi,{children:o&&g.jsx(Lw,{project:c||void 0,onSubmit:R,onCancel:A,isSubmitting:f})}),g.jsx(Mi,{children:d&&g.jsx(Iw,{project:d,onClose:()=>h(null),onEdit:()=>w(d)})})]})},Uw=()=>{const i=Xr();return Z.useEffect(()=>{const e=pt.language||"en",t=["en","ar"].includes(e)?e:"en";i(`/${t}`,{replace:!0})},[i]),null};function Ow(){const{pathname:i}=Fs();return Z.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[i]),null}const kw=({children:i,adminOnly:e=!1})=>{const{user:t,isAdmin:n,loading:s}=Zr(),{lang:r}=zu();return s?g.jsx("div",{className:"min-h-screen flex items-center justify-center",children:g.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"})}):t?e&&!n?g.jsx(Or,{to:`/${r||"en"}`,replace:!0}):g.jsx(g.Fragment,{children:i}):g.jsx(Or,{to:`/${r||"en"}/login`,replace:!0})};function Fw(){return g.jsx($p,{children:g.jsx(Zg,{children:g.jsxs(Fh,{children:[g.jsx(Ow,{}),g.jsxs(Bh,{children:[g.jsx(nn,{path:"/",element:g.jsx(Uw,{})}),g.jsxs(nn,{path:"/:lang",element:g.jsx(l0,{}),children:[g.jsx(nn,{index:!0,element:g.jsx(ww,{})}),g.jsx(nn,{path:"home",element:g.jsx(Or,{to:"/",replace:!0})}),g.jsx(nn,{path:"about",element:g.jsx(Ew,{})}),g.jsx(nn,{path:"projects",element:g.jsx(Mw,{})}),g.jsx(nn,{path:"contact",element:g.jsx(Aw,{})}),g.jsx(nn,{path:"login",element:g.jsx(Cw,{})}),g.jsx(nn,{path:"*",element:g.jsx(Pw,{})}),g.jsx(nn,{path:"admin",element:g.jsx(kw,{adminOnly:!0,children:g.jsx(Dw,{})})}),g.jsx(nn,{path:"*",element:g.jsx(Or,{to:"",replace:!0})})]})]}),g.jsx(Gp,{position:"bottom-right"})]})})})}function Bw(){return g.jsx(Fw,{})}qh.createRoot(document.getElementById("root")).render(g.jsx(Z.StrictMode,{children:g.jsx(Z.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(Bw,{})})}));
