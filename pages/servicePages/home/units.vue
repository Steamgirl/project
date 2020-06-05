<template>
	<view class='app-height-100 app-flex app-flex-c'>
		<view class="padiasd">
			<view class='app-flex border-line'>
				<input type="text" value="" class='app-flex-1' v-model="keyword"/>
				<view class='app-flex app-flex-ali-c btn-s' @click="serch">
					<view class="iconfont iconsousuo icofontasd"></view>搜索
				</view>
			</view>
		</view>
		<view class='app-flex-1'>
			<view class='line'>
				<view class="app-flex app-flex-just-s" @click="choiceItem">
					<view class="">
						asdsadas
					</view>
					<view class='status'>
						未开始
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				keyword:''
			}
		},
		methods:{
			choiceItem(item){
				this.$store.commit('SETAGENT',{ad:3})
				uni.navigateBack({
					delta:1
				})
			},
			serch(){
				if(!this.keyword){
					uni.showToast({
						title:'请输入关键字,然后在搜索~',
						icon:'none'
					})
					return
				}
				console.log(this.keyword)
			},
		}
	}
</script>

<style scoped>
	.icofontasd{
		font-size:40upx
	}
	.line{
		border-bottom:1upx solid #ddd;
		padding:20upx
	}
	.padiasd{
		padding:20upx 30upx;
	}
	.status{
		font-size:26upx
	}
	.btn-s{
		font-size:25upx;
		margin-left:20upx;
	}
	.border-line{
		border:1upx solid #ddd;
		border-radius:100upx;
		padding:20upx 40upx
	}
</style>
