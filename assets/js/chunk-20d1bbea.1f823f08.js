(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20d1bbea"],{"052d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"order-header w clearfix"},[e._m(0),a("div",{staticClass:"title fl"},[a("h2",[e._v(e._s(e.title)),e._t("tip")],2)]),a("div",{staticClass:"username fr"},[a("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.username))])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-logo fl"},[a("a",{attrs:{href:"/#/index"}})])}],l=a("9b6e"),n=a("5880"),s={props:{title:String},computed:Object(l["a"])({},Object(n["mapState"])(["username"]))},c=s,d=(a("2b51"),a("9ca4")),o=Object(d["a"])(c,r,i,!1,null,"72679180",null);t["a"]=o.exports},"0d7a":function(e,t,a){"use strict";var r=a("b2a2"),i=a("8a1c"),l=a("857c"),n=a("2732"),s=a("ef4c"),c=a("38eb"),d=a("d88d"),o=a("59da"),u=a("5139"),v=a("efe2"),f=[].push,m=Math.min,b=4294967295,h=!v((function(){return!RegExp(b,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(n(this)),l=void 0===a?b:a>>>0;if(0===l)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,l);var s,c,d,o=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,h=new RegExp(e.source,v+"g");while(s=u.call(h,r)){if(c=h.lastIndex,c>m&&(o.push(r.slice(m,s.index)),s.length>1&&s.index<r.length&&f.apply(o,s.slice(1)),d=s[0].length,m=c,o.length>=l))break;h.lastIndex===s.index&&h.lastIndex++}return m===r.length?!d&&h.test("")||o.push(""):o.push(r.slice(m)),o.length>l?o.slice(0,l):o}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var i=n(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,i,a):r.call(String(i),t,a)},function(e,i){var n=a(r,e,this,i,r!==t);if(n.done)return n.value;var u=l(e),v=String(this),f=s(u,RegExp),p=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),_=new f(h?u:"^(?:"+u.source+")",g),C=void 0===i?b:i>>>0;if(0===C)return[];if(0===v.length)return null===o(_,v)?[v]:[];var x=0,w=0,k=[];while(w<v.length){_.lastIndex=h?w:0;var y,I=o(_,h?v:v.slice(w));if(null===I||(y=m(d(_.lastIndex+(h?0:w)),v.length))===x)w=c(v,w,p);else{if(k.push(v.slice(x,w)),k.length===C)return k;for(var A=1;A<=I.length-1;A++)if(k.push(I[A]),k.length===C)return k;w=x=y}}return k.push(v.slice(x)),k}]}),!h)},"2b51":function(e,t,a){"use strict";var r=a("fe57"),i=a.n(r);i.a},"2eeb":function(e,t,a){"use strict";var r=a("1c8b"),i=a("5dfd").map,l=a("1ea7"),n=a("ff9c"),s=l("map"),c=n("map");r({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},3638:function(e,t,a){},"513c":function(e,t,a){"use strict";var r=a("1e2c"),i=a("d890"),l=a("e8d6"),n=a("1944"),s=a("faa8"),c=a("2118"),d=a("7063"),o=a("9f67"),u=a("efe2"),v=a("6d60"),f=a("b338").f,m=a("aa6b").f,b=a("d910").f,h=a("c10f").trim,p="Number",g=i[p],_=g.prototype,C=c(v(_))==p,x=function(e){var t,a,r,i,l,n,s,c,d=o(e,!1);if("string"==typeof d&&d.length>2)if(d=h(d),t=d.charCodeAt(0),43===t||45===t){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+d}for(l=d.slice(2),n=l.length,s=0;s<n;s++)if(c=l.charCodeAt(s),c<48||c>i)return NaN;return parseInt(l,r)}return+d};if(l(p,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,k=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof k&&(C?u((function(){_.valueOf.call(a)})):c(a)!=p)?d(new g(x(t)),a,k):x(t)},y=r?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)s(g,w=y[I])&&!s(k,w)&&b(k,w,m(g,w));k.prototype=_,_.constructor=k,n(i,p,k)}},"77ad":function(e,t,a){"use strict";var r=a("1c8b"),i=a("a719"),l=a("74e7"),n=a("e1d6"),s=a("d88d"),c=a("da10"),d=a("1bbd"),o=a("90fb"),u=a("1ea7"),v=a("ff9c"),f=u("slice"),m=v("slice",{ACCESSORS:!0,0:0,1:2}),b=o("species"),h=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!f||!m},{slice:function(e,t){var a,r,o,u=c(this),v=s(u.length),f=n(e,v),m=n(void 0===t?v:t,v);if(l(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!l(a.prototype)?i(a)&&(a=a[b],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(u,f,m);for(r=new(void 0===a?Array:a)(p(m-f,0)),o=0;f<m;f++,o++)f in u&&d(r,o,u[f]);return r.length=o,r}})},9302:function(e,t,a){"use strict";var r=a("1c8b"),i=a("692f"),l=a("da10"),n=a("d7e1"),s=[].join,c=i!=Object,d=n("join",",");r({target:"Array",proto:!0,forced:c||!d},{join:function(e){return s.call(l(this),void 0===e?",":e)}})},"984b":function(e,t,a){"use strict";var r=a("3638"),i=a.n(r);i.a},b752:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"order-confirm"},[a("order-header",{attrs:{title:"订单确认"}}),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container w"},[a("div",{staticClass:"order-box"},[a("div",{staticClass:"item-address"},[a("h2",{staticClass:"addr-title"},[e._v("收货地址")]),a("div",{staticClass:"addr-list clearfix"},[e._l(e.addrList,(function(t,r){return a("div",{key:r,staticClass:"addr-info",class:{checked:t.id==e.selectedAddrId},on:{click:function(a){e.selectedAddrId=t.id}}},[a("h2",[e._v(e._s(t.username))]),a("div",{staticClass:"phone"},[e._v(e._s(t.mobile))]),a("div",{staticClass:"street"},[e._v(e._s(t.address))]),a("div",{staticClass:"action"},[a("a",{staticClass:"fl",attrs:{href:"javascript:;"},on:{click:function(a){return e.delAddrById(t.id)}}},[a("i",{staticClass:"el-icon-delete"})]),a("a",{staticClass:"fr",attrs:{href:"javascript:;"},on:{click:function(a){return e.diglogOpen("edit",t)}}},[a("i",{staticClass:"el-icon-edit"})])])])})),a("div",{staticClass:"addr-add",on:{click:function(t){return e.diglogOpen("add")}}},[e._m(0),a("div",[e._v("添加新地址")])])],2)]),a("div",{staticClass:"item-good"},[a("h2",[e._v("商品")]),e._l(e.cartList,(function(t,r){return a("ul",{key:r},[a("li",[a("div",{staticClass:"good-name"},[a("img",{attrs:{src:t.img,alt:""}}),a("span",[e._v(e._s(t.name))])]),a("div",{staticClass:"good-price"},[e._v(e._s(t.price)+"元 x "+e._s(t.quantity))]),a("div",{staticClass:"good-total"},[e._v(e._s(t.cartCmount)+"元")])])])}))],2),e._m(1),e._m(2),a("div",{staticClass:"detail"},[a("div",{staticClass:"item"},[a("span",{staticClass:"item-name"},[e._v("商品件数：")]),a("span",{staticClass:"item-val"},[e._v(e._s(e.productCnt)+"件")])]),a("div",{staticClass:"item"},[a("span",{staticClass:"item-name"},[e._v("商品总价：")]),a("span",{staticClass:"item-val"},[e._v(e._s(e.cartTotalAmount)+"元")])]),e._m(3),e._m(4),a("div",{staticClass:"item-total"},[a("span",{staticClass:"item-name"},[e._v("应付总额：")]),a("span",{staticClass:"item-val"},[e._v(e._s(e.cartTotalAmount)+"元")])])]),a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn btn-default btn-large",attrs:{href:"/#/cart"}},[e._v("返回购物车")]),a("a",{staticClass:"btn btn-large",attrs:{href:"javascript:;"},on:{click:e.orderSubmit}},[e._v("去结算")])])])]),a("el-dialog",{attrs:{title:e.diglogTitle,visible:e.diglogVisable,width:"39%","close-on-click-modal":!1},on:{"update:visible":function(t){e.diglogVisable=t},close:e.diglogClose}},[a("el-form",{ref:"addrFormRef",attrs:{model:e.addrForm,rules:e.formRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{staticStyle:{width:"217px"},attrs:{placeholder:"姓名，如 wuhuiluo"},model:{value:e.addrForm.username,callback:function(t){e.$set(e.addrForm,"username",t)},expression:"addrForm.username"}})],1),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{staticStyle:{width:"217px"},attrs:{placeholder:"请填写正确的11位手机号码"},model:{value:e.addrForm.mobile,callback:function(t){e.$set(e.addrForm,"mobile",t)},expression:"addrForm.mobile"}})],1),a("el-form-item",{attrs:{label:"所在地区",prop:"addrZone"}},[a("el-cascader",{attrs:{options:e.options,props:{expandTrigger:"hover"},clearable:""},on:{change:e.handleChange},model:{value:e.addrForm.addrZone,callback:function(t){e.$set(e.addrForm,"addrZone",t)},expression:"addrForm.addrZone"}})],1),a("el-form-item",{attrs:{label:"详细地址",prop:"addrDetail"}},[a("el-input",{attrs:{type:"textarea",placeholder:"街道、小区、楼牌号等，无须重复填写省市区"},model:{value:e.addrForm.addrDetail,callback:function(t){e.$set(e.addrForm,"addrDetail",t)},expression:"addrForm.addrDetail"}})],1),a("div",{staticClass:"addr-foot"},[a("el-button",{on:{click:function(t){e.diglogVisable=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addrOnSubmit}},[e._v("确 定")])],1)],1)],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icon-add"},[a("i",{staticClass:"el-icon-circle-plus-outline"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item-shipping"},[a("h2",[e._v("配送方式")]),a("span",[e._v("包邮")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item-invoice"},[a("h2",[e._v("发票")]),a("a",{attrs:{href:"javascript:;"}},[e._v("电子发票")]),a("a",{attrs:{href:"javascript:;"}},[e._v("个人")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item"},[a("span",{staticClass:"item-name"},[e._v("优惠活动：")]),a("span",{staticClass:"item-val"},[e._v("0元")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item"},[a("span",{staticClass:"item-name"},[e._v("运费：")]),a("span",{staticClass:"item-val"},[e._v("0元")])])}],l=(a("dbb3"),a("9302"),a("2eeb"),a("77ad"),a("513c"),a("e35a"),a("0d7a"),a("b449"),a("6648")),n=a("052d"),s=a("1bab"),c={components:{OrderHeader:n["a"]},data:function(){var e=function(e,t,a){var r=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;if(r.test(t))return a();a(new Error("请输入合法的手机号"))};return{addrList:[],cartList:[],cartTotalAmount:0,productCnt:0,selectedAddrId:1,diglogVisable:!1,diglogTitle:"",addrForm:{id:0,username:"",mobile:"",addrZone:[],addrDetail:""},formRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:e,trigger:"blur"}],addrZone:[{required:!0,message:"请选择所在地区",trigger:"blur"}],addrDetail:[{required:!0,message:"请输入详细地址",trigger:"blur"}]},options:[{value:"福建省",label:"福建省",children:[{value:"泉州市",label:"泉州市",children:[{value:"晋江",label:"晋江"}]}]},{value:"北京",label:"北京",children:[{value:"北京市",label:"北京市",children:[{value:"东城区",label:"东城区"},{value:"西城区",label:"西城区"},{value:"朝阳区",label:"朝阳区"},{value:"海淀区",label:"海淀区"},{value:"丰台区",label:"丰台区"}]}]},{value:"天津",label:"天津",children:[{value:"天津市",label:"天津市",children:[{value:"和平区",label:"和平区"},{value:"南开区",label:"南开区"},{value:"津南区",label:"津南区"},{value:"北辰区",label:"北辰区"},{value:"武清区",label:"武清区"}]}]},{value:"上海",label:"上海",children:[{value:"上海市",label:"上海市",children:[{value:"黄浦区",label:"黄浦区"},{value:"徐汇区",label:"徐汇区"},{value:"静安区",label:"静安区"},{value:"普陀区",label:"普陀区"},{value:"虹口区",label:"虹口区"},{value:"浦东新区",label:"浦东新区"}]}]},{value:"重庆",label:"重庆",children:[{value:"重庆",label:"重庆",children:[{value:"江津区",label:"江津区"}]}]},{value:"四川省",label:"四川省",children:[{value:"成都市",label:"成都市",children:[{value:"锦江区",label:"锦江区"}]},{value:"自贡市",label:"自贡市",children:[{value:"自流井区",label:"自流井区"}]},{value:"攀枝花市",label:"攀枝花市",children:[{value:"盐边县",label:"盐边县"}]}]},{value:"浙江省",label:"浙江省",children:[{value:"杭州市",label:"杭州市",children:[{value:"西湖区",label:"西湖区"}]},{value:"宁波市",label:"宁波市",children:[{value:"余姚市",label:"余姚市"}]},{value:"温州市",label:"温州市",children:[{value:"龙湾区",label:"龙湾区"}]}]},{value:"江苏省",label:"江苏省",children:[{value:"南京市",label:"南京市",children:[{value:"玄武区",label:"玄武区"}]},{value:"无锡市",label:"无锡市",children:[{value:"崇安区",label:"崇安区"}]},{value:"苏州市",label:"苏州市",children:[{value:"平江区",label:"平江区"}]}]}]}},created:function(){this._getAddrList()},methods:{_getAddrList:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["g"])();case 2:return a=t.sent,e.addrList=a,t.next=6,Object(s["j"])({selected:1});case 6:if(r=t.sent,r){t.next=9;break}return t.abrupt("return",!1);case 9:i=r.amount,l=r.CartProducts,r.selectedCartCnt,e.cartList=l,e.cartList.map((function(t){e.productCnt+=t.quantity,t.cartCmount=Number(t.price)*Number(t.quantity)})),e.cartTotalAmount=i,e.addCnt=e.cartList.length;case 14:case"end":return t.stop()}}),t)})))()},delAddrById:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm("此操作将永久删除该收货地址, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(r=a.sent,"confirm"===r){a.next=5;break}return a.abrupt("return",t.$message.info("已取消删除"));case 5:return a.next=7,Object(s["e"])(e);case 7:i=a.sent,t.addrList=i,t.$message.success("删除收货地址成功");case 10:case"end":return a.stop()}}),a)})))()},diglogClose:function(){this.$refs.addrFormRef.resetFields()},diglogOpen:function(e,t){if(this.diglogVisable=!0,"add"===e)this.addrForm={id:0,username:"",mobile:"",addrZone:[],addrDetail:""},this.diglogTitle="添加收货地址";else if("edit"===e){this.diglogTitle="修改收货地址";var a=[],r="",i=t.id,l=t.username,n=t.mobile,s=t.address,c=s.split(" ");c.length>3&&(a=c.slice(0,3),r=c.slice(3,c.length).join("")),this.addrForm={id:i,username:l,mobile:n,addrZone:a,addrDetail:r}}},addrOnSubmit:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.addrFormRef.validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(a){var r,i,l,n,c,d,o,u,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:if(r=e.addrForm,i=r.id,l=r.username,n=r.mobile,c=r.addrZone,d=r.addrDetail,o={id:i,username:l,mobile:n,address:c.join(" ")+" "+d},0===i){t.next=12;break}return t.next=7,Object(s["u"])(i,o);case 7:u=t.sent,e.addrList=u,e.$message.success("修改收货地址成功"),t.next=17;break;case 12:return t.next=14,Object(s["a"])(o);case 14:v=t.sent,e.addrList=v,e.$message.success("添加收货地址成功");case 17:e.$refs.addrFormRef.resetFields(),e.diglogVisable=!1;case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},handleChange:function(e){3==this.addrForm.addrZone.length||(this.addrForm.addrZone=[])},orderSubmit:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.addrList.filter((function(t){return t.id===e.selectedAddrId})).length,1==a){t.next=4;break}return e.$message.error("请选择一个收货地址"),t.abrupt("return");case 4:if(!e.cartList||0==e.cartList.length){t.next=11;break}return t.next=7,Object(s["c"])({addressId:e.selectedAddrId});case 7:r=t.sent,e.$router.push({path:"/order/pay",query:{orderNo:r}}),t.next=13;break;case 11:return e.$message.error("劝你善良，不要重复提交，狗腿给你打断警告！"),t.abrupt("return");case 13:case"end":return t.stop()}}),t)})))()}}},d=c,o=(a("984b"),a("9ca4")),u=Object(o["a"])(d,r,i,!1,null,"3156f704",null);t["default"]=u.exports},fe57:function(e,t,a){}}]);