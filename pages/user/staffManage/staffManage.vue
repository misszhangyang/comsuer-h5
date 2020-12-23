<template>
	<view class="agent">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">员工管理</block>
		   <!-- <block slot="right">新增员工</block> -->
		   <button  slot="right" style="background: transparent; color: #fff; margin-right: 3%;" @click="addCancel">新增员工</button>
		</cu-custom>
		<view class="t_tou">
		<!-- 	<view class="example-body">
				<uni-search-bar @confirm="search" @input="input" @cancel="cancel" />
				<view class="search-result">
					<text class="search-result-text">当前输入为：{{ searchVal }}</text>
				</view>
			</view> -->
		</view>
		<view class="t">
		 <view class="example-body">
		 	<uni-search-bar placeholder="请输入员工手机号或姓名" @confirm="search" style="width: 100%;" @cancel="cancel"/>
		 	<!-- <view class="search-result">
		 		<text class="search-result-text">当前输入为：{{ searchVal }}</text>
		 	</view> -->
		 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4,5],
				searchVal: ''
			};
		},
		methods:{
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				this.searchVal = res.value
			},
			addCancel(){
				alert("点击了新增员工")
				uni.navigateTo({
					url: '/pages/user/staffManage/addSatff',
				});
			},
			cancel(res) {
				alert("点击了搜索" + res)
				// uni.showToast({
				// 	title: '点击取消，输入值为：' + res.value,
				// 	icon: 'none'
				// })
			}
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
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
	.search-result {
		margin-top: 10px;
		margin-bottom: 20px;
		text-align: center;
	}

}
</style>
