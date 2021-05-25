(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports={nav:"App_nav__2q5-9",link:"App_link__sWT-K"}},20:function(e,t,n){e.exports={favorite:"Like_favorite__1PXD-"}},21:function(e,t,n){e.exports={photo:"Photo_photo__TX5Ol"}},23:function(e,t,n){e.exports={photoField:"Favorites_photoField__2ozyi"}},24:function(e,t,n){e.exports={photoField:"Mars_photoField__3eDtw"}},26:function(e,t,n){e.exports=n(43)},31:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),l=n.n(r),c=(n(31),n(13)),i=n(2),s=n(10),u=function(){return Object(s.b)()},d=s.c,p=n(7),m=Object(p.c)({name:"favorites",initialState:{photoIds:[]},reducers:{addToFavorites:function(e,t){e.photoIds.find(function(e){return e===t.payload})||e.photoIds.push(t.payload)},removeFromFavorites:function(e,t){var n=e.photoIds.indexOf(t.payload);-1!==n&&e.photoIds.splice(n,1)}}}),f=m.actions,h=f.addToFavorites,v=f.removeFromFavorites,E=function(e){return e.fovorites.photoIds},g=m.reducer,F=n(20),_=n.n(F),b=function(e){var t=e.id,n=d(E),o=u(),r=n.indexOf(t)>=0?"1":"0.6";return a.createElement(a.Fragment,null,a.createElement("svg",{className:_.a.favorite,onClick:function(){n.indexOf(t)>=0?o(v(t)):o(h(t))},viewBox:"0 0 98 89",opacity:r,xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M89.834 48.974L48.81 8.95 7.786 48.974 48.81 89l41.023-40.026z",fill:"#E30A17"}),a.createElement("path",{d:"M59.467 29.381c0 16.022-13.312 29.01-29.733 29.01C13.311 58.391 0 45.403 0 29.381 0 13.36 13.312.371 29.733.371c16.422 0 29.734 12.989 29.734 29.01z",fill:"#E30A17"}),a.createElement("path",{d:"M98 29.01c0 16.022-13.312 29.01-29.734 29.01-16.42 0-29.733-12.988-29.733-29.01C38.533 12.988 51.845 0 68.266 0 84.688 0 98 12.988 98 29.01z",fill:"#E30A17"})))},k=n(21),x=n.n(k),y=function(e){var t=e.img_src,n=e.camera,o=e.rover,r=e.id,l="Rover: ".concat(o.name,", Camera: ").concat(n.full_name);return a.createElement("div",{className:x.a.photo},a.createElement(b,{id:r}),a.createElement("img",{alt:l,src:t}),a.createElement("span",null,l))},w=n(25),O=n(15),S=n.n(O),j=n(22),C=function(e){var t="https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=".concat(e,"&api_key=").concat("3kiSvCkEh0zo15za1FxhzexghZyqPVITX44brEo8");return fetch(t).then(function(e){return e.json()}).then(function(e){return e.photos})},N=Object(p.b)("mars/loadDataFromNasa",function(){var e=Object(j.a)(S.a.mark(function e(t,n){var a,o;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,e.next=3,C(t);case 3:o=e.sent,a(P(o));case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),I=Object(p.c)({name:"mars",initialState:{status:"idle",selectedSol:0,sols:[],photos:[]},reducers:{changeSelectedSol:function(e,t){e.selectedSol=t.payload},AddPhotos:function(e,t){var n;(n=e.photos).push.apply(n,Object(w.a)(t.payload))}},extraReducers:function(e){e.addCase(N.pending,function(e){e.status="loading"}).addCase(N.fulfilled,function(e){e.status="idle"}).addCase(N.rejected,function(e){e.status="failed"})}}),z=I.actions,A=z.changeSelectedSol,P=z.AddPhotos,M=function(e){return e.mars.selectedSol},T=function(e){return e.mars.photos},L=function(e){return e.mars.status},D=I.reducer,X=n(23),q=n.n(X),B=function(){var e=d(E),t=d(T),n=e.length?null:a.createElement("p",null,"No favorites photos, add some!");return a.createElement(a.Fragment,null,n,a.createElement("div",{className:q.a.photoField},e.map(function(e){var n=t.find(function(t){return e===t.id});return n?a.createElement(y,Object.assign({key:n.id},n)):null})))},J=n(24),R=n.n(J),K=function(){var e,t=d(M),n=d(T),o=d(L),r=u();switch(o){case"idle":e="Photos are not loaded";break;case"loading":e="Loading...";break;default:e="Failed loaded try again"}return a.createElement(a.Fragment,null,a.createElement("p",null,'Select Sol and press "load"!'),a.createElement("input",{type:"number",value:t,min:"0",onChange:function(e){r(A(+e.target.value))}}),a.createElement("button",{onClick:function(){r(N(t))}},"Load"),a.createElement("div",{className:R.a.photoField},n.filter(function(e){return e.sol===t}).map(function(e){return a.createElement(y,Object.assign({key:e.id},e))})),n.find(function(e){return e.sol===t})?null:a.createElement("p",null,e))},V=n(12),W=n.n(V);var Z=function(){return o.a.createElement(c.a,null,o.a.createElement("nav",{className:W.a.nav},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{className:W.a.link,to:"/"},"Photos")),o.a.createElement("li",null,o.a.createElement(c.b,{className:W.a.link,to:"/Favorites"},"Favorites")))),o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",exact:!0},o.a.createElement(K,null)),o.a.createElement(i.a,{path:"/Favorites"},o.a.createElement(B,null))))},G=Object(p.a)({reducer:{mars:D,fovorites:g}});l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{store:G},o.a.createElement(Z,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.87569211.chunk.js.map