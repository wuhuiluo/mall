(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b449e1c"],{"6c5e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ali-pay"},[t.loading?n("loading"):t._e(),n("div",{staticClass:"form",domProps:{innerHTML:t._s(t.content)}})],1)},a=[],i=(n("b449"),n("6648")),o=n("8c36"),c=n("1bab"),s={components:{Loading:o["a"]},data:function(){return{orderId:this.$route.query.orderId,content:"",loading:!0,timer:""}},mounted:function(){this._paySubmit()},methods:{_paySubmit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["r"])({orderId:t.orderId,orderName:"所以我放弃了编程",amount:.01,payType:1});case 2:n=e.sent,t.content=n,setTimeout((function(){document.forms[0].submit()}),100);case 5:case"end":return e.stop()}}),e)})))()},loopOrderState:function(){var t=this;clearTimeout(this.timer);var e=setInterval((function(){10==e&&clearInterval(t.timer)}),1e3)}},beforeDestroy:function(){clearTimeout(this.timer)}},u=s,l=n("9ca4"),d=Object(l["a"])(u,r,a,!1,null,null,null);e["default"]=d.exports},"8c36":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("img",{attrs:{src:"/imgs/loading-svg/loading-bars.svg"}})])}],i={name:"loading"},o=i,c=(n("c943"),n("9ca4")),s=Object(c["a"])(o,r,a,!1,null,null,null);e["a"]=s.exports},c943:function(t,e,n){"use strict";var r=n("f11f"),a=n.n(r);a.a},f11f:function(t,e,n){}}]);