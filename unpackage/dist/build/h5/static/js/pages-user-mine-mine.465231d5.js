(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-mine-mine"],{"113f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.icon .mix-list-cell.b-b[data-v-4a25f54b]:after{left:%?90?%}.mix-list-cell[data-v-4a25f54b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative}.mix-list-cell.cell-hover[data-v-4a25f54b]{background:#fafafa}.mix-list-cell.b-b[data-v-4a25f54b]:after{left:%?30?%}.mix-list-cell .cell-icon[data-v-4a25f54b]{-webkit-align-self:center;align-self:center;width:%?56?%;max-height:%?60?%;font-size:%?38?%}.mix-list-cell .cell-more[data-v-4a25f54b]{-webkit-align-self:center;align-self:center;font-size:%?30?%;color:#606266;margin-left:10px}.mix-list-cell .cell-tit[data-v-4a25f54b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133;margin-right:%?10?%}.mix-list-cell .cell-tip[data-v-4a25f54b]{font-size:%?26?%;color:#909399}',""]),t.exports=i},"14f7":function(t,i,e){"use strict";e.r(i);var n=e("f19a"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"19ea":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"user-section"},[e("v-uni-image",{staticClass:"bg",attrs:{src:"/static/user-bg.jpg"}}),e("v-uni-view",{staticClass:"user-info-box"},[e("v-uni-view",{staticClass:"portrait-box"},[e("v-uni-image",{staticClass:"portrait",attrs:{src:"/static/missing-face.png"}})],1),e("v-uni-view",{staticClass:"info-box"},[e("v-uni-view",{staticClass:"username"},[t._v("游客")])],1)],1)],1),e("v-uni-view",{staticClass:"cover-container",style:[{transform:t.coverTransform,transition:t.coverTransition}],on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.coverTouchstart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.coverTouchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.coverTouchend.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"arc",attrs:{src:"/static/arc.png"}}),e("v-uni-view",{staticClass:"tj-sction"},[e("v-uni-view",{staticClass:"tj-item"},[e("v-uni-text",{staticClass:"num"},[t._v("128.8")]),e("v-uni-text",[t._v("余额")])],1),e("v-uni-view",{staticClass:"tj-item"},[e("v-uni-text",{staticClass:"num"},[t._v("0")]),e("v-uni-text",[t._v("优惠券")])],1),e("v-uni-view",{staticClass:"tj-item"},[e("v-uni-text",{staticClass:"num"},[t._v("20")]),e("v-uni-text",[t._v("积分")])],1)],1),e("v-uni-view",{staticClass:"history-section icon"},[e("list-cell",{attrs:{icon:"icon-iconfontweixin",iconColor:"#e07472",title:"我的钱包",tips:"您的会员还有3天过期"}}),e("list-cell",{attrs:{icon:"icon-dizhi",iconColor:"#5fcda2",title:"地址管理"},on:{eventClick:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/address/address")}}}),e("list-cell",{attrs:{icon:"icon-share",iconColor:"#9789f7",title:"分享",tips:"邀请好友赢10万大礼"}}),e("list-cell",{attrs:{icon:"icon-pinglun-copy",iconColor:"#ee883b",title:"晒单",tips:"晒单抢红包"}}),e("list-cell",{attrs:{icon:"icon-shoucang_xuanzhongzhuangtai",iconColor:"#54b4ef",title:"我的收藏"}}),e("list-cell",{attrs:{icon:"icon-shezhi1",iconColor:"#e07472",title:"设置",border:""},on:{eventClick:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/set/set")}}})],1)],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},"5b30":function(t,i,e){"use strict";var n=e("dad9"),a=e.n(n);a.a},"6a37":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"mix-list-cell",class:t.border,attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.eventClick.apply(void 0,arguments)}}},[t.icon?e("v-uni-text",{staticClass:"cell-icon yticon",class:t.icon,style:[{color:t.iconColor}]}):t._e(),e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v(t._s(t.title))]),t.tips?e("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.tips))]):t._e(),e("v-uni-text",{staticClass:"cell-more yticon",class:t.typeList[t.navigateType]})],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},7012:function(t,i,e){"use strict";e.r(i);var n=e("19ea"),a=e("14f7");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("d9aa");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"d4a93fca",null,!1,n["a"],r);i["default"]=s.exports},a000:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{typeList:{left:"icon-zuo",right:"icon-you",up:"icon-shang",down:"icon-xia"}}},props:{icon:{type:String,default:""},title:{type:String,default:"标题"},tips:{type:String,default:""},navigateType:{type:String,default:"right"},border:{type:String,default:"b-b"},hoverClass:{type:String,default:"cell-hover"},iconColor:{type:String,default:"#333"}},methods:{eventClick:function(){this.$emit("eventClick")}}};i.default=n},b53e:function(t,i,e){"use strict";e.r(i);var n=e("a000"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},b9b7:function(t,i,e){var n=e("be9d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0fe0f8da",n,!0,{sourceMap:!1,shadowMode:!1})},be9d:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.tj-sction .tj-item[data-v-d4a93fca], .order-section .order-item[data-v-d4a93fca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tj-sction[data-v-d4a93fca], .order-section[data-v-d4a93fca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-content:center;align-content:center;background:#fff;border-radius:%?10?%}.user-section[data-v-d4a93fca]{height:%?520?%;padding:%?100?% %?30?% 0;position:relative}.user-section .bg[data-v-d4a93fca]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-filter:blur(1px);filter:blur(1px);opacity:.7}.user-info-box[data-v-d4a93fca]{height:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:1}.user-info-box .portrait[data-v-d4a93fca]{width:%?130?%;height:%?130?%;border:%?5?% solid #fff;border-radius:50%}.user-info-box .username[data-v-d4a93fca]{font-size:%?38?%;color:#303133;margin-left:%?20?%}.vip-card-box[data-v-d4a93fca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#f7d680;height:%?240?%;background:-webkit-linear-gradient(left,rgba(0,0,0,.7),rgba(0,0,0,.8));background:linear-gradient(left,rgba(0,0,0,.7),rgba(0,0,0,.8));border-radius:%?16?% %?16?% 0 0;overflow:hidden;position:relative;padding:%?20?% %?24?%}.vip-card-box .card-bg[data-v-d4a93fca]{position:absolute;top:%?20?%;right:0;width:%?380?%;height:%?260?%}.vip-card-box .b-btn[data-v-d4a93fca]{position:absolute;right:%?20?%;top:%?16?%;width:%?132?%;height:%?40?%;text-align:center;line-height:%?40?%;font-size:%?22?%;color:#36343c;border-radius:20px;background:-webkit-linear-gradient(left,#f9e6af,#ffd465);background:linear-gradient(left,#f9e6af,#ffd465);z-index:1}.vip-card-box .tit[data-v-d4a93fca]{font-size:%?30?%;color:#f7d680;margin-bottom:%?28?%}.vip-card-box .tit .yticon[data-v-d4a93fca]{color:#f6e5a3;margin-right:%?16?%}.vip-card-box .e-b[data-v-d4a93fca]{font-size:%?24?%;color:#d8cba9;margin-top:%?10?%}.cover-container[data-v-d4a93fca]{background:#f8f8f8;margin-top:%?-150?%;padding:0 %?30?%;position:relative;background:#f5f5f5;padding-bottom:%?20?%}.cover-container .arc[data-v-d4a93fca]{position:absolute;left:0;top:%?-34?%;width:100%;height:%?36?%}.tj-sction .tj-item[data-v-d4a93fca]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?140?%;font-size:%?24?%;color:#75787d}.tj-sction .num[data-v-d4a93fca]{font-size:%?32?%;color:#303133;margin-bottom:%?8?%}.order-section[data-v-d4a93fca]{padding:%?28?% 0;margin-top:%?20?%}.order-section .order-item[data-v-d4a93fca]{width:%?120?%;height:%?120?%;border-radius:%?10?%;font-size:%?24?%;color:#303133}.order-section .yticon[data-v-d4a93fca]{font-size:%?48?%;margin-bottom:%?18?%;color:#fa436a}.order-section .icon-shouhoutuikuan[data-v-d4a93fca]{font-size:%?44?%}.history-section[data-v-d4a93fca]{padding:%?30?% 0 0;margin-top:%?20?%;background:#fff;border-radius:%?10?%}.history-section .sec-header[data-v-d4a93fca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#303133;line-height:%?40?%;margin-left:%?30?%}.history-section .sec-header .yticon[data-v-d4a93fca]{font-size:%?44?%;color:#5eba8f;margin-right:%?16?%;line-height:%?40?%}.history-section .h-list[data-v-d4a93fca]{white-space:nowrap;padding:%?30?% %?30?% 0}.history-section .h-list uni-image[data-v-d4a93fca]{display:inline-block;width:%?160?%;height:%?160?%;margin-right:%?20?%;border-radius:%?10?%}',""]),t.exports=i},d9aa:function(t,i,e){"use strict";var n=e("b9b7"),a=e.n(n);a.a},dad9:function(t,i,e){var n=e("113f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("dca0fd7c",n,!0,{sourceMap:!1,shadowMode:!1})},db36:function(t,i,e){"use strict";e.r(i);var n=e("6a37"),a=e("b53e");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("5b30");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4a25f54b",null,!1,n["a"],r);i["default"]=s.exports},f19a:function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("f3f3")),o=n(e("db36")),r=e("2f62"),c=0,s=0,l=!0,d={components:{listCell:o.default},data:function(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1}},onLoad:function(){},onNavigationBarButtonTap:function(t){var i=t.index;0===i?this.navTo("/pages/set/set"):1===i&&uni.navigateTo({url:"/pages/notice/notice"})},computed:(0,a.default)({},(0,r.mapState)(["hasLogin","userInfo"])),methods:{navTo:function(t){uni.navigateTo({url:"/pages/login/login"})},coverTouchstart:function(t){!1!==l&&(this.coverTransition="transform .1s linear",c=t.touches[0].clientY)},coverTouchmove:function(t){s=t.touches[0].clientY;var i=s-c;i<0?this.moving=!1:(this.moving=!0,i>=80&&i<100&&(i=80),i>0&&i<=80&&(this.coverTransform="translateY(".concat(i,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}}};i.default=d}}]);