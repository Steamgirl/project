<template>
	<view class="padis">
		<view class='line app-flex app-flex-ali-c' @click='gotoList'> 
			<view class='iconfont iconicon-- font-big'></view>
			<view>支付记录</view>
		</view>
		<view class='line app-flex app-flex-ali-c pos-re'>
			<view class='iconfont iconkefu font-big'></view>
			<view>问题咨询</view>
			<button open-type="contact" bindcontact="handleContact" class='concat'></button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			gotoList(){
				uni.navigateTo({
					url:'../../servicePages/my/payList'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.padis{
		padding:30upx;
	}
	.pos-re{
		position: relative;
	}
	.font-big{
		font-size:40upx;
		margin-right:20upx
	}
	.line{
		border-bottom: 1upx solid #ddd;
		padding:30upx 0
	}
	.concat{
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		opacity: 0;
	}
</style>
