<template>
	<view class='app-height-100'>
		<scroll-view 
			:scroll-top="scrollTop" 
			scroll-y="true" 
			class="scroll-Y app-height-100" 
			@scrolltoupper="upper" 
			@scrolltolower="lower"
			@scroll="scroll">
			<view class='line' v-for='(item,index) in 2' :key='index'>
				<view>
					<view class='margin-bosdf'>
						流水号：123213123
					</view>
					<view class='font-qw app-flex app-flex-just-s'>
						<view>
							<view class='app-flex app-flex-just-s'>
								<view>
									报考单位：按时大大多
								</view>
							</view>
							<view>
								招聘考试：阿斯达所多
							</view>
							<view>
								报考岗位：阿斯达所多
							</view>
							<view>
								距订单关闭还有：<span class='color-red'>asd</span>
							</view>
						</view>
						<view class='app-flex app-flex-c app-flex-just-c app-flex-ali-c'>
							<view>
								金额：￥1
							</view>
							<view class='color-yelloe'>
								支付成功
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				scrollTop:0
			}
		},
		methods:{
			upper(e){
				console.log('到顶了')
			},
			lower(e){
				console.log('到底了')
			},
			scroll(e){
				// console.log(e)
			}
		}
	}
</script>

<style scoped>
	.line{
		border-bottom:1upx solid #ddd;
		padding:30upx;
	}
	.color-red{
		color:#f00
	}
	.color-yelloe{
		color:#F0AD4E
	}
	.margin-bosdf{
		margin-bottom: 20upx;
	}
	.font-qw{
		font-size:26upx
	}
</style>
