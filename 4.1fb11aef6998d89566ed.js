(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{gA4M:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchModule",function(){return M});var r=n("ofXK"),s=n("tyNb"),a=n("vkgz"),i=n("fXoL"),c=n("jtHE"),o=n("cp0P"),l=n("LRne"),p=n("eIep"),h=n("tk/3");let g=(()=>{class e{constructor(e){this.httpClient=e,this.apiUrl="https://api.github.com/search/users",this.cacheExpirationTime=(new Date).getTime(),this.replayData=new c.a(1)}getSearchResults(e){var t=(new Date).getTime();return t<this.cacheExpirationTime?(console.log("using cached data for now"),this.replayData.asObservable()):(this.cacheExpirationTime=t+3e5,this.httpClient.get(this.apiUrl,{params:{q:e}}).pipe(Object(p.a)(e=>this.getUsersFromSearchResults(e))))}getUsersFromSearchResults(e){var t=e.items.map(e=>Object(o.a)([this.httpClient.get(e.url)]).pipe(Object(p.a)(e=>Object(l.a)({bio:e[0].bio,username:e[0].login,htmlUrl:e[0].html_url,profileAvatarUrl:e[0].avatar_url,followerCount:e[0].followers,followingCount:e[0].following}))));return Object(o.a)(t).pipe(Object(a.a)(e=>this.replayData.next(e)))}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(h.a))},e.\u0275prov=i.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=n("3Pt+"),b=n("Wp6s"),d=n("kmnG"),f=n("qFsG");let m=(()=>{class e{constructor(e){this.formBuilder=e,this.searchOccurred=new i.n}ngOnInit(){this.searchForm=this.formBuilder.group({searchTerm:["",u.k.required]})}onSubmit(){this.searchForm.valid&&this.searchOccurred.emit(this.searchForm.controls.searchTerm.value)}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(u.b))},e.\u0275cmp=i.Eb({type:e,selectors:[["app-search-form"]],outputs:{searchOccurred:"searchOccurred"},decls:9,vars:1,consts:[[1,"search-form"],[3,"formGroup","ngSubmit"],["matInput","","type","text","formControlName","searchTerm","placeHolder","Search Term","autofocus",""]],template:function(e,t){1&e&&(i.Pb(0,"div",0),i.Pb(1,"mat-card"),i.Pb(2,"mat-card-content"),i.Pb(3,"form",1),i.Wb("ngSubmit",function(){return t.onSubmit()}),i.Pb(4,"label"),i.Pb(5,"mat-form-field"),i.Pb(6,"mat-label"),i.qc(7,"Search for users"),i.Ob(),i.Lb(8,"input",2),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&e&&(i.zb(3),i.fc("formGroup",t.searchForm))},directives:[b.a,b.b,u.l,u.h,u.d,d.c,d.f,f.a,u.a,u.g,u.c],styles:[".search-form[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;width:100%}.search-form[_ngcontent-%COMP%]{justify-content:center}.mat-card[_ngcontent-%COMP%]{width:50%}.mat-form-field[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),e})();var O=n("M9IT"),P=n("zkoq");function v(e,t){1&e&&(i.Pb(0,"div",5),i.Pb(1,"span"),i.qc(2," Rate limiting preventing search. "),i.Ob(),i.Ob())}function w(e,t){1&e&&(i.Pb(0,"div",5),i.Pb(1,"span"),i.qc(2,"No results found."),i.Ob(),i.Ob())}function x(e,t){if(1&e&&(i.Pb(0,"div",5),i.Pb(1,"span"),i.qc(2),i.Ob(),i.Ob()),2&e){const e=i.ac();i.zb(2),i.tc("Showing results ",e.startIndex+1," - ",e.endIndex," of ",e.searchResults.length,"")}}function S(e,t){if(1&e){const e=i.Qb();i.Pb(0,"mat-grid-tile"),i.Pb(1,"mat-card"),i.Pb(2,"mat-card-content",6),i.Wb("click",function(){i.jc(e);const n=t.$implicit;return i.ac().viewUser(n.htmlUrl)}),i.Pb(3,"div",7),i.Lb(4,"img",8),i.Ob(),i.Pb(5,"div",7),i.Pb(6,"span"),i.qc(7),i.Ob(),i.Ob(),i.Pb(8,"div",7),i.Pb(9,"span"),i.qc(10,"followers: "),i.Ob(),i.Pb(11,"span"),i.qc(12),i.Ob(),i.Ob(),i.Pb(13,"div",7),i.Pb(14,"span"),i.qc(15),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob()}if(2&e){const e=t.$implicit;i.zb(4),i.fc("src",e.profileAvatarUrl,i.kc),i.zb(3),i.sc("bio: ",e.bio,""),i.zb(5),i.rc(e.followerCount),i.zb(3),i.sc("following: ",e.followingCount,"")}}let z=(()=>{class e{constructor(){this.pageEvent=Object.assign(()=>{}),this.pagedSearchResults=[],this.pageSizeOptions=[5,10,15],this.pageSize=this.pageSizeOptions[0],this.startIndex=0,this.endIndex=this.pageSize}ngOnInit(){this.pagedSearchResults=this.searchResults.slice(0,this.pageSizeOptions[0])}onPageChange(e){this.startIndex=e.pageIndex*e.pageSize,this.endIndex=this.startIndex+e.pageSize,this.endIndex>this.searchResults.length&&(this.endIndex=this.searchResults.length),this.pagedSearchResults=this.searchResults.slice(this.startIndex,this.endIndex)}viewUser(e){window.open(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["app-search-results-grid"]],inputs:{searchResults:"searchResults"},decls:8,vars:10,consts:[[1,"search-results-grid"],["class","results-count",4,"ngIf"],[3,"length","pageSize","pageSizeOptions","page"],["cols","1","rowHeight","120px"],[4,"ngFor","ngForOf"],[1,"results-count"],[3,"click"],[1,"profile-item"],["title","",1,"avatar-image",3,"src"]],template:function(e,t){1&e&&(i.Pb(0,"div",0),i.pc(1,v,3,0,"div",1),i.pc(2,w,3,0,"div",1),i.pc(3,x,3,3,"div",1),i.Pb(4,"mat-paginator",2),i.Wb("page",function(e){return t.pageEvent=t.onPageChange(e)}),i.Ob(),i.Pb(5,"mat-grid-list",3),i.pc(6,S,16,4,"mat-grid-tile",4),i.Ob(),i.Pb(7,"mat-paginator",2),i.Wb("page",function(e){return t.pageEvent=t.onPageChange(e)}),i.Ob(),i.Ob()),2&e&&(i.zb(1),i.fc("ngIf",null===t.searchResults),i.zb(1),i.fc("ngIf",0===t.searchResults.length),i.zb(1),i.fc("ngIf",t.searchResults.length>0),i.zb(1),i.fc("length",t.searchResults.length)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions),i.zb(2),i.fc("ngForOf",t.pagedSearchResults),i.zb(1),i.fc("length",t.searchResults.length)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions))},directives:[r.k,O.a,P.a,r.j,P.c,b.a,b.b],styles:[".mat-grid-tile[_ngcontent-%COMP%]{min-width:300px;margin-top:0}img.avatar-image[_ngcontent-%COMP%]{width:50px;height:50px}.mat-card[_ngcontent-%COMP%]{display:flex;max-width:50%;min-width:100px;margin:0 10px;height:60px;flex:1}.mat-card[_ngcontent-%COMP%]:hover{border:1px;background:#d3d3d3}.results-count[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:center}.profile-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-left:20px;flex:3}.mat-card-content[_ngcontent-%COMP%], .profile-text[_ngcontent-%COMP%]{display:flex}  .mat-paginator-container{justify-content:center!important}  .mat-grid-tile{padding-top:0!important;height:300px}"],changeDetection:0}),e})();function y(e,t){if(1&e&&(i.Nb(0),i.Lb(1,"app-search-results-grid",3),i.Mb()),2&e){const e=t.ngIf;i.zb(1),i.fc("searchResults",e)}}const C=[{path:"",children:[{path:"search",component:(()=>{class e{constructor(e){this.searchService=e,this.isLoading=!1}ngOnInit(){}onSearchOccurred(e){this.searchResults$=this.searchService.getSearchResults(e).pipe(Object(a.a)(()=>this.isLoading=!0))}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(g))},e.\u0275cmp=i.Eb({type:e,selectors:[["app-search-page"]],decls:4,vars:3,consts:[[1,"search-page"],[3,"searchOccurred"],[4,"ngIf"],[3,"searchResults"]],template:function(e,t){1&e&&(i.Pb(0,"div",0),i.Pb(1,"app-search-form",1),i.Wb("searchOccurred",function(e){return t.onSearchOccurred(e)}),i.Ob(),i.pc(2,y,2,1,"ng-container",2),i.bc(3,"async"),i.Ob()),2&e&&(i.zb(2),i.fc("ngIf",i.cc(3,1,t.searchResults$)))},directives:[m,r.k,z],pipes:[r.b],styles:[".search-page[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;width:100%}.search-page[_ngcontent-%COMP%]{justify-content:center;flex-direction:column}"],changeDetection:0}),e})()}]}];let I=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[s.a.forChild(C)],s.a]}),e})();var R=n("DyN7");let M=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},providers:[{provide:d.b,useValue:{appearance:"fill"}}],imports:[[r.c,R.a,I,u.e,u.j]]}),e})()}}]);