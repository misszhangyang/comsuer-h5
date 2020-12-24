<template>
	<view class="reseller">
		<cu-custom bgColor="bg-gradual-yellow" style="color: #FFFFFF;font-size: 18px;" :isBack="true"><block slot="content">会员管理</block></cu-custom>
		<view class="top">
			 <view class="uni-flex uni-column">
				 <view  style="width: 100%;height:35%;">
				 </view> 
				<view style="width:90%;margin:0 auto; height:50%;  margin-bottom:30px;">
						<view class="middle-bottom" style="margin-right: 75px;">
							<view class="flex">
								<view class="flex-sub  padding-sm margin-xs ">
									<view  class="bottom-text1">昨日收益</view>
									<view class="bottom-text">0</view>
								</view>
								<view class="flex-sub  padding-sm margin-xs">
									<view  class="bottom-text1">累计已提</view>
									<view class="bottom-text">0</view>
								</view>
							</view>
						</view>
					</view>
				</view>
		</view>
		<view class="icon">
			<!-- 排序板块 -->
			<view class="index-header sort-header">
				<!-- filters：过滤选项设置， sortChanged：排序更改的事件监听方法，showShape：是否显示右侧模板选择按钮，shapeValue：初始化的模板值，2：双列，1：单列，具体可自行控制，shapeChanged:右侧的模板选择按钮事件监听方法-->	
				<goodsFilter :filters="goodsFilters" @sortChanged="goodsFilterChanged" @shapeChanged="goodsTemplateChanged" :showShape="true" :shapeValue="2"></goodsFilter>
			</view>
		</view>
		<view style="height: 450px; overflow: auto;">
			<!-- <uni-section title="圆头像且不显示分割线" type="line"></uni-section> -->
			<uniList :border="false">
				<uniListChat v-for="item in listData" :avatar-circle="true" :key="item.id" :title="item.author_name" :avatar="item.cover" :note="item.title" :time="item.published_at" :clickable="false"></uniListChat>
			</uniList>
		</view>
		
	</view>
</template>

<script>
	import goodsFilter from '@/components/yb-filter/index.vue';
	import uniListChat from '../../../components/uni/uni-list-chat/uni-list-chat.vue';
	import uniList from '../../../components/uni/uni-list/uni-list.vue';
	import utils from '@/common/utils.js';
	export default {
		data() {
			return {
				show: true,
				autoplay: false,
				type: 'warning',
				listText: [
					'锦瑟无端五十弦，一弦一柱思华年',
					'庄生晓梦迷蝴蝶，望帝春心托杜鹃',
					'沧海月明珠有泪，蓝田日暖玉生烟'
				],
				UNITS: {
					'年': 31557600000,
					'月': 2629800000,
					'天': 86400000,
					'小时': 3600000,
					'分钟': 60000,
					'秒': 1000
				},
				pageIndex: '',
				// 默认双列显示
				goodsListTemplate: 2,
				// 过滤参数
				curCateFid:'',
				cateList:[{name:'卤菜',value:'100001'},{name:'凉菜',value:'100002'},{name:'酒水',value:'100003'}],
				mode: 'vertical',
				playState: 'play',
				speed: 160,
				duration: 2000,
				moreIcon: true,
				volumeIcon: true,
				isCircular: true,
				current: 0,
				listData: [],
				avatarList: [{
					url: '/static/logo.png'
				}, {
					url: '/static/logo.png'
				}, {
					url: '/static/logo.png'
				}]
			}
		},
		onLoad() {
			this.getList()
		},
		computed: {
			goodsListTemplateType: function() {
				return this.goodsListTemplate;
			},
			// 商品过滤器参数 <!-- //1：按距离，2：按销量，3：按人气，4：按最新，5：按价格 -->
			goodsFilters:function() {
				// 参考的下拉选项如下，可从服务器端加载：
				//options:[{name:'不限',value:""},{name:'酒水',value:"js",children:[{name:'啤酒',value:"pj"}]}]},
				// const cateOptions=this.cateList.map(function (item){
				// 	return {name:item.Name,value:item.Fid}
				// });
				const cateOptions = [{name:'推荐',value:'0'},...this.cateList];
				// filterType为0，普通方式，无排序，1：排序模式，2：下拉筛选模式，当前支持一级，多级可自行扩展
				return [
				// {title:'类别',value:0,filterType:2,
				// 	options:cateOptions},
				// {title:'推荐',value:0,filterType:0,disableAscDesc:true},
				{title:'距离',value:2,filterType:1},
				// {title:'人气', value:3, filterType:1},
				{title:'最新',value:4,filterType:1},
				{title:'价格',value:5,filterType:1, initAscState:true}]
			}
		},
		components: {goodsFilter,uniListChat,uniList},
		methods: {
			getList() {
				var data = {
					column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
				};
			
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: data,
					success: data => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							list = this.reload ? list : this.listData.concat(list);
							list.map(item => {
								item.text = Math.floor(Math.random() * (1 - 20) + 20)
								return item
							})
							this.listData = this.getRandomArrayElements(list, 10)
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				});
			},
			getRandomArrayElements(arr, count) {
				var shuffled = arr.slice(0),
					i = arr.length,
					min = i - count,
					temp, index;
				while (i-- > min) {
					index = Math.floor((i + 1) * Math.random());
					temp = shuffled[index];
					shuffled[index] = shuffled[i];
					shuffled[i] = temp;
				}
				return shuffled.slice(min);
			},
			setTime(items) {
				var newItems = [];
				items.forEach(e => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: this.format(e.published_at),
						title: e.title
					});
				});
				return newItems;
			},
			format(dateStr) {
				var date = this.parse(dateStr)
				var diff = Date.now() - date.getTime();
				if (diff < this.UNITS['天']) {
					return this.humanize(diff);
				}
				var _format = function(number) {
					return (number < 10 ? ('0' + number) : number);
				};
				return date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDate()) + ' ' +
					_format(date.getHours()) + ':' + _format(date.getMinutes());
			},
			parse(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
				var a = str.split(/[^0-9]/);
				return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
			},
			// 排序，筛选更改
			goodsFilterChanged(filter){
				// debugger
				console.log("filter:",filter)
				// 此处可根据fitler数据，从服务器端加载数据
				// pageIndex = 0;
				this.isEnd = false;
				this.loadingType = 0;
				this.curCateFid=filter.option || ""
				// 加载数据
				const resetData=true;
				this.loadMoreGoods(filter,resetData);
			}
			// 点击了右侧的模板选择按钮：即单列还是双列展示商品
			,goodsTemplateChanged(templateValue){
				
				this.goodsListTemplate = templateValue;
			},
			jump_cash() {
				uni.navigateTo({
					url: '/pages/user/cash/cash',
				});
			},
			click(e){
				uni.navigateTo({
					url: '/pages/user/notice/text?item='+ encodeURIComponent(JSON.stringify(e)),
				});
			},
			getMore(){
				uni.navigateTo({
					url: '/pages/user/notice/text',
				});
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F5F5F5;
	}

	.badge-icon {
		float: right;
	}
	.sort-header{
		width: 100%;
	}
	.list{
		overflow: auto;
	}
	.reseller {
		background-color: #F5F5F5;
		min-height: 100vh;
		font-size: 14px;

		.top {
			color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			position: relative;
			width: 100%;
			height: 180px;
			background: #29b105; 
			//linear-gradient(top, #4EC28E, #1C9C63);
			.title {
				background-color: #FFFFFF
			}
			.uni-flex {
				width: 100%;
				display: flex;
				flex-direction: row;
			}
			
			.uni-column {
				flex-direction: column;
			}
			
			.flex-item {
				width: 100%;
				height: 200rpx;
				text-align: center;
				line-height: 200rpx;
			}
			
			.flex-item-V {
				width: 100%;
				height: 150rpx;
				text-align: center;
				line-height: 150rpx;
			}
			
			.middle-top{
				width: 100%;
				height: 40%;
				margin-top: 2%;
			
				.flex {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: row;
					margin-left: 10%;
				}
				
				.flex1{
					/* #ifndef APP-NVUE */
					display: flex;
					height: 2%;
					/* #endif */
					flex-direction: row;
					margin-left: 10%;
				}
				
				.flex-bottom {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: row;
					margin-left: 10%;
				}
				
				
				
				.flex-sub {
					width: calc(100% - 96upx - 60upx - 20upx);
				}
				
				.top-text{
					font-size: 40px;
					color: #000000;
					font-weight: 500;
				}
				
				.top-right{
					margin: auto 0;
					color: #FAAC17;
					margin: auto 0 !important;
				}
				
				.bg-grey {
					background-color: #8799a3;
					color: #ffffff;
				}
				
				.padding-sm {
					padding: 20upx;
				}
				
				.margin-xs {
					margin: 10upx;
				}
			}
			
			.middle-bottom{
				width: 100%;
				height: 55%;
				color: #9B9B9B;
				margin-left: 10%;
				.bottom-text{
					color: #fff;
					font-size: 30px;
					margin-top: 10px;
					margin-left: 10px
				}
				.bottom-text1{
					color: #eee;
				}
			}

			.num {
				font-size: 15px;
				line-height: 25px;
				text-align: center;
				margin-top: 33%;
				width: 33%;

			}
		}

		.jilu {
			font-size: 15px;
			position: absolute;
			left: 65%;
			margin-top: 23%;
		}

		.title-head {
			font-size: 20px;
			position: absolute;
			left: 5%;
			top: 7%;
		}

		.tixian {
			display: flex;
			justify-content: center;
			background-color: #F5F5F5;
			width: 55%;
			height: 60px;
			border-radius: 60px;
			position: absolute;
			bottom: -30px;
			left: 23%;

			.btn {
				margin-top: 7%;
				text-align: center;
				width: 85%;
				background-color: #1C9C63;
				height: 40px;
				border: none;
				border-radius: 50px;
				line-height: 40px;
				color: #FFFFFF;
			}
		}

		.icon {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			height: 50px;
			background: #fff;

         
			// margin-left: 4.5%;
			// margin-right: 4.5%;
			// margin-top: 4%;

			.ico {
				border-radius: 10px;
				border: 1px solid #C0C0C0;
				width: 48%;
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				color: #000;
				height: 100px;
				margin-top: 10px;
				display: flex;
				border: none;
				
				font-size: 15px;
				flex-direction: column;
				background-color: #FFFFFF;
				
				.navigator{
					height: 100%;
				}

				.img {
					float: left;
					margin-left: 10%;
					width: 32px;
					height: 32px;
				}

				.tubiao {
					margin-top: 20px;
					text-align: center;
				}
				
				.tt{
					width: 70%;
					margin-left: 30%
				}
				
				.tt1{
					margin-left: 30%
				}

				.text {
					color: hsl(0deg 3% 26% / 94%);
					padding-top: 5px;
                    font-size: 0.95333rem;
					float: left;
					margin-left: 10%
				}
				
				 .text0{
					 color: #9B9B9B;
					 font-size: 0.7rem;
					 margin-left: 10%;
					 line-height: 16px;
				 }
			}
		}
		
		.swiper{
		   margin-top: 3%;
		   font-size: 13px;
		   text-align: center;
		   // padding: auto 0;
		}
		
		
		.kong {
			height: 100px;
		}

		.BH {
			background-color: #9B9B9B;;
			height: 1px;
		}
		
		.BH-TOP {
			background-color: #9B9B9B;;
			height: 5px;
			margin-left: 2%;
			margin-right: 2%;
		}

		.head-title {
			font-size: 20px;
			width: 300px;
			margin-top: 10px
		}
		
		.padding-top{
			padding: 5rpx;
		}
		
		.padding-middle{
			padding: 10rpx;
			color: #9B9B9B;
		}
	}
</style>
