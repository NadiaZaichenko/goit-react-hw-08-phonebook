"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,n,t){t.r(n),t.d(n,{default:function(){return Be}});var o=t(1413),r=t(5861),a=t(9439),i=t(4687),s=t.n(i),c=t(9676),u=t(4942),l=t(4925),d=t(3433),f=t(2791);function p(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=p(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}var m=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=p(e))&&(o&&(o+=" "),o+=n);return o},h=["theme","type"],v=["delay","staleId"],g=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},x=function(e){return"function"==typeof e},b=function(e){return y(e)||x(e)?e:null},T=function(e){return(0,f.isValidElement)(e)||y(e)||x(e)||g(e)};function E(e){var n=e.enter,t=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,p=e.isIn,m=r?"".concat(n,"--").concat(a):n,h=r?"".concat(t,"--").concat(a):t,v=(0,f.useRef)(0);return(0,f.useLayoutEffect)((function(){var e,n=l.current,t=m.split(" "),o=function e(o){var r;o.target===l.current&&(n.dispatchEvent(new Event("d")),n.removeEventListener("animationend",e),n.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==o.type&&(r=n.classList).remove.apply(r,(0,d.Z)(t)))};(e=n.classList).add.apply(e,(0,d.Z)(t)),n.addEventListener("animationend",o),n.addEventListener("animationcancel",o)}),[]),(0,f.useEffect)((function(){var e=l.current,n=function n(){e.removeEventListener("animationend",n),i?function(e,n,t){void 0===t&&(t=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(n,t)}))}))}(e,u,c):u()};p||(s?n():(v.current=1,e.className+=" ".concat(h),e.addEventListener("animationend",n)))}),[p]),f.createElement(f.Fragment,null,o)}}function Z(e,n){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:n}:{}}var C={list:new Map,emitQueue:new Map,on:function(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off:function(e,n){if(n){var t=this.list.get(e).filter((function(e){return e!==n}));return this.list.set(e,t),this}return this.list.delete(e),this},cancelEmit:function(e){var n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var n=arguments,t=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,d.Z)([].slice.call(n,1)))}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}},w=function(e){var n=e.theme,t=e.type,r=(0,l.Z)(e,h);return f.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-".concat(t,")")},r))},_={info:function(e){return f.createElement(w,(0,o.Z)({},e),f.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return f.createElement(w,(0,o.Z)({},e),f.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return f.createElement(w,(0,o.Z)({},e),f.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return f.createElement(w,(0,o.Z)({},e),f.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return f.createElement("div",{className:"Toastify__spinner"})}};function I(e){var n=(0,f.useReducer)((function(e){return e+1}),0),t=(0,a.Z)(n,2)[1],r=(0,f.useState)([]),i=(0,a.Z)(r,2),s=i[0],c=i[1],u=(0,f.useRef)(null),p=(0,f.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},h=(0,f.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function E(e){var n=e.containerId;!h.props.limit||n&&h.containerId!==n||(h.count-=h.queue.length,h.queue=[])}function w(e){c((function(n){return null==e?[]:n.filter((function(n){return n!==e}))}))}function I(){var e=h.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function L(e,n){var r=n.delay,i=n.staleId,s=(0,l.Z)(n,v);if(T(e)&&!function(e){return!u.current||h.props.enableMultiContainer&&e.containerId!==h.props.containerId||p.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,d=s.updateId,m=s.data,E=h.props,L=function(){return w(c)},N=null==d;N&&h.count++;var O,R,j=(0,o.Z)((0,o.Z)((0,o.Z)({},E),{},{style:E.toastStyle,key:h.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var n=(0,a.Z)(e,2);n[0];return null!=n[1]})))),{},{toastId:c,updateId:d,data:m,closeToast:L,isIn:!1,className:b(s.className||E.toastClassName),bodyClassName:b(s.bodyClassName||E.bodyClassName),progressClassName:b(s.progressClassName||E.progressClassName),autoClose:!s.isLoading&&(O=s.autoClose,R=E.autoClose,!1===O||g(O)&&O>0?O:R),deleteToast:function(){var e=Z(p.get(c),"removed");p.delete(c),C.emit(4,e);var n=h.queue.length;if(h.count=null==c?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),n>0){var o=null==c?h.props.limit:1;if(1===n||1===o)h.displayedToast++,I();else{var r=o>n?n:o;h.displayedToast=r;for(var a=0;a<r;a++)I()}}else t()}});j.iconOut=function(e){var n=e.theme,t=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:n,type:t};return!1===r||(x(r)?a=r(i):(0,f.isValidElement)(r)?a=(0,f.cloneElement)(r,i):y(r)||g(r)?a=r:o?a=_.spinner():function(e){return e in _}(t)&&(a=_[t](i))),a}(j),x(s.onOpen)&&(j.onOpen=s.onOpen),x(s.onClose)&&(j.onClose=s.onClose),j.closeButton=E.closeButton,!1===s.closeButton||T(s.closeButton)?j.closeButton=s.closeButton:!0===s.closeButton&&(j.closeButton=!T(E.closeButton)||E.closeButton);var z=e;(0,f.isValidElement)(e)&&!y(e.type)?z=(0,f.cloneElement)(e,{closeToast:L,toastProps:j,data:m}):x(e)&&(z=e({closeToast:L,toastProps:j,data:m})),E.limit&&E.limit>0&&h.count>E.limit&&N?h.queue.push({toastContent:z,toastProps:j,staleId:i}):g(r)?setTimeout((function(){k(z,j,i)}),r):k(z,j,i)}}function k(e,n,t){var o=n.toastId;t&&p.delete(t);var r={content:e,props:n};p.set(o,r),c((function(e){return[].concat((0,d.Z)(e),[o]).filter((function(e){return e!==t}))})),C.emit(4,Z(r,null==r.props.updateId?"added":"updated"))}return(0,f.useEffect)((function(){return h.containerId=e.containerId,C.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&w(e)})).on(5,E).emit(2,h),function(){p.clear(),C.emit(3,h)}}),[]),(0,f.useEffect)((function(){h.props=e,h.isToastActive=m,h.displayedToast=s.length})),{getToastToRender:function(n){var t=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var n=e.props.position;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(function(e){return n(e[0],e[1])}))},containerRef:u,isToastActive:m}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var n=(0,f.useState)(!1),t=(0,a.Z)(n,2),o=t[0],r=t[1],i=(0,f.useState)(!1),s=(0,a.Z)(i,2),c=s[0],u=s[1],l=(0,f.useRef)(null),d=(0,f.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,f.useRef)(e),m=e.autoClose,h=e.pauseOnHover,v=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(n){if(e.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var t=l.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=t.getBoundingClientRect(),t.style.transition="",d.x=L(n.nativeEvent),d.y=k(n.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=t.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=t.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(n){if(d.boundingRect){var t=d.boundingRect,o=t.top,r=t.bottom,a=t.left,i=t.right;"touchend"!==n.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?Z():E()}}function E(){r(!0)}function Z(){r(!1)}function C(n){var t=l.current;d.canDrag&&t&&(d.didMove=!0,o&&Z(),d.x=L(n),d.y=k(n),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),t.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),t.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var n=l.current;if(d.canDrag&&d.didMove&&n){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return u(!0),void e.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform="translate".concat(e.draggableDirection,"(0)"),n.style.opacity="1"}}(0,f.useEffect)((function(){p.current=e})),(0,f.useEffect)((function(){return l.current&&l.current.addEventListener("d",E,{once:!0}),x(e.onOpen)&&e.onOpen((0,f.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;x(e.onClose)&&e.onClose((0,f.isValidElement)(e.children)&&e.children.props)}}),[]),(0,f.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",E),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&h&&(_.onMouseEnter=Z,_.onMouseLeave=E),y&&(_.onClick=function(e){g&&g(e),d.canCloseOnClick&&v()}),{playToast:E,pauseToast:Z,isRunning:o,preventExitTransition:c,toastRef:l,eventHandlers:_}}function O(e){var n=e.closeToast,t=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return f.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(e){e.stopPropagation(),n(e)},"aria-label":r},f.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},f.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){var n=e.delay,t=e.isRunning,r=e.closeToast,a=e.type,i=void 0===a?"default":a,s=e.hide,c=e.className,l=e.style,d=e.controlledProgress,p=e.progress,h=e.rtl,v=e.isIn,g=e.theme,y=s||d&&0===p,b=(0,o.Z)((0,o.Z)({},l),{},{animationDuration:"".concat(n,"ms"),animationPlayState:t?"running":"paused",opacity:y?0:1});d&&(b.transform="scaleX(".concat(p,")"));var T=m("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":h}),E=x(c)?c({rtl:h,type:i,defaultClassName:T}):m(T,c);return f.createElement("div",(0,u.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:E,style:b},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){v&&r()}))}var j=function(e){var n=N(e),t=n.isRunning,r=n.preventExitTransition,a=n.toastRef,i=n.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,h=e.closeToast,v=e.transition,g=e.position,y=e.className,b=e.style,T=e.bodyClassName,E=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,w=e.updateId,_=e.role,I=e.progress,L=e.rtl,k=e.toastId,j=e.deleteToast,z=e.isIn,M=e.isLoading,A=e.iconOut,P=e.closeOnClick,B=e.theme,D=m("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":P}),S=x(y)?y({rtl:L,position:g,type:d,defaultClassName:D}):m(D,y),F=!!I||!u,q={closeToast:h,type:d,theme:B},H=null;return!1===s||(H=x(s)?s(q):(0,f.isValidElement)(s)?(0,f.cloneElement)(s,q):O(q)),f.createElement(v,{isIn:z,done:j,position:g,preventExitTransition:r,nodeRef:a},f.createElement("div",(0,o.Z)((0,o.Z)({id:k,onClick:l,className:S},i),{},{style:b,ref:a}),f.createElement("div",(0,o.Z)((0,o.Z)({},z&&{role:_}),{},{className:x(T)?T({type:d}):m("Toastify__toast-body",T),style:E}),null!=A&&f.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},A),f.createElement("div",null,c)),H,f.createElement(R,(0,o.Z)((0,o.Z)({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:t,isIn:z,closeToast:h,hide:p,type:d,style:C,className:Z,controlledProgress:F,progress:I||0}))))},z=function(e,n){return void 0===n&&(n=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:n}},M=E(z("bounce",!0)),A=(E(z("slide",!0)),E(z("zoom")),E(z("flip")),(0,f.forwardRef)((function(e,n){var t=I(e),r=t.getToastToRender,a=t.containerRef,i=t.isToastActive,s=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var n=m("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return x(s)?s({position:e,rtl:u,defaultClassName:n}):m(n,b(s))}return(0,f.useEffect)((function(){n&&(n.current=a.current)}),[]),f.createElement("div",{ref:a,className:"Toastify",id:l},r((function(e,n){var t=n.length?(0,o.Z)({},c):(0,o.Z)((0,o.Z)({},c),{},{pointerEvents:"none"});return f.createElement("div",{className:d(e),style:t,key:"container-".concat(e)},n.map((function(e,t){var r=e.content,a=e.props;return f.createElement(j,(0,o.Z)((0,o.Z)({},a),{},{isIn:i(a.toastId),style:(0,o.Z)((0,o.Z)({},a.style),{},{"--nth":t+1,"--len":n.length}),key:"toast-".concat(a.key)}),r)})))})))})));A.displayName="ToastContainer",A.defaultProps={position:"top-right",transition:M,autoClose:5e3,closeButton:O,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var P,B=new Map,D=[],S=1;function F(){return""+S++}function q(e){return e&&(y(e.toastId)||g(e.toastId))?e.toastId:F()}function H(e,n){return B.size>0?C.emit(0,e,n):D.push({content:e,options:n}),n.toastId}function Q(e,n){return(0,o.Z)((0,o.Z)({},n),{},{type:n&&n.type||e,toastId:q(n)})}function V(e){return function(n,t){return H(n,Q(e,t))}}function J(e,n){return H(e,Q("default",n))}J.loading=function(e,n){return H(e,Q("default",(0,o.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},n)))},J.promise=function(e,n,t){var r,a=n.pending,i=n.error,s=n.success;a&&(r=y(a)?J.loading(a,t):J.loading(a.render,(0,o.Z)((0,o.Z)({},t),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,n,a){if(null!=n){var i=(0,o.Z)((0,o.Z)((0,o.Z)({type:e},c),t),{},{data:a}),s=y(n)?{render:n}:n;return r?J.update(r,(0,o.Z)((0,o.Z)({},i),s)):J(s.render,(0,o.Z)((0,o.Z)({},i),s)),a}J.dismiss(r)},l=x(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},J.success=V("success"),J.info=V("info"),J.error=V("error"),J.warning=V("warning"),J.warn=J.warning,J.dark=function(e,n){return H(e,Q("default",(0,o.Z)({theme:"dark"},n)))},J.dismiss=function(e){B.size>0?C.emit(1,e):D=D.filter((function(n){return null!=e&&n.options.toastId!==e}))},J.clearWaitingQueue=function(e){return void 0===e&&(e={}),C.emit(5,e)},J.isActive=function(e){var n=!1;return B.forEach((function(t){t.isToastActive&&t.isToastActive(e)&&(n=!0)})),n},J.update=function(e,n){void 0===n&&(n={}),setTimeout((function(){var t=function(e,n){var t=n.containerId,o=B.get(t||P);return o&&o.getToast(e)}(e,n);if(t){var r=t.props,a=t.content,i=(0,o.Z)((0,o.Z)((0,o.Z)({delay:100},r),n),{},{toastId:n.toastId||e,updateId:F()});i.toastId!==e&&(i.staleId=e);var s=i.render||a;delete i.render,H(s,i)}}),0)},J.done=function(e){J.update(e,{progress:1})},J.onChange=function(e){return C.on(4,e),function(){C.off(4,e)}},J.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},J.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(e){P=e.containerId||e,B.set(P,e),D.forEach((function(e){C.emit(0,e.content,e.options)})),D=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&C.off(0).off(1).off(5)}));var X,G,U,W,Y,K,$,ee=t(1134),ne=t(4695),te=t(6727),oe=t(168),re=t(1845),ae=re.Z.form(X||(X=(0,oe.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  width: 65%;\n"]))),ie=re.Z.label(G||(G=(0,oe.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  div {\n    padding: 8px;\n    border: 2px solid red;\n    border-radius: 8px;\n    background-color: #ffc4c4;\n    width: 288px;\n    font-size: 14px;\n    &::first-letter {\n      text-transform: uppercase;\n    }\n  }\n"]))),se=re.Z.input(U||(U=(0,oe.Z)(["\n  width: 300px;\n  height: 40px;\n  font-size: 16px;\n  border-radius: 8ps;\n  border: 2px solid red;\n  &::placeholder {\n    font-size: 16px;\n  }\n"]))),ce=re.Z.button(W||(W=(0,oe.Z)(["\n  width: 150px;\n  height: 40px;\n  transform: scale(1);\n  background-color: #defff5;\n  border-radius:8px;\n  border: 2px solid red;\n  font-size: 16px;\n  transition: transform 250ms ease-out, background-color 250ms ease-out;\n  &:hover,\n  &:focus-visible {\n    transform: scale(1.1);\n  }\n"]))),ue=t(184),le=te.Ry().shape({name:te.Z_().max(30).matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}).required("Name is required"),phone:te.Z_().min(3).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}).required("Number is reqired")}),de=function(){var e,n,t=(0,c.Jx)().data,i=(0,c.Tn)(),u=(0,a.Z)(i,1)[0],l=(0,ee.cI)({defaultValues:{name:"",phone:""},resolver:(0,ne.X)(le),mode:"onTouched"}),d=l.register,f=l.handleSubmit,p=l.formState.errors,m=l.reset,h=function(){var e=(0,r.Z)(s().mark((function e(n){var o,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.name.toLowerCase(),r=n.phone,!t.find((function(e){return e.name.toLowerCase()===o}))){e.next=4;break}return e.abrupt("return",J.info("".concat(n.name," has alredy in your contacts")));case 4:if(!t.find((function(e){return e.phone===r}))){e.next=7;break}return e.abrupt("return",J.info("".concat(n.phone," has alredy in your contacts")));case 7:return e.prev=8,e.next=11,u(n);case 11:J.info("New contact has been added to your phonebook"),m(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),J.error("Something is wrong. New contact was not added");case 18:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(n){return e.apply(this,arguments)}}();return(0,ue.jsxs)(ae,{onSubmit:f(h),children:[(0,ue.jsxs)(ie,{children:["Name",(0,ue.jsx)(se,(0,o.Z)({type:"text",placeholder:"Enter a contact name",autoComplete:"off"},d("name"))),p.name&&(0,ue.jsx)("div",{children:null===(e=p.name)||void 0===e?void 0:e.message})]}),(0,ue.jsxs)(ie,{children:["Phone",(0,ue.jsx)(se,(0,o.Z)({type:"tel",placeholder:"Enter a contact phone",autoComplete:"off"},d("phone"))),p.phone&&(0,ue.jsx)("div",{children:null===(n=p.phone)||void 0===n?void 0:n.message})]}),(0,ue.jsx)(ce,{type:"submit",children:"Add contact"})]})},fe=t(927),pe=re.Z.ul(Y||(Y=(0,oe.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: auto;\n"]))),me=re.Z.li(K||(K=(0,oe.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 400px;\n  height: 40px;\n  padding: 5px;\n  font-size: 16px;\n  background-color: white;\n  border-radius: 8px;\n  border:2px solid red;\n"]))),he=re.Z.button($||($=(0,oe.Z)(["\n  width: 70px;\n  height: 40px;\n  transform: scale(1);\n  background-color: #defff5;\n  border-radius: 8px;\n  border: 2px solid red;\n  font-size: 16px;\n  transition: transform 250ms ease-out, background-color 250ms ease-out;\n  &:hover,\n  &:focus-visible {\n    transform: scale(1.1);\n  }\n"]))),ve=function(e){var n=e.id,t=e.name,o=e.phone,i=(0,c.Nt)(),u=(0,a.Z)(i,1)[0],l=function(){var e=(0,r.Z)(s().mark((function e(n,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(n);case 3:J.info("".concat(t," has been deleted ")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),J.error("Something was wrong, ".concat(t," was not deleted"));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,ue.jsxs)(me,{children:[(0,ue.jsxs)("p",{children:[t," : ",o]}),(0,ue.jsx)(he,{type:"button",onClick:function(){return l(n,t)},children:"Delete"})]})};function ge(){var e=(0,fe.Jn)(),n=(0,c.Jx)().data,t=(0,f.useMemo)((function(){return function(){if(n){var t=e.toLowerCase().trim();return n.filter((function(e){return e.name.toLowerCase().includes(t)||e.number.includes(t)}))}}}),[n,e])();return(0,ue.jsx)(pe,{children:t&&t.map((function(e){var n=e.id,t=e.name,o=e.phone;return(0,ue.jsx)(ve,{id:n,name:t,phone:o},n)}))})}var ye,xe,be,Te,Ee,Ze,Ce,we,_e,Ie=t(5048),Le=t(9585),ke=re.Z.label(ye||(ye=(0,oe.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 18px;\n"]))),Ne=re.Z.input(xe||(xe=(0,oe.Z)(["\nwidht: 300px;\nheight: 34px;\nfont-size: 16px;\nborder-radius: ",";\n  border: ",";\n"])),(function(e){return e.theme.inputBorderRadius}),(function(e){return e.theme.buttonBorder})),Oe=function(){var e=(0,Ie.I0)(),n=(0,fe.Jn)();return(0,ue.jsxs)(ke,{children:[" Find contacts by name",(0,ue.jsx)(Ne,{name:"filter",type:"text",onChange:function(n){return e((0,Le.Tv)(n.currentTarget.value))},value:n})]})},Re=function(e){var n=e.message;return(0,ue.jsx)(ue.Fragment,{children:(0,ue.jsx)("p",{children:n})})},je=t(2554),ze=re.Z.div(be||(be=(0,oe.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n"]))),Me=re.Z.div(Te||(Te=(0,oe.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: center;\n  flex-grow: 1;\n"]))),Ae=(re.Z.h1(Ze||(Ze=(0,oe.Z)(["\n  margin-top: 0;\n  margin-bottom: 40px;\n  text-align: center;\n  font-size: 32px;\n  text-transform: uppercase;\n"]))),re.Z.section(we||(we=(0,oe.Z)(["\n  ","\n"])),(function(){return(0,je.iv)(Ee||(Ee=(0,oe.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  max-width: 500px;\n  min-height: 570px;\n  padding: 20px;\n  background-color: #baf8e4;\n  border-radius: 8px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])))}))),Pe=re.Z.h2(_e||(_e=(0,oe.Z)(["\n  ","\n"])),(function(){return(0,je.iv)(Ce||(Ce=(0,oe.Z)(["\n  margin: 0;\n  text-align: center;\n  font-size: 28px;\n  color: #01465d;\n"])))})),Be=function(){var e=(0,c.Jx)().data;return(0,ue.jsxs)(ze,{children:[(0,ue.jsxs)(Me,{children:[(0,ue.jsxs)(Ae,{children:[(0,ue.jsx)(Pe,{children:"Add contact"}),(0,ue.jsx)(de,{})]}),(0,ue.jsxs)(Ae,{children:[(0,ue.jsx)(Pe,{children:"Contacts"}),0!==function(){return e?e.length:0}?(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(Oe,{}),(0,ue.jsx)(ge,{})]}):(0,ue.jsx)(Re,{message:"There are no contacts in your Phonebook. Please add your first contact!"})]})]}),(0,ue.jsx)(A,{})]})}}}]);
//# sourceMappingURL=884.a622d2eb.chunk.js.map