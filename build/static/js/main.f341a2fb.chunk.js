(this["webpackJsonpapp-portfolio"]=this["webpackJsonpapp-portfolio"]||[]).push([[0],{12:function(e,t){var n={width:0,height:0};function s(e){var t=document.getElementsByTagName("body")[0];n.height=t.clientHeight,n.width=t.clientWidth,e&&console.log(n)}function o(){s(!1);for(var e=document.querySelectorAll(".angular-divider, .angular-divider-rev"),t=0;t<e.length;++t){var n=e[t],o=n.parentElement,a=(o.previousElementSibling.previousElementSibling,o.clientHeight-n.clientHeight);n.style.width="0px",n.style.borderTop=a+"px solid transparent",n.className.indexOf("-rev")>0?n.style.borderLeft=o.clientWidth+"px solid black":n.style.borderRight=o.clientWidth+"px solid black"}}window.addEventListener("resize",o);e.exports={genKey:function(e){return e+"-"+Math.random().toString().substr(2)},repeatStringNTimes:function(e,t,n){if(t<=0)return"";for(var s=e+n,o="",a=0;a<t-1;)o+=s,++a;return o+e},checkObjAndKey:function(e,t){return null!=e&&t in e},my_display_dimensions:n,redirectToGitHubPages:function(){if("rawgit.com"===window.location.hostname.toLowerCase()){console.log("Redirecting to most up to date page"),window.open("https://jmathieu14.github.io/Portfolio/html/home.html","_self")}},recordDisplayDimensions:s,resizeDividersOnPageResize:o,SECT_LIST_CLASS:"section-list"}},23:function(e,t,n){"use strict";n.r(t);var s=n(25),o=n(3),a=n(4),i=n(6),r=n(7),c=n(1),l=n.n(c),h=n(30),p=n.n(h),d=(n(61),n(0)),u=n(12).genKey,g=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).specs=e.specs,s.images=s.specs.images,s.slider=null,s.id=e.id,s.settings={dots:!0,arrows:!0},s}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){console.log("rendering image-slider...");var e=this.images.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:e.text,src:e.path})},u(e.text))}));return Object(d.jsx)("div",{id:this.id,className:"ec-image-slider container",children:Object(d.jsx)(p.a,Object(s.a)(Object(s.a)({},this.settings),{},{children:e}))})}}]),n}(l.a.Component);t.default=g},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t),n.d(t,"HeaderTabs",(function(){return d}));var s=n(3),o=n(4),a=n(5),i=n(6),r=n(7),c=n(0),l=n(1),h=n(40).HeaderTab,p=n(12).genKey,d=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).sections=e.sections,o.moreIcon=e.moreIcon,o.moreStyle=e.moreStyle,o.state={mobileTabsOpacity:0,mobileTabsMaxHeight:"0px",mobileMenuActive:!1},o.toggleMobileTabs=o.toggleMobileTabs.bind(Object(a.a)(o)),o.toggleMobileTabsHelper=o.toggleMobileTabsHelper.bind(Object(a.a)(o)),o}return Object(o.a)(n,[{key:"getSectionListHeight",value:function(){var e=document.querySelector("section.section-list");return null!=e?e.offsetHeight:0}},{key:"toggleMobileTabsHelper",value:function(e){this.toggleMobileTabs()}},{key:"toggleMobileTabs",value:function(){var e=(.6*this.getSectionListHeight()).toString()+"px";1===this.state.mobileTabsOpacity?this.setState({mobileTabsOpacity:0,mobileTabsMaxHeight:"0px",mobileMenuActive:!1}):this.setState({mobileTabsOpacity:1,mobileTabsMaxHeight:e,mobileMenuActive:!0})}},{key:"getMobileTabsStyle",value:function(){return{opacity:this.state.mobileTabsOpacity,maxHeight:this.state.mobileTabsMaxHeight}}},{key:"render",value:function(){var e=this,t=this.sections.map((function(e){return Object(c.jsx)(h,{opacityAsTab:e.opacityAsTab,name:e.name,mobileVersion:!1},p(e.name))})),n=this.sections.map((function(t){return Object(c.jsx)(h,{opacityAsTab:t.opacityAsTab,name:t.name,mobileVersion:!0,toggleMobileTabsHelper:e.toggleMobileTabsHelper,mobileMenuActive:e.state.mobileMenuActive},p(t.name))}));return Object(c.jsxs)(l.Fragment,{children:[Object(c.jsx)("div",{onClick:this.toggleMobileTabs,className:"mobile-show-tabs-icon",children:Object(c.jsx)("img",{src:this.moreIcon,style:this.moreStyle})}),Object(c.jsx)("div",{className:"mobile-header-tabs",style:this.getMobileTabsStyle(),children:n}),Object(c.jsx)("div",{className:"header-tabs",children:t})]})}}]),n}(l.Component)},40:function(e,t,n){"use strict";n.r(t),n.d(t,"HeaderTab",(function(){return l}));var s=n(3),o=n(4),a=n(5),i=n(6),r=n(7),c=n(0),l=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).name=e.name,o.opacityAsTab=e.opacityAsTab,o.mobileVersion=e.mobileVersion,o.toggleMobileTabsHelper=e.toggleMobileTabsHelper,o.delay=200,o.scrollToSection=o.scrollToSection.bind(Object(a.a)(o)),o.mobileScrollToSection=o.mobileScrollToSection.bind(Object(a.a)(o)),o.mobileMenuActive=e.mobileMenuActive,o}return Object(o.a)(n,[{key:"scrollToSection",value:function(){var e=document.getElementById(this.name);null!=e&&window.setTimeout((function(){e.scrollIntoView({behavior:"smooth"})}),this.delay)}},{key:"mobileScrollToSection",value:function(){if(this.mobileMenuActive){this.props.toggleMobileTabsHelper(1.5*this.delay);var e=document.getElementById(this.name);null!=e&&window.setTimeout((function(){e.scrollIntoView({behavior:"smooth"})}),this.delay)}}},{key:"render",value:function(){return this.mobileVersion?Object(c.jsx)("a",{className:"mobile-header-tab",onClick:this.mobileScrollToSection,style:this.opacityAsTab,children:this.name}):Object(c.jsx)("a",{className:"header-tab",onClick:this.scrollToSection,style:this.opacityAsTab,children:this.name})}}]),n}(n(1).Component)},45:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);n(31);var s=n(1),o=n.n(s),a=n(18),i=(n(36),n(37),n(0));n(1);function r(e){return Object(i.jsx)("link",{href:e.path,rel:"stylesheet"})}var c=n(3),l=n(4),h=n(6),p=n(7),d=n(15),u=n(39).HeaderTabs,g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).sections=e.sections,s.key="PAGE_HEADER",s.pageHeaderSpecs=e.pageHeader,s.state={description:"active",backgroundColor:s.pageHeaderSpecs.background,fontColor:s.pageHeaderSpecs.fontColor,fontFamily:s.pageHeaderSpecs.fontFamily,headerFontOpacity:s.pageHeaderSpecs.headerFontOpacity},s}return Object(l.a)(n,[{key:"getStyle",value:function(){return{backgroundColor:this.state.backgroundColor,color:this.state.fontColor,fontFamily:this.state.fontFamily}}},{key:"getHeaderStyle",value:function(){var e={opacity:this.state.headerFontOpacity};return""===this.pageHeaderSpecs.title.trim()&&(e.display="None"),e}},{key:"render",value:function(){return Object(i.jsxs)("section",{id:this.key,className:"page-header",style:this.getStyle(),children:[Object(i.jsx)("div",{className:"header-logo-wrapper",style:this.pageHeaderSpecs.logoStyle,children:Object(i.jsx)(d.Link,{to:this.pageHeaderSpecs.logoURL,children:Object(i.jsx)("img",{alt:"page logo",src:this.pageHeaderSpecs.logo})})}),Object(i.jsx)("div",{className:"header-title",style:this.getHeaderStyle(),children:this.pageHeaderSpecs.title}),Object(i.jsx)(u,{sections:this.sections,moreIcon:this.pageHeaderSpecs.mobileMoreIcon,moreStyle:this.pageHeaderSpecs.mobileMoreStyle})]})}}]),n}(n(1).Component),m=n(5),b=function(e){return"/"===e[0]?".".concat(e):e},j="angular-divider",v=Object(l.a)((function e(t){Object(c.a)(this,e),this.message=t})),A=(n(45),function(e){var t,n=e.divOrientation,a=e.backgroundColor,r=o.a.createRef();return Object(s.useEffect)((function(){!function(e,t){if(null==e)throw new v("Cannot resize an AngularDivider that is null;");e.style.width="0px";var n=e.parentElement,s=n.clientHeight-e.clientHeight,o=n.clientWidth+"px solid black";e.style.borderTop=s+"px solid transparent",t&&e.className.indexOf("-".concat(t))>0?e.style.borderLeft=o:e.style.borderRight=o}(r.current,n)})),Object(i.jsx)("div",{className:"angular-divider-wrapper",style:{backgroundColor:a},children:Object(i.jsx)("div",{className:(t=n,t&&""!==t?"".concat(j,"-").concat(t):j),ref:r})})}),S=n(23),x=n(1),f=n(12),y=f.genKey,O=f.checkObjAndKey,k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).eCSpecs=e.eCSpecs,s.handleContentExpansion=e.handleContentExpansion,s.state=e.state,s.updateParentObject=s.updateParentObject.bind(Object(m.a)(s)),s.toggleLocalState=s.toggleLocalState.bind(Object(m.a)(s)),s}return Object(l.a)(n,[{key:"toggleLocalState",value:function(){null!==this.state&&this.setState({contentExpanded:!this.state.contentExpanded})}},{key:"updateParentObject",value:function(){this.toggleLocalState(),this.props.handleContentExpansion()}},{key:"getECClassName",value:function(){return null!==this.state&&this.state.contentExpanded?"expandable-content-wrapper expanded":"expandable-content-wrapper"}},{key:"render",value:function(){if(O(this.eCSpecs,"show")&&this.eCSpecs.show){var e=null;return O(this.eCSpecs,"imageSliderSpecs")&&null!==this.eCSpecs.imageSliderSpecs&&(e=Object(i.jsx)(S,{specs:this.eCSpecs.imageSliderSpecs,id:y("IMAGE_SLIDER")},y("IMAGE_SLIDER_KEY"))),Object(i.jsxs)("div",{className:this.getECClassName(),children:[Object(i.jsx)("div",{className:"ec-menu-bar",children:Object(i.jsx)("button",{onClick:this.updateParentObject,className:"ec-button",children:Object(i.jsx)("img",{className:"ec-icon",src:this.eCSpecs.icon})})}),Object(i.jsx)("div",{className:"expandable-content",children:e})]})}return null}}]),n}(x.Component),T=n(23),C=n(1),w=n(12),B=w.genKey,L=w.checkObjAndKey,E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).specs=e.specs,s.state=e.state,s.toggleState=s.toggleState.bind(Object(m.a)(s)),s}return Object(l.a)(n,[{key:"toggleState",value:function(){this.setState({show:!this.state.show})}},{key:"getStyle",value:function(){if(L(this.specs,"style"))return this.specs.style}},{key:"getTitle",value:function(){return L(this.specs,"title")?this.specs.title:""}},{key:"getClassName",value:function(){var e="bottom-spawn-modal";return this.state.show?e+" show":e}},{key:"getCloseImagePath",value:function(){if(L(this.specs,"close"))return this.specs.close}},{key:"render",value:function(){var e=null;return L(this.specs,"imageSliderSpecs")&&null!==this.specs.imageSliderSpecs&&(e=Object(i.jsx)(T.default,{specs:this.specs.imageSliderSpecs,id:B("IMAGE_SLIDER")},B("IMAGE_SLIDER_KEY"))),Object(i.jsxs)("span",{className:this.getClassName(),style:this.getStyle(),children:[Object(i.jsxs)("span",{className:"bs-modal-menu-bar",children:[Object(i.jsx)("span",{className:"bs-modal-header",children:this.getTitle()}),Object(i.jsx)("span",{className:"bs-modal-close",onClick:this.toggleState,children:Object(i.jsx)("img",{src:this.getCloseImagePath()})})]}),Object(i.jsx)("span",{className:"bs-modal-content",children:e})]})}}]),n}(C.Component),I=n(18),G=n(12),N=G.checkObjAndKey,M=G.repeatStringNTimes,H=n(15).Link,R=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).specs=e.specs,s.parentBG=e.parentBG,s.childSetParentSectBGAndHoverText=e.childSetParentSectBGAndHoverText,s.mouseEnterLogo=s.mouseEnterLogo.bind(Object(m.a)(s)),s.mouseLeaveLogo=s.mouseLeaveLogo.bind(Object(m.a)(s)),s.handleClick=s.handleClick.bind(Object(m.a)(s)),s.arrowClassName="sl-hover-arrow",s.arrowRef=o.a.createRef(),s.arrowStyle={width:"0.5rem"},s.centerArrow(),s}return Object(l.a)(n,[{key:"centerArrow",value:function(){var e=this;window.setTimeout((function(){var t=e.arrowRef.current;if(null!==t){var n=t.previousSibling.children[0].clientWidth,s=t.clientWidth;t.style.width="0px";var o=n/2-s;t.style.left=o+"px"}}),25)}},{key:"mouseEnterLogo",value:function(){var e=this.specs.name.replace(" ","-");this.props.childSetParentSectBGAndHoverText("hover",this.specs.hoverBG,1,e,!0)}},{key:"mouseLeaveLogo",value:function(){var e=this.specs.name.replace(" ","-");this.props.childSetParentSectBGAndHoverText("hover",this.parentBG,0,e,!1)}},{key:"handleClick",value:function(){if("MODAL"===this.specs.target&&N(this.specs,"modalSpecs")){var e=document.getElementById("MODAL_RENDER_TARGET");I.unmountComponentAtNode(e),I.render(Object(i.jsx)(E,{specs:this.specs.modalSpecs,state:{show:!0}}),e)}else window.open(this.specs.url,this.specs.target)}},{key:"getArrowId",value:function(){return"".concat(this.specs.name.replace(" ","-"),"-arrow")}},{key:"render",value:function(){return N(this.specs,"routerLink")&&this.specs.routerLink?Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)("div",{className:"section-link",children:[Object(i.jsx)(H,{to:b(this.specs.url),children:Object(i.jsx)("img",{alt:this.specs.name,src:b(this.specs.logo)})}),Object(i.jsx)("div",{style:this.arrowStyle,id:this.getArrowId(),className:this.arrowClassName,ref:this.arrowRef})]})}):Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)("div",{className:"section-link",children:[Object(i.jsx)("a",{onClick:this.handleClick,children:Object(i.jsx)("img",{alt:this.specs.name,src:b(this.specs.logo),onMouseEnter:this.mouseEnterLogo,onMouseLeave:this.mouseLeaveLogo})}),Object(i.jsx)("div",{style:this.arrowStyle,id:this.getArrowId(),className:this.arrowClassName,ref:this.arrowRef})]})})}}]),n}(o.a.Component),D=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"section-links-header",children:"Links"})}}]),n}(o.a.Component);function P(e){return Object(i.jsx)("div",{className:e.specs.className,style:e.specs.textColor,children:M(e.specs.text,200," ")})}var F=n(12),Q=F.genKey,V=F.my_display_dimensions,Y=F.recordDisplayDimensions,K=F.checkObjAndKey,W=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).name=e.name,s.hoverBG=e.hoverBG,s.bannerSpecs=e.bannerSpecs,s.eCSpecs=e.eCSpecs,s.sectionLinks=e.sectionLinks,s.divOrientation=e.divOrientation,s.state={text:"normal",backgroundColor:"",hoverText:"test",hoverTextShow:!1,contentExpanded:!1},s.toggleState=s.toggleState.bind(Object(m.a)(s)),s.prevSectionLinkPriority=-1,s.childSetParentSectBGAndHoverText=s.childSetParentSectBGAndHoverText.bind(Object(m.a)(s)),s.handleContentExpansion=s.handleContentExpansion.bind(Object(m.a)(s)),s.sectionRef=o.a.createRef(),s}return Object(l.a)(n,[{key:"toggleState",value:function(){this.state.contentExpanded||("normal"===this.state.text?this.setState({text:"hover",backgroundColor:this.hoverBG,hoverTextShow:!1}):this.setState({text:"normal",backgroundColor:"",hoverTextShow:!1}))}},{key:"handleContentExpansion",value:function(){this.state.contentExpanded?this.setState({contentExpanded:!1}):this.setState({contentExpanded:!0})}},{key:"getStyle",value:function(){Y(!1);var e=this.sectionRef.current,t={backgroundColor:this.state.backgroundColor},n=.8*V.height;return null!==e&&this.state.contentExpanded&&e.style.height!==n&&(t.height=n.toString()+"px"),t}},{key:"childSetParentSectBGAndHoverText",value:function(e,t,n,s,o){var a=this;this.state.contentExpanded||(n<this.prevSectionLinkPriority?this.setState({text:e,backgroundColor:t,hoverText:s,hoverTextShow:o}):window.setTimeout((function(){a.setState({text:e,backgroundColor:t,hoverText:s,hoverTextShow:o})}),25),this.prevSectionLinkPriority=n)}},{key:"getSLHoverTextSpecs",value:function(){var e={className:"sl-hover-text",text:this.state.hoverText,textColor:{color:this.state.backgroundColor}};return this.state.hoverTextShow&&(e.className=e.className+" show"),e}},{key:"getBannerTextStyle",value:function(){if(K(this.bannerSpecs,"bannerTextStyle"))return this.bannerSpecs.bannerTextStyle}},{key:"getBannerImgStyle",value:function(){if(K(this.bannerSpecs,"bannerImgStyle"))return this.bannerSpecs.bannerImgStyle}},{key:"getBannerTextHTML",value:function(){return K(this.bannerSpecs,"bannerText")?Object(i.jsx)("div",{className:"banner-title-text",style:this.getBannerTextStyle(),children:this.bannerSpecs.bannerText}):null}},{key:"getBannerImgHTML",value:function(){return K(this.bannerSpecs,"bannerImg")?Object(i.jsx)("div",{className:"banner-title-img",style:this.getBannerImgStyle(),children:Object(i.jsx)("img",{src:b(this.bannerSpecs.bannerImg),alt:this.bannerSpecs.alt})}):null}},{key:"render",value:function(){var e=this,t=null;void 0!==this.sectionLinks&&null!==this.sectionLinks&&this.sectionLinks.length>0&&(t=this.sectionLinks.map((function(t){return Object(i.jsx)(R,{specs:t,state:e.state,parentBG:e.hoverBG,childSetParentSectBGAndHoverText:e.childSetParentSectBGAndHoverText},Q(t.name))})));var n=this.getBannerTextHTML(),s=this.getBannerImgHTML();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{onMouseLeave:this.toggleState,onMouseEnter:this.toggleState,id:this.name,style:this.getStyle(),className:"angular-section",ref:this.sectionRef,children:[Object(i.jsxs)("div",{className:"angular-content",children:[n,s,Object(i.jsxs)("div",{className:"section-links-wrapper",children:[Object(i.jsx)(D,{}),t]})]}),Object(i.jsx)(k,{eCSpecs:this.eCSpecs,state:this.state,handleContentExpansion:this.handleContentExpansion})]}),Object(i.jsx)(P,{specs:this.getSLHoverTextSpecs()}),Object(i.jsx)(A,{divOrientation:this.divOrientation,backgroundColor:this.state.backgroundColor})]})}}]),n}(o.a.Component),z=n(12),U=z.genKey,q=z.redirectToGitHubPages,Z=z.SECT_LIST_CLASS,J=n(1),X=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).sections=e.sections,s.counter=0,s.key="SECT_LIST",s.state={showSectionList:!1},s.modalSpecs={title:"My Modal",close:"./assets/img/page/Google Icons/baseline_close_white_48dp.png"},s}return Object(l.a)(n,[{key:"divOrientation",value:function(){return this.counter++,this.counter%2===0?"rev":""}},{key:"handleClassName",value:function(){return this.state.showSectionList?Z+" show":Z}},{key:"componentDidMount",value:function(){q(),this.setState({showSectionList:!0})}},{key:"render",value:function(){var e=this,t=this.sections.map((function(t){return Object(i.jsx)(W,{name:t.name,hoverBG:t.hoverBG,bannerSpecs:t.bannerSpecs,eCSpecs:t.expandableContentSpecs,divOrientation:e.divOrientation(),sectionLinks:t.sectionLinks},U(t.name))}));return Object(i.jsx)(J.Fragment,{children:Object(i.jsx)("section",{className:this.handleClassName(),children:t})})}}]),n}(J.Component),_=n.p+"static/media/jm logo 3 - white.9d7d7265.svg",$=n.p+"static/media/jm logo 3 -- music - text_to_path.63c969f5.svg",ee=n.p+"static/media/jm logo 3 -- project - text_to_path.bf25f5a2.svg",te=n.p+"static/media/jm logo 3 -- work - text_to_path.1ac84505.svg",ne=n.p+"static/media/4419136 - cloud logo sound sound cloud soundcloud square icon.3105a1f2.svg",se=n.p+"static/media/4419165 - circle github outline social-media icon.2ce7d161.svg",oe=n.p+"static/media/4419149 - linkedin logo social icon.a76d033c.svg",ae=n.p+"static/media/list_alt-48dp.c6af9136.svg",ie=n.p+"static/media/example icon.93bcb998.svg",re=n.p+"static/media/expand_more-24px.338c49e4.svg",ce=n.p+"static/media/MLU after.77835595.png",le=n.p+"static/media/OML.5bde5470.png",he=n.p+"static/media/Achievements Page.b99d1272.png",pe=n.p+"static/media/Agent Dashboard.f8ba8316.png",de=n.p+"static/media/Agent Resources Page.c879cfb1.png",ue=n.p+"static/media/Welcome page - first page client sees on first login.04f09778.png",ge=n.p+"static/media/Step 1 signup process.baee9b84.png",me=n.p+"static/media/Step 2 signup process.c8788177.png",be=n.p+"static/media/Step 3 signup process.7c9bb837.png",je=n.p+"static/media/Step 3 reminder for client.74eda26d.png",ve={customLogos:{mainLogo:_,jmMusicLogo:{image:$,alt:"JM Music Logo"},jmProjectLogo:ee,jmWorkLogo:te},utilityLogos:{mobileMoreIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAWSURBVHgBY6AFYP4PBAewUoPbFMoBAE11OPW6yVcZAAAAAElFTkSuQmCC",resumeIcon:ae,exampleWorkIcon:ie,expandIcon:re,imageIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABxElEQVR4Ae2bgUZDURzGfwkjk16ggoTQOwQ9x2VAAAqAgOwBQitcAmADEKw9wgYB0hu0xhTaboa4sKNv19nO1ff7Axz48f++y3UOAYwxxhhjzD5XDBhTrHnGDLhin0o06TGn2ODM6dFkRRqMKBKYEQ1WokORyHRA54hZMgIzjpC5oUhobpAZJiUwQuYzKYEpMkVaU3MBC1jAAhawgAUsYAELWMACFrCABSxgAQtYwAIWeCCvs8CIBju81FXgnUMWnDCto8Ccc37J6ihwTZm8bgJPbFFGS4KM0iq3fzj1xh5l1CTIKK2yTT98ii9OKaMnQUZrlV1eg+daLCOPKiC0yjEfS889sgQhCTJ6q5zxrd51EJIgo7cKXASWLEQWVUBoFbgPLFmIPKqA0Crb9ANLpiehuoDaKos+CiyZnoTqAlqrlPposWQKWSQBoVXKfbRYMpU8joDeKnBBixB6EmQCny4dJQlxBa6JTRZBQGqV6uQRBIRWEZCSIBP+dLH2JFQWaLFOMv/YskDVscCEIqGZ/MOrx+2kBNrIHCZ1/f4AdO7q/QACGgzr/QQFmnQ3/gioS5NKHHC5oWdYz1yGdt8YY4wxxvwAEgZXQrYQcMYAAAAASUVORK5CYII=",videoIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABfElEQVR4Ae2aPU4CURSFv0JDYqjsLNDGwqW4GTtobYmtVrIDG2ntpLKykMolWJkQI/MjwjN0hgs0jDgnnO+s4EvmzLx35/ILY4wxxhjTosOAEalmGTGgQ4u1NOkzI9U4M/o0WUGDIUkgQxospUcSSY8Ip0xlBKacEuiShNIl8CIlMCSQSwmMCaSF1I20EAtYYLcFZhawQO0EHjjbosC0eoHEhGsOlQXmeeeCPWWBeV45lxaYJzSiaoHvPxYIjVATCI0QFYiNUBGovhHhAd2CQGiEokBohJ5AaISiQGjExgJf2xcIjVAUCI3QEwiN2FWBUv0RKtVLXKq/Rkv1D1mhfpQo1A9zhfpxulC/0OTqV8pc/VKfq49VcvXBVqY+WszUh7uZ+ng9U//BMd5xAQtY4NMClWOBD5JQ3tRXzp4IXEkJXBI4EVq7nHBEhFsZgRuW0hDpwTP7rKDJfe2Xv+84YC3HtGu6fv9ImxaVkzbM/2ABC1jAAhYwxhhjjDE/JqP7zx91t6IAAAAASUVORK5CYII=",closeIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABTElEQVR4Ae2aAYbDUBRFC6jKdgIBgdlvZwBjilHodqqkUbiFB2grdfNd5ZwVnENa/7//NgAAAAAAAACwDHX6Vb9pgHr9qWutv9NJ0kV9A/2LpJN2bfWPklQJ6+tL0rFZgral7yc81a+EbRv9gwo/4Zl+cWiQoL2KVwm+frFfP2DUvH6Chof6s0bfeHnCYOhPvr6fMGkI6AcSDP18gq+fT/D18wm+fj5B40P9qYG+IeKE+/hfsq2fT/D18wm+fj7B188n+Pr5BOsQmE/Ql3cMzyfc8vre5SSvb10Pff18gq+fT/D18wm+fj7gXAF8QvyIM3+jAf18gq8/6xpN8Gecr2eqHKe50ESvlFzqk2MVBlux0SLD3cB4nQeO/BMTj3z5Z1Yeus0ZZz5BP4b++wnfn7RuMyxZt2HhKb5yxtJfoU7/+bVLAAAAAAAAALgDgwkQi+9iTO0AAAAASUVORK5CYII="},appLogos:{soundcloudLogo:ne,githubLogo:se,codepenLogo:"data:image/png;base64,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",linkedinLogo:oe},exampleWork:{mluAfter:ce,oml:le,achievementsPage:he,agentDashboard:pe,salesAgentResourcePage:de,welcomePage:ue,setupStep1:ge,setupStep2:me,setupStep3:be,setupStep4:n.p+"static/media/Step 4 signup process.157b6db8.png",setupReminder:je}},Ae=.85,Se={opacity:Ae},xe="https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap";function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{title:e,logo:ve.customLogos.mainLogo,logoURL:"/",logoStyle:Se,background:"#000",backgroundName:"black",fontColor:"#FFF",fontColorName:"White",headerFontOpacity:Ae,fontFamily:"'Montserrat', 'Roboto', sans-serif",mobileMoreIcon:ve.utilityLogos.mobileMoreIcon,mobileMoreStyle:{color:"#FFF",opacity:Ae}}}var ye={"font-import-link":xe,"page-header":fe(),"angular-sections":[{name:"music",hoverBGName:"lightGrey",hoverBG:"#DDD",bannerSpecs:{bannerImg:ve.customLogos.jmMusicLogo.image,alt:ve.customLogos.jmMusicLogo.alt},sectionLinks:[{name:"SoundCloud",url:"https://soundcloud.com/jacques_mathieu",logo:ve.appLogos.soundcloudLogo,hoverBG:"#F50",hoverBGName:"scloudOrange",target:"_blank"}],expandableContentSpecs:{show:!1,icon:ve.utilityLogos.expandIcon},opacityAsTab:Se},{name:"projects",hoverBGName:"lightBlueGrey",hoverBG:"#DDEEDD",bannerSpecs:{bannerImg:ve.customLogos.jmProjectLogo},sectionLinks:[{name:"GitHub",url:"https://github.com/Jmathieu14",logo:ve.appLogos.githubLogo,hoverBG:"#A54AB0",hoverBGName:"githubDesktopPurple",target:"_blank"},{name:"Codepen.io",url:"https://codepen.io/jmathieu145",logo:ve.appLogos.codepenLogo,hoverBG:"#0EBEFF",hoverBGName:"hyperlinkBlue",target:"_blank"}],opacityAsTab:Se},{name:"work",hoverBGName:"gray",hoverBG:"#AAA",bannerSpecs:{bannerImg:ve.customLogos.jmWorkLogo},sectionLinks:[{name:"LinkedIn",url:"https://www.linkedin.com/in/jacques-mathieu-743389119/",logo:ve.appLogos.linkedinLogo,hoverBG:"#0077B5",hoverBGName:"linkedInHoverBlue",target:"_blank"},{name:"Resume",url:"../pdf/JSMathieu Resume Redesign - 04-09-2020.pdf",logo:ve.utilityLogos.resumeIcon,hoverBG:"#33ff5f",hoverBGName:"goodGreen",target:"_blank"},{name:"Example Work",url:"/example-work",routerLink:!0,logo:ve.utilityLogos.exampleWorkIcon,hoverBG:"#3dffb9",hoverBGName:"turqoise",target:"_self"}],opacityAsTab:Se}]};var Oe=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r,{path:"https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap"}),Object(i.jsx)(g,{pageHeader:ye["page-header"],sections:ye["angular-sections"]}),Object(i.jsx)(X,{sections:ye["angular-sections"]})]})},ke={"font-import-link":xe,"page-header":fe("work examples"),modalSpecs:{},"angular-sections":[{name:"work @ sparksales",hoverBGName:"lightGreyBlue",hoverBG:"#CCCCFF",bannerSpecs:{bannerText:"work @ sparksales"},sectionLinks:[{name:"screenshots",url:"",logo:ve.utilityLogos.imageIcon,hoverBG:"#00BA65",hoverBGName:"sparkGreen",target:"MODAL",modalSpecs:{contentType:"imageSlider",title:"ex. of work @ sparksales",close:ve.utilityLogos.closeIcon,imageSliderSpecs:{images:[{path:ve.exampleWork.achievementsPage,text:"Achievements Page"},{path:ve.exampleWork.agentDashboard,text:"Sales Agent Dashboard"},{path:ve.exampleWork.salesAgentResourcePage,text:"Sales Agent Resource Page"},{path:ve.exampleWork.welcomePage,text:"Client Welcome Page"},{path:ve.exampleWork.setupStep1,text:"Client Setup Process: Step 1"},{path:ve.exampleWork.setupStep2,text:"Client Setup Process: Step 2"},{path:ve.exampleWork.setupStep3,text:"Client Setup Process: Step 3"},{path:ve.exampleWork.setupReminder,text:"Client Setup Process: Step 3 | Reminder"},{path:ve.exampleWork.setupStep4,text:"Client Setup Process: Step 4"}]}}},{name:"videos",url:"https://github.com/Jmathieu14/Portfolio/tree/master/video/Sparksales",logo:ve.utilityLogos.videoIcon,hoverBG:"#58c8B9",hoverBGName:"sparkBlueGreen",target:"_blank"}],opacityAsTab:Se},{name:"work @ AGO",hoverBGName:"matteLightGrey",hoverBG:"#DDDDCC",bannerSpecs:{bannerText:"work @ AGO"},sectionLinks:[{name:"screenshots",url:"",logo:ve.utilityLogos.imageIcon,hoverBG:"#14558F",hoverBGName:"agoBlue",target:"MODAL",modalSpecs:{contentType:"imageSlider",title:"ex. of work @ AGO",close:ve.utilityLogos.closeIcon,imageSliderSpecs:{images:[{path:ve.exampleWork.mluAfter,text:"Improved MLU Form"},{path:ve.exampleWork.oml,text:"Improved OML Form"}]}}}],opacityAsTab:Se}]};var Te=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r,{path:"https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap"}),Object(i.jsx)(g,{pageHeader:ke["page-header"],sections:ke["angular-sections"]}),Object(i.jsx)(X,{sections:ke["angular-sections"]})]})},Ce=n(2),we=function(){return Object(i.jsx)(d.BrowserRouter,{children:Object(i.jsxs)(Ce.g,{children:[Object(i.jsx)(Ce.d,{exact:!0,path:["/","/index.html","/200.html"],children:Object(i.jsx)(Oe,{})}),Object(i.jsx)(Ce.d,{path:["/example-work","/example-work/index.html"],children:Object(i.jsx)(Te,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=document.getElementById("root"),Le=Object(i.jsxs)(o.a.StrictMode,{children:[Object(i.jsx)(we,{}),Object(i.jsx)("span",{id:"MODAL_RENDER_TARGET"})]});Be.hasChildNodes()?Object(a.hydrate)(Le,Be):Object(a.render)(Le,Be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.f341a2fb.chunk.js.map