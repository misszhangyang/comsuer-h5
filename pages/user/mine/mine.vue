<template>  
    <view>  
	       <view class="top"  style="width: 100%;background: #09BB07;">
			   		<view style="width: 100%;color: #FFFFFF;text-align: center;font-size: 18px;padding-top: 2%;">
			   			我 的
			   		</view> 
					<view>
						 <img src="@/imgs/8.jpg" style="margin-left: 4%;margin-top: 4%;float: left;">
					</view>
					<view class="head-text">
						<view class="name">我是哈哈哈</view>
						<view class="address">上海市徐汇区</view>
					</view>
		   </view>
				<view class="bottom">	
					<view class="u-m-t-20">
						<u-cell-group>
							<u-cell-item icon="account" title="商户类型"></u-cell-item>
						</u-cell-group>
					</view>
					<view class="BH-TOP"></view>
					<view class="u-m-t-20">
						<u-cell-group>
							<u-cell-item class="item" icon="rmb-circle" title="我的贷款"></u-cell-item>
							<u-cell-item class="item" icon="red-packet" title="我的理财"></u-cell-item>
						</u-cell-group>
					</view>
					<view class="BH-TOP"></view>
					<view class="u-m-t-20">
						<u-cell-group>
							<u-cell-item class="item" icon="lock" title="登陆密码"></u-cell-item>
							<u-cell-item class="item" icon="lock-fill" title="退款密码"></u-cell-item>
							<u-cell-item class="item" icon="moments" title="我的店铺分享"></u-cell-item>
							<u-cell-item class="item" icon="star" title="我的电子协议"></u-cell-item>
							<u-cell-item class="item" icon="heart" title="我的静态聚合二维码"></u-cell-item>
						</u-cell-group>
					</view>
					<view class="BH-TOP"></view>
					<view class="u-m-t-20">
						<u-cell-group>
							<u-cell-item icon="setting" title="设置"></u-cell-item>
						</u-cell-group>
					</view>
				</view>
			</view>
    </view>  
</template>  
<script>  
    export default {
		components: {
		},
		data(){
			return {
				pic:'https://uviewui.com/common/logo.png',
				show:true,
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
			}
		},
		onLoad(){
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
  //       computed: {
		// 	...mapState(['hasLogin','userInfo'])
		// },
        methods: {

			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				//如果没有登陆，跳转到登陆界面
				// if(!this.hasLogin){
				// 	url = '/pages/login/login';
				// }
				//已经登陆，跳转到设置页面
				uni.navigateTo({  
					url: '/pages/login/login'
				})  
			}, 
	
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
        }  
    }  
</script>  
<style lang='scss'>
	.top{
		height: 150px;
	}
	.header{
		float: left;
		margin-left: 3%;
	}

	.bottom{
		background: #ededed !important;
	}
	.headerText{
		padding-top: 5%;
	}
	.BH-TOP {
		background-color: #ededed;;
		height: 5px;
		margin-left: 2%;
		margin-right: 2%;
	}
	.item{
		border-bottom: 0.5px solid #ededed
	}
	.camera{
		width: 54px;
		height: 44px;
		
		&:active{
			background-color: #ededed;
		}
	}
	.head-text{
		margin-top: 14%;
		margin-left: 35%;
		color: #FFFFFF;
		
		.name{
			font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
			font-size: 18px;
			font-family: auto;
			font-weight: 500
		}
		.address{
			margin-top: 10px;
		}
	}
	.user-box{
		background-color: #fff;
	}

	.user-section{
		height: 520upx;
		padding: 100upx 30upx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 130upx;
			height: 130upx;
			border:5upx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}

	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;
		.card-bg{
			position:absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}
		.b-btn{
			position: absolute;
			right: 20upx;
			top: 16upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}
		.tit{
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;
			.yticon{
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}
		.e-b{
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
	.cover-container{
		background: $page-color-base;
		margin-top: -150upx;
		padding: 0 30upx;
		position:relative;
		background: #ededed;
		padding-bottom: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
	
</style>