<template>
	<view class="pading">
		<view class="line app-flex app-flex-ali-c" @click="uploadAtr">
			<view class="iconfont iconzhengjian font-big"></view>
			<view class="app-flex-1">
				个人头像
			</view>
			<view class='app-flex app-flex-ali-c'>
				<span class='status'>已完成</span>
				<view class='iconfont iconyoubian'></view>
			</view>
		</view>
		<view class="line app-flex app-flex-ali-c">
			<view class="iconfont iconshenfenzheng font-big"></view>
			<view class="app-flex-1">
				身份证认证
			</view>
			<view class='app-flex app-flex-ali-c'>
				<span class='status'>已完成</span>
				<view class='iconfont iconyoubian'></view>
			</view>
		</view>
		<view class="line app-flex app-flex-ali-c">
			<view class="iconfont iconbiyezhengxueweizhengyishibuban font-big"></view>
			<view class="app-flex-1">
				毕业证认证
			</view>
			<view class='app-flex app-flex-ali-c'>
				<span class='status'>已完成</span>
				<view class='iconfont iconyoubian'></view>
			</view>
		</view>
		<view class="line app-flex app-flex-ali-c">
			<view class="iconfont iconjiashizhengzhuanru font-big"></view>
			<view class="app-flex-1">
				教师资格证认证
			</view>
			<view class='app-flex app-flex-ali-c'>
				<span class='status'>已完成</span>
				<view class='iconfont iconyoubian'></view>
			</view>
		</view>
		<view class="btn-area">
			<view class='btn bg-blue' @click="submit">确认提交</view>
		</view>
	</view>
</template>

<script>
	import utils from '../../../utils/http.js'
	export default{
		data(){
			return{
				uploadUrl:utils.baseUrl
			}
		},
		mounted(){
			
		},
		methods:{
			submit(){
				
			},
			uploadAtr(){
				if(true){
					uni.chooseImage({
						count:1,//选几张
						sizeType:'compressed',//是否压缩图片
					    success: (chooseImageRes) => {C
					        const tempFilePaths = chooseImageRes.tempFilePaths;
							console.log(chooseImageRes)
					        uni.uploadFile({
					            url: this.uploadUrl, //仅为示例，非真实的接口地址
					            filePath: tempFilePaths[0],
					            name: 'file',
					            formData: {
					                'user': 'test'
					            },
					            success: (uploadFileRes) => {
					                console.log(uploadFileRes.data);
					            }
					        });
					    }
					})
				}else{
					uni.previewImage({
						current:1,
						urls:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589277945727&di=3fc916ab2f57e4f174fa2bf1ba12dffd&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F30%2F14%2F01300000238605122490141771905.jpg']
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.line{
		border-bottom:1upx solid #ddd;
		padding:40upx 0;
	}
	.pading{
		padding:20upx
	}
	.btn{
		color:#fff;
		border-radius:20upx;
		text-align:center;
		padding:20upx 0
	}
	.btn-area{
		padding:60upx
	}
	.status{
		font-size:20upx;
	}
	.font-big{
		font-size:35upx;
		margin-right:10upx
	}
</style>
