<template>
	<view class='app-flex app-flex-c app-height-100'>
		<view class='app-flex-1 over-auto'>
			<view class="line app-text-c tit">
				个人简历
			</view>
			<view class="line app-flex">
				<view class='wids app-flex app-flex-just-s'>
					<view>毕</view><view>业</view><view>院</view><view>校</view>
				</view>：
				<view class="app-flex-1">
					<input type="text" value="" />
				</view>
			</view>
			<view class="line app-flex">
				<view class='wids app-flex app-flex-just-s'>
					<view>专</view><view>业</view>
				</view>：
				<view class="app-flex-1">
					<input type="text" value="" />
				</view>
			</view>
			<view class="line app-flex">
				<view class='wids app-flex app-flex-just-s'>
					<view>求</view><view>学</view><view>经</view><view>历</view>
				</view>：
				<view class="app-flex-1">
					<textarea type="text" value="" class='heihf'/>
				</view>
			</view>
			<view class="line app-flex">
				<view class='wids app-flex app-flex-just-s'>
					<view>工</view><view>作</view><view>经</view><view>历</view>
				</view>：
				<view class="app-flex-1">
					<textarea type="text" value="" class='heihf'/>
				</view>
			</view>
			<view class="line app-flex">
				<view class='wids app-flex app-flex-just-s'>
					<view>获</view><view>奖</view><view>情</view><view>况</view>
				</view>：
				<view class="app-flex-1">
					<textarea type="text" value="" class='heihf'/>
				</view>
			</view>
			<view class="line app-text-c tit">
				家庭情况
			</view>
			<view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>姓</view><view>名</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" placeholder="第一联系人"/>
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>关</view><view>系</view>
					</view>：
					<view class="app-flex-1">
						<radio-group @change="radioChange1">
							<view class="app-flex app-flex-ali-c">
								<label
									class="app-flex maspd app-flex-ali-c app-flex-just-s" 
									v-for="(item, index) in relations" 
									:key="index">
									<view>
										<radio :value="item.value" color='#0000FF'/>
									</view>
									<view>{{item.text}}</view>
								</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>职</view><view>位</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" />
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>工</view><view>作</view><view>单</view><view>位</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" />
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>手</view><view>机</view><view>号</view><view>码</view>
					</view>：
					<view class="app-flex-1">
						<input type="number" value="" />
					</view>
				</view>
			</view>
			<view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>姓</view><view>名</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" placeholder="第二联系人"/>
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>关</view><view>系</view>
					</view>：
					<view class="app-flex-1">
						<radio-group @change="radioChange1">
							<view class="app-flex app-flex-ali-c">
								<label
									class="app-flex maspd app-flex-ali-c app-flex-just-s" 
									v-for="(item, index) in relations" 
									:key="index">
									<view>
										<radio :value="item.value" color='#0000FF'/>
									</view>
									<view>{{item.text}}</view>
								</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>职</view><view>位</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" />
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>工</view><view>作</view><view>单</view><view>位</view>
					</view>：
					<view class="app-flex-1">
						<input type="text" value="" />
					</view>
				</view>
				<view class="line app-flex">
					<view class='wids app-flex app-flex-just-s'>
						<view>手</view><view>机</view><view>号</view><view>码</view>
					</view>：
					<view class="app-flex-1">
						<input type="number" value="" />
					</view>
				</view>
				<view>
					<view class='app-flex app-flex-just-c app-flex-ali-c padding-sa' @click.stop='changeStatus'>
						<view class='iconfont icontongyi' :class="[read?'read':'']"></view>
						我已阅读<span class='font-blue' @click.stop='seePolicy'>《隐私政策》</span>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="app-flex padsa">
				<view class='app-flex-1 btn marf-10' @click='back'>
					返回
				</view>
				<view class='app-flex-1 btn' @click="save">
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
				current:'',
				relations:[{
					value:1,
					text:'父亲'
				},{
					value:2,
					text:'母亲'
				},{
					value:3,
					text:'兄弟姐妹'
				},{
					value:4,
					text:'其他'
				}]
			}
		},
		methods:{
			radioChange1(e){
				console.log(e)
			},
			changeStatus(){
				this.read=!this.read
			},
			seePolicy(){
				uni.navigateTo({
					url:'./servicePolicy'
				})
			},
			save(){
				uni.navigateBack({
					delta:2
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
	.over-auto{
		overflow: auto;
	}
	.maspd{
		margin:5upx;
		font-size:24upx
	}
	.font-blue{
		color:blue
	}
	.read{
		color:blue
	}
	.padding-sa{
		padding:20upx 0;
	}
	.line{
		padding:30upx 20upx;
		border:1upx solid #ddd; 
	}
	.wids{
		width:130upx
	}
	.heihf{
		height:100upx;
	}
	.padsa{
		padding:30upx 60upx
	}
	.marf-10{
		margin-right:20upx;
	}
	.btn{
		color:#fff;
		background: #007AFF;
		border-radius: 20upx;
		padding:20upx 0;
		text-align:center
	}
</style>
