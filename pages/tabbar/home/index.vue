<template>
    <view class='color-2c3e50'>
        <swiper 
			class="swiper" 
			:style='{height:swiperHeight}'
			:indicator-dots="indicatorDots" 
			:autoplay="autoplay" 
			:interval="interval" 
			:duration="duration"
			circular='true'>
			<swiper-item v-for="(item,index) in 2" :key='index'>
				<view class="item-wi">
					<image
						src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1756933986,2150462083&fm=26&gp=0.jpg" 
						mode="aspectFit"
						class='img'>
					</image>
				</view>
			</swiper-item>
		</swiper>
		<view class="">
			<view>
				<view class="line" @click="gotoPath(1)">
					<view class="pads">
						<span class='iconfont iconbianji-tianxie font-b'></span>填写信息<span class='font-s'>完善个人基本资料</span>
					</view>
				</view>
			</view>
			<view>
				<view class="line" @click="gotoPath(2)">
					<view class="pads">
						<span class='iconfont iconhuabanfuben font-b'></span>身份认证<span class='font-s'>完善证件视频等信息</span>
					</view>
				</view>
			</view>
			<view>
				<view class="line" @click="gotoPath(3)">
					<view class="pads">
						<span class='iconfont iconkaoshi font-b'></span>开始报名<span class='font-s'>选择报考单位，岗位</span>
					</view>
				</view>
			</view>
			<view>
				<view class="line" @click="gotoPath(4)">
					<view class="pads">
						<span class='iconfont iconrili font-b'></span>报名记录<span class='font-s'>查询报名信息</span>
					</view>
				</view>
			</view>
		</view>
    </view>
</template>

<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			screenWidth:'',
			swiperHeight:''
		};
	},
	computed:{
		userInfo:function(){
			return this.$store.state.userInfo
		},
		code:function(){
			return this.$store.state.code
		}
	},
	onShow() {
		console.log(process.env)
		this.$store.commit('SETAGENT',{})
		uni.getSystemInfo({
			success:(res)=> {
				this.screenWidth=res.screenWidth
				this.swiperHeight=this.screenWidth*9/16+'px'
			}
		})
	},
	onLoad() {
		console.log(this.code)
		this.getCode().then(res=>{
			this.login(res)
		})
	},
	methods: {
		login(data){
			var data={
				code:data.code
			}
			this.$http({url:'wx/user/login',data,method:"GET"}).then(res=>{
				console.log(res)
			})
		},
		getCode(){
			return new Promise((resolve,reject)=>{
				wx.login({
					success:(res)=>{
						this.$store.commit('SETCODE',res)
						console.log(res)
						resolve(res)
					}
				})
			})
			
		},
		getUserInfo(){
			this.$http({url:'api/wx/wish/index',data:{},method:"GET"}).then(res=>{
				console.log(res)
			})
		},
		gotoPath(par){
			switch(par){
				case 1:
				uni.navigateTo({
					url:'../../servicePages/home/infomation'
				})
				break;
				case 2:
				uni.navigateTo({
					url:'../../servicePages/home/authentication'
				})
				break;
				case 3:
				uni.navigateTo({
					url:'../../servicePages/home/bk'
				})
				break;
				case 4:
				uni.navigateTo({
					url:'../../servicePages/home/bkList'
				})
				break;
			}
		},
	}
};
</script>

<style scoped>
.content {
	text-align: center;
}

.line{
	border-bottom: 1upx solid #ddd;
}
.font-b{
	font-size: 40upx;
	margin-right:20upx;
}
.pads{
	padding:60upx 10upx 10upx 100upx;
	font-size:34upx
}
.font-s{
	font-size:26upx;
	color:#9fa0a0;
	margin-left:20upx
}
.img{
	height: 100%;
	width:100%;
}
.item-wi{
	width:100%;
	height: 100%;
}
</style>
