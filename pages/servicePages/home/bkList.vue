<template>
	<view class='app-height-100'>
		<scroll-view 
			:scroll-top="scrollTop" 
			scroll-y="true" 
			class="scroll-Y app-height-100" 
			@scrolltoupper="upper" 
			@scrolltolower="lower"
			@scroll="scroll">
			<view v-if='false'>
				<view>
					<view class='line' v-for='(item,index) in 2' :key='index'>
						<view>
							<view class='app-flex'>
								<view>
									身份证号：5000235199312208178
								</view>
								<view class='margin-left-20'>姓名：张石友</view>
							</view>
							<view>
								报考单位：asd
							</view>
							<view>
								报考岗位：asd
							</view>
							<view>
								考试时间：wee
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class='app-flex app-flex-ali-c app-flex-just-c app-height-100'>
				没有报名数据
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
		border-bottom:15upx solid #ddd;
		padding:30upx 20upx;
	}
	.line:last-child{
		border-bottom:1upx solid #ddd
	}
	.margin-left-20{
		margin-left:30upx
	}
</style>
