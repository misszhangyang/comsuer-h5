<template>
	<view class="shop">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">新增员工</block></cu-custom>
		<!-- <view class="biao" style="margin-top: 55px;"> -->
			 <view class="cu-form-group1">
				<!-- <view class="title">店铺名称：</view>
				<view class="title" style="flex-grow: 1;">{{content.shop_name}}</view> -->
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 姓名：</view>
				<input name="input" v-model="list.amout"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 登陆账号：</view>
				<input  name="input" v-model="list.heightAmout"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title"><span style="color: red;padding-right: 5px;">*</span> 员工角色：</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerRoleChange" :value="role" :range="roleArray" range-key="name">
						<view class="uni-input">{{role}}</view>
					</picker>
				</view>
			</view>
			<view class="cu-form-group back ">
				<view class="title ">角色对应的权限：</view>
			</view>
		<view style="height: 280px;overflow: auto;">
			<checkbox-group class="block" @change="CheckboxChange">
				<view class="cu-form-group">
					<view class="title">订单收款</view>
					<checkbox class='round' :class="checkbox[0].checked?'checked':''" :checked="checkbox[0].checked?true:false" value="A"></checkbox>
				</view>
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group">
					<view class="title">交易记录查询(收银员)</view>
					<checkbox class='round' :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="B"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">交易记录查询(管理人员)</view>
					<checkbox class='round' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false" value="C"></checkbox>
				</view>
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group">
					<view class="title">智慧餐厅</view>
					<checkbox class='round' :class="checkbox[3].checked?'checked':''" :checked="checkbox[3].checked?true:false" value="D"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">退款审核</view>
					<checkbox class='round' :class="checkbox[4].checked?'checked':''" :checked="checkbox[4].checked?true:false" value="E"></checkbox>
				</view>
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group">
					<view class="title">会员管理</view>
					<checkbox class='round' :class="checkbox[5].checked?'checked':''" :checked="checkbox[5].checked?true:false" value="F"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">店员管理</view>
					<checkbox class='round' :class="checkbox[6].checked?'checked':''" :checked="checkbox[6].checked?true:false" value="G"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">店铺管理</view>
					<checkbox class='round' :class="checkbox[7].checked?'checked':''" :checked="checkbox[7].checked?true:false" value="H"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">经营分析</view>
					<checkbox class='round' :class="checkbox[8].checked?'checked':''" :checked="checkbox[8].checked?true:false" value="I"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">云喇叭</view>
					<checkbox class='round' :class="checkbox[9].checked?'checked':''" :checked="checkbox[9].checked?true:false" value="J"></checkbox>
				</view>
				<!-- #endif -->
			</checkbox-group>
		</view>
		<view class="p_btn">
			<view class=" flex flex-direction">
				<button @click="sub()" class="cu-btn bg-blue margin-tb-sm lg">新增员工</button>
			</view>
		</view> 
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		data() {
			return {
				content: [],
				list:[
					{startTime: '2019-12-11 20:15:35'},
					{endTime: '2020-02-05 13:09:42'}
				],
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				},{
					value: 'D',
					checked: true
				}, {
					value: 'E',
					checked: true
				}, {
					value: 'F',
					checked: false
				},{
					value: 'G',
					checked: false
				},{
					value: 'H',
					checked: true
				}, {
					value: 'I',
					checked: true
				}, {
					value: 'J',
					checked: false
				}],
				showPicker: true,
				range: ['2019/01/01','2019/01/06'],
				rangetime: ['2019/01/08 14:00','2019/01/16 13:59'],
				type: 'rangetime',
				value: '12312321',
				role: '收银员',
				show: false,
				input: '',
				index: '活动期间内',
				rangKey: 'name',
				array: [{name:'每月'},{name: '每周'}, {name:'每日'}, {name:'活动期间内'}],
				roleArray: [{name:'店长'},{name: '财务'}, {name:'收银员'}, {name:'线上商户'}],
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
				}
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
			wPicker
		},
		methods: {
			bindPickerChange: function(e) {
				this.index =  this.array[e.detail.value].name
			},
			bindPickerRoleChange: function(e) {
				this.role =  this.roleArray[e.detail.value].name
			},
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
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
			margin-bottom: 15%;
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
		}
	}
</style>
