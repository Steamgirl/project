<template>
	<view class=''>
		<view class='app-flex app-flex-just-s padding'>
			<view>身份证号码：12312313</view>
			<view>姓名：asd</view>
		</view>
		<view class='app-flex app-flex-c'>
			<view class='app-flex app-flex-just-s line' @click='selectUnit'>
				<view>报考单位：</view>
				<view class='app-flex app-flex-1 app-flex-just-e app-flex-ali-c'>
					<view>
						{{unit.text}}
					</view>
					<view class='iconfont iconyoubian'></view>
				</view>
			</view>
			<view class='app-flex app-flex-just-s line'>
				<view>招聘考试：</view>
				<view class='app-flex-1 app-flex app-flex-just-e app-flex-ali-c'>
					<picker 
						class='app-flex-1 app-flex app-flex-just-e'
						mode="selector"
						:range="list"
						@change="valueChange"
						range-key='text'
						:value='exam'>
						<view v-if='exam'>{{list[exam].text}}</view>
						<view v-else>请选择</view>
					</picker>
					<view class='iconfont iconyoubian'></view>
				</view>
			</view>
			<view class='app-flex app-flex-just-s line'>
				<view>报考岗位：</view>
				<view class='app-flex-1 app-flex app-flex-just-e app-flex-ali-c'>
					<picker 
						class='app-flex-1 app-flex app-flex-just-e'
						mode="selector"
						:range="stationList"
						@change="stationValueChange"
						range-key='text'
						:value='station'>
						<view v-if='station'>{{list[station].text}}</view>
						<view v-else>请选择</view>
					</picker>
					<view class='iconfont iconyoubian'></view>
				</view>
			</view>
			<view class='app-flex app-flex-just-s line' @click='checkDetail'>
				<view>岗位详情：</view>
				<view class='app-flex-1 app-flex app-flex-just-e app-flex-ali-c'>
					<input type="text" disabled placeholder="点击可查看岗位详情"/>
				</view>
			</view>
			<view class='padis'>
				<view class='app-text-c bg-blue btns' @click='submitForm'>确定</view>
			</view>
			<view class='padis font-asd'>
				<view>
					温馨提示
				</view>
				<view>
					1.dasdad
				</view>
				<view>
					2.asdsada
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[{
					text:'diyi',
					value:1
				}],
				exam:'',
				unit:{text:'请选择',value:null},
				station:'',
				stationList:[{
					text:'岗位',
					value:1
				}]
			}
		},
		onShow() {
			console.log(this.$store.state.agent)
		},
		mounted(){
			
		},
		methods:{
			submitForm(){
				uni.navigateTo({
					url:'./bkList'
				})
			},
			checkDetail(){
				uni.navigateTo({
					url:'./detail'
				})
			},
			valueChange(value){
				this.exam=value.detail.value
			},
			stationValueChange(value){
				this.station=value.detail.value
			},
			selectUnit(){
				uni.navigateTo({
					url:'./units'
				})
			}
		}
	}
</script>

<style scoped>
	.line{
		border-bottom:1upx solid #ddd;
		padding:30upx 0;
		padding:30upx
	}
	.btns{
		margin-top:50upx;
		border-radius:20upx;
		padding:20upx 0;
		color:#fff;
	}
	.font-asd{
		font-size:26upx;
		margin-top:40upx;
		color:#007AFF
	}
	.padis{
		padding:0 30upx
	}
	.padding{
		padding:30upx
	}
</style>
