"use strict";(self.webpackChunklida=self.webpackChunklida||[]).push([[833],{5950:function(e,t,n){n.r(t),n.d(t,{default:function(){return Le}});var a=n(7294),o=n(2445),r=n(4925),i=["title","titleId"];var c=a.forwardRef((function(e,t){var n=e.title,o=e.titleId,c=(0,r.Z)(e,i);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":o},c),n?a.createElement("title",{id:o},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))})),l=["title","titleId"];var s=a.forwardRef((function(e,t){var n=e.title,o=e.titleId,i=(0,r.Z)(e,l);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":o},i),n?a.createElement("title",{id:o},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))})),d=n(8393),u=n(5229),m=n(4942),g=n(9439),b=n(5900),p=n.n(b),f=n(7170),h=n(8613),v=function(e){var t,n,o=e.prefixCls,r=e.className,i=e.style,c=e.size,l=e.shape,s=p()((t={},(0,m.Z)(t,"".concat(o,"-lg"),"large"===c),(0,m.Z)(t,"".concat(o,"-sm"),"small"===c),t)),d=p()((n={},(0,m.Z)(n,"".concat(o,"-circle"),"circle"===l),(0,m.Z)(n,"".concat(o,"-square"),"square"===l),(0,m.Z)(n,"".concat(o,"-round"),"round"===l),n)),u=a.useMemo((function(){return"number"==typeof c?{width:c,height:c,lineHeight:"".concat(c,"px")}:{}}),[c]);return a.createElement("span",{className:p()(o,s,d,r),style:Object.assign(Object.assign({},u),i)})},k=n(3346),E=n(1540),y=n(5146),C=new k.E4("ant-skeleton-loading",{"0%":{transform:"translateX(-37.5%)"},"100%":{transform:"translateX(37.5%)"}}),x=function(e){return{height:e,lineHeight:"".concat(e,"px")}},Z=function(e){return Object.assign({width:e},x(e))},w=function(e){return Object.assign({width:5*e,minWidth:5*e},x(e))},S=function(e){return Object.assign({width:e},x(e))},N=function(e,t,n){var a,o=e.skeletonButtonCls;return a={},(0,m.Z)(a,"".concat(n).concat(o,"-circle"),{width:t,minWidth:t,borderRadius:"50%"}),(0,m.Z)(a,"".concat(n).concat(o,"-round"),{borderRadius:t}),a},O=function(e){return Object.assign({width:2*e,minWidth:2*e},x(e))},j=function(e){var t,n,a,o,r,i=e.componentCls,c=e.skeletonAvatarCls,l=e.skeletonTitleCls,s=e.skeletonParagraphCls,d=e.skeletonButtonCls,u=e.skeletonInputCls,g=e.skeletonImageCls,b=e.controlHeight,p=e.controlHeightLG,f=e.controlHeightSM,h=e.color,v=e.padding,k=e.marginSM,E=e.borderRadius,y=e.skeletonTitleHeight,x=e.skeletonBlockRadius,j=e.skeletonParagraphLineHeight,B=e.controlHeightXS,I=e.skeletonParagraphMarginTop;return r={},(0,m.Z)(r,"".concat(i),(a={display:"table",width:"100%"},(0,m.Z)(a,"".concat(i,"-header"),(t={display:"table-cell",paddingInlineEnd:v,verticalAlign:"top"},(0,m.Z)(t,"".concat(c),Object.assign({display:"inline-block",verticalAlign:"top",background:h},Z(b))),(0,m.Z)(t,"".concat(c,"-circle"),{borderRadius:"50%"}),(0,m.Z)(t,"".concat(c,"-lg"),Object.assign({},Z(p))),(0,m.Z)(t,"".concat(c,"-sm"),Object.assign({},Z(f))),t)),(0,m.Z)(a,"".concat(i,"-content"),(n={display:"table-cell",width:"100%",verticalAlign:"top"},(0,m.Z)(n,"".concat(l),(0,m.Z)({width:"100%",height:y,background:h,borderRadius:x},"+ ".concat(s),{marginBlockStart:f})),(0,m.Z)(n,"".concat(s),{padding:0,"> li":{width:"100%",height:j,listStyle:"none",background:h,borderRadius:x,"+ li":{marginBlockStart:B}}}),(0,m.Z)(n,"".concat(s,"> li:last-child:not(:first-child):not(:nth-child(2))"),{width:"61%"}),n)),(0,m.Z)(a,"&-round ".concat(i,"-content"),(0,m.Z)({},"".concat(l,", ").concat(s," > li"),{borderRadius:E})),a)),(0,m.Z)(r,"".concat(i,"-with-avatar ").concat(i,"-content"),(0,m.Z)({},"".concat(l),(0,m.Z)({marginBlockStart:k},"+ ".concat(s),{marginBlockStart:I}))),(0,m.Z)(r,"".concat(i).concat(i,"-element"),Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},function(e){var t=e.borderRadiusSM,n=e.skeletonButtonCls,a=e.controlHeight,o=e.controlHeightLG,r=e.controlHeightSM,i=e.color;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign((0,m.Z)({},"".concat(n),Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:2*a,minWidth:2*a},O(a))),N(e,a,n)),(0,m.Z)({},"".concat(n,"-lg"),Object.assign({},O(o)))),N(e,o,"".concat(n,"-lg"))),(0,m.Z)({},"".concat(n,"-sm"),Object.assign({},O(r)))),N(e,r,"".concat(n,"-sm")))}(e)),function(e){var t,n=e.skeletonAvatarCls,a=e.color,o=e.controlHeight,r=e.controlHeightLG,i=e.controlHeightSM;return t={},(0,m.Z)(t,"".concat(n),Object.assign({display:"inline-block",verticalAlign:"top",background:a},Z(o))),(0,m.Z)(t,"".concat(n).concat(n,"-circle"),{borderRadius:"50%"}),(0,m.Z)(t,"".concat(n).concat(n,"-lg"),Object.assign({},Z(r))),(0,m.Z)(t,"".concat(n).concat(n,"-sm"),Object.assign({},Z(i))),t}(e)),function(e){var t,n=e.controlHeight,a=e.borderRadiusSM,o=e.skeletonInputCls,r=e.controlHeightLG,i=e.controlHeightSM,c=e.color;return t={},(0,m.Z)(t,"".concat(o),Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:a},w(n))),(0,m.Z)(t,"".concat(o,"-lg"),Object.assign({},w(r))),(0,m.Z)(t,"".concat(o,"-sm"),Object.assign({},w(i))),t}(e)),function(e){var t,n,a=e.skeletonImageCls,o=e.imageSizeBase,r=e.color,i=e.borderRadiusSM;return n={},(0,m.Z)(n,"".concat(a),Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:r,borderRadius:i},S(2*o)),(t={},(0,m.Z)(t,"".concat(a,"-path"),{fill:"#bfbfbf"}),(0,m.Z)(t,"".concat(a,"-svg"),Object.assign(Object.assign({},S(o)),{maxWidth:4*o,maxHeight:4*o})),(0,m.Z)(t,"".concat(a,"-svg").concat(a,"-svg-circle"),{borderRadius:"50%"}),t))),(0,m.Z)(n,"".concat(a).concat(a,"-circle"),{borderRadius:"50%"}),n}(e))),(0,m.Z)(r,"".concat(i).concat(i,"-block"),(o={width:"100%"},(0,m.Z)(o,"".concat(d),{width:"100%"}),(0,m.Z)(o,"".concat(u),{width:"100%"}),o)),(0,m.Z)(r,"".concat(i).concat(i,"-active"),(0,m.Z)({},"\n        ".concat(l,",\n        ").concat(s," > li,\n        ").concat(c,",\n        ").concat(d,",\n        ").concat(u,",\n        ").concat(g,"\n      "),Object.assign({},function(e){return{position:"relative",zIndex:0,overflow:"hidden",background:"transparent","&::after":{position:"absolute",top:0,insetInlineEnd:"-150%",bottom:0,insetInlineStart:"-150%",background:e.skeletonLoadingBackground,animationName:C,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite",content:'""'}}}(e)))),r},B=(0,E.Z)("Skeleton",(function(e){var t=e.componentCls,n=(0,y.TS)(e,{skeletonAvatarCls:"".concat(t,"-avatar"),skeletonTitleCls:"".concat(t,"-title"),skeletonParagraphCls:"".concat(t,"-paragraph"),skeletonButtonCls:"".concat(t,"-button"),skeletonInputCls:"".concat(t,"-input"),skeletonImageCls:"".concat(t,"-image"),imageSizeBase:1.5*e.controlHeight,skeletonTitleHeight:e.controlHeight/2,skeletonBlockRadius:e.borderRadiusSM,skeletonParagraphLineHeight:e.controlHeight/2,skeletonParagraphMarginTop:e.marginLG+e.marginXXS,borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(e.color," 25%, ").concat(e.colorGradientEnd," 37%, ").concat(e.color," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[j(n)]}),(function(e){return{color:e.colorFillContent,colorGradientEnd:e.colorFill}})),I=function(e){var t=e.prefixCls,n=e.className,o=e.active,r=e.shape,i=void 0===r?"circle":r,c=e.size,l=void 0===c?"default":c,s=(0,a.useContext(f.E_).getPrefixCls)("skeleton",t),d=B(s),u=(0,g.Z)(d,2),b=u[0],k=u[1],E=(0,h.Z)(e,["prefixCls","className"]),y=p()(s,"".concat(s,"-element"),(0,m.Z)({},"".concat(s,"-active"),o),n,k);return b(a.createElement("div",{className:y},a.createElement(v,Object.assign({prefixCls:"".concat(s,"-avatar"),shape:i,size:l},E))))},R=function(e){var t,n=e.prefixCls,o=e.className,r=e.active,i=e.block,c=void 0!==i&&i,l=e.size,s=void 0===l?"default":l,d=(0,a.useContext(f.E_).getPrefixCls)("skeleton",n),u=B(d),b=(0,g.Z)(u,2),k=b[0],E=b[1],y=(0,h.Z)(e,["prefixCls"]),C=p()(d,"".concat(d,"-element"),(t={},(0,m.Z)(t,"".concat(d,"-active"),r),(0,m.Z)(t,"".concat(d,"-block"),c),t),o,E);return k(a.createElement("div",{className:C},a.createElement(v,Object.assign({prefixCls:"".concat(d,"-button"),size:s},y))))},z=n(1413),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},H=n(7041),M=function(e,t){return a.createElement(H.Z,(0,z.Z)((0,z.Z)({},e),{},{ref:t,icon:P}))};M.displayName="DotChartOutlined";var D=a.forwardRef(M),L=function(e){var t=e.prefixCls,n=e.className,o=e.style,r=e.active,i=e.children,c=(0,a.useContext(f.E_).getPrefixCls)("skeleton",t),l=B(c),s=(0,g.Z)(l,2),d=s[0],u=s[1],b=p()(c,"".concat(c,"-element"),(0,m.Z)({},"".concat(c,"-active"),r),u,n),h=null!=i?i:a.createElement(D,null);return d(a.createElement("div",{className:b},a.createElement("div",{className:p()("".concat(c,"-image"),n),style:o},h)))},T=function(e){var t=e.prefixCls,n=e.className,o=e.style,r=e.active,i=(0,a.useContext(f.E_).getPrefixCls)("skeleton",t),c=B(i),l=(0,g.Z)(c,2),s=l[0],d=l[1],u=p()(i,"".concat(i,"-element"),(0,m.Z)({},"".concat(i,"-active"),r),n,d);return s(a.createElement("div",{className:u},a.createElement("div",{className:p()("".concat(i,"-image"),n),style:o},a.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(i,"-image-svg")},a.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(i,"-image-path")})))))},A=function(e){var t,n=e.prefixCls,o=e.className,r=e.active,i=e.block,c=e.size,l=void 0===c?"default":c,s=(0,a.useContext(f.E_).getPrefixCls)("skeleton",n),d=B(s),u=(0,g.Z)(d,2),b=u[0],k=u[1],E=(0,h.Z)(e,["prefixCls"]),y=p()(s,"".concat(s,"-element"),(t={},(0,m.Z)(t,"".concat(s,"-active"),r),(0,m.Z)(t,"".concat(s,"-block"),i),t),o,k);return b(a.createElement("div",{className:y},a.createElement(v,Object.assign({prefixCls:"".concat(s,"-input"),size:l},E))))},W=n(3433),_=function(e){var t=function(t){var n=e.width,a=e.rows,o=void 0===a?2:a;return Array.isArray(n)?n[t]:o-1===t?n:void 0},n=e.prefixCls,o=e.className,r=e.style,i=e.rows,c=(0,W.Z)(Array(i)).map((function(e,n){return a.createElement("li",{key:n,style:{width:t(n)}})}));return a.createElement("ul",{className:p()(n,o),style:r},c)},q=function(e){var t=e.prefixCls,n=e.className,o=e.width,r=e.style;return a.createElement("h3",{className:p()(t,n),style:Object.assign({width:o},r)})};function F(e){return e&&"object"==typeof e?e:{}}var G=function(e){var t=e.prefixCls,n=e.loading,o=e.className,r=e.style,i=e.children,c=e.avatar,l=void 0!==c&&c,s=e.title,d=void 0===s||s,u=e.paragraph,b=void 0===u||u,h=e.active,k=e.round,E=a.useContext(f.E_),y=E.getPrefixCls,C=E.direction,x=y("skeleton",t),Z=B(x),w=(0,g.Z)(Z,2),S=w[0],N=w[1];if(n||!("loading"in e)){var O,j,I,R=!!l,z=!!d,P=!!b;if(R){var H=Object.assign(Object.assign({prefixCls:"".concat(x,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(z,P)),F(l));j=a.createElement("div",{className:"".concat(x,"-header")},a.createElement(v,Object.assign({},H)))}if(z||P){var M,D;if(z){var L=Object.assign(Object.assign({prefixCls:"".concat(x,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(R,P)),F(d));M=a.createElement(q,Object.assign({},L))}if(P){var T=Object.assign(Object.assign({prefixCls:"".concat(x,"-paragraph")},function(e,t){var n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}(R,z)),F(b));D=a.createElement(_,Object.assign({},T))}I=a.createElement("div",{className:"".concat(x,"-content")},M,D)}var A=p()(x,(O={},(0,m.Z)(O,"".concat(x,"-with-avatar"),R),(0,m.Z)(O,"".concat(x,"-active"),h),(0,m.Z)(O,"".concat(x,"-rtl"),"rtl"===C),(0,m.Z)(O,"".concat(x,"-round"),k),O),o,N);return S(a.createElement("div",{className:A,style:r},j,I))}return void 0!==i?i:null};G.Button=R,G.Avatar=I,G.Input=A,G.Image=T,G.Node=L;var K=G,X=n(8548),U=n(8592),V=n(5596),J=n(8154),Q=n(2592);var Y=a.createContext(null),$=Y.Provider,ee=Y,te=a.createContext(null),ne=te.Provider,ae=n(7462),oe=n(5671),re=n(3144),ie=n(136),ce=n(9388),le=function(e){(0,ie.Z)(n,e);var t=(0,ce.Z)(n);function n(e){var a;(0,oe.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,o=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:(0,z.Z)((0,z.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return(0,re.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,i=t.style,c=t.name,l=t.id,s=t.type,d=t.disabled,u=t.readOnly,g=t.tabIndex,b=t.onClick,f=t.onFocus,h=t.onBlur,v=t.onKeyDown,k=t.onKeyPress,E=t.onKeyUp,y=t.autoFocus,C=t.value,x=t.required,Z=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(Z).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=Z[t]),e}),{}),S=this.state.checked,N=p()(n,o,(e={},(0,m.Z)(e,"".concat(n,"-checked"),S),(0,m.Z)(e,"".concat(n,"-disabled"),d),e));return a.createElement("span",{className:N,style:i},a.createElement("input",(0,ae.Z)({name:c,id:l,type:s,required:x,readOnly:u,disabled:d,tabIndex:g,className:"".concat(n,"-input"),checked:!!S,onClick:b,onFocus:f,onBlur:h,onKeyUp:E,onKeyDown:v,onKeyPress:k,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:C},w)),a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,z.Z)((0,z.Z)({},t),{},{checked:e.checked}):null}}]),n}(a.Component);le.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var se=le,de=n(2275),ue=n(3286),me=n(5766),ge=n(7416),be=new k.E4("antRadioEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),pe=function(e){var t,n=e.componentCls,a=e.antCls,o="".concat(n,"-group");return(0,m.Z)({},o,Object.assign(Object.assign({},(0,ge.Wf)(e)),(t={display:"inline-block",fontSize:0,"&&-rtl":{direction:"rtl"}},(0,m.Z)(t,"".concat(a,"-badge ").concat(a,"-badge-count"),{zIndex:1}),(0,m.Z)(t,"> ".concat(a,"-badge:not(:first-child) > ").concat(a,"-button-wrapper"),{borderInlineStart:"none"}),t)))},fe=function(e){var t,n,a=e.componentCls,o=e.radioWrapperMarginRight,r=e.radioCheckedColor,i=e.radioSize,c=e.motionDurationSlow,l=e.motionDurationMid,s=e.motionEaseInOut,d=e.motionEaseInOutCirc,u=e.radioButtonBg,g=e.colorBorder,b=e.lineWidth,p=e.radioDotSize,f=e.colorBgContainerDisabled,h=e.colorTextDisabled,v=e.paddingXS,k=e.radioDotDisabledColor,E=e.lineType,y=e.radioDotDisabledSize,C=e.wireframe,x=e.colorWhite,Z="".concat(a,"-inner");return(0,m.Z)({},"".concat(a,"-wrapper"),Object.assign(Object.assign({},(0,ge.Wf)(e)),(n={position:"relative",display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:o,cursor:"pointer","&&-rtl":{direction:"rtl"},"&-disabled":{cursor:"not-allowed"},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'}},(0,m.Z)(n,"".concat(a,"-checked::after"),{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:"".concat(b,"px ").concat(E," ").concat(r),borderRadius:"50%",visibility:"hidden",animationName:be,animationDuration:c,animationTimingFunction:s,animationFillMode:"both",content:'""'}),(0,m.Z)(n,a,Object.assign(Object.assign({},(0,ge.Wf)(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center"})),(0,m.Z)(n,"".concat(a,"-wrapper:hover &,\n        &:hover ").concat(Z),{borderColor:r}),(0,m.Z)(n,"".concat(a,"-input:focus-visible + ").concat(Z),Object.assign({},(0,ge.oN)(e))),(0,m.Z)(n,"".concat(a,":hover::after, ").concat(a,"-wrapper:hover &::after"),{visibility:"visible"}),(0,m.Z)(n,"".concat(a,"-inner"),{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:i,height:i,marginBlockStart:i/-2,marginInlineStart:i/-2,backgroundColor:C?r:x,borderBlockStart:0,borderInlineStart:0,borderRadius:i,transform:"scale(0)",opacity:0,transition:"all ".concat(c," ").concat(d),content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:i,height:i,backgroundColor:u,borderColor:g,borderStyle:"solid",borderWidth:b,borderRadius:"50%",transition:"all ".concat(l)}),(0,m.Z)(n,"".concat(a,"-input"),{position:"absolute",insetBlockStart:0,insetInlineEnd:0,insetBlockEnd:0,insetInlineStart:0,zIndex:1,cursor:"pointer",opacity:0}),(0,m.Z)(n,"".concat(a,"-checked"),(0,m.Z)({},Z,{borderColor:r,backgroundColor:C?u:r,"&::after":{transform:"scale(".concat(p/i,")"),opacity:1,transition:"all ".concat(c," ").concat(d)}})),(0,m.Z)(n,"".concat(a,"-disabled"),(t={cursor:"not-allowed"},(0,m.Z)(t,Z,{backgroundColor:f,borderColor:g,cursor:"not-allowed","&::after":{backgroundColor:k}}),(0,m.Z)(t,"&-input",{cursor:"not-allowed"}),(0,m.Z)(t,"".concat(a,"-disabled + span"),{color:h,cursor:"not-allowed"}),(0,m.Z)(t,"&".concat(a,"-checked"),(0,m.Z)({},Z,{"&::after":{transform:"scale(".concat(y/i,")")}})),t)),(0,m.Z)(n,"span".concat(a," + *"),{paddingInlineStart:v,paddingInlineEnd:v}),n)))},he=function(e){var t,n=e.radioButtonColor,a=e.controlHeight,o=e.componentCls,r=e.lineWidth,i=e.lineType,c=e.colorBorder,l=e.motionDurationSlow,s=e.motionDurationMid,d=e.radioButtonPaddingHorizontal,u=e.fontSize,g=e.radioButtonBg,b=e.fontSizeLG,p=e.controlHeightLG,f=e.controlHeightSM,h=e.paddingXS,v=e.borderRadius,k=e.borderRadiusSM,E=e.borderRadiusLG,y=e.radioCheckedColor,C=e.radioButtonCheckedBg,x=e.radioButtonHoverColor,Z=e.radioButtonActiveColor,w=e.radioSolidCheckedColor,S=e.colorTextDisabled,N=e.colorBgContainerDisabled,O=e.radioDisabledButtonCheckedColor,j=e.radioDisabledButtonCheckedBg;return(0,m.Z)({},"".concat(o,"-button-wrapper"),(t={position:"relative",display:"inline-block",height:a,margin:0,paddingInline:d,paddingBlock:0,color:n,fontSize:u,lineHeight:"".concat(a-2*r,"px"),background:g,border:"".concat(r,"px ").concat(i," ").concat(c),borderBlockStartWidth:r+.02,borderInlineStartWidth:0,borderInlineEndWidth:r,cursor:"pointer",transition:["color ".concat(s),"background ".concat(s),"border-color ".concat(s),"box-shadow ".concat(s)].join(","),a:{color:n}},(0,m.Z)(t,"> ".concat(o,"-button"),{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"}),(0,m.Z)(t,"&:not(:first-child)",{"&::before":{position:"absolute",insetBlockStart:-r,insetInlineStart:-r,display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:r,paddingInline:0,backgroundColor:c,transition:"background-color ".concat(l),content:'""'}}),(0,m.Z)(t,"&:first-child",{borderInlineStart:"".concat(r,"px ").concat(i," ").concat(c),borderStartStartRadius:v,borderEndStartRadius:v}),(0,m.Z)(t,"&:last-child",{borderStartEndRadius:v,borderEndEndRadius:v}),(0,m.Z)(t,"&:first-child:last-child",{borderRadius:v}),(0,m.Z)(t,"".concat(o,"-group-large &"),{height:p,fontSize:b,lineHeight:"".concat(p-2*r,"px"),"&:first-child":{borderStartStartRadius:E,borderEndStartRadius:E},"&:last-child":{borderStartEndRadius:E,borderEndEndRadius:E}}),(0,m.Z)(t,"".concat(o,"-group-small &"),{height:f,paddingInline:h-r,paddingBlock:0,lineHeight:"".concat(f-2*r,"px"),"&:first-child":{borderStartStartRadius:k,borderEndStartRadius:k},"&:last-child":{borderStartEndRadius:k,borderEndEndRadius:k}}),(0,m.Z)(t,"&:hover",{position:"relative",color:y}),(0,m.Z)(t,"&:has(:focus-visible)",Object.assign({},(0,ge.oN)(e))),(0,m.Z)(t,"".concat(o,"-inner, input[type='checkbox'], input[type='radio']"),{width:0,height:0,opacity:0,pointerEvents:"none"}),(0,m.Z)(t,"&-checked:not(&-disabled)",{zIndex:1,color:y,background:C,borderColor:y,"&::before":{backgroundColor:y},"&:first-child":{borderColor:y},"&:hover":{color:x,borderColor:x,"&::before":{backgroundColor:x}},"&:active":{color:Z,borderColor:Z,"&::before":{backgroundColor:Z}}}),(0,m.Z)(t,"".concat(o,"-group-solid &-checked:not(&-disabled)"),{color:w,background:y,borderColor:y,"&:hover":{color:w,background:x,borderColor:x},"&:active":{color:w,background:Z,borderColor:Z}}),(0,m.Z)(t,"&-disabled",{color:S,backgroundColor:N,borderColor:c,cursor:"not-allowed","&:first-child, &:hover":{color:S,backgroundColor:N,borderColor:c}}),(0,m.Z)(t,"&-disabled&-checked",{color:O,backgroundColor:j,borderColor:c,boxShadow:"none"}),t))},ve=(0,E.Z)("Radio",(function(e){var t=e.padding,n=e.lineWidth,a=e.controlItemBgActiveDisabled,o=e.colorTextDisabled,r=e.colorBgContainer,i=e.fontSizeLG,c=e.controlOutline,l=e.colorPrimaryHover,s=e.colorPrimaryActive,d=e.colorText,u=e.colorPrimary,m=e.marginXS,g=e.controlOutlineWidth,b=e.colorTextLightSolid,p=e.wireframe,f="0 0 0 ".concat(g,"px ").concat(c),h=f,v=i,k=v-8,E=p?k:v-2*(4+n),C=u,x=d,Z=l,w=s,S=t-n,N=o,O=m,j=(0,y.TS)(e,{radioFocusShadow:f,radioButtonFocusShadow:h,radioSize:v,radioDotSize:E,radioDotDisabledSize:k,radioCheckedColor:C,radioDotDisabledColor:o,radioSolidCheckedColor:b,radioButtonBg:r,radioButtonCheckedBg:r,radioButtonColor:x,radioButtonHoverColor:Z,radioButtonActiveColor:w,radioButtonPaddingHorizontal:S,radioDisabledButtonCheckedBg:a,radioDisabledButtonCheckedColor:N,radioWrapperMarginRight:O});return[pe(j),fe(j),he(j)]})),ke=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},Ee=function(e,t){var n,o=a.useContext(ee),r=a.useContext(te),i=a.useContext(f.E_),c=i.getPrefixCls,l=i.direction,s=a.useRef(),d=(0,de.sQ)(t,s),u=a.useContext(me.aM).isFormItemInput,b=e.prefixCls,h=e.className,v=e.children,k=e.style,E=e.disabled,y=ke(e,["prefixCls","className","children","style","disabled"]),C=c("radio",b),x="button"===((null==o?void 0:o.optionType)||r)?"".concat(C,"-button"):C,Z=ve(C),w=(0,g.Z)(Z,2),S=w[0],N=w[1],O=Object.assign({},y),j=a.useContext(ue.Z);O.disabled=E||j,o&&(O.name=o.name,O.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null==o?void 0:o.onChange)||void 0===a||a.call(o,t)},O.checked=e.value===o.value,O.disabled=O.disabled||o.disabled);var B=p()("".concat(x,"-wrapper"),(n={},(0,m.Z)(n,"".concat(x,"-wrapper-checked"),O.checked),(0,m.Z)(n,"".concat(x,"-wrapper-disabled"),O.disabled),(0,m.Z)(n,"".concat(x,"-wrapper-rtl"),"rtl"===l),(0,m.Z)(n,"".concat(x,"-wrapper-in-form-item"),u),n),h,N);return S(a.createElement("label",{className:B,style:k,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},a.createElement(se,Object.assign({},O,{type:"radio",prefixCls:x,ref:d})),void 0!==v?a.createElement("span",null,v):null))};var ye=a.forwardRef(Ee),Ce=a.forwardRef((function(e,t){var n,o=a.useContext(f.E_),r=o.getPrefixCls,i=o.direction,c=a.useContext(Q.Z),l=(0,J.Z)(e.defaultValue,{value:e.value}),s=(0,g.Z)(l,2),d=s[0],u=s[1],b=e.prefixCls,h=e.className,v=void 0===h?"":h,k=e.options,E=e.buttonStyle,y=void 0===E?"outline":E,C=e.disabled,x=e.children,Z=e.size,w=e.style,S=e.id,N=e.onMouseEnter,O=e.onMouseLeave,j=e.onFocus,B=e.onBlur,I=r("radio",b),R="".concat(I,"-group"),z=ve(I),P=(0,g.Z)(z,2),H=P[0],M=P[1],D=x;k&&k.length>0&&(D=k.map((function(e){return"string"==typeof e||"number"==typeof e?a.createElement(ye,{key:e.toString(),prefixCls:I,disabled:C,value:e,checked:d===e},e):a.createElement(ye,{key:"radio-group-value-options-".concat(e.value),prefixCls:I,disabled:e.disabled||C,value:e.value,checked:d===e.value,style:e.style},e.label)})));var L=Z||c,T=p()(R,"".concat(R,"-").concat(y),(n={},(0,m.Z)(n,"".concat(R,"-").concat(L),L),(0,m.Z)(n,"".concat(R,"-rtl"),"rtl"===i),n),v,M);return H(a.createElement("div",Object.assign({},function(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}(e),{className:T,style:w,onMouseEnter:N,onMouseLeave:O,onFocus:j,onBlur:B,id:S,ref:t}),a.createElement($,{value:{onChange:function(t){var n=d,a=t.target.value;"value"in e||u(a);var o=e.onChange;o&&a!==n&&o(t)},value:d,disabled:e.disabled,name:e.name,optionType:e.optionType}},D)))})),xe=a.memo(Ce),Ze=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},we=function(e,t){var n=a.useContext(f.E_).getPrefixCls,o=e.prefixCls,r=Ze(e,["prefixCls"]),i=n("radio",o);return a.createElement(ne,{value:"button"},a.createElement(ye,Object.assign({prefixCls:i},r,{type:"radio",ref:t})))},Se=a.forwardRef(we),Ne=ye;Ne.Button=Se,Ne.Group=xe,Ne.__ANT_RADIO=!0;var Oe=Ne,je=n(2637),Be=n(8995),Ie=n(5107),Re=n(5763),ze=n(6406),Pe=n(501),He=function(e){var t=e.code,n=e.raster,o=e.library,r=e.goal,i=e.summary,c=e.error,l=e.status,s=[{label:a.createElement("div",null," ",a.createElement(je.Z,{className:"inline-block h-4"})," Python Code"),key:"1",children:a.createElement("div",{className:"w-full overflow-hidden"},a.createElement(Pe.d,{code:t,language:"python",wrapLines:!0,maxHeight:"380px"}))},{label:a.createElement("div",null," ",a.createElement(Be.Z,{className:"inline-block h-4"})," Data Summary"),key:"2",children:a.createElement("div",{className:"w-full overflow-hidden"},a.createElement(Pe.d,{code:JSON.stringify(i,null,2),language:"javascript",wrapLines:!0,maxHeight:"380px"}))}];return!1===l&&c&&s.push({label:a.createElement("div",null," ",a.createElement(Ie.Z,{className:"inline-block h-4 text-orange-400"})," ","Error"),key:"3",children:a.createElement("div",{className:"w-full overflow-hidden"},a.createElement(Pe.d,{code:c,language:"javascript",wrapLines:!0,maxHeight:"380px",minHeight:"380px"}))}),a.createElement("div",null,a.createElement("div",{className:" w-full mt-6 "},a.createElement("div",{className:"text-lg font-semibold"},null==r?void 0:r.question),a.createElement("span",{className:"text-sm"},null==r?void 0:r.rationale)),a.createElement("div",{className:"md:flex gap-3"},a.createElement("div",{className:"pt-4"},a.createElement(ze.Z,{raster:n,library:o,goal:r})),a.createElement("div",{className:"flex-1"},a.createElement(Re.Z,{defaultActiveKey:"1",onChange:function(){},items:s}))))},Me=function(e){var t,n,o,r,i=e.details,c=a.useState(null),l=c[0],s=c[1],d=a.useState(!1),m=d[0],g=d[1],b=a.useState(0),p=b[0],f=b[1],h=a.useState(i.libs[0]),v=h[0],k=h[1],E=a.useRef(null);a.useEffect((function(){if(i){var e="/lida/samples/"+i.dir+"/enrich/"+v+"/result.json";x(e,{method:"GET"},l,s)}}),[i,v]),a.useEffect((function(){f(0),l&&(0,V.kI)(E)}),[l]);var y=null==i?void 0:i.libs.map((function(e,t){return a.createElement(Oe,{key:"radio"+e+t,value:e},e)})),C=null==l?void 0:l.goals.map((function(e,t){var n=p===t;return a.createElement("div",{onClick:function(){f(t)},role:"button",key:"goal"+t,className:"bg-secondary duration-300 text-sm inline-block border rounded p-2 md:mb-2 "+(n?" border-accent ":" border-transparent ")},a.createElement("div",{className:""},e.question))}));a.useEffect((function(){console.log("component loaded")}),[]);var x=function(e,t,n,a){g(!0);(0,V.ZV)(e,t,(function(e){e&&a(e),g(!1)}),(function(e){u.ZP.error(e),g(!1)}))};return a.createElement("div",{ref:E,className:"mt-4 "},a.createElement("div",{className:"  gap-3 "+(m?"pointer-events-none opacity-10":"")},a.createElement("div",{className:"flex-1 text-left"},a.createElement("div",{className:"font-semibold text-2xl"},null==l?void 0:l.summary.name)," ",a.createElement("div",{className:"text-xs font-semibold"},"[",null==l||null===(t=l.summary.field_names)||void 0===t?void 0:t.map((function(e,t){var n=null==l?void 0:l.summary.field_names;return a.createElement("span",{key:"fname"+t}," ",e," ",!(t===n.length-1)&&","," ")})),"]")),a.createElement("div",{className:"mt-4"}," ",a.createElement("div",{className:"p-2 inline-block rounded bg-secondary"},a.createElement(Oe.Group,{onChange:function(e){k(e.target.value)},value:v},y)))),a.createElement("div",{className:"  relative gap-3 mt-2 duration-300 "},m&&a.createElement("div",{style:{zIndex:100},className:"absolute top-0 left-0 right-0 bottom-0  text-accent"},a.createElement("div",{className:"flex justify-center items-center h-full"},a.createElement(U.rH,{className:" ",subtitle:"loading chart .."}))),a.createElement("div",{className:m?"pointer-events-none opacity-10":""},a.createElement("div",{className:"  "},a.createElement("div",{className:"text-sm mt-4"},"Generated data exploration goals. Select one!"),a.createElement("div",{className:"mt-2 flex flex-wrap md:flex-nowrap md:inline-flex gap-3"},C)),a.createElement(He,{library:v,goal:null==l?void 0:l.goals[p],code:null==l?void 0:l.code[p][0],raster:null==l||null===(n=l.chart[p][0])||void 0===n?void 0:n.raster,summary:null==l?void 0:l.summary,error:null==l||null===(o=l.chart[p][0])||void 0===o?void 0:o.error,status:null==l||null===(r=l.chart[p][0])||void 0===r?void 0:r.status}))))},De=function(){var e=a.useState(null),t=e[0],n=e[1],o=a.useState(null),r=(o[0],o[1]),i=a.useState(!1),l=i[0],m=i[1],g=a.useState(0),b=g[0],p=g[1],f=a.useState(!1),h=f[0],v=f[1],k=a.useState(null),E=k[0],y=k[1],C=function(){v(!0)},x=t&&Object.keys(t)||[];a.useEffect((function(){var e=new URLSearchParams(window.location.search).get("dataset");e&&y(e)}),[]),a.useEffect((function(){if(E&&t){var e=x.indexOf(E);-1!==e?p(e):u.ZP.error("No dataset found with name "+E),console.log("urlDatasetName",E)}}),[E,t]),a.useEffect((function(){0!==b&&C()}),[b]);var Z=function(e){"ArrowRight"===e.key?null!==t&&b!==t.length-1&&p((function(e){return e+1})):"ArrowLeft"===e.key&&null!==t&&b&&0!==b&&p((function(e){return e-1}))};a.useEffect((function(){if(null!==t)return document.addEventListener("keydown",Z),function(){document.removeEventListener("keydown",Z)}}),[t,b]),a.useEffect((function(){!function(e,t,n,a){r(null),m(!0),(0,V.ZV)(e,t,(function(e){e&&a(e),m(!1)}),(function(e){r(e),u.ZP.error(e),m(!1)}))}("/lida/samples/datasets.json",{method:"GET"},0,n)}),[]);var w,S=t&&t[x[b]];return a.createElement("div",{className:"mt-10 "},a.createElement("div",{className:"text-3xl   pt-4 mb-4 font-bold"},"Gallery",a.createElement("span",{className:"text-base text-accent"}," ",null==t?void 0:t.length," dataset",0!==(null==t?void 0:t.length)&&"s")),a.createElement("div",{className:" mt-4 "},"Select a dataset to view data explorations (questions) and visualizations generated by LIDA across multiple visual grammars."," "),a.createElement("div",{className:"text-xs py-2 mb-4"}," ","The visualizations are based on data from teh"," ",a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"inline-block text-accent duration-300 hover:text-accent hover:brightness-90 ",href:" https://github.com/altair-viz/vega_datasets"},"vega_datasets")," ","repo and generations are based on the OpenAI GPT-3.5-turbo model."),l&&a.createElement("div",{className:"mt-10 pb-10"},a.createElement(U.rH,{subtitle:"loading gallery datasets ...",className:"text-accent"}),a.createElement(K,{paragraph:{rows:12}})),!l&&t&&a.createElement("div",{className:"w-full overflow-auto scroll pb-4"},a.createElement("div",{className:"inline-flex gap-3 flex-wrap "},(w="145px",x.map((function(e,n){var o=b===n,r=t[e],i=r.image?"data:image/png;base64,"+r.image:"/images/default.png";return a.createElement("div",{role:"button",onClick:function(){p(n),0!==n&&n!==b||C(),window.history.pushState({},"","?dataset="+r.filename)},className:" duration-300 hover:border-accent       break-inside-avoid   }",key:"dsrow"+n},a.createElement("img",{style:{width:w},src:i,className:"rounded-t object-fit bg-white p-2 border border-secondary border-b-0 ",alt:"chart"}),a.createElement("div",{style:{width:w},className:"mb-2 p-2 duration-300   break-all  rounded-b text-sm duration-400 "+(o?"bg-accent text-white ":"  bg-secondary text-primary ")},a.createElement("span",{className:"break-all"},r.filename)))}))))),null!==b&&null!==t&&a.createElement(X.Z,{title:a.createElement(a.Fragment,null,a.createElement("span",{className:"capitalize"},null==S?void 0:S.filename)," ","Chart"),open:h,onOk:function(){v(!1)},onCancel:function(){v(!1)},width:1e3},a.createElement("div",{className:"flex flex-row   items-center gap-4"},a.createElement("button",{onClick:function(){0!==b&&p(b-1)},disabled:0===b,className:"bg-secondary text-primary rounded-md py-2 px-4 font-medium focus:outline-none "+(0===b&&" opacity-30 ")},a.createElement(c,{className:"h-4 w-5 inline-block"})," Previous"),a.createElement("div",{className:"flex-1 justify-center text-center"},b+1," / ",x.length),a.createElement("button",{onClick:function(){b!==t.length-1&&p(b+1)},disabled:b===t.length-1,className:"bg-secondary text-primary rounded-md py-2 px-4 font-medium focus:outline-none "+(b===t.length-1&&" opacity-30 ")},"Next ",a.createElement(s,{className:"h-4 w-5 inline-block"}))),a.createElement(Me,{details:S}),a.createElement("div",{className:"mt-10"}," ",a.createElement(d.Z,{className:"text-accent h-8, w-8 mr-2 float-left "}),"Note: The data summary for each dataset is derived from a rule-based respresentation of the data. This representation is then"," ",a.createElement(U.v9,null,"enriched")," using an LLM (adding dataset descriptions, field descriptions, semantic types) and is used for all downnstream tasks (goal generation, chart generation, chart editing, chart question answering). This summary is then used for all subsequent tasks - goal exploration, visualization generation, visualization editing."," "),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://arxiv.org/pdf/2303.02927.pdf",className:"block mt-4 text-sm font-semibold leading-6 text-accent"},"Learn more in the paper ",a.createElement("span",{"aria-hidden":"true"},"→"))))},Le=function(e){var t=e.data;return a.createElement(o.Z,{meta:t.site.siteMetadata,title:"Gallery",link:"/gallery"},a.createElement("main",{className:""},a.createElement("div",{className:"hidden mb-6"},a.createElement("div",null,"Lida provides a conversational interface for automatic generation of"," ",a.createElement("span",{className:"border-b border-accent"},"grammar-agnostic")," ","visualizations (and infographics) from data!."," ",a.createElement("div",{className:"text-xs mt-1"}," ","Currently being developed at MSR! (Work in Progress.)"," ",a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs border-accent border-b pb-1",href:"mailto:victordibia@microsoft.com"},"Learn more.")))),a.createElement(De,null)))}}}]);
//# sourceMappingURL=component---src-pages-gallery-tsx-05cf9cfcd19991a81ab3.js.map