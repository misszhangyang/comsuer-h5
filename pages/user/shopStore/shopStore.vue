<template>
	<view class="shop">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">店铺信息</block>
		<button  slot="right" style="background: transparent; color: #fff; margin-right: 3%;" @click="addCancel">编辑</button>
		</cu-custom>
		<!-- <view class="biao" style="margin-top: 55px;"> -->
			 <view class="cu-form-group1">
				<!-- <view class="title">店铺名称：</view>
				<view class="title" style="flex-grow: 1;">{{content.shop_name}}</view> -->
			</view>
			<view class="cu-form-group back ">
				<view class="title ">基本信息：</view>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 商家简称：</view>
				<input name="input" v-model="list.amout" disabled="true">{{shopName}}</input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 座机号码：</view>
				<input name="input" v-model="list.amout" disabled="true">{{fixTel}}</input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 手机号码：</view>
				<input name="input" v-model="list.amout" disabled="true">{{phoneTel}}</input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 营业时间：</view>
				<input  name="input" v-model="list.heightAmout" disabled="true">{{startTime}}-{{endTime}}</input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 提供服务：</view>
				<view style="width: 60%;">
					<label v-for="item in serviceList" style="text-align:center;" v-if="hidden" class="label">
						<u-checkbox   v-model="checked1"  :label-disabled="true" :disabled="true" color="#FFCC33" style="transform:scale(0.7)" />{{item.name}}
					</label>
				</view>
			</view>
			<view class="cu-form-group" style="min-height: 90px;">
				<view class="title">商家简介：</view>
				<textarea style="line-height: 20px;" disabled="true" v-model="shopIntroduce"></textarea>
			    <view><text>{{shopIntroduce.length}}/200</text></view>
			</view>
			<view class="cu-form-group back ">
				<view class="title ">商家信息：</view>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 商家标签：</view>
				<input  name="input"  disabled="true">{{shopTag}}</input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 店铺LOGO：</view>
				<img src="@/imgs/12.png" style="margin-left: 4%;margin-top: 4%;float: left;">
			</view>
			<view class="cu-form-group back ">
				<view class="title ">地址信息：</view>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 所在城市：</view>
				<input  name="input"  disabled="true">{{shopCity}}</input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 经营地址：</view>
				<input  name="input"  disabled="true">{{shopAddress}}</input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 店铺位置：</view>
			</view>
			<view class="cu-form-group ">
				<map style="width: 100%; height: 289rpx;" :latitude="latitude" :longitude="longitude" :markers="covers" @tap="openMap()"></map>
				<!-- <view class="title"><span style="color: red;padding-right: 5px;">*</span> 店铺位置：</view> -->
			    <!-- <view class="uni-padding-wrap">
			    	<view style="background:#FFFFFF; padding:40rpx;">
			    		<view class="uni-hello-text uni-center">当前位置信息</view>
			    		<block v-if="hasLocation === true">
			    			<view class="uni-hello-text uni-center" style="margin-top:10px;">
			    				{{locationAddress}}
			    			</view>
			    			<view class="uni-h2 uni-center uni-common-mt">
			    				<text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</text>
			    				<text>\nN: {{location.latitude[0]}}°{{location.latitude[1]}}′</text>
			    			</view>
			    		</block>
			    	</view>
			    	<view class="uni-btn-v">
			    		<button type="primary" @tap="chooseLocation">选择位置</button>
			    		<button @tap="clear">清空</button>
			    	</view>
			    </view> -->
			</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import wPicker from "@/components/w-picker/w-picker.vue";
	var util = require('../../../common/util.js');
	var formatLocation = util.formatLocation;
	export default {
		data() {
			return {
				shopName: '茶颜悦色',
				phoneTel: '13309099090',
				fixTel: '18899002312',
				serviceList: [
					{name: 'WIFI'},
					{name: '充电宝'},
					{name: '停车场'},
					{name: '宝宝椅'}
				],
				shopIntroduce: '12313测试简介12313测试简介12313测试简介',
				shopTag: '餐饮美食',
				shopCity: '广东省广州市',
				shopAddress: '广东省广州市白云区XX街道',
				hidden: true,
				checked1: true,
				content: [],
				list:[
					{startTime: '2019-12-11 20:15:35'},
					{endTime: '2020-02-05 13:09:42'}
				],
				hasLocation: false,
				location: {},
				locationAddress: '',
				startTime: '开始时间',
				endTime: '结束时间',
				address: '',
				time: '开始时段',
				time_close: '结束时段',
				date: '开始日期',
				date_close: '结束日期',
				showPicker: true,
				datetime: '2019/01/01 15:00:12',
				range: ['2019/01/01','2019/01/06'],
				rangetime: ['2019/01/08 14:00','2019/01/16 13:59'],
				type: 'rangetime',
				value: '12312321',
				show: false,
				input: '',
				index: '活动期间内',
				rangKey: 'name',
				array: [{name:'每月'},{name: '每周'}, {name:'每日'}, {name:'活动期间内'}],
				mode: 'selector',
				range: ['一', '片', '冰', '心', '在', '玉', '壶'],
				defaultTime: '2019-12-11 20:15:35',
				defaultSelector: [0],
				defaultRegion: ['广东省', '深圳市', '宝安区'],
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true,
					province: true,
					city: true,
					area: true,
					timestamp: true
				},
				 current: 0,
				latitude: 31.7335,
				longitude: 118.1024,
				covers: [
				  {
					latitude: 31.7335,//纬度，范围为-90~90，负数表示南纬
					longitude: 118.1024,//经度，范围为-180~180，负数表示西经
				  }
				]
			};
		},
		computed: {
			status() {
				return this.show == true ? 0 : 1;
			}
		},
		onLoad() {
			this.content=this.$api.json.content
			// this.chooseLocation()
		},
		components: {
			uniIcon,
			wPicker
		},
		methods: {
			 openMap() {//点击地图
			    this.chooseLocation()
			//       uni.openLocation({
			
			//       latitude: this.latitude,
			
			//       longitude: this.longitude,
			
			//       name:"马鞍山市含山县",
			
			//       address: "马鞍山市含山县"
			
			//     })
				},
			chooseLocation: function () {
				uni.chooseLocation({
					success: (res) => {
						this.hasLocation = true,
						this.location = formatLocation(res.longitude, res.latitude),
						this.locationAddress = res.address
					}
				})
			},
			clear: function () {
				this.hasLocation = false
			},
			bindPickerChange: function(e) {
				this.index =  this.array[e.detail.value].name
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			 onShowDatePicker(type){//显示
				this.type = type;
				this.showPicker = true;
				this.value = this[type];
			},
			defaultTimeChange(index) {
				this.defaultTime = index == 0 ? 'start' : 'end';
				this.mode = 'time';
				this.show = true;
			},
			confirm(e) {
				// console.log(e);
				this.input = '';
				if (this.mode == 'time') {
					if (this.params.year) this.input += e.year;
					if (this.params.month) this.input += '-' + e.month;
					if (this.params.day) this.input += '-' + e.day;
					if (this.params.hour) this.input += ' ' + e.hour;
					if (this.params.minute) this.input += ':' + e.minute;
					if (this.params.second) this.input += ':' + e.second;
				} else if (this.mode == 'region') {
					this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
				} else if (this.mode == 'selector') {
					this.input = this.range[e[0]];
				} else if (this.mode == 'multiSelector') {
					this.input = this.range[0][e[0]] + '-' + this.range[1][e[1]] + '-' + this.range[2][e[2]];
				}
				if(this.defaultTime == 'start'){
					this.startTime = this.input
				}else{
					this.endTime = this.input
					if(this.startTime > this.endTime){
						alert("结束时间不能小于开始时间,请重新选择")
						this.endTime = '结束时间'
					}
				}
			},
		  onSelected(e) {//选择
				this.showPicker = false;
				if(e) {
					this[this.type] = e.value; 
					//选择的值
					console.log('value => '+ e.value);
					//原始的Date对象
					console.log('date => ' + e.date);
				}
			},
			addCancel(){
				uni.navigateTo({
					url: '/pages/user/shopStore/editStore',
				});
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindDateChange_close: function(e) {
				this.date_close = e.target.value
				if(this.date_close < this.date){
					alert("开始日期大于结束日期,请重新选择")
					this.date_close = '结束时间'
				}
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			bindTimeChange_close: function(e) {
				this.time_close = e.target.value
			},
			switch1Change: function(e) {
				if (e.target.value) {
					this.list.shop_state = true //   1   checked的值为布尔值
				} else {
					this.list.shop_state = false  //   0
				} 
			},
			//选择位置
			biaozu() {
				const that = this

				//#ifdef MP-WEIXIN 
				uni.getSetting({
					success(res) {
						if (!res.authSetting['scope.userLocation']) {
							uni.authorize({
								scope: 'scope.userLocation',
								success() {
									that.chooseLocation()
									return;
								}
							})
						} else {
							that.chooseLocation()
							return;
						}
					}
				})
				//#endif

				//#ifndef MP-WEIXIN 
				that.chooseLocation()
				//#endif
			},
			chooseLocation() {
				const that = this
				uni.chooseLocation({
					success: function(res) { 
						that.address = res.name
						that.list.position = res
					}
				});
			},
		}
	}
</script>

<style lang="less">
	.page-body-info {
		padding-bottom: 0;
		height: 440rpx;
	}
	.shop {background-color: #fff;min-height: 100vh;
		 .uni-input {background-color: #fff;} 
		.biao span {
			color: #fff;
			padding-right: 5px;
		}

		.cu-form-group1 {
			background-color: #ffffff;
			padding: 1upx 30upx;
			display: flex;
			align-items: center;
			min-height: 45px;
			justify-content: space-between;
		}
		.biao_01 {
			padding: 20px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;font-size: 15px;
		}

		.biao_01_l {
			padding-top: 5px;
		}

      
		.biao_02 {
			padding: 5px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;
			justify-content: space-between;
		}

		.biao_02_l {
			padding-top: 10px;
		}

		.biao_03 {
			padding: 13px 10px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;
		}
		
		.timeColor{
			color: grey;
		}

		.jgkc {
			padding: 10px;
			background-color: #F2F2F2;
		}

		.pro_btn {
			background-color: #E5E5E5;
			padding: 10px;
			text-align: center;
			margin: 10px;
			border-radius: 20px;
			background-color: #DF421D;
			color: #fff;
			position: fixed;
			bottom: 0;
			z-index: 99;
			width: 89%;
		}

		.biao_04 {
			padding: 20px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;
		}

		.biao_04_l {
			flex-shrink: 0;
		}

		.biao_04 textarea {
			height: 80px;
			width: 90%;
			padding: 0 15px 0 10px;
			box-sizing: border-box;
			background: #FCFAED;
		}

		.biao_05 {
			padding: 15px 10px;
			border-bottom: 1px solid #EDEDED;
			display: flex;
		}

		.biao_05_1 {
			padding-top: 7px;
			flex-shrink: 0;
		}

		.biao_05_3 {
			padding: 7px 10px 0;
		}
		.time{display: flex;flex-grow: 1;font-size: 17px;}
		.mess_03 {
			display: flex;
			justify-content: space-between;
			padding: 20px 10px;
			border-bottom: 1px solid #F2F2F2;
			line-height: 20px;
		}
		.title1{
			text-align: justify;
			font-size: 15px;
			position: relative;
			height: 30px;
			line-height: 30px
		}

		.p_btn {
			background: #fff;
			padding: 0 10px;
			position: fixed;
			bottom: 0;
			width: 100%;
			z-index: 99;
			margin-bottom: 30%;
		}

        .start{
			width: 50%;
			float: left;
			// margin-left: 20%;
			text-align: center;
		}
		.end{
			width: 50%;
			text-align: center;
		}
		.result {
			margin-top: 12upx;
			font-size: 28upx;
		}
		.back{
			background: #eee;
			min-height: 35px !important;
		}
	}
</style>
