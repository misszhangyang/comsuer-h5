<template>
	<view class="shop">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">编辑店铺</block>
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
				<view class="title"> 座机号码：</view>
				<input placeholder="请输入座机号码" name="input" v-model="list.phonNumber"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 手机号码：</view>
				<input  name="input" v-model="list.heightAmout"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title">营业时间：</view>
				<view class="time" >
					<view class="biao_05_2"> 
						<view class="uni-list-cell-db">
							<picker mode="time" :value="time"  @change="bindTimeChange" style="margin-top: 6px;">
								<view class="uni-input timeColor">{{time}}</view>
							</picker>
						</view>
					</view>
					<view class="biao_05_2" style="margin: 10upx 10px 0 0;">--</view>
					<view class="uni-list-cell-db">
						<picker mode="time" :value="time_close"  @change="bindTimeChange_close" style="margin-top: 6px;">
							<view class="uni-input timeColor">{{time_close}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="cu-form-group" style="height: 120px; overflow: auto">
				<view class="title" style="width: 35%;">提供服务：</view>
				<!-- <view class="uni-title uni-common-mt">不同颜色和尺寸的checkbox</view> -->
				<checkBoxGroup style="width: 80%;">
				 	<label class="label">
						<u-checkbox   v-model="checked1"  :label-disabled="false" :disabled="false" color="#FFCC33" style="transform:scale(0.7)" />WIFI
					</label>
					<label class="label">
						<u-checkbox   v-model="checked2"  :label-disabled="false" :disabled="false" color="#FFCC33" style="transform:scale(0.7)" />停车场
					</label>
					<label class="label">
						<u-checkbox    v-model="checked3"  :label-disabled="false" :disabled="false" color="#FFCC33" style="transform:scale(0.7)" />宝宝椅
					</label>
					<label class="label">
						<u-checkbox   v-model="checked4"  :label-disabled="false" :disabled="false" color="#FFCC33" style="transform:scale(0.7)" />包厢
					</label>
					<label class="label">
						<u-checkbox    v-model="checked5"  :label-disabled="false" :disabled="false" color="#FFCC33" style="transform:scale(0.7)" />充电宝
					</label>
					<button style="background: #0081ff;color: #fff;
					height: 20px;
					margin-left: 3%" @click="addLabel">自定义+</button>
					<view v-for="item in productList" style="text-align: center;" v-if="item.hidden">
						<input class="inputSelf" placeholder="请输入自定义服务" name="input" v-model="item.input">
						    <span class="uni-icon uni-icon-clear" v-if="item.hidden" @click="clearIcon(item)"></span>
						</input>
					</view>
				</checkBoxGroup>
				<!-- <input  name="input" v-model="list.heightAmout"></input> -->
			</view>
			<view class="cu-form-group" style="min-height: 90px;">
				<view class="title"> 简介：</view>
				<textarea @input="subfornum" class="textAount" v-model="desc"></textarea>
		        <view><text>{{subfornum_num}}/200</text></view>
			</view>
			<view class="cu-form-group back ">
				<view class="title ">其他信息：</view>
			</view>
			<view class="cu-form-group ">
				<view class="title " style="height: 60%; font-size: 15px;">店铺LOGO：
					<text style="font-size: 10px">(请上传一张店主与商店合影的照片,格式支持jpg,png。大小在10M以内)</text>
				</view>
				<htz-image-upload :max="1" name="file" :chooseNum="1"  v-model="imageData" @chooseSuccess="ceshiChooseSuccess"></htz-image-upload>
			</view>
			<view class="cu-form-group ">
				 <view class="title" style="height: 150px; font-size: 15px; width: 40%;">详情照片：
				    <text style="font-size: 10px">格式支持jpg,png,大小在10M以内</text>
				 </view>
				 <view style="height: 180px;  width: 60%;">
					 <htz-image-upload :max="4" name="file" :chooseNum="4"  v-model="imageData1" @chooseSuccess="ceshiChooseSuccess1"></htz-image-upload>
				 </view>
			</view>
		<view style="height: 80px;">
			
		</view>
		<view class="p_btn">
			<view class=" flex flex-direction">
				<button @click="sub()" class="cu-btn bg-blue margin-tb-sm lg">提交审核</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue";
	import checkBoxGroup from "@/colorui/components/u-checkbox-group.vue";
	import wPicker from "@/components/w-picker/w-picker.vue";
	import robbyImageUpload from '@/components/plan-image-upload/up_img'
	import {
		Api_url
	} from '@/common/config'
	export default {
		data() {
			return {
				content: [],
				imageData: [
				
				],
				imageData1: [
				
				],
				list:[
					{startTime: '2019-12-11 20:15:35'},
					{endTime: '2020-02-05 13:09:42'}
				],
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
				checked1: true,
				checked2: true,
				checked3: true,
				checked4: true,
				checked5: true,
				index: '活动期间内',
				subfornum_num: 0,
				desc: '',
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
				productList: [],
				hidden: false
			};
		},
		computed: {
			status() {
				return this.show == true ? 0 : 1;
			}
		},
		onLoad() {
			this.content=this.$api.json.content
		},
		components: {
			uniIcon,
			wPicker,
			checkBoxGroup,
			robbyImageUpload
		},
		methods: {
			ceshiChooseSuccess(tempFilePaths) { //选择图片返回
				console.log('ceshiChooseSuccess', tempFilePaths);
				/****************
				以下代码是自定义上传逻辑，仅供参考
				***************/
				this.imgUpload(tempFilePaths,0);
				/*******************************/
			},
			
			ceshiChooseSuccess1(tempFilePaths) { //选择图片返回
				console.log('ceshiChooseSuccess', tempFilePaths);
				/****************
				以下代码是自定义上传逻辑，仅供参考
				***************/
				this.imgUpload(tempFilePaths,1);
				/*******************************/
			},
			
			imgUpload(tempFilePaths,indexImg) {
				uni.showLoading({
					title: '上传中'
				});
				console.log('imgUpload', tempFilePaths)
				let uploadImgs = [];
				var _self = this;
				tempFilePaths.forEach((item, index) => {
					uploadImgs.push(new Promise((resolve, reject) => {
						console.log(index, item)
						uni.uploadFile({
							url: "http://59.110.49.173:8001/api/common/uploadImg?dir=ad", //仅为示例，非真实的接口地址
							filePath: item,
							name: 'file',
							success: (uploadFileRes) => {
								console.log('uploadFileRes', uploadFileRes)
								resolve(uploadFileRes);
								var _res = JSON.parse(uploadFileRes.data);
								if (_res.code == 200 && indexImg === 0) {
									this.imageData.push('http://59.110.49.173:8001' + _res.result);
								}
								if (_res.code == 200 && indexImg === 1) {
									this.imageData1.push('http://59.110.49.173:8001' + _res.result);
								}
							},
							fail: (err) => {
								console.log(err);
								reject(err);
							},
							complete: () => {
								//uni.hideLoading();
							}
						});
					}))
				})
				Promise.all(uploadImgs) //执行所有需请求的接口
					.then((results) => {
						uni.hideLoading();
					})
					.catch((res, object) => {
						uni.hideLoading();
					});
			},
			bindPickerChange: function(e) {
				this.index =  this.array[e.detail.value].name
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			clearIcon: function(item) {
				item.input='';
				item.hidden = false
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
			subfornum(){
			    this.subfornum_num = this.desc.length
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
			addLabel(){
				this.hidden = true
				var item = {
					input: '',
					hidden: true
				}
				this.productList.push(item)
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

        .label{
			padding-bottom: 10px;
		}
		.biao_01_l {
			padding-top: 5px;
		}
		
		.textAount{
			line-height: 20px;
			text-align: center;
		}
		.pic {
			padding: 20upx 10upx;background-color: #fff;
		}
		
		.flex-direction{
			bottom: 0px;
			position: fixed;
			width: 100%;
		 }
		
		.biao_12 {
			padding: 10px 10px 0;font-size: 16px;
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
		.inputSelf{
			 // display: flex;
			 float: left;
			 border-bottom: 1px solid #1482D1;
			 background: #e5e5e5;
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
			min-height: 35px;
		}
	}
</style>
