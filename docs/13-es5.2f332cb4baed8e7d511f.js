function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{olly:function(e,t,i){"use strict";i.r(t),i.d(t,"SubscribeNextModule",(function(){return d}));var n,s,r,c=i("PCNd"),o=i("tyNb"),a=function e(){_classCallCheck(this,e),this.fruits=["apple","banana","cherry"],this.expectedFruits=["apple","banana","cherry"],this.code='const fruits = from([\n    "apple",\n    "banana",\n    "cherry"]);\n\n\n',this.minPositionLineNumber=5,this.positionColumnNumber=1,this.recipeDescription="Es soll jede Frucht gemixt werden. (Hinweis: subscribe mit next)"},l=i("fXoL"),b=i("VIrA"),p=i("uzYf"),u=i("OtPg"),h=[{path:"",component:(n=function(){function e(t){_classCallCheck(this,e),this.exerciseService=t,this.exerciseTitle="subscribe-next",this.distinctCode="\n  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(\n    distinct()\n  ).subscribe(x => console.log(x)); // 1, 2, 3, 4\n  "}return _createClass(e,[{key:"ngOnInit",value:function(){this.exerciseService.newExercise(new a)}}]),e}(),n.\u0275fac=function(e){return new(e||n)(l.Kb(b.a))},n.\u0275cmp=l.Eb({type:n,selectors:[["app-subscribe-next"]],decls:15,vars:3,consts:[[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/distinct","target","_blank"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"]],template:function(e,t){if(1&e&&(l.Nb(0,"h3"),l.lc(1),l.Mb(),l.Nb(2,"p"),l.lc(3,"The "),l.Nb(4,"code",0),l.lc(5,"distinct"),l.Mb(),l.lc(6," operator returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items. "),l.Nb(7,"a",1),l.lc(8,"Mehr Infos zu distinct."),l.Mb(),l.Mb(),l.Nb(9,"div",2,3),l.Nb(11,"pre"),l.lc(12,"        "),l.Lb(13,"code",4),l.lc(14,"\n   "),l.Mb(),l.Mb()),2&e){var i=l.ec(10);l.Ab(1),l.nc("\xdcbung: ",t.exerciseTitle,""),l.Ab(3),l.cc("appTooltip",i),l.Ab(9),l.cc("highlight",t.distinctCode)}},directives:[p.a,u.b],styles:[""]}),n)}],f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ib({type:r}),r.\u0275inj=l.Hb({factory:function(e){return new(e||r)},imports:[[o.b.forChild(h)],o.b]}),r),d=((s=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ib({type:s}),s.\u0275inj=l.Hb({factory:function(e){return new(e||s)},imports:[[c.a,f]]}),s)}}]);