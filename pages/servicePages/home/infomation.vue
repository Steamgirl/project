<template>
	<view class='pasd app-height-100'>
		<view class="app-flex app-flex-c app-height-100">
			<view class="app-flex-1">
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>姓</view><view>名</view>
					</view>：
					<view class="app-flex-1 app-flex-just-e app-flex">
						<input type="text" value="" class="app-flex-1 app-text-right"/>
					</view>
				</view>
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>身</view><view>份</view><view>证</view><view>号</view></view>：
					<view class="app-flex-1 app-flex-just-e app-flex">
						<input type="idcard" value="" class="app-flex-1 app-text-right"/>
					</view>
				</view>
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>性</view><view>别</view>
					</view>：
					<view class="app-flex-1 app-flex app-flex-ali-c">
						<picker 
							class='app-flex-1 app-flex-just-e app-flex'
							@change="bindSexChange" 
							:range="array" 
							mode="selector"
							range-key='text'
							:value="sex">
							<view class="app-flex-1">{{array[sex].text}}</view>
						</picker>
						<view class="iconfont iconyoubian"></view>
					</view>
				</view>
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>民</view><view>族</view>
					</view>：
					<view class="app-flex-1 app-flex app-flex-ali-c">
						<picker 
							class='app-flex-1 app-flex-just-e app-flex'
							@change="bindNationChange" 
							:range="nations" 
							mode="selector"
							range-key='text'
							:value="sex">
							<view class="app-flex-1">{{nations[nation].text}}</view>
						</picker>
						<view class="iconfont iconyoubian"></view>
					</view>
				</view>
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>学</view><view>历</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" />
					</view>
				</view>
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>政</view><view>治</view><view>面</view><view>貌</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" />
					</view>
				</view>
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>籍</view><view>贯</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" />
					</view>
				</view>
				<view class="app-flex line">
					<view class='wids app-flex app-flex-just-s'>
						<view>手</view><view>机</view><view>号</view>
					</view>：
					<view class="app-flex-1 app-flex-just-e app-flex">
						<input type="number" value="" class="app-flex-1 app-text-right"/>
					</view>
				</view>
				<view>
					<view class='app-flex app-flex-just-c app-flex-ali-c padding-sa' @click.stop='changeStatus'>
						<view class='iconfont icontongyi' :class="[read?'read':'']"></view>
						我已阅读<span class='font-blue' @click.stop='seePolicy'>《隐私政策》</span>
					</view>
				</view>
			</view>
			<view class="app-flex padsa">
				<view class='app-flex-1 btn marf-10' @click="back">
					返回
				</view>
				<view class='app-flex-1 btn' @click='save'>
					保存
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				read:true,
				sex:0,
				array:[{
					text:'男',
					value:1
				},{
					text:'女',
					value:2
				}],
				nation:0,
				nations:[{
					text:'汉族',
					value:1
				}]
			}
		},
		methods:{
			changeStatus(){
				this.read=!this.read
			},
			seePolicy(){
				uni.navigateTo({
					url:'./servicePolicy'
				})
				console.log(123)
			},
			bindSexChange(e){
				this.sex = e.target.value
			},
			bindNationChange(e){
				this.nation = e.target.value
			},
			save(){
				uni.navigateTo({
					url:'./familyInfo'
				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
		
	}
</script>

<style scoped>
	.pasd{
		padding:20upx;
	}
	.read{
		color:blue
	}
	.padsa{
		padding:0 60upx
	}
	.marf-10{
		margin-right:20upx;
	}
	.font-blue{
		color:blue
	}
	.padding-sa{
		padding:20upx 0;
	}
	.line{
		border-bottom: 1upx solid #ddd;
		padding:60upx 20upx 10upx
	}
	.wids{
		width:130upx
	}
	.btn{
		color:#fff;
		background: #007AFF;
		border-radius: 20upx;
		padding:20upx 0;
		text-align:center
	}
</style>
