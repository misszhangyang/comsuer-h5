<template>
	<view class="agent">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">我要贷款</block></cu-custom>
		<!-- <view class="head">
			共 <span>10000</span> 人
		</view> -->
		<view class="t_tou">
			<view class="tou_1">微信头像</view>
			<view class="tou_1">微信昵称</view>
			<view class="tou_1">等级</view>
		</view>
		<view class="t" style="width: 100%; height: 100%;">
		 <!-- <block v-for="(item,index) of list" :key="index">
			<li class="t_01">
				<view class="t_01_1"> <img src="../../../imgs/8.jpg"></img> </view>
				<view class="t_01_1">就看见</view>
				<view class="t_01_1">1级代理</view>
			</li>
		  </block> -->
		  <img src="@/imgs/qrcode.png" style="margin-left: 15%;">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4,5]
			};
		}
	}
</script>

<style lang="less">
.agent{
	.head{background-color: #E0451D;color: #fff; margin-top: 45px; text-align: center;padding: 40px 10px 30px;}
	.head span{font-size: 30px;padding: 0 5px;}
	.t_tou{display: flex;padding: 10px;height: 30px;line-height: 30px;margin-bottom: 10px;}
	.tou_1{width: 34%;text-align: center;}
	.t_01{display: flex;height: 45px;line-height: 45px;}
	.t_01_1{width: 34%;text-align: center;}
	.t_01_1 img{width: 30px;height: 30px;border-radius: 30px;}
	.t li:nth-of-type(odd){ background-color: #EEEEEE;} 
	.t li:nth-of-type(even){background-color: #fff;} 

}
</style>
